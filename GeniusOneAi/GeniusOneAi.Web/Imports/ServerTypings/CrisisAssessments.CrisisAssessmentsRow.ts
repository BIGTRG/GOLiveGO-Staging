namespace GeniusOneAi.CrisisAssessments {
    export interface CrisisAssessmentsRow {
        AssessmentId?: number;
        TenantId?: number;
        ClientId?: number;
        EpisodeId?: number;
        FormType?: string;
        Status?: string;
        ServiceDate?: string;
        StartTime?: string;
        EndTime?: string;
        County?: string;
        Zip?: string;
        TeamMember1?: number;
        TeamMember2?: number;
        ResponderCredentials?: string;
        ParentPresent?: string;
        ParentName?: string;
        ParentPhone?: string;
        GradeLevel?: string;
        Location?: string;
        ChildrenInHome?: boolean;
        RiskCategories?: string;
        PrimaryRisk?: string;
        Diagnoses?: string;
        SubstanceType?: string;
        SubstanceAmount?: string;
        SubstanceFrequency?: string;
        AgeBand?: string;
        Disabilities?: string;
        Gender?: string;
        Language?: string;
        RaceEthnicity?: string;
        Immigrated?: string;
        Q1?: number;
        Q2?: number;
        Q3?: number;
        Q4?: number;
        Q5?: number;
        Q6?: number;
        Q7?: number;
        Q8?: number;
        Q9?: number;
        Q10?: number;
        Q11?: number;
        Q12?: number;
        Q13?: number;
        Q14?: number;
        Q15?: number;
        Q16?: number;
        Q17?: number;
        Q18?: number;
        Q19?: number;
        Q20?: number;
        S1?: string;
        S2?: string;
        S3?: string;
        S4?: string;
        S5?: string;
        S6?: string;
        S6b?: string;
        Score?: number;
        HighRisk?: boolean;
        HardStopReasons?: string;
        Referrals?: string;
        ReferralAccepted?: string;
        ReferralAcceptedChild?: string;
        ReferralAcceptedParent?: string;
        ProjectedDischarge?: string;
        Narrative?: string;
        QuestionNotes?: string;
        SuicideNotes?: string;
        ProtocolResult?: string;
        CompletedAt?: string;
        SignedBy?: number;
        SignedAt?: string;
        SignedName?: string;
        Owner?: number;
        OwnerCreateDate?: string;
        ClientName?: string;
        ClientRecordNumber?: string;
        TeamMember1Name?: string;
        TeamMember2Name?: string;
        NeedCount?: number;
        [key: string]: any;
    }

    export namespace CrisisAssessmentsRow {
        export const idProperty = 'AssessmentId';
        export const nameProperty = 'FormType';
        export const localTextPrefix = 'CrisisAssessments.CrisisAssessments';
        export const deletePermission = 'PatientManager:Patients';
        export const insertPermission = 'PatientManager:Patients';
        export const readPermission = 'PatientManager:Patients';
        export const updatePermission = 'PatientManager:Patients';

        export declare const enum Fields {
            AssessmentId = "AssessmentId",
            TenantId = "TenantId",
            ClientId = "ClientId",
            EpisodeId = "EpisodeId",
            FormType = "FormType",
            Status = "Status",
            ServiceDate = "ServiceDate",
            StartTime = "StartTime",
            EndTime = "EndTime",
            County = "County",
            Zip = "Zip",
            TeamMember1 = "TeamMember1",
            TeamMember2 = "TeamMember2",
            ResponderCredentials = "ResponderCredentials",
            ParentPresent = "ParentPresent",
            ParentName = "ParentName",
            ParentPhone = "ParentPhone",
            GradeLevel = "GradeLevel",
            Location = "Location",
            ChildrenInHome = "ChildrenInHome",
            RiskCategories = "RiskCategories",
            PrimaryRisk = "PrimaryRisk",
            Diagnoses = "Diagnoses",
            SubstanceType = "SubstanceType",
            SubstanceAmount = "SubstanceAmount",
            SubstanceFrequency = "SubstanceFrequency",
            AgeBand = "AgeBand",
            Disabilities = "Disabilities",
            Gender = "Gender",
            Language = "Language",
            RaceEthnicity = "RaceEthnicity",
            Immigrated = "Immigrated",
            Q1 = "Q1",
            Q2 = "Q2",
            Q3 = "Q3",
            Q4 = "Q4",
            Q5 = "Q5",
            Q6 = "Q6",
            Q7 = "Q7",
            Q8 = "Q8",
            Q9 = "Q9",
            Q10 = "Q10",
            Q11 = "Q11",
            Q12 = "Q12",
            Q13 = "Q13",
            Q14 = "Q14",
            Q15 = "Q15",
            Q16 = "Q16",
            Q17 = "Q17",
            Q18 = "Q18",
            Q19 = "Q19",
            Q20 = "Q20",
            S1 = "S1",
            S2 = "S2",
            S3 = "S3",
            S4 = "S4",
            S5 = "S5",
            S6 = "S6",
            S6b = "S6b",
            Score = "Score",
            HighRisk = "HighRisk",
            HardStopReasons = "HardStopReasons",
            Referrals = "Referrals",
            ReferralAccepted = "ReferralAccepted",
            ReferralAcceptedChild = "ReferralAcceptedChild",
            ReferralAcceptedParent = "ReferralAcceptedParent",
            ProjectedDischarge = "ProjectedDischarge",
            Narrative = "Narrative",
            QuestionNotes = "QuestionNotes",
            SuicideNotes = "SuicideNotes",
            ProtocolResult = "ProtocolResult",
            CompletedAt = "CompletedAt",
            SignedBy = "SignedBy",
            SignedAt = "SignedAt",
            SignedName = "SignedName",
            Owner = "Owner",
            OwnerCreateDate = "OwnerCreateDate"
        }
    }
}
