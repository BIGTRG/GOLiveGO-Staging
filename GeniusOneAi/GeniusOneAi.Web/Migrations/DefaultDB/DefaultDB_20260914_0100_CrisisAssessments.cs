using FluentMigrator;

namespace GeniusOneAi.Migrations.DefaultDB
{
    /// <summary>
    /// Encounter engine, Phase 3: adult / child crisis assessments with live scoring and hard stops,
    /// and the needs list they produce. Guarded so it is a no-op where the schema already exists.
    /// </summary>
    [Migration(20260914_0100)]
    public class DefaultDB_20260914_0100_CrisisAssessments : Migration
    {
        public override void Up()
        {
            if (!Schema.Table("CrisisAssessments").Exists())
            {
                Create.Table("CrisisAssessments")
                    .WithColumn("AssessmentId").AsInt32().Identity().PrimaryKey().NotNullable()
        .WithColumn("TenantId").AsInt32().Nullable()
        .WithColumn("ClientId").AsInt32().NotNullable()
        .WithColumn("EpisodeId").AsInt32().Nullable()
        .WithColumn("FormType").AsString(10).NotNullable().WithDefaultValue("Adult")
        .WithColumn("Status").AsString(20).NotNullable().WithDefaultValue("Draft")
        .WithColumn("ServiceDate").AsDateTime().Nullable()
        .WithColumn("StartTime").AsString(10).Nullable()
        .WithColumn("EndTime").AsString(10).Nullable()
        .WithColumn("County").AsString(100).Nullable()
        .WithColumn("Zip").AsString(10).Nullable()
        .WithColumn("TeamMember1").AsInt32().Nullable()
        .WithColumn("TeamMember2").AsInt32().Nullable()
        .WithColumn("ResponderCredentials").AsString(200).Nullable()
        .WithColumn("ParentPresent").AsString(3).Nullable()
        .WithColumn("ParentName").AsString(200).Nullable()
        .WithColumn("ParentPhone").AsString(40).Nullable()
        .WithColumn("GradeLevel").AsString(20).Nullable()
        .WithColumn("Location").AsString(40).Nullable()
        .WithColumn("ChildrenInHome").AsBoolean().Nullable()
        .WithColumn("RiskCategories").AsString(2000).Nullable()
        .WithColumn("PrimaryRisk").AsString(20).Nullable()
        .WithColumn("Diagnoses").AsString(1000).Nullable()
        .WithColumn("SubstanceType").AsString(100).Nullable()
        .WithColumn("SubstanceAmount").AsString(100).Nullable()
        .WithColumn("SubstanceFrequency").AsString(20).Nullable()
        .WithColumn("AgeBand").AsString(20).Nullable()
        .WithColumn("Disabilities").AsString(100).Nullable()
        .WithColumn("Gender").AsString(20).Nullable()
        .WithColumn("Language").AsString(20).Nullable()
        .WithColumn("RaceEthnicity").AsString(200).Nullable()
        .WithColumn("Immigrated").AsString(3).Nullable()
        .WithColumn("Q1").AsInt32().Nullable()
        .WithColumn("Q2").AsInt32().Nullable()
        .WithColumn("Q3").AsInt32().Nullable()
        .WithColumn("Q4").AsInt32().Nullable()
        .WithColumn("Q5").AsInt32().Nullable()
        .WithColumn("Q6").AsInt32().Nullable()
        .WithColumn("Q7").AsInt32().Nullable()
        .WithColumn("Q8").AsInt32().Nullable()
        .WithColumn("Q9").AsInt32().Nullable()
        .WithColumn("Q10").AsInt32().Nullable()
        .WithColumn("Q11").AsInt32().Nullable()
        .WithColumn("Q12").AsInt32().Nullable()
        .WithColumn("Q13").AsInt32().Nullable()
        .WithColumn("Q14").AsInt32().Nullable()
        .WithColumn("Q15").AsInt32().Nullable()
        .WithColumn("Q16").AsInt32().Nullable()
        .WithColumn("Q17").AsInt32().Nullable()
        .WithColumn("Q18").AsInt32().Nullable()
        .WithColumn("Q19").AsInt32().Nullable()
        .WithColumn("Q20").AsInt32().Nullable()
        .WithColumn("S1").AsString(3).Nullable()
        .WithColumn("S2").AsString(3).Nullable()
        .WithColumn("S3").AsString(3).Nullable()
        .WithColumn("S4").AsString(3).Nullable()
        .WithColumn("S5").AsString(3).Nullable()
        .WithColumn("S6").AsString(3).Nullable()
        .WithColumn("S6b").AsString(3).Nullable()
        .WithColumn("Score").AsInt32().Nullable()
        .WithColumn("HighRisk").AsBoolean().NotNullable().WithDefaultValue(false)
        .WithColumn("HardStopReasons").AsString(1000).Nullable()
        .WithColumn("Referrals").AsString(200).Nullable()
        .WithColumn("ReferralAccepted").AsString(3).Nullable()
        .WithColumn("ReferralAcceptedChild").AsString(3).Nullable()
        .WithColumn("ReferralAcceptedParent").AsString(3).Nullable()
        .WithColumn("ProjectedDischarge").AsDateTime().Nullable()
        .WithColumn("Narrative").AsString(4000).Nullable()
        .WithColumn("CompletedAt").AsDateTime().Nullable()
        .WithColumn("SignedBy").AsInt32().Nullable()
        .WithColumn("SignedAt").AsDateTime().Nullable()
        .WithColumn("SignedName").AsString(200).Nullable()
        .WithColumn("Owner").AsInt32().Nullable()
        .WithColumn("OwnerCreateDate").AsDateTime().Nullable();
                Create.Index("IX_CrisisAssessments_Client").OnTable("CrisisAssessments").OnColumn("ClientId");
                Create.Index("IX_CrisisAssessments_Episode").OnTable("CrisisAssessments").OnColumn("EpisodeId");
            }
            if (!Schema.Table("CrisisAssessmentNeeds").Exists())
            {
                Create.Table("CrisisAssessmentNeeds")
                    .WithColumn("NeedRecId").AsInt32().Identity().PrimaryKey().NotNullable()
        .WithColumn("AssessmentId").AsInt32().NotNullable()
        .WithColumn("EpisodeId").AsInt32().Nullable()
        .WithColumn("ClientId").AsInt32().NotNullable()
        .WithColumn("TenantId").AsInt32().Nullable()
        .WithColumn("NeedKey").AsString(40).NotNullable()
        .WithColumn("Priority").AsString(10).Nullable()
        .WithColumn("Source").AsString(1000).Nullable()
        .WithColumn("Accepted").AsBoolean().NotNullable().WithDefaultValue(true)
        .WithColumn("Status").AsString(30).NotNullable().WithDefaultValue("Identified")
        .WithColumn("SortOrder").AsInt32().Nullable()
        .WithColumn("GoalsCreated").AsInt32().Nullable();
                Create.Index("IX_CrisisAssessmentNeeds_Assessment").OnTable("CrisisAssessmentNeeds").OnColumn("AssessmentId");
                Create.Index("IX_CrisisAssessmentNeeds_Episode").OnTable("CrisisAssessmentNeeds").OnColumn("EpisodeId");
            }
        }
        public override void Down() { }
    }
}
