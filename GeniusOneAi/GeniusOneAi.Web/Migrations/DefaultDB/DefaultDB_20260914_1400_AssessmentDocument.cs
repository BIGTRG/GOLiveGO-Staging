using FluentMigrator;

namespace GeniusOneAi.Migrations.DefaultDB
{
    /// <summary>Phase 3b: clinician observation notes, Columbia protocol result text, and the record of which
    /// suggested goals the clinician kept or declined (with reason). Guarded for existing schemas.</summary>
    [Migration(20260914_1400)]
    public class DefaultDB_20260914_1400_AssessmentDocument : Migration
    {
        public override void Up()
        {
            if (!Schema.Table("CrisisAssessments").Column("QuestionNotes").Exists()) Alter.Table("CrisisAssessments").AddColumn("QuestionNotes").AsString(4000).Nullable();
            if (!Schema.Table("CrisisAssessments").Column("SuicideNotes").Exists()) Alter.Table("CrisisAssessments").AddColumn("SuicideNotes").AsString(2000).Nullable();
            if (!Schema.Table("CrisisAssessments").Column("ProtocolResult").Exists()) Alter.Table("CrisisAssessments").AddColumn("ProtocolResult").AsString(400).Nullable();
            if (!Schema.Table("CrisisAssessmentGoalDecisions").Exists())
            {
                Create.Table("CrisisAssessmentGoalDecisions")
                    .WithColumn("DecisionId").AsInt32().Identity().PrimaryKey().NotNullable()
        .WithColumn("AssessmentId").AsInt32().NotNullable()
        .WithColumn("EpisodeId").AsInt32().Nullable()
        .WithColumn("LibraryGoalId").AsInt32().NotNullable()
        .WithColumn("Code").AsString(20).Nullable()
        .WithColumn("Description").AsString(1000).Nullable()
        .WithColumn("Source").AsString(1000).Nullable()
        .WithColumn("Kept").AsBoolean().NotNullable().WithDefaultValue(true)
        .WithColumn("Reason").AsString(500).Nullable()
        .WithColumn("ClientGoalId").AsInt32().Nullable();
                Create.Index("IX_CrisisAssessmentGoalDecisions_Assessment").OnTable("CrisisAssessmentGoalDecisions").OnColumn("AssessmentId");
            }
        }
        public override void Down() { }
    }
}
