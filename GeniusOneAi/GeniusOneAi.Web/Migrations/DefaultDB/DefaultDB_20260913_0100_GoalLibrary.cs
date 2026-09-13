using FluentMigrator;

namespace GeniusOneAi.Migrations.DefaultDB
{
    /// <summary>
    /// Encounter engine, Phase 2: the goal library carries phase, need, projected outcomes and the
    /// no-typing outcome questions; client goals get outcomes; resource directory, crisis needs
    /// (mapped to the 14 DA V3 need categories) and the living crisis plan tables.
    /// Every step is guarded so the migration is a no-op where the schema already exists.
    /// </summary>
    [Migration(20260913_0100)]
    public class DefaultDB_20260913_0100_GoalLibrary : Migration
    {
        public override void Up()
        {
            // ---- library goal: phase / need / measure / origin
            AddColumnIfMissing("ClientGoalsLibrary", "Code", c => c.AsString(20).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "Phase", c => c.AsString(10).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "NeedKey", c => c.AsString(40).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "Domain", c => c.AsString(100).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "TriggerKey", c => c.AsString(500).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "EffectivenessMeasure", c => c.AsString(500).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "Timeframe", c => c.AsString(100).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "LeadRole", c => c.AsString(50).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "ResourceType", c => c.AsString(30).Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "LinkedNextPhaseGoalId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ClientGoalsLibrary", "IsProtocol", c => c.AsBoolean().NotNullable().WithDefaultValue(false));
            AddColumnIfMissing("ClientGoalsLibrary", "Origin", c => c.AsString(20).NotNullable().WithDefaultValue("Seed"));
            AddColumnIfMissing("ClientGoalsLibrary", "IsActive", c => c.AsBoolean().NotNullable().WithDefaultValue(true));

            // ---- client goal: need, carry-forward, measure
            AddColumnIfMissing("ClientGoals", "NeedKey", c => c.AsString(40).Nullable());
            AddColumnIfMissing("ClientGoals", "CarriedFromGoalId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ClientGoals", "EffectivenessMeasure", c => c.AsString(500).Nullable());

            if (!Schema.Table("CrisisNeeds").Exists())
            {
                Create.Table("CrisisNeeds")
                    .WithColumn("NeedId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("NeedKey").AsString(40).NotNullable()
                    .WithColumn("Label").AsString(120).NotNullable()
                    .WithColumn("Category").AsString(40).NotNullable()
                    .WithColumn("CategoryLabel").AsString(60).Nullable()
                    .WithColumn("SortOrder").AsInt32().NotNullable().WithDefaultValue(0)
                    .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(true);
                Create.Index("UX_CrisisNeeds_NeedKey").OnTable("CrisisNeeds").OnColumn("NeedKey").Ascending().WithOptions().Unique();
            }

            if (!Schema.Table("LibraryGoalOutcomes").Exists())
            {
                Create.Table("LibraryGoalOutcomes")
                    .WithColumn("LibraryOutcomeId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("LibraryGoalId").AsInt32().NotNullable()
                        .ForeignKey("FK_LibraryGoalOutcomes_ClientGoalsLibrary", "ClientGoalsLibrary", "ClientGoalId")
                    .WithColumn("SortOrder").AsInt32().NotNullable().WithDefaultValue(1)
                    .WithColumn("OutcomeText").AsString(1000).NotNullable()
                    .WithColumn("EffectivenessTemplate").AsString(2000).Nullable()
                    .WithColumn("StatusRule").AsString(20).NotNullable().WithDefaultValue("Required")
                    .WithColumn("SendsToCrisisPlan").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_LibraryGoalOutcomes_Goal").OnTable("LibraryGoalOutcomes").OnColumn("LibraryGoalId").Ascending();
            }

            if (!Schema.Table("OutcomeQuestions").Exists())
            {
                Create.Table("OutcomeQuestions")
                    .WithColumn("QuestionId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("LibraryOutcomeId").AsInt32().NotNullable()
                        .ForeignKey("FK_OutcomeQuestions_LibraryGoalOutcomes", "LibraryGoalOutcomes", "LibraryOutcomeId")
                    .WithColumn("SortOrder").AsInt32().NotNullable().WithDefaultValue(1)
                    .WithColumn("Prompt").AsString(500).NotNullable()
                    .WithColumn("AnswerType").AsString(20).NotNullable().WithDefaultValue("YesNo")
                    .WithColumn("Options").AsString(1000).Nullable()
                    .WithColumn("SentenceTemplate").AsString(1000).Nullable()
                    .WithColumn("ResourceType").AsString(30).Nullable()
                    .WithColumn("SendsToCrisisPlan").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("IsRequired").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("ShowWhen").AsString(100).Nullable()
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_OutcomeQuestions_Outcome").OnTable("OutcomeQuestions").OnColumn("LibraryOutcomeId").Ascending();
            }

            if (!Schema.Table("ClientGoalOutcomes").Exists())
            {
                Create.Table("ClientGoalOutcomes")
                    .WithColumn("OutcomeId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("ClientGoalId").AsInt32().NotNullable()
                        .ForeignKey("FK_ClientGoalOutcomes_ClientGoals", "ClientGoals", "ClientGoalId")
                    .WithColumn("LibraryOutcomeId").AsInt32().Nullable()
                    .WithColumn("SortOrder").AsInt32().NotNullable().WithDefaultValue(1)
                    .WithColumn("OutcomeText").AsString(1000).NotNullable()
                    .WithColumn("EffectivenessTemplate").AsString(2000).Nullable()
                    .WithColumn("StatusRule").AsString(20).NotNullable().WithDefaultValue("Required")
                    .WithColumn("SendsToCrisisPlan").AsBoolean().NotNullable().WithDefaultValue(false)
                    .WithColumn("IsMet").AsBoolean().Nullable()
                    .WithColumn("CheckedInNoteId").AsInt32().Nullable()
                    .WithColumn("CheckedAt").AsDateTime().Nullable()
                    .WithColumn("Summary").AsString(2000).Nullable()
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_ClientGoalOutcomes_Goal").OnTable("ClientGoalOutcomes").OnColumn("ClientGoalId").Ascending();
            }

            if (!Schema.Table("ResourceDirectory").Exists())
            {
                Create.Table("ResourceDirectory")
                    .WithColumn("ResourceId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("TenantId").AsInt32().Nullable()
                    .WithColumn("ResourceType").AsString(30).NotNullable()
                    .WithColumn("Name").AsString(200).NotNullable()
                    .WithColumn("Phone").AsString(40).Nullable()
                    .WithColumn("Website").AsString(200).Nullable()
                    .WithColumn("Address").AsString(300).Nullable()
                    .WithColumn("City").AsString(100).Nullable()
                    .WithColumn("County").AsString(100).Nullable()
                    .WithColumn("Hours").AsString(100).Nullable()
                    .WithColumn("Notes").AsString(1000).Nullable()
                    .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(true)
                    .WithColumn("Owner").AsInt32().Nullable()
                    .WithColumn("OwnerCreateDate").AsDateTime().Nullable();
                Create.Index("IX_ResourceDirectory_Type").OnTable("ResourceDirectory").OnColumn("ResourceType").Ascending().OnColumn("County").Ascending();
            }

            if (!Schema.Table("ClientCrisisPlans").Exists())
            {
                Create.Table("ClientCrisisPlans")
                    .WithColumn("PlanId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("ClientId").AsInt32().NotNullable()
                        .ForeignKey("FK_ClientCrisisPlans_Clients", "Clients", "ClientId")
                    .WithColumn("EpisodeId").AsInt32().Nullable()
                    .WithColumn("Status").AsString(20).NotNullable().WithDefaultValue("Draft")
                    .WithColumn("CurrentRevision").AsInt32().NotNullable().WithDefaultValue(1)
                    .WithColumn("InitiatedAt").AsDateTime().NotNullable().WithDefault(SystemMethods.CurrentDateTime)
                    .WithColumn("SignedAt").AsDateTime().Nullable()
                    .WithColumn("SignedBy").AsString(200).Nullable()
                    .WithColumn("FinalizedAt").AsDateTime().Nullable()
                    .WithColumn("TenantId").AsInt32().Nullable()
                    .WithColumn("Owner").AsInt32().Nullable()
                    .WithColumn("OwnerCreateDate").AsDateTime().Nullable();
                Create.Index("IX_ClientCrisisPlans_Client").OnTable("ClientCrisisPlans").OnColumn("ClientId").Ascending();
            }

            if (!Schema.Table("ClientCrisisPlanEntries").Exists())
            {
                Create.Table("ClientCrisisPlanEntries")
                    .WithColumn("EntryId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("PlanId").AsInt32().NotNullable()
                        .ForeignKey("FK_ClientCrisisPlanEntries_Plans", "ClientCrisisPlans", "PlanId")
                    .WithColumn("Revision").AsInt32().NotNullable().WithDefaultValue(1)
                    .WithColumn("EntryType").AsString(30).NotNullable()
                    .WithColumn("EntryText").AsString(2000).NotNullable()
                    .WithColumn("SourceGoalId").AsInt32().Nullable()
                    .WithColumn("SourceQuestionId").AsInt32().Nullable()
                    .WithColumn("SourceNoteId").AsInt32().Nullable()
                    .WithColumn("CreatedAt").AsDateTime().NotNullable().WithDefault(SystemMethods.CurrentDateTime)
                    .WithColumn("CreatedBy").AsInt32().Nullable()
                    .WithColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(true)
                    .WithColumn("TenantId").AsInt32().Nullable();
                Create.Index("IX_ClientCrisisPlanEntries_Plan").OnTable("ClientCrisisPlanEntries").OnColumn("PlanId").Ascending();
            }
        }

        public override void Down()
        {
            // Additive migration; tables and columns are left in place on rollback so no data is lost.
        }

        private void AddColumnIfMissing(string table, string column,
            System.Func<FluentMigrator.Builders.Alter.Table.IAlterTableColumnAsTypeSyntax, object> define)
        {
            if (Schema.Table(table).Column(column).Exists())
                return;
            define(Alter.Table(table).AddColumn(column));
        }
    }
}
