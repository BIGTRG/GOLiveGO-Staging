using FluentMigrator;

namespace GeniusOneAi.Migrations.DefaultDB
{
    /// <summary>Phase 4: encounter notes. Per-note goal status, intervention checkboxes, outcome question answers,
    /// Day 7/14/21 follow-up schedule, note-level safety/summary/discharge columns, and the MCM note template seed.
    /// Guarded for existing schemas.</summary>
    [Migration(20260914_1600)]
    public class DefaultDB_20260914_1600_EncounterNotes : Migration
    {
        public override void Up()
        {
            if (!Schema.Table("EncounterNoteGoals").Exists())
            {
                Create.Table("EncounterNoteGoals")
                    .WithColumn("NoteGoalId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("ProgramNoteId").AsInt32().NotNullable()
                    .WithColumn("ClientGoalId").AsInt32().NotNullable()
                    .WithColumn("SortOrder").AsInt32().Nullable()
                    .WithColumn("Status").AsString(30).Nullable()
                    .WithColumn("StatusOverride").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("OutcomeText").AsString(int.MaxValue).Nullable()
                    .WithColumn("EffectivenessText").AsString(int.MaxValue).Nullable()
                    .WithColumn("WorkerNote").AsString(2000).Nullable()
                    .WithColumn("IsCarried").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_EncounterNoteGoals_ProgramNoteId").OnTable("EncounterNoteGoals").OnColumn("ProgramNoteId");
            }
            if (!Schema.Table("EncounterNoteInterventions").Exists())
            {
                Create.Table("EncounterNoteInterventions")
                    .WithColumn("NoteInterventionId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("ProgramNoteId").AsInt32().NotNullable()
                    .WithColumn("ClientGoalId").AsInt32().NotNullable()
                    .WithColumn("ClientGoalInterventionId").AsInt32().NotNullable()
                    .WithColumn("Provided").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("Detail").AsString(1000).Nullable()
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_EncounterNoteInterventions_ProgramNoteId").OnTable("EncounterNoteInterventions").OnColumn("ProgramNoteId");
            }
            if (!Schema.Table("EncounterNoteAnswers").Exists())
            {
                Create.Table("EncounterNoteAnswers")
                    .WithColumn("AnswerId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("ProgramNoteId").AsInt32().NotNullable()
                    .WithColumn("ClientGoalId").AsInt32().NotNullable()
                    .WithColumn("OutcomeId").AsInt32().NotNullable()
                    .WithColumn("QuestionId").AsInt32().NotNullable()
                    .WithColumn("Answer").AsString(2000).Nullable()
                    .WithColumn("Sentence").AsString(2200).Nullable()
                    .WithColumn("AnsweredAt").AsDateTime().Nullable()
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_EncounterNoteAnswers_ProgramNoteId").OnTable("EncounterNoteAnswers").OnColumn("ProgramNoteId");
            }
            if (!Schema.Table("CrisisEpisodeFollowUps").Exists())
            {
                Create.Table("CrisisEpisodeFollowUps")
                    .WithColumn("FollowUpId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("EpisodeId").AsInt32().NotNullable()
                    .WithColumn("Day").AsInt32().NotNullable()
                    .WithColumn("DueDate").AsDate().NotNullable()
                    .WithColumn("Status").AsString(20).NotNullable().WithDefaultValue("Scheduled")
                    .WithColumn("ActivityId").AsInt32().Nullable()
                    .WithColumn("ProgramNoteId").AsInt32().Nullable()
                    .WithColumn("Result").AsString(500).Nullable()
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_CrisisEpisodeFollowUps_EpisodeId").OnTable("CrisisEpisodeFollowUps").OnColumn("EpisodeId");
            }
            if (!Schema.Table("ProgramNotes").Column("SafetyConcern").Exists()) Alter.Table("ProgramNotes").AddColumn("SafetyConcern").AsBoolean().Nullable();
            if (!Schema.Table("ProgramNotes").Column("SafetyText").Exists()) Alter.Table("ProgramNotes").AddColumn("SafetyText").AsString(2000).Nullable();
            if (!Schema.Table("ProgramNotes").Column("GateComplete").Exists()) Alter.Table("ProgramNotes").AddColumn("GateComplete").AsBoolean().NotNullable().WithDefaultValue(false);
            if (!Schema.Table("ProgramNotes").Column("Summary").Exists()) Alter.Table("ProgramNotes").AddColumn("Summary").AsString(int.MaxValue).Nullable();
            if (!Schema.Table("ProgramNotes").Column("FollowUpDay").Exists()) Alter.Table("ProgramNotes").AddColumn("FollowUpDay").AsInt32().Nullable();
            if (!Schema.Table("ProgramNotes").Column("ContactMethod").Exists()) Alter.Table("ProgramNotes").AddColumn("ContactMethod").AsString(40).Nullable();
            if (!Schema.Table("ProgramNotes").Column("LongTermAdmission").Exists()) Alter.Table("ProgramNotes").AddColumn("LongTermAdmission").AsBoolean().Nullable();
            if (!Schema.Table("ProgramNotes").Column("DischargeSummary").Exists()) Alter.Table("ProgramNotes").AddColumn("DischargeSummary").AsString(int.MaxValue).Nullable();
            Execute.Sql(@"IF NOT EXISTS (SELECT 1 FROM dbo.ProgramNoteTemplates WHERE Name = 'Mobile Crisis Management (MCM)')
INSERT INTO dbo.ProgramNoteTemplates (Name, Status,
  Field01Label, Field01Status, Field01Type,
  Field02Label, Field02Status, Field02Type,
  Field03Label, Field03Status, Field03Type,
  Field04Label, Field04Status, Field04Type,
  Field05Status, Field06Status, Field07Status, Field08Status, Field09Status, Field10Status)
VALUES ('Mobile Crisis Management (MCM)', 1,
  '1.) Purpose of Contact/Goals provided on Crisis Assessment only', 1, 'Text',
  '2.) Interventions/Activities provided (be specific)', 1, 'Text',
  '3.) Effectiveness of Intervention/Activity per Consumer (Note for each Intervention/Areas in Needed Continued Improvement)', 1, 'Text',
  'Were there any immediate safety concerns identified or reported? (If YES, explain and report to supervisor)', 1, 'Text',
  0, 0, 0, 0, 0, 0);
");
        }
        public override void Down() { }
    }
}
