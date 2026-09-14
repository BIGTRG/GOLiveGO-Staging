using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CrisisAssessments
{
    [ConnectionKey("Default"), Module("CrisisAssessments"), TableName("[dbo].[CrisisAssessments]")]
    [DisplayName("Crisis Assessments"), InstanceName("Crisis Assessments")]
    [ReadPermission(GeniusOneAi.ClientManager.PermissionKeys.Patients)]
    [ModifyPermission(GeniusOneAi.ClientManager.PermissionKeys.Patients)]
    public sealed class CrisisAssessmentsRow : Row<CrisisAssessmentsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Assessment Id"), Identity, IdProperty]
        public Int32? AssessmentId
        {
            get => fields.AssessmentId[this];
            set => fields.AssessmentId[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
        [DisplayName("Client Id"), NotNull, ForeignKey("[dbo].[Clients]", "ClientId"), LeftJoin("jClient")]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }
        [DisplayName("Episode Id")]
        public Int32? EpisodeId
        {
            get => fields.EpisodeId[this];
            set => fields.EpisodeId[this] = value;
        }
        [DisplayName("Form Type"), Size(10), NameProperty, QuickSearch]
        public String FormType
        {
            get => fields.FormType[this];
            set => fields.FormType[this] = value;
        }
        [DisplayName("Status"), Size(20)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }
        [DisplayName("Service Date")]
        public DateTime? ServiceDate
        {
            get => fields.ServiceDate[this];
            set => fields.ServiceDate[this] = value;
        }
        [DisplayName("Start Time"), Size(10)]
        public String StartTime
        {
            get => fields.StartTime[this];
            set => fields.StartTime[this] = value;
        }
        [DisplayName("End Time"), Size(10)]
        public String EndTime
        {
            get => fields.EndTime[this];
            set => fields.EndTime[this] = value;
        }
        [DisplayName("County"), Size(100)]
        public String County
        {
            get => fields.County[this];
            set => fields.County[this] = value;
        }
        [DisplayName("Zip Code"), Size(10)]
        public String Zip
        {
            get => fields.Zip[this];
            set => fields.Zip[this] = value;
        }
        [DisplayName("1st Team Member"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jTm1")]
        public Int32? TeamMember1
        {
            get => fields.TeamMember1[this];
            set => fields.TeamMember1[this] = value;
        }
        [DisplayName("2nd Team Member"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jTm2")]
        public Int32? TeamMember2
        {
            get => fields.TeamMember2[this];
            set => fields.TeamMember2[this] = value;
        }
        [DisplayName("Responder Credentials"), Size(200)]
        public String ResponderCredentials
        {
            get => fields.ResponderCredentials[this];
            set => fields.ResponderCredentials[this] = value;
        }
        [DisplayName("Parent Present"), Size(3)]
        public String ParentPresent
        {
            get => fields.ParentPresent[this];
            set => fields.ParentPresent[this] = value;
        }
        [DisplayName("Parent Name"), Size(200)]
        public String ParentName
        {
            get => fields.ParentName[this];
            set => fields.ParentName[this] = value;
        }
        [DisplayName("Parent Phone"), Size(40)]
        public String ParentPhone
        {
            get => fields.ParentPhone[this];
            set => fields.ParentPhone[this] = value;
        }
        [DisplayName("Grade Level"), Size(20)]
        public String GradeLevel
        {
            get => fields.GradeLevel[this];
            set => fields.GradeLevel[this] = value;
        }
        [DisplayName("Location"), Size(40)]
        public String Location
        {
            get => fields.Location[this];
            set => fields.Location[this] = value;
        }
        [DisplayName("Children under 18 live in this home")]
        public Boolean? ChildrenInHome
        {
            get => fields.ChildrenInHome[this];
            set => fields.ChildrenInHome[this] = value;
        }
        [DisplayName("Risk Categories"), Size(2000)]
        public String RiskCategories
        {
            get => fields.RiskCategories[this];
            set => fields.RiskCategories[this] = value;
        }
        [DisplayName("Primary Risk"), Size(20)]
        public String PrimaryRisk
        {
            get => fields.PrimaryRisk[this];
            set => fields.PrimaryRisk[this] = value;
        }
        [DisplayName("Diagnoses"), Size(1000)]
        public String Diagnoses
        {
            get => fields.Diagnoses[this];
            set => fields.Diagnoses[this] = value;
        }
        [DisplayName("Substance Type"), Size(100)]
        public String SubstanceType
        {
            get => fields.SubstanceType[this];
            set => fields.SubstanceType[this] = value;
        }
        [DisplayName("Substance Amount"), Size(100)]
        public String SubstanceAmount
        {
            get => fields.SubstanceAmount[this];
            set => fields.SubstanceAmount[this] = value;
        }
        [DisplayName("Substance Frequency"), Size(20)]
        public String SubstanceFrequency
        {
            get => fields.SubstanceFrequency[this];
            set => fields.SubstanceFrequency[this] = value;
        }
        [DisplayName("Age Band"), Size(20)]
        public String AgeBand
        {
            get => fields.AgeBand[this];
            set => fields.AgeBand[this] = value;
        }
        [DisplayName("Disabilities"), Size(100)]
        public String Disabilities
        {
            get => fields.Disabilities[this];
            set => fields.Disabilities[this] = value;
        }
        [DisplayName("Gender"), Size(20)]
        public String Gender
        {
            get => fields.Gender[this];
            set => fields.Gender[this] = value;
        }
        [DisplayName("Language"), Size(20)]
        public String Language
        {
            get => fields.Language[this];
            set => fields.Language[this] = value;
        }
        [DisplayName("Race / Ethnicity"), Size(200)]
        public String RaceEthnicity
        {
            get => fields.RaceEthnicity[this];
            set => fields.RaceEthnicity[this] = value;
        }
        [DisplayName("Immigrated in past 5 years"), Size(3)]
        public String Immigrated
        {
            get => fields.Immigrated[this];
            set => fields.Immigrated[this] = value;
        }
        [DisplayName("Q1")]
        public Int32? Q1
        {
            get => fields.Q1[this];
            set => fields.Q1[this] = value;
        }
        [DisplayName("Q2")]
        public Int32? Q2
        {
            get => fields.Q2[this];
            set => fields.Q2[this] = value;
        }
        [DisplayName("Q3")]
        public Int32? Q3
        {
            get => fields.Q3[this];
            set => fields.Q3[this] = value;
        }
        [DisplayName("Q4")]
        public Int32? Q4
        {
            get => fields.Q4[this];
            set => fields.Q4[this] = value;
        }
        [DisplayName("Q5")]
        public Int32? Q5
        {
            get => fields.Q5[this];
            set => fields.Q5[this] = value;
        }
        [DisplayName("Q6")]
        public Int32? Q6
        {
            get => fields.Q6[this];
            set => fields.Q6[this] = value;
        }
        [DisplayName("Q7")]
        public Int32? Q7
        {
            get => fields.Q7[this];
            set => fields.Q7[this] = value;
        }
        [DisplayName("Q8")]
        public Int32? Q8
        {
            get => fields.Q8[this];
            set => fields.Q8[this] = value;
        }
        [DisplayName("Q9")]
        public Int32? Q9
        {
            get => fields.Q9[this];
            set => fields.Q9[this] = value;
        }
        [DisplayName("Q10")]
        public Int32? Q10
        {
            get => fields.Q10[this];
            set => fields.Q10[this] = value;
        }
        [DisplayName("Q11")]
        public Int32? Q11
        {
            get => fields.Q11[this];
            set => fields.Q11[this] = value;
        }
        [DisplayName("Q12")]
        public Int32? Q12
        {
            get => fields.Q12[this];
            set => fields.Q12[this] = value;
        }
        [DisplayName("Q13")]
        public Int32? Q13
        {
            get => fields.Q13[this];
            set => fields.Q13[this] = value;
        }
        [DisplayName("Q14")]
        public Int32? Q14
        {
            get => fields.Q14[this];
            set => fields.Q14[this] = value;
        }
        [DisplayName("Q15")]
        public Int32? Q15
        {
            get => fields.Q15[this];
            set => fields.Q15[this] = value;
        }
        [DisplayName("Q16")]
        public Int32? Q16
        {
            get => fields.Q16[this];
            set => fields.Q16[this] = value;
        }
        [DisplayName("Q17")]
        public Int32? Q17
        {
            get => fields.Q17[this];
            set => fields.Q17[this] = value;
        }
        [DisplayName("Q18")]
        public Int32? Q18
        {
            get => fields.Q18[this];
            set => fields.Q18[this] = value;
        }
        [DisplayName("Q19")]
        public Int32? Q19
        {
            get => fields.Q19[this];
            set => fields.Q19[this] = value;
        }
        [DisplayName("Q20")]
        public Int32? Q20
        {
            get => fields.Q20[this];
            set => fields.Q20[this] = value;
        }
        [DisplayName("S1"), Size(3)]
        public String S1
        {
            get => fields.S1[this];
            set => fields.S1[this] = value;
        }
        [DisplayName("S2"), Size(3)]
        public String S2
        {
            get => fields.S2[this];
            set => fields.S2[this] = value;
        }
        [DisplayName("S3"), Size(3)]
        public String S3
        {
            get => fields.S3[this];
            set => fields.S3[this] = value;
        }
        [DisplayName("S4"), Size(3)]
        public String S4
        {
            get => fields.S4[this];
            set => fields.S4[this] = value;
        }
        [DisplayName("S5"), Size(3)]
        public String S5
        {
            get => fields.S5[this];
            set => fields.S5[this] = value;
        }
        [DisplayName("S6"), Size(3)]
        public String S6
        {
            get => fields.S6[this];
            set => fields.S6[this] = value;
        }
        [DisplayName("Within past 3 months"), Size(3)]
        public String S6b
        {
            get => fields.S6b[this];
            set => fields.S6b[this] = value;
        }
        [DisplayName("Score")]
        public Int32? Score
        {
            get => fields.Score[this];
            set => fields.Score[this] = value;
        }
        [DisplayName("High Risk")]
        public Boolean? HighRisk
        {
            get => fields.HighRisk[this];
            set => fields.HighRisk[this] = value;
        }
        [DisplayName("Hard Stop Reasons"), Size(1000)]
        public String HardStopReasons
        {
            get => fields.HardStopReasons[this];
            set => fields.HardStopReasons[this] = value;
        }
        [DisplayName("Referrals"), Size(200)]
        public String Referrals
        {
            get => fields.Referrals[this];
            set => fields.Referrals[this] = value;
        }
        [DisplayName("Referral Accepted"), Size(3)]
        public String ReferralAccepted
        {
            get => fields.ReferralAccepted[this];
            set => fields.ReferralAccepted[this] = value;
        }
        [DisplayName("Referral Accepted Child"), Size(3)]
        public String ReferralAcceptedChild
        {
            get => fields.ReferralAcceptedChild[this];
            set => fields.ReferralAcceptedChild[this] = value;
        }
        [DisplayName("Referral Accepted Parent"), Size(3)]
        public String ReferralAcceptedParent
        {
            get => fields.ReferralAcceptedParent[this];
            set => fields.ReferralAcceptedParent[this] = value;
        }
        [DisplayName("Projected Discharge")]
        public DateTime? ProjectedDischarge
        {
            get => fields.ProjectedDischarge[this];
            set => fields.ProjectedDischarge[this] = value;
        }
        [DisplayName("Narrative"), Size(4000)]
        public String Narrative
        {
            get => fields.Narrative[this];
            set => fields.Narrative[this] = value;
        }
        [DisplayName("Question Notes"), Size(4000)]
        public String QuestionNotes
        {
            get => fields.QuestionNotes[this];
            set => fields.QuestionNotes[this] = value;
        }
        [DisplayName("Suicide Notes"), Size(2000)]
        public String SuicideNotes
        {
            get => fields.SuicideNotes[this];
            set => fields.SuicideNotes[this] = value;
        }
        [DisplayName("Protocol Result"), Size(400)]
        public String ProtocolResult
        {
            get => fields.ProtocolResult[this];
            set => fields.ProtocolResult[this] = value;
        }
        [DisplayName("Completed At")]
        public DateTime? CompletedAt
        {
            get => fields.CompletedAt[this];
            set => fields.CompletedAt[this] = value;
        }
        [DisplayName("Signed By")]
        public Int32? SignedBy
        {
            get => fields.SignedBy[this];
            set => fields.SignedBy[this] = value;
        }
        [DisplayName("Signed At")]
        public DateTime? SignedAt
        {
            get => fields.SignedAt[this];
            set => fields.SignedAt[this] = value;
        }
        [DisplayName("Signed Name"), Size(200)]
        public String SignedName
        {
            get => fields.SignedName[this];
            set => fields.SignedName[this] = value;
        }
        [DisplayName("Owner")]
        public Int32? Owner
        {
            get => fields.Owner[this];
            set => fields.Owner[this] = value;
        }
        [DisplayName("Owner Create Date")]
        public DateTime? OwnerCreateDate
        {
            get => fields.OwnerCreateDate[this];
            set => fields.OwnerCreateDate[this] = value;
        }

        [DisplayName("Client"), Expression("(jClient.LastName + ', ' + jClient.FirstName)"), QuickSearch]
        public String ClientName { get => fields.ClientName[this]; set => fields.ClientName[this] = value; }
        [DisplayName("Record #"), Expression("jClient.RecordNumber")]
        public String ClientRecordNumber { get => fields.ClientRecordNumber[this]; set => fields.ClientRecordNumber[this] = value; }
        [DisplayName("1st Team Member"), Expression("jTm1.DisplayName")]
        public String TeamMember1Name { get => fields.TeamMember1Name[this]; set => fields.TeamMember1Name[this] = value; }
        [DisplayName("2nd Team Member"), Expression("jTm2.DisplayName")]
        public String TeamMember2Name { get => fields.TeamMember2Name[this]; set => fields.TeamMember2Name[this] = value; }
        [DisplayName("Needs"), Expression("(SELECT COUNT(*) FROM CrisisAssessmentNeeds n WHERE n.AssessmentId = T0.AssessmentId AND n.Accepted = 1)")]
        public Int32? NeedCount { get => fields.NeedCount[this]; set => fields.NeedCount[this] = value; }

        public CrisisAssessmentsRow() : base() { }
        public CrisisAssessmentsRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AssessmentId;
            public Int32Field TenantId;
            public Int32Field ClientId;
            public Int32Field EpisodeId;
            public StringField FormType;
            public StringField Status;
            public DateTimeField ServiceDate;
            public StringField StartTime;
            public StringField EndTime;
            public StringField County;
            public StringField Zip;
            public Int32Field TeamMember1;
            public Int32Field TeamMember2;
            public StringField ResponderCredentials;
            public StringField ParentPresent;
            public StringField ParentName;
            public StringField ParentPhone;
            public StringField GradeLevel;
            public StringField Location;
            public BooleanField ChildrenInHome;
            public StringField RiskCategories;
            public StringField PrimaryRisk;
            public StringField Diagnoses;
            public StringField SubstanceType;
            public StringField SubstanceAmount;
            public StringField SubstanceFrequency;
            public StringField AgeBand;
            public StringField Disabilities;
            public StringField Gender;
            public StringField Language;
            public StringField RaceEthnicity;
            public StringField Immigrated;
            public Int32Field Q1;
            public Int32Field Q2;
            public Int32Field Q3;
            public Int32Field Q4;
            public Int32Field Q5;
            public Int32Field Q6;
            public Int32Field Q7;
            public Int32Field Q8;
            public Int32Field Q9;
            public Int32Field Q10;
            public Int32Field Q11;
            public Int32Field Q12;
            public Int32Field Q13;
            public Int32Field Q14;
            public Int32Field Q15;
            public Int32Field Q16;
            public Int32Field Q17;
            public Int32Field Q18;
            public Int32Field Q19;
            public Int32Field Q20;
            public StringField S1;
            public StringField S2;
            public StringField S3;
            public StringField S4;
            public StringField S5;
            public StringField S6;
            public StringField S6b;
            public Int32Field Score;
            public BooleanField HighRisk;
            public StringField HardStopReasons;
            public StringField Referrals;
            public StringField ReferralAccepted;
            public StringField ReferralAcceptedChild;
            public StringField ReferralAcceptedParent;
            public DateTimeField ProjectedDischarge;
            public StringField Narrative;
            public StringField QuestionNotes;
            public StringField SuicideNotes;
            public StringField ProtocolResult;
            public DateTimeField CompletedAt;
            public Int32Field SignedBy;
            public DateTimeField SignedAt;
            public StringField SignedName;
            public Int32Field Owner;
            public DateTimeField OwnerCreateDate;
            public StringField ClientName;
            public StringField ClientRecordNumber;
            public StringField TeamMember1Name;
            public StringField TeamMember2Name;
            public Int32Field NeedCount;
        }
    }
}
