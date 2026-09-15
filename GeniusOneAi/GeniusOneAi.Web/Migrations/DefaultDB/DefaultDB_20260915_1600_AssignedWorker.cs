using FluentMigrator;

namespace GeniusOneAi.Migrations.DefaultDB
{
    /// <summary>Worker Tonight dashboard: the crisis worker assigned to an episode (set at assessment Complete, changeable).</summary>
    [Migration(20260915_1600)]
    public class DefaultDB_20260915_1600_AssignedWorker : Migration
    {
        public override void Up()
        {
            if (!Schema.Table("CrisisEpisodes").Column("AssignedWorkerId").Exists())
            {
                Alter.Table("CrisisEpisodes").AddColumn("AssignedWorkerId").AsInt32().Nullable();
                Alter.Table("CrisisEpisodes").AddColumn("AssignedAt").AsDateTime().Nullable();
                Alter.Table("CrisisEpisodes").AddColumn("AssignedBy").AsInt32().Nullable();
                Create.Index("IX_CrisisEpisodes_AssignedWorker").OnTable("CrisisEpisodes").OnColumn("AssignedWorkerId");
            }
        }
        public override void Down() { }
    }
}
