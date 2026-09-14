namespace GeniusOneAi.CrisisAssessments {
    export interface CrisisAssessmentsForm {
        FormType: CustomEditors.FormTypeRadioEditor;
        ClientId: Serenity.LookupEditor;
        ServiceDate: Serenity.DateEditor;
        StartTime: Serenity.StringEditor;
        EndTime: Serenity.StringEditor;
        County: Serenity.StringEditor;
        Zip: Serenity.StringEditor;
        TeamMember1: Serenity.LookupEditor;
        TeamMember2: Serenity.LookupEditor;
        ResponderCredentials: Serenity.StringEditor;
        ParentPresent: CustomEditors.YesNoRadioEditor;
        ParentName: Serenity.StringEditor;
        ParentPhone: Serenity.StringEditor;
        Location: CustomEditors.LocationEditor;
        ChildrenInHome: Serenity.BooleanEditor;
        RiskCategories: CustomEditors.RiskCategoriesEditor;
        PrimaryRisk: CustomEditors.PrimaryRiskEditor;
        Diagnoses: Serenity.TextAreaEditor;
        SubstanceType: Serenity.StringEditor;
        SubstanceAmount: Serenity.StringEditor;
        SubstanceFrequency: CustomEditors.SubstanceFrequencyEditor;
        AgeBand: CustomEditors.AgeBandEditor;
        GradeLevel: Serenity.StringEditor;
        Disabilities: CustomEditors.DisabilitiesEditor;
        Gender: CustomEditors.GenderRadioEditor;
        Language: CustomEditors.LanguageRadioEditor;
        RaceEthnicity: CustomEditors.RaceEthnicityEditor;
        Immigrated: CustomEditors.YesNoRadioEditor;
        Q1: CustomEditors.ScaleEditor;
        Q2: CustomEditors.ScaleEditor;
        Q3: CustomEditors.ScaleEditor;
        Q4: CustomEditors.ScaleEditor;
        Q5: CustomEditors.ScaleEditor;
        Q6: CustomEditors.ScaleEditor;
        Q7: CustomEditors.ScaleEditor;
        Q8: CustomEditors.ScaleEditor;
        Q9: CustomEditors.ScaleEditor;
        Q10: CustomEditors.ScaleEditor;
        Q11: CustomEditors.ScaleEditor;
        Q12: CustomEditors.ScaleEditor;
        Q13: CustomEditors.ScaleEditor;
        Q14: CustomEditors.ScaleEditor;
        Q15: CustomEditors.ScaleEditor;
        Q16: CustomEditors.ScaleEditor;
        Q17: CustomEditors.ScaleEditor;
        Q18: CustomEditors.ScaleEditor;
        Q19: CustomEditors.ScaleEditor;
        Q20: CustomEditors.ScaleEditor;
        QuestionNotes: Serenity.TextAreaEditor;
        S1: CustomEditors.YesNoRadioEditor;
        S2: CustomEditors.YesNoRadioEditor;
        S3: CustomEditors.YesNoRadioEditor;
        S4: CustomEditors.YesNoRadioEditor;
        S5: CustomEditors.YesNoRadioEditor;
        S6: CustomEditors.YesNoRadioEditor;
        S6b: CustomEditors.YesNoRadioEditor;
        SuicideNotes: Serenity.TextAreaEditor;
        Referrals: CustomEditors.ReferralsEditor;
        ReferralAccepted: CustomEditors.YesNoRadioEditor;
        ReferralAcceptedChild: CustomEditors.YesNoRadioEditor;
        ReferralAcceptedParent: CustomEditors.YesNoRadioEditor;
        ProjectedDischarge: Serenity.DateEditor;
        Narrative: Serenity.TextAreaEditor;
        Status: Serenity.StringEditor;
        EpisodeId: Serenity.IntegerEditor;
    }

    export class CrisisAssessmentsForm extends Serenity.PrefixedContext {
        static formKey = 'CrisisAssessments.CrisisAssessments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CrisisAssessmentsForm.init)  {
                CrisisAssessmentsForm.init = true;

                Q.initFormType(CrisisAssessmentsForm, [
                    'FormType', CustomEditors.FormTypeRadioEditor,
                    'ClientId', Serenity.LookupEditor,
                    'ServiceDate', Serenity.DateEditor,
                    'StartTime', Serenity.StringEditor,
                    'EndTime', Serenity.StringEditor,
                    'County', Serenity.StringEditor,
                    'Zip', Serenity.StringEditor,
                    'TeamMember1', Serenity.LookupEditor,
                    'TeamMember2', Serenity.LookupEditor,
                    'ResponderCredentials', Serenity.StringEditor,
                    'ParentPresent', CustomEditors.YesNoRadioEditor,
                    'ParentName', Serenity.StringEditor,
                    'ParentPhone', Serenity.StringEditor,
                    'Location', CustomEditors.LocationEditor,
                    'ChildrenInHome', Serenity.BooleanEditor,
                    'RiskCategories', CustomEditors.RiskCategoriesEditor,
                    'PrimaryRisk', CustomEditors.PrimaryRiskEditor,
                    'Diagnoses', Serenity.TextAreaEditor,
                    'SubstanceType', Serenity.StringEditor,
                    'SubstanceAmount', Serenity.StringEditor,
                    'SubstanceFrequency', CustomEditors.SubstanceFrequencyEditor,
                    'AgeBand', CustomEditors.AgeBandEditor,
                    'GradeLevel', Serenity.StringEditor,
                    'Disabilities', CustomEditors.DisabilitiesEditor,
                    'Gender', CustomEditors.GenderRadioEditor,
                    'Language', CustomEditors.LanguageRadioEditor,
                    'RaceEthnicity', CustomEditors.RaceEthnicityEditor,
                    'Immigrated', CustomEditors.YesNoRadioEditor,
                    'Q1', CustomEditors.ScaleEditor,
                    'Q2', CustomEditors.ScaleEditor,
                    'Q3', CustomEditors.ScaleEditor,
                    'Q4', CustomEditors.ScaleEditor,
                    'Q5', CustomEditors.ScaleEditor,
                    'Q6', CustomEditors.ScaleEditor,
                    'Q7', CustomEditors.ScaleEditor,
                    'Q8', CustomEditors.ScaleEditor,
                    'Q9', CustomEditors.ScaleEditor,
                    'Q10', CustomEditors.ScaleEditor,
                    'Q11', CustomEditors.ScaleEditor,
                    'Q12', CustomEditors.ScaleEditor,
                    'Q13', CustomEditors.ScaleEditor,
                    'Q14', CustomEditors.ScaleEditor,
                    'Q15', CustomEditors.ScaleEditor,
                    'Q16', CustomEditors.ScaleEditor,
                    'Q17', CustomEditors.ScaleEditor,
                    'Q18', CustomEditors.ScaleEditor,
                    'Q19', CustomEditors.ScaleEditor,
                    'Q20', CustomEditors.ScaleEditor,
                    'QuestionNotes', Serenity.TextAreaEditor,
                    'S1', CustomEditors.YesNoRadioEditor,
                    'S2', CustomEditors.YesNoRadioEditor,
                    'S3', CustomEditors.YesNoRadioEditor,
                    'S4', CustomEditors.YesNoRadioEditor,
                    'S5', CustomEditors.YesNoRadioEditor,
                    'S6', CustomEditors.YesNoRadioEditor,
                    'S6b', CustomEditors.YesNoRadioEditor,
                    'SuicideNotes', Serenity.TextAreaEditor,
                    'Referrals', CustomEditors.ReferralsEditor,
                    'ReferralAccepted', CustomEditors.YesNoRadioEditor,
                    'ReferralAcceptedChild', CustomEditors.YesNoRadioEditor,
                    'ReferralAcceptedParent', CustomEditors.YesNoRadioEditor,
                    'ProjectedDischarge', Serenity.DateEditor,
                    'Narrative', Serenity.TextAreaEditor,
                    'Status', Serenity.StringEditor,
                    'EpisodeId', Serenity.IntegerEditor
                ]);
            }
        }
    }
}
