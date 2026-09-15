using GeniusOneAi.ClientManager.Entities;
using GeniusOneAi.CrisisAssessments;
using GeniusOneAi.CrisisAssessments.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Serenity.Data;
using System;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;

namespace GeniusOneAi
{
    /// <summary>
    /// Runs once at startup, after the FluentMigrator migrations, so a fresh checkout shows the encounter
    /// engine with content instead of empty screens:
    ///   1. Goal library (164 goals, interventions, projected outcomes, outcome questions, crisis needs) from
    ///      GeniusOneDatabase/Seed/goal_library_seed.sql - idempotent by Code, always applied.
    ///   2. Demonstration case (synthetic, no PHI): clients STG-1057 Ashley Yolanda, STG-1042 Jordan Doe,
    ///      STG-2011 Sam Rivers, and a completed, signed adult crisis assessment for Jordan Doe that opens his
    ///      episode and copies goals for every encounter through the same AssessmentEngine.Complete the screen
    ///      uses. Skipped when appsettings has "DemoData": { "Enabled": false } (set that in production).
    /// Every step is guarded, so restarts are no-ops.
    /// </summary>
    public static class DemoDataSeeder
    {
        public static void Run(ISqlConnections sqlConnections, IConfiguration config, ILogger logger)
        {
            try
            {
                using var conn = sqlConnections.NewFor<ClientsRow>();
                conn.EnsureOpen();
                SeedLibrary(conn, logger);

                var enabled = config["DemoData:Enabled"];
                if (string.Equals(enabled, "false", StringComparison.OrdinalIgnoreCase))
                {
                    logger?.LogInformation("DemoData disabled by configuration; library seeded only.");
                    return;
                }
                RunScript(conn, "synthetic_clients_staging.sql", logger);
                SeedJordanDoeCase(conn, logger);
            }
            catch (Exception ex)
            {
                // never block application start because of demonstration content
                logger?.LogError(ex, "DemoDataSeeder failed");
            }
        }

        static void SeedLibrary(IDbConnection conn, ILogger logger)
        {
            var count = Convert.ToInt32(Dapper.SqlMapper.ExecuteScalar(conn,
                "SELECT COUNT(*) FROM ClientGoalsLibrary WHERE Origin = 'Seed' AND Code IS NOT NULL"));
            if (count >= 164) return;   // 100 G- tonight goals + 6 E2 + 25 E3 + 25 E4 + 5 E5 + 3 FU
            logger?.LogInformation("Goal library has {Count} seeded goals; applying goal_library_seed.sql", count);
            RunScript(conn, "goal_library_seed.sql", logger);
        }

        static void RunScript(IDbConnection conn, string name, ILogger logger)
        {
            var asm = Assembly.GetExecutingAssembly();
            var resName = asm.GetManifestResourceNames().FirstOrDefault(n => n.EndsWith("." + name, StringComparison.OrdinalIgnoreCase));
            if (resName == null) { logger?.LogWarning("Seed script {Name} not embedded", name); return; }
            string sql;
            using (var s = asm.GetManifestResourceStream(resName)) using (var r = new StreamReader(s)) sql = r.ReadToEnd();
            // scripts are single batches (no GO); run them as one command with a generous timeout
            foreach (var batch in sql.Split(new[] { "\nGO\r\n", "\nGO\n" }, StringSplitOptions.RemoveEmptyEntries))
            {
                if (string.IsNullOrWhiteSpace(batch)) continue;
                Dapper.SqlMapper.Execute(conn, batch, commandTimeout: 600);
            }
            // the scripts start with SET NOCOUNT ON, which sticks to the session and breaks Serenity's row-count checks
            Dapper.SqlMapper.Execute(conn, "SET NOCOUNT OFF");
            logger?.LogInformation("Seed script {Name} applied", name);
        }

        static void SeedJordanDoeCase(IDbConnection conn, ILogger logger)
        {
            var cf = ClientsRow.Fields;
            var client = conn.TryFirst<ClientsRow>(q => q.Select(cf.ClientId, cf.TenantId).Where(cf.RecordNumber == "STG-1042"));
            if (client == null) return;
            var af = CrisisAssessmentsRow.Fields;
            if (conn.Exists<CrisisAssessmentsRow>(af.ClientId == client.ClientId.Value)) return;

            var admin = Dapper.SqlMapper.ExecuteScalar(conn, "SELECT TOP 1 UserId FROM Users WHERE Username = 'admin'");
            int? uid = admin == null ? null : Convert.ToInt32(admin);
            var serviceDate = DateTime.Today;

            using var uow = new UnitOfWork(conn);
            var a = new CrisisAssessmentsRow
            {
                TenantId = client.TenantId, ClientId = client.ClientId, FormType = "Adult", Status = "Draft",
                ServiceDate = serviceDate, StartTime = "19:40", EndTime = "21:05", County = "Pitt", Zip = "27834",
                ResponderCredentials = "T. Nguyen, QP; R. Hall, LCSW", Location = "permanent_home", ChildrenInHome = false,
                RiskCategories = "unemployed|isolation|eviction|past_mh_su", PrimaryRisk = "SubstanceAbuse",
                Diagnoses = "Alcohol use disorder, moderate; adjustment disorder with anxiety",
                AgeBand = "Adult18_39", Gender = "Male", Language = "English", RaceEthnicity = "White", Immigrated = "No",
                Q1 = 4, Q2 = 4, Q3 = 5, Q4 = 4, Q5 = 3, Q6 = 4, Q7 = 3, Q8 = 5, Q9 = 4, Q10 = 3, Q11 = 4,
                S1 = "Yes", S2 = "No", S3 = "No", S4 = "No", S5 = "No", S6 = "No",
                Referrals = "mental_health|substance_use|community", ReferralAccepted = "Yes",
                ProjectedDischarge = serviceDate.AddDays(7),
                Narrative = "Landlord called mobile crisis after client was found intoxicated in the hallway. Eviction hearing in 6 days, no income, out of medication. Agreed to detox screening tomorrow and a call to his brother tonight.",
                QuestionNotes = "Q3 drinking daily since eviction notice 2 weeks ago. Q8 lost job last month, no income. Q9 out of sertraline 10 days.",
                SuicideNotes = "Wishes he 'could just disappear' when drinking; denies thoughts of killing himself, no plan, no means. No prior attempts.",
                Owner = uid, OwnerCreateDate = DateTime.Now
            };
            var id = Convert.ToInt32(conn.InsertAndGetID(a));
            a.AssessmentId = id;

            // accept every need the rules found and keep the suggested (pre-selected) goals, exactly like a clinician confirming the review step
            var ev = AssessmentEngine.Evaluate(conn, a);
            var res = AssessmentEngine.Complete(uow, new CompleteRequest
            {
                AssessmentId = id,
                NeedKeys = ev.Needs.Select(n => n.NeedKey).ToArray(),
                GoalIds = ev.TonightGoals.Where(g => g.Preselected || g.Locked).Select(g => g.LibraryGoalId).ToArray()
            }, uid);
            conn.UpdateById(new CrisisAssessmentsRow { AssessmentId = id, Status = "Signed", SignedBy = uid, SignedAt = DateTime.Now, SignedName = "admin" });
            uow.Commit();
            logger?.LogInformation("Demo case seeded: assessment {Id}, episode {Ep}, goals {Goals}", id, res.EpisodeId,
                string.Join(", ", res.GoalsByPhase.Select(kv => kv.Key + "=" + kv.Value)));
        }
    }
}
