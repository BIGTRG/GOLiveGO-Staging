using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.CrisisAssessments.Forms
{
    [FormScript("CrisisAssessments.CrisisAssessments")]
    [BasedOnRow(typeof(CrisisAssessmentsRow), CheckNames = true)]
    public class CrisisAssessmentsForm
    {
        [Tab("Encounter"), DisplayName("Assessment form"), FormTypeRadioEditor, Required]
        public String FormType { get; set; }
        [DisplayName("Client"), LookupEditor(typeof(GeniusOneAi.Web.Modules.Common.CustomLookups.ClientsFilteredLookup)), Required]
        public Int32 ClientId { get; set; }
        [DisplayName("Date of Service"), DateEditor, HalfWidth]
        public DateTime ServiceDate { get; set; }
        [DisplayName("Start time"), QuarterWidth]
        public String StartTime { get; set; }
        [DisplayName("End time"), QuarterWidth]
        public String EndTime { get; set; }
        [DisplayName("County of Service"), HalfWidth]
        public String County { get; set; }
        [DisplayName("Zip Code of Service"), HalfWidth]
        public String Zip { get; set; }
        [DisplayName("1st Team Member"), LookupEditor(typeof(GeniusOneAi.Web.Modules.Common.CustomLookups.WorkersFilteredLookup)), HalfWidth]
        public Int32 TeamMember1 { get; set; }
        [DisplayName("2nd Team Member"), LookupEditor(typeof(GeniusOneAi.Web.Modules.Common.CustomLookups.WorkersFilteredLookup)), HalfWidth]
        public Int32 TeamMember2 { get; set; }
        [DisplayName("Team member responding in person and credentials")]
        public String ResponderCredentials { get; set; }
        [DisplayName("Parent / legal guardian present during the assessment"), YesNoRadioEditor]
        public String ParentPresent { get; set; }
        [DisplayName("Parent / guardian name"), HalfWidth]
        public String ParentName { get; set; }
        [DisplayName("Parent / guardian phone"), HalfWidth]
        public String ParentPhone { get; set; }
        [DisplayName("Location of service (select one)"), LocationEditor]
        public String Location { get; set; }
        [DisplayName("If temporary or permanent home: children under 18 live in this home")]
        public Boolean ChildrenInHome { get; set; }
        [Tab("Risk"), DisplayName("Risk categories (select all that apply)"), RiskCategoriesEditor]
        public String RiskCategories { get; set; }
        [DisplayName("Primary risk category"), PrimaryRiskEditor]
        public String PrimaryRisk { get; set; }
        [DisplayName("Current diagnoses"), TextAreaEditor(Rows = 2)]
        public String Diagnoses { get; set; }
        [DisplayName("If substance abuse - type"), HalfWidth]
        public String SubstanceType { get; set; }
        [DisplayName("Amount"), HalfWidth]
        public String SubstanceAmount { get; set; }
        [DisplayName("Frequency used"), SubstanceFrequencyEditor]
        public String SubstanceFrequency { get; set; }
        [Tab("Demographics"), DisplayName("Age (select one)"), AgeBandEditor]
        public String AgeBand { get; set; }
        [DisplayName("Grade level in school"), HalfWidth]
        public String GradeLevel { get; set; }
        [DisplayName("Disability or other access or functional need (select all that apply)"), DisabilitiesEditor]
        public String Disabilities { get; set; }
        [DisplayName("Gender (select one)"), GenderRadioEditor]
        public String Gender { get; set; }
        [DisplayName("Primary language spoken during this encounter"), LanguageRadioEditor]
        public String Language { get; set; }
        [DisplayName("Race / Ethnicity (select all that apply)"), RaceEthnicityEditor]
        public String RaceEthnicity { get; set; }
        [DisplayName("Immigrated to the United States in the past 5 years"), YesNoRadioEditor]
        public String Immigrated { get; set; }
        [Tab("Questions"), DisplayName("1. How much have you been bothered by unwanted memories, nightmares, or reminders of your current crisis?"), ScaleEditor]
        public Int32 Q1 { get; set; }
        [DisplayName("2. To what extent have you lost enjoyment in things, kept your distance from people, or found it difficult to experience feelings due to your crisis?"), ScaleEditor]
        public Int32 Q2 { get; set; }
        [DisplayName("3. How much effort have you made to avoid thinking or talking about what happened or doing things that remind you of your current crisis?"), ScaleEditor]
        public Int32 Q3 { get; set; }
        [DisplayName("4. How much have you been bothered by poor sleep, poor concentration, jumpiness, irritability, or feeling watchful?"), ScaleEditor]
        public Int32 Q4 { get; set; }
        [DisplayName("5. How down or depressed have you been because of your current crisis?"), ScaleEditor]
        public Int32 Q5 { get; set; }
        [DisplayName("6. Has your ability to handle other stressful events or situations been harmed?"), ScaleEditor]
        public Int32 Q6 { get; set; }
        [DisplayName("7. Have your reactions interfered with how well you take care of your physical health (eating poorly, not enough rest, smoking more, more alcohol or other substances)?"), ScaleEditor]
        public Int32 Q7 { get; set; }
        [DisplayName("8. How distressed or bothered are you about your reactions?"), ScaleEditor]
        public Int32 Q8 { get; set; }
        [DisplayName("9. How much have your reactions interfered with your ability to work or carry out your daily activities?"), ScaleEditor]
        public Int32 Q9 { get; set; }
        [DisplayName("10. How much have your reactions affected your relationships with family or friends or interfered with social, recreational, or community activities?"), ScaleEditor]
        public Int32 Q10 { get; set; }
        [DisplayName("11. How concerned have you been about your ability to overcome problems you may face without further assistance?"), ScaleEditor]
        public Int32 Q11 { get; set; }
        [DisplayName("12. If in school: do you find it harder to get your schoolwork done?"), ScaleEditor]
        public Int32 Q12 { get; set; }
        [DisplayName("13. Do you worry about something else bad happening to you, your family, or your friends?"), ScaleEditor]
        public Int32 Q13 { get; set; }
        [DisplayName("14. Are you having a harder time getting along with family or your friends?"), ScaleEditor]
        public Int32 Q14 { get; set; }
        [DisplayName("15. Are you finding it harder to do or enjoy activities that you used to enjoy?"), ScaleEditor]
        public Int32 Q15 { get; set; }
        [DisplayName("16. Parent: Has your child been more clingy or worried about separation?"), ScaleEditor]
        public Int32 Q16 { get; set; }
        [DisplayName("17. Parent: Has your child been quieter and more withdrawn?"), ScaleEditor]
        public Int32 Q17 { get; set; }
        [DisplayName("18. Parent: Has your child talked repeatedly or asked questions about the disaster?"), ScaleEditor]
        public Int32 Q18 { get; set; }
        [DisplayName("19. Parent: Has your child's play been about the disaster?"), ScaleEditor]
        public Int32 Q19 { get; set; }
        [DisplayName("20. Parent: Have you noticed changes in your child's behavior or development (bed-wetting, baby talk, fighting, risk-taking, decline in school performance)?"), ScaleEditor]
        public Int32 Q20 { get; set; }
        [DisplayName("Clinician observations on the answers above (optional - quotes, examples, context)"), TextAreaEditor(Rows = 3)]
        public String QuestionNotes { get; set; }
        [Tab("Suicide Screen"), DisplayName("1. Have you wished you were dead or wished you could go to sleep and not wake up?"), YesNoRadioEditor]
        public String S1 { get; set; }
        [DisplayName("2. Have you actually had any thoughts of killing yourself?"), YesNoRadioEditor]
        public String S2 { get; set; }
        [DisplayName("3. Have you been thinking about how you might do this?"), YesNoRadioEditor]
        public String S3 { get; set; }
        [DisplayName("4. Have you had these thoughts and had some intention of acting on them?"), YesNoRadioEditor]
        public String S4 { get; set; }
        [DisplayName("5. Have you started to work out or worked out the details of how to kill yourself?"), YesNoRadioEditor]
        public String S5 { get; set; }
        [DisplayName("6. Have you done anything, started to do anything, or prepared to do anything to end your life?"), YesNoRadioEditor]
        public String S6 { get; set; }
        [DisplayName("If yes to 6: was this within the past 3 months?"), YesNoRadioEditor]
        public String S6b { get; set; }
        [DisplayName("Observations - means, prior attempts, protective factors (optional)"), TextAreaEditor(Rows = 3)]
        public String SuicideNotes { get; set; }
        [Tab("Referral"), DisplayName("Referral (select all that apply)"), ReferralsEditor]
        public String Referrals { get; set; }
        [DisplayName("Did the participant accept one or more of the referrals?"), YesNoRadioEditor]
        public String ReferralAccepted { get; set; }
        [DisplayName("Was the referral accepted by the child?"), YesNoRadioEditor, HalfWidth]
        public String ReferralAcceptedChild { get; set; }
        [DisplayName("Was the referral accepted by the parent / caregiver?"), YesNoRadioEditor, HalfWidth]
        public String ReferralAcceptedParent { get; set; }
        [DisplayName("Projected discharge date (within 7 days)"), DateEditor, HalfWidth]
        public DateTime ProjectedDischarge { get; set; }
        [DisplayName("Narrative / other (past trauma list, other location or referral)"), TextAreaEditor(Rows = 4)]
        public String Narrative { get; set; }
        [DisplayName("Status"), ReadOnly(true), HalfWidth]
        public String Status { get; set; }
        [DisplayName("Episode #"), ReadOnly(true), HalfWidth]
        public Int32 EpisodeId { get; set; }
    }
}
