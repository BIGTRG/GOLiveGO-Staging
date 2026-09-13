using System;
using System.Collections.Generic;
using System.Linq;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.AgencyAdministration;
using GoalRow = GeniusOneAi.ClientManager.Entities.ClientGoalsRow;
using InterRow = GeniusOneAi.ClientManager.Entities.ClientGoalInterventionsRow;
using OutRow = GeniusOneAi.ClientManager.ClientGoalOutcomesRow;

namespace GeniusOneAi.CrisisEpisodes.Services
{
    /// <summary>
    /// Copies library goals onto a client, keyed to the crisis episode and encounter phase.
    /// Brings the interventions (checkboxes) and the projected outcomes with them, so the note gate
    /// (Phase 3) has the questions to ask. Protocol goals arrive locked. Used by the phase-aware
    /// "Add From Library" picker now and by the assessment recommendation engine in Phase 3.
    /// </summary>
    public static class LibraryCopyService
    {
        public class Result { public int Copied; public int Skipped; public List<int> GoalIds = new(); }

        public static Result Copy(IUnitOfWork uow, int clientId, int? episodeId, string phase, IEnumerable<int> libraryGoalIds, int? userId, int? sourceRuleId = null)
        {
            var conn = uow.Connection;
            var res = new Result();
            var lf = ClientGoalsLibraryRow.Fields;
            var gf = GoalRow.Fields;
            var tenantId = conn.TryFirst<ClientManager.Entities.ClientsRow>(q => q.Select(ClientManager.Entities.ClientsRow.Fields.TenantId)
                .Where(ClientManager.Entities.ClientsRow.Fields.ClientId == clientId))?.TenantId;

            // next goal number for this client ("Goal n" label used by the existing screens)
            var existing = conn.List<GoalRow>(q => q.Select(gf.ClientGoalId).Select(gf.LibraryGoalId).Where(gf.ClientId == clientId));
            var goalNumber = existing.Count;
            var already = new HashSet<int>(existing.Where(x => x.LibraryGoalId != null).Select(x => x.LibraryGoalId.Value));

            foreach (var libId in libraryGoalIds.Distinct())
            {
                var lib = conn.TryById<ClientGoalsLibraryRow>(libId);
                if (lib == null) { res.Skipped++; continue; }
                // the same library goal is not added twice to the same episode
                if (episodeId != null && conn.Exists<GoalRow>(gf.ClientId == clientId & gf.LibraryGoalId == libId & gf.EpisodeId == episodeId.Value)) { res.Skipped++; continue; }

                goalNumber++;
                var goal = new GoalRow
                {
                    ClientId = clientId,
                    TenantId = tenantId ?? lib.TenantId,
                    GoalType = lib.GoalType ?? "Mobile Crisis",
                    Goal = "Goal " + goalNumber,
                    Description = lib.Description,
                    Status = "Active",
                    EpisodeId = episodeId,
                    Phase = string.IsNullOrEmpty(phase) ? lib.Phase : phase,
                    LibraryGoalId = libId,
                    NeedKey = lib.NeedKey,
                    EffectivenessMeasure = lib.EffectivenessMeasure,
                    IsProtocol = lib.IsProtocol ?? false,
                    SourceRuleId = sourceRuleId,
                    Owner = userId,
                    OwnerCreateDate = DateTime.Now,
                    IsActiveMonday = false, IsActiveTuesday = false, IsActiveWednesday = false, IsActiveThursday = false,
                    IsActiveFriday = false, IsActiveSaturday = false, IsActiveSunday = false,
                };
                var goalId = Convert.ToInt32(conn.InsertAndGetID(goal));
                res.GoalIds.Add(goalId);

                var ilf = ClientGoalInterventionsLibraryRow.Fields;
                var inters = conn.List<ClientGoalInterventionsLibraryRow>(q => q.SelectTableFields().Where(ilf.ClientGoalId == libId).OrderBy(ilf.ClientGoalInterventionId));
                var n = 1;
                foreach (var i in inters)
                    conn.Insert(new InterRow { ClientGoalId = goalId, InterNumber = n++, InterDesc = i.InterDesc, TenantId = goal.TenantId,
                        IsActiveMonday = false, IsActiveTuesday = false, IsActiveWednesday = false, IsActiveThursday = false, IsActiveFriday = false, IsActiveSaturday = false, IsActiveSunday = false });

                var olf = LibraryGoalOutcomesRow.Fields;
                var outs = conn.List<LibraryGoalOutcomesRow>(q => q.SelectTableFields().Where(olf.LibraryGoalId == libId).OrderBy(olf.SortOrder));
                foreach (var o in outs)
                    conn.Insert(new OutRow { ClientGoalId = goalId, LibraryOutcomeId = o.LibraryOutcomeId, SortOrder = o.SortOrder, OutcomeText = o.OutcomeText,
                        EffectivenessTemplate = o.EffectivenessTemplate, StatusRule = o.StatusRule ?? "Required", SendsToCrisisPlan = o.SendsToCrisisPlan ?? false, TenantId = goal.TenantId });

                res.Copied++;
            }
            return res;
        }
    }
}
