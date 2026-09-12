using FluentMigrator;

namespace GeniusOneAi.Migrations.DefaultDB
{
    /// <summary>
    /// Encounter engine, Phase 1 foundation.
    /// One CrisisEpisode per crisis ties goals, activities (encounters) and progress notes together.
    /// Goals are keyed to the encounter phase (E1..E5, FU) instead of weekdays; the weekday flags stay for legacy tenants.
    /// Every step is guarded so the migration is a no-op where the schema already exists.
    /// </summary>
    [Migration(20260912_1700)]
    public class DefaultDB_20260912_1700_CrisisEpisodes : Migration
    {
        public override void Up()
        {
            if (!Schema.Table("CrisisEpisodes").Exists())
            {
                Create.Table("CrisisEpisodes")
                    .WithColumn("EpisodeId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("ClientId").AsInt32().NotNullable()
                        .ForeignKey("FK_CrisisEpisodes_Clients", "Clients", "ClientId")
                    .WithColumn("TenantId").AsInt32().Nullable()
                    .WithColumn("OpenedAt").AsDateTime().NotNullable().WithDefault(SystemMethods.CurrentDateTime)
                    .WithColumn("OpenedBy").AsInt32().Nullable()
                    .WithColumn("PresentingTrigger").AsString(500).Nullable()
                    .WithColumn("AssessmentId").AsInt32().Nullable()
                    .WithColumn("ClinicianId").AsInt32().Nullable()
                    .WithColumn("Phase").AsString(10).NotNullable().WithDefaultValue("E1")
                    .WithColumn("EncounterCount").AsInt32().NotNullable().WithDefaultValue(0)
                    .WithColumn("ProjectedDischarge").AsDate().Nullable()
                    .WithColumn("ClosedAt").AsDateTime().Nullable()
                    .WithColumn("Disposition").AsString(50).Nullable()
                    .WithColumn("Notes").AsString(2000).Nullable()
                    .WithColumn("Owner").AsInt32().Nullable()
                    .WithColumn("OwnerCreateDate").AsDateTime().Nullable();

                Create.Index("IX_CrisisEpisodes_Client_Open").OnTable("CrisisEpisodes")
                    .OnColumn("ClientId").Ascending().OnColumn("ClosedAt").Ascending();
            }

            AddColumnIfMissing("ClientGoals", "EpisodeId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ClientGoals", "Phase", c => c.AsString(10).Nullable());
            AddColumnIfMissing("ClientGoals", "LibraryGoalId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ClientGoals", "SourceRuleId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ClientGoals", "IsProtocol", c => c.AsBoolean().NotNullable().WithDefaultValue(false));

            AddColumnIfMissing("Activities", "EpisodeId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("Activities", "Phase", c => c.AsString(10).Nullable());

            AddColumnIfMissing("ProgramNotes", "EpisodeId", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ProgramNotes", "EncounterNo", c => c.AsInt32().Nullable());
            AddColumnIfMissing("ProgramNotes", "Phase", c => c.AsString(10).Nullable());
        }

        public override void Down()
        {
            // Additive migration; columns are left in place on rollback so no data is lost.
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
