namespace GeniusOneAi.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Billing {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const BillCode: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace InsuranceTypes {
                export const Address1: string;
                export const Address2: string;
                export const City: string;
                export const County: string;
                export const Description: string;
                export const InsuranceTypeId: string;
                export const Name: string;
                export const PayerId: string;
                export const PrimaryPhone: string;
                export const State: string;
                export const Status: string;
                export const Type: string;
                export const Zipcode: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleKey: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const Address1: string;
                export const Address2: string;
                export const BillRateAdmin: string;
                export const BillRateClientLate: string;
                export const BillRateClientOnTime: string;
                export const BillRateMeeting: string;
                export const BillRateTraining: string;
                export const City: string;
                export const Classification: string;
                export const DisplayName: string;
                export const DriverLicenseExpiration: string;
                export const DriverLicenseNumber: string;
                export const DriverLicenseState: string;
                export const ESignatureBase64: string;
                export const ESignaturePlainText: string;
                export const Email: string;
                export const EmergencyContact: string;
                export const EmergencyContactPhone: string;
                export const EmployeeId: string;
                export const FirstName: string;
                export const HireDate: string;
                export const ImpersonationToken: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsWorker: string;
                export const LastDirectoryUpdate: string;
                export const LastName: string;
                export const MiddleName: string;
                export const MobilePhoneNumber: string;
                export const MobilePhoneVerified: string;
                export const Notes: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const PrimaryPhone: string;
                export const RecAlerts: string;
                export const SecondaryPhone: string;
                export const SignatureVerified: string;
                export const SocialSecurityNumber: string;
                export const Source: string;
                export const State: string;
                export const TenantId: string;
                export const TwoFactorAuth: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
                export const Zipcode: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace AgencyAdministration {

            namespace ClientGoalInterventionsLibrary {
                export const ClientGoalId: string;
                export const ClientGoalInterventionId: string;
                export const InterDesc: string;
                export const TenantId: string;
            }

            namespace ClientGoalsLibrary {
                export const ClientGoalId: string;
                export const ClientInterventionsLibraryList: string;
                export const Description: string;
                export const GoalType: string;
                export const TenantId: string;
            }

            namespace ClientSiteTypes {
                export const ClientId: string;
                export const ClientSiteTypeId: string;
                export const SiteTypeId: string;
                export const TenantId: string;
            }

            namespace CredentialTypes {
                export const CredentialTypeId: string;
                export const Description: string;
                export const Name: string;
                export const TenantId: string;
            }

            namespace FormTypes {
                export const Description: string;
                export const FormTypeId: string;
                export const Name: string;
            }

            namespace ProgramCodeTypes {
                export const BillCode: string;
                export const BillCodeWithMods: string;
                export const BillRate: string;
                export const BillRateUnit: string;
                export const Description: string;
                export const FundingSource: string;
                export const InsuranceId: string;
                export const Mod1: string;
                export const Mod2: string;
                export const Mod3: string;
                export const Mod4: string;
                export const ProgramCodeTypeId: string;
                export const ProgramName: string;
                export const ProgramTypeId: string;
                export const RateEffective: string;
                export const RateEnd: string;
                export const SpecialtyName: string;
                export const TenantId: string;
            }

            namespace ProgramNoteTemplates {
                export const Field01Label: string;
                export const Field01Status: string;
                export const Field01Type: string;
                export const Field02Label: string;
                export const Field02Status: string;
                export const Field02Type: string;
                export const Field03Label: string;
                export const Field03Status: string;
                export const Field03Type: string;
                export const Field04Label: string;
                export const Field04Status: string;
                export const Field04Type: string;
                export const Field05Label: string;
                export const Field05Status: string;
                export const Field05Type: string;
                export const Field06Label: string;
                export const Field06Status: string;
                export const Field06Type: string;
                export const Field07Label: string;
                export const Field07Status: string;
                export const Field07Type: string;
                export const Field08Label: string;
                export const Field08Status: string;
                export const Field08Type: string;
                export const Field09Label: string;
                export const Field09Status: string;
                export const Field09Type: string;
                export const Field10Label: string;
                export const Field10Status: string;
                export const Field10Type: string;
                export const Name: string;
                export const ProgramNoteTemplateId: string;
                export const Status: string;
            }

            namespace ProgramNoteType {
                export const IsEnabled: string;
                export const ProgramNoteTypeId: string;
                export const ProgramNoteTypeName: string;
                export const ProgramNoteTypeOrder: string;
                export const TenantId: string;
            }

            namespace ProgramTypes {
                export const BackupApproverId: string;
                export const DefaultApproverId: string;
                export const Description: string;
                export const EscalationMetric: string;
                export const Name: string;
                export const ProgramNoteTemplateId: string;
                export const ProgramNoteTemplateName: string;
                export const ProgramTypeId: string;
                export const Status: string;
                export const TenantId: string;
            }

            namespace SitesTypes {
                export const Address1: string;
                export const Address2: string;
                export const City: string;
                export const Description: string;
                export const Name: string;
                export const Npi: string;
                export const PrimaryPhone: string;
                export const SiteTypeId: string;
                export const State: string;
                export const Status: string;
                export const TaxId: string;
                export const Taxonomy: string;
                export const TenantId: string;
                export const Zipcode: string;
            }

            namespace TemplateCodeList {
                export const QuestionId: string;
                export const TemplateCodeListId: string;
                export const TemplateId: string;
                export const ValueText: string;
            }

            namespace WorkerTypes {
                export const Description: string;
                export const Name: string;
                export const TenantId: string;
                export const UserTypeId: string;
            }
        }

        namespace Archive {

            namespace ActivitiesArchive {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgramNoteFileName: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace ProgressNotesArchive {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const PrimaryInsuranceType: string;
                export const ProgramNoteField00: string;
                export const ProgramNoteFileName: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
                export const WorkerFullName: string;
            }
        }

        namespace ClientManager {

            namespace ClientAuthorizations {
                export const ApprovalDate: string;
                export const ApprovalStatus: string;
                export const AuthDateRange: string;
                export const AuthorizationId: string;
                export const AuthorizationType: string;
                export const BillCode: string;
                export const ClientId: string;
                export const EndDate: string;
                export const ProgramCodeTypeId: string;
                export const ProgramTypeId: string;
                export const StartDate: string;
                export const Status: string;
                export const TenantId: string;
                export const UnitCalculationMetric: string;
                export const UnitContactGranted: string;
            }

            namespace ClientDocuments {
                export const ClientId: string;
                export const DocumentId: string;
                export const FileName: string;
                export const FinalizedDate: string;
                export const IsFinalized: string;
                export const Title: string;
            }

            namespace ClientGoalInterventions {
                export const ClientGoalClientId: string;
                export const ClientGoalCompletionDate: string;
                export const ClientGoalDescription: string;
                export const ClientGoalGoal: string;
                export const ClientGoalGoalType: string;
                export const ClientGoalId: string;
                export const ClientGoalInterventionId: string;
                export const ClientGoalIsActive: string;
                export const ClientGoalStatus: string;
                export const ClientGoalTenantId: string;
                export const InterDesc: string;
                export const InterNumber: string;
                export const IsActiveFriday: string;
                export const IsActiveMonday: string;
                export const IsActiveSaturday: string;
                export const IsActiveSunday: string;
                export const IsActiveThursday: string;
                export const IsActiveTuesday: string;
                export const IsActiveWednesday: string;
                export const TenantId: string;
            }

            namespace ClientGoals {
                export const ClientGoalId: string;
                export const ClientId: string;
                export const ClientInterventionsList: string;
                export const CompletionDate: string;
                export const Description: string;
                export const Goal: string;
                export const GoalType: string;
                export const IsActiveFriday: string;
                export const IsActiveMonday: string;
                export const IsActiveSaturday: string;
                export const IsActiveSunday: string;
                export const IsActiveThursday: string;
                export const IsActiveTuesday: string;
                export const IsActiveWednesday: string;
                export const Owner: string;
                export const OwnerCreateDate: string;
                export const Status: string;
                export const TenantId: string;
                export const WorkerFullName: string;
            }

            namespace ClientGoalsLibrarySelector {
                export const ClientGoalId: string;
                export const Description: string;
                export const GoalType: string;
                export const TenantId: string;
            }

            namespace Clients {
                export const Address1: string;
                export const Address2: string;
                export const AdmissionDate: string;
                export const Allergies: string;
                export const AllergiesMoreInfo: string;
                export const BirthDate: string;
                export const CellPhone: string;
                export const City: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const ClientStatus: string;
                export const CountryOfBirth: string;
                export const County: string;
                export const DiagnosisDate: string;
                export const DiagnosisNotes: string;
                export const DischargeDate: string;
                export const EducationLevel: string;
                export const Email: string;
                export const EmergencyPerson: string;
                export const EmergencyPhone: string;
                export const EmploymentStatus: string;
                export const Ethnicity: string;
                export const FathersName: string;
                export const FirstName: string;
                export const Gender: string;
                export const GrossIncomeDollar: string;
                export const GrossIncomePer: string;
                export const GuardianName: string;
                export const IsVeteran: string;
                export const LastName: string;
                export const LicenseStateId: string;
                export const LivingArrangements: string;
                export const MaidenName: string;
                export const MaritalStatus: string;
                export const MiddleName: string;
                export const MothersName: string;
                export const NameOfSchool: string;
                export const NextOfKinName: string;
                export const NextOfKinPhone: string;
                export const Notes: string;
                export const NumberDepenentIncome: string;
                export const NumberInHouse: string;
                export const OriginalServiceDate: string;
                export const OtherName: string;
                export const Pcn: string;
                export const PharmacyPhone: string;
                export const PharmacyUsed: string;
                export const PlanExpirationDate: string;
                export const PreferredPhysician: string;
                export const PreferredPhysicianAddress: string;
                export const PreferredPhysicianCounty: string;
                export const PreferredPhysicianPhone: string;
                export const PrimaryInsuranceAddress1: string;
                export const PrimaryInsuranceCity: string;
                export const PrimaryInsuranceGroup: string;
                export const PrimaryInsuranceHolder: string;
                export const PrimaryInsuranceHolderDob: string;
                export const PrimaryInsuranceNumber: string;
                export const PrimaryInsuranceRelationship: string;
                export const PrimaryInsuranceState: string;
                export const PrimaryInsuranceTypeId: string;
                export const PrimaryInsuranceZipCode: string;
                export const PrimaryLanguage: string;
                export const PrimaryPhone: string;
                export const Race: string;
                export const RecordNumber: string;
                export const ReferralDate: string;
                export const ReferralSource: string;
                export const SecondaryInsuranceAddress1: string;
                export const SecondaryInsuranceCity: string;
                export const SecondaryInsuranceGroup: string;
                export const SecondaryInsuranceHolder: string;
                export const SecondaryInsuranceHolderDob: string;
                export const SecondaryInsuranceNumber: string;
                export const SecondaryInsuranceRelationship: string;
                export const SecondaryInsuranceState: string;
                export const SecondaryInsuranceTypeId: string;
                export const SecondaryInsuranceZipCode: string;
                export const SecondaryPhone: string;
                export const SiteTypeId: string;
                export const SocialSecurityNum: string;
                export const State: string;
                export const SystemStatus: string;
                export const TenantId: string;
                export const Zipcode: string;
            }

            namespace WorkerCaseAssignments {
                export const AssignedDate: string;
                export const AuthorizationEndDate: string;
                export const AuthorizationId: string;
                export const AuthorizationStartDate: string;
                export const AuthorizationStatus: string;
                export const AuthorizationUnitContactGranted: string;
                export const BillCode: string;
                export const CaseAssignmentId: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const IsTeamLead: string;
                export const Notes: string;
                export const ProgramCodeTypeId: string;
                export const ProgramTypeId: string;
                export const TenantId: string;
                export const UnassignedDate: string;
                export const UserId: string;
                export const WorkerDisplayName: string;
            }
        }

        namespace Dashboards {

            namespace GlobalAgencyDashboard {
                export const ActiveCases: string;
                export const AppointmentsScheduled: string;
                export const ApprovedProgressNotes: string;
                export const AuthorizationsExpiringNextMonth: string;
                export const AuthorizationsExpiringThisMonth: string;
                export const CredentialsExpiringThisMonth: string;
                export const DocumentsPendingReview: string;
                export const DocumentsPendingSignature: string;
                export const InActiveCases: string;
                export const InvoicesPaid: string;
                export const InvoicesSubmitted: string;
                export const RejectedProgressNotes: string;
                export const SavedProgressNotes: string;
                export const SubmittedProgressNotes: string;
                export const TenantId: string;
                export const TotalBilled: string;
                export const TotalPaid: string;
            }
        }

        namespace DocumentManager {

            namespace DocumentSelector {
                export const DocumentId: string;
                export const FileType: string;
                export const Filename: string;
                export const IsFinalized: string;
                export const IsTemplate: string;
                export const MajorVersion: string;
                export const MinorVersion: string;
                export const OriginalUploadDate: string;
                export const RevisionVersion: string;
                export const Title: string;
                export const UserId: string;
            }

            namespace DocumentWorkflowStepsTemplates {
                export const DocumentStepId: string;
                export const StepActionType: string;
                export const StepOrder: string;
                export const StepPerformerType: string;
                export const WorkflowTemplateId: string;
            }

            namespace DocumentWorkflowTemplates {
                export const Description: string;
                export const DocumentId: string;
                export const DocumentWorkflowStepsList: string;
                export const Name: string;
                export const WorkflowTemplateId: string;
            }

            namespace Documents {
                export const DocumentId: string;
                export const FileName: string;
                export const FileType: string;
                export const IsFinalized: string;
                export const IsTemplate: string;
                export const MajorVersion: string;
                export const MinorVersion: string;
                export const OriginalUploadDate: string;
                export const RevisionVersion: string;
                export const Title: string;
                export const UserId: string;
            }
        }

        namespace MiscEntities {

            namespace ApprovedBilling {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const AlertSent: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const BirthDate: string;
                export const ClientId: string;
                export const FirstName: string;
                export const Gender: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const LastName: string;
                export const MiddleName: string;
                export const Notes: string;
                export const OtherName: string;
                export const PrimaryInsuranceAddress1: string;
                export const PrimaryInsuranceCity: string;
                export const PrimaryInsuranceGroup: string;
                export const PrimaryInsuranceHolder: string;
                export const PrimaryInsuranceHolderDob: string;
                export const PrimaryInsuranceName: string;
                export const PrimaryInsuranceNumber: string;
                export const PrimaryInsuranceRelationship: string;
                export const PrimaryInsuranceState: string;
                export const PrimaryInsuranceTypeId: string;
                export const PrimaryInsuranceZipCode: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Race: string;
                export const RecordNumber: string;
                export const SecondaryInsuranceAddress1: string;
                export const SecondaryInsuranceCity: string;
                export const SecondaryInsuranceGroup: string;
                export const SecondaryInsuranceHolder: string;
                export const SecondaryInsuranceHolderDob: string;
                export const SecondaryInsuranceName: string;
                export const SecondaryInsuranceNumber: string;
                export const SecondaryInsuranceRelationship: string;
                export const SecondaryInsuranceState: string;
                export const SecondaryInsuranceTypeId: string;
                export const SecondaryInsuranceZipCode: string;
                export const SocialSecurityNum: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace ClientAssignments {
                export const AuthorizationId: string;
                export const BillCode: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const EndDate: string;
                export const ProgramName: string;
                export const StartDate: string;
                export const UserId: string;
            }

            namespace Events {
                export const Description: string;
                export const End: string;
                export const EventId: string;
                export const IsFullDay: string;
                export const Start: string;
                export const Subject: string;
                export const ThemeColor: string;
                export const UserId: string;
            }

            namespace PatientDetails {
                export const PatientBirthDate: string;
                export const PatientFirstName: string;
                export const PatientFullName: string;
                export const PatientId: string;
                export const PatientLastName: string;
                export const PatientMedicalRecordNumber: string;
                export const PatientMiddleName: string;
                export const PatientPrimaryInsuranceNumber: string;
            }

            namespace SitesTypes {
                export const Address1: string;
                export const Address2: string;
                export const City: string;
                export const Description: string;
                export const Name: string;
                export const Npi: string;
                export const PrimaryPhone: string;
                export const SiteTypeId: string;
                export const State: string;
                export const Status: string;
                export const TaxId: string;
                export const Taxonomy: string;
                export const TenantId: string;
                export const Zipcode: string;
            }

            namespace TimesheetNoteData {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const ApprovedBy: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const BillingModifier1: string;
                export const BillingModifier2: string;
                export const BillingModifier3: string;
                export const BillingModifier4: string;
                export const BirthDate: string;
                export const ClientId: string;
                export const DateApproved: string;
                export const DateSigned: string;
                export const ESignaturePlainText: string;
                export const Field00: string;
                export const Field01: string;
                export const Field01Label: string;
                export const Field01Status: string;
                export const Field01Type: string;
                export const Field02: string;
                export const Field02Label: string;
                export const Field02Status: string;
                export const Field02Type: string;
                export const Field03: string;
                export const Field03Label: string;
                export const Field03Status: string;
                export const Field03Type: string;
                export const Field04: string;
                export const Field04Label: string;
                export const Field04Status: string;
                export const Field04Type: string;
                export const Field05: string;
                export const Field05Label: string;
                export const Field05Status: string;
                export const Field05Type: string;
                export const Field06: string;
                export const Field06Label: string;
                export const Field06Status: string;
                export const Field06Type: string;
                export const Field07: string;
                export const Field07Label: string;
                export const Field07Status: string;
                export const Field07Type: string;
                export const Field08: string;
                export const Field08Label: string;
                export const Field08Status: string;
                export const Field08Type: string;
                export const Field09: string;
                export const Field09Label: string;
                export const Field09Status: string;
                export const Field09Type: string;
                export const Field10: string;
                export const Field10Label: string;
                export const Field10Status: string;
                export const Field10Type: string;
                export const FileName: string;
                export const FirstName: string;
                export const Gender: string;
                export const GoalData: string;
                export const Hours: string;
                export const InterventionData: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const LastName: string;
                export const MiddleName: string;
                export const Notes: string;
                export const NotesStatus: string;
                export const OriginalSubmittalDate: string;
                export const PrimaryInsuranceName: string;
                export const PrimaryInsuranceNumber: string;
                export const PrimaryInsurancePayerId: string;
                export const PrimaryInsuranceTypeId: string;
                export const ProgramName: string;
                export const ProgramNoteTemplateId: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Race: string;
                export const RecordNumber: string;
                export const SecondaryInsuranceName: string;
                export const SecondaryInsuranceNumber: string;
                export const SecondaryInsurancePayerId: string;
                export const SecondaryInsuranceTypeId: string;
                export const SignatureGuid: string;
                export const SignatureImage: string;
                export const SiteName: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
                export const WorkerFirstName: string;
                export const WorkerLastName: string;
                export const WorkerMiddleName: string;
                export const WorkerType: string;
            }

            namespace UsStateTypes {
                export const Id: string;
                export const State: string;
                export const StateCode: string;
            }

            namespace WorkerClientBillRates {
                export const AuthorizationId: string;
                export const BillRate: string;
                export const BillRateMetric: string;
                export const BillRatePercent: string;
                export const BillRateUnit: string;
                export const CalculatedBillRate: string;
                export const UserId: string;
            }
        }

        namespace ProgramNoteManager {

            namespace ProgramNotes {
                export const ActivityId: string;
                export const DateSigned: string;
                export const ESignaturePlainText: string;
                export const Field00: string;
                export const Field01: string;
                export const Field02: string;
                export const Field03: string;
                export const Field04: string;
                export const Field05: string;
                export const Field06: string;
                export const Field07: string;
                export const Field08: string;
                export const Field09: string;
                export const Field10: string;
                export const FileName: string;
                export const NoteUpdateStatus: string;
                export const ProgramNoteId: string;
                export const ProgramNoteTemplateId: string;
                export const SignatureGuid: string;
                export const SignatureImage: string;
                export const Status: string;
            }
        }

        namespace Reports {

            namespace Reports {
                export const ReportDescription: string;
                export const ReportFileName: string;
                export const ReportId: string;
                export const ReportName: string;
                export const ReportType: string;
                export const TenantId: string;
            }
        }

        namespace WorkerManager {

            namespace ContractorRates {
                export const BillCategory: string;
                export const BillCode: string;
                export const BillRate: string;
                export const BillRateMetric: string;
                export const UserContractorId: string;
                export const UserId: string;
            }

            namespace WorkerCaseAssignments {
                export const AssignedDate: string;
                export const AuthorizationEndDate: string;
                export const AuthorizationId: string;
                export const AuthorizationStartDate: string;
                export const AuthorizationStatus: string;
                export const AuthorizationUnitContactGranted: string;
                export const BillCode: string;
                export const CaseAssignmentId: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const IsTeamLead: string;
                export const Notes: string;
                export const ProgramCodeTypeId: string;
                export const ProgramTypeId: string;
                export const TenantId: string;
                export const UnassignedDate: string;
                export const UserId: string;
                export const WorkerDisplayName: string;
            }

            namespace WorkerCredentials {
                export const AlertStatus: string;
                export const CredentialName: string;
                export const CredentialTypeId: string;
                export const EffectiveDate: string;
                export const ExpirationDate: string;
                export const TenantId: string;
                export const UserCredentialId: string;
                export const UserId: string;
            }

            namespace WorkerDelinquencies {
                export const DelinquencyDate: string;
                export const DelinquencyNotes: string;
                export const ResolutionDate: string;
                export const ResolutionNotes: string;
                export const TenantId: string;
                export const UserDelinquencyId: string;
                export const UserId: string;
            }

            namespace WorkerForms {
                export const AlertStatus: string;
                export const DueDate: string;
                export const FormName: string;
                export const FormTypeId: string;
                export const TenantId: string;
                export const UserFormId: string;
                export const UserId: string;
            }

            namespace WorkerInvoices {
                export const DatePaid: string;
                export const DateSent: string;
                export const DueDate: string;
                export const InvoiceNumber: string;
                export const PaymentTerms: string;
                export const Status: string;
                export const TotalDue: string;
                export const TotalPaid: string;
                export const UserId: string;
                export const UserInvoiceId: string;
            }

            namespace WorkerSites {
                export const SiteTypeId: string;
                export const TenantId: string;
                export const UserId: string;
                export const UserSiteId: string;
            }

            namespace Workers {
                export const Address1: string;
                export const Address2: string;
                export const BillRateAdmin: string;
                export const BillRateClientLate: string;
                export const BillRateClientOnTime: string;
                export const BillRateMeeting: string;
                export const BillRateTraining: string;
                export const City: string;
                export const Classification: string;
                export const DriverLicenseExpiration: string;
                export const DriverLicenseNumber: string;
                export const DriverLicenseState: string;
                export const ESignatureBase64: string;
                export const ESignaturePlainText: string;
                export const Email: string;
                export const EmergencyContact: string;
                export const EmergencyContactPhone: string;
                export const EmployeeId: string;
                export const FirstName: string;
                export const HireDate: string;
                export const IsWorker: string;
                export const LastName: string;
                export const MiddleName: string;
                export const Notes: string;
                export const Npi: string;
                export const PrimaryPhone: string;
                export const SecondaryPhone: string;
                export const SignatureVerified: string;
                export const SocialSecurityNumber: string;
                export const State: string;
                export const Taxonomy: string;
                export const TenantId: string;
                export const Type: string;
                export const UserId: string;
                export const Username: string;
                export const WorkerFullName: string;
                export const Zipcode: string;
            }
        }

        namespace WorkerPortal {

            namespace Activities {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgramNoteFileName: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace ActivitiesLog {
                export const ActivitiesLogId: string;
                export const Activity: string;
                export const ActivityActivityDate: string;
                export const ActivityActivityFromTime: string;
                export const ActivityActivityToTime: string;
                export const ActivityBillCode: string;
                export const ActivityClientId: string;
                export const ActivityHours: string;
                export const ActivityId: string;
                export const ActivityInvoiceId: string;
                export const ActivityIsBillable: string;
                export const ActivityNotes: string;
                export const ActivityProgressNoteId: string;
                export const ActivityProgressNoteInOut: string;
                export const ActivityProgressNoteLocation: string;
                export const ActivityProgressNoteTemplateId: string;
                export const ActivityStatus: string;
                export const ActivityTenantId: string;
                export const ActivityUserId: string;
                export const Date: string;
                export const Notes: string;
                export const RejectionReason: string;
                export const UserAddress1: string;
                export const UserAddress2: string;
                export const UserBillRateAdmin: string;
                export const UserBillRateClientLate: string;
                export const UserBillRateClientOnTime: string;
                export const UserBillRateMeeting: string;
                export const UserBillRateTraining: string;
                export const UserCity: string;
                export const UserDisplayName: string;
                export const UserDriverLicenseExpiration: string;
                export const UserDriverLicenseNumber: string;
                export const UserDriverLicenseState: string;
                export const UserESignatureBase64: string;
                export const UserESignaturePlainText: string;
                export const UserEmail: string;
                export const UserEmergencyContact: string;
                export const UserEmergencyContactPhone: string;
                export const UserEmployeeId: string;
                export const UserFirstName: string;
                export const UserHireDate: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserIsWorker: string;
                export const UserLastDirectoryUpdate: string;
                export const UserLastName: string;
                export const UserMiddleName: string;
                export const UserNotes: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserPrimaryPhone: string;
                export const UserSecondaryPhone: string;
                export const UserSignatureVerified: string;
                export const UserSocialSecurityNumber: string;
                export const UserSource: string;
                export const UserState: string;
                export const UserTenantId: string;
                export const UserType: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
                export const UserZipcode: string;
            }

            namespace ClientAuthorizations {
                export const ApprovalDate: string;
                export const ApprovalStatus: string;
                export const AuthDateRange: string;
                export const AuthorizationId: string;
                export const AuthorizationType: string;
                export const ClientId: string;
                export const EndDate: string;
                export const StartDate: string;
                export const Status: string;
                export const TenantId: string;
                export const UnitCalculationMetric: string;
                export const UnitContactGranted: string;
            }

            namespace ClientDocuments {
                export const ClientId: string;
                export const DocumentId: string;
                export const FileName: string;
                export const FinalizedDate: string;
                export const IsFinalized: string;
                export const Title: string;
            }

            namespace ClientGoals {
                export const ClientGoalId: string;
                export const ClientId: string;
                export const CompletionDate: string;
                export const Description: string;
                export const Goal: string;
                export const Owner: string;
                export const OwnerCreateDate: string;
                export const Status: string;
                export const TenantId: string;
            }

            namespace Clients {
                export const Address1: string;
                export const Address2: string;
                export const AdmissionDate: string;
                export const BirthDate: string;
                export const CellPhone: string;
                export const City: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const ClientStatus: string;
                export const CountryOfBirth: string;
                export const County: string;
                export const DiagnosisDate: string;
                export const DiagnosisNotes: string;
                export const DischargeDate: string;
                export const EducationLevel: string;
                export const Email: string;
                export const EmploymentStatus: string;
                export const Ethnicity: string;
                export const FathersName: string;
                export const FirstName: string;
                export const Gender: string;
                export const GrossIncomeDollar: string;
                export const GrossIncomePer: string;
                export const GuardianName: string;
                export const IsVeteran: string;
                export const LastName: string;
                export const LicenseStateId: string;
                export const LivingArrangements: string;
                export const MaidenName: string;
                export const MaritalStatus: string;
                export const MiddleName: string;
                export const MothersName: string;
                export const NameOfSchool: string;
                export const NextOfKinName: string;
                export const NextOfKinPhone: string;
                export const Notes: string;
                export const NumberDepenentIncome: string;
                export const NumberInHouse: string;
                export const OriginalServiceDate: string;
                export const OtherName: string;
                export const Pcn: string;
                export const PlanExpirationDate: string;
                export const PrimaryInsuranceAddress1: string;
                export const PrimaryInsuranceCity: string;
                export const PrimaryInsuranceGroup: string;
                export const PrimaryInsuranceHolder: string;
                export const PrimaryInsuranceHolderDob: string;
                export const PrimaryInsuranceNumber: string;
                export const PrimaryInsuranceRelationship: string;
                export const PrimaryInsuranceState: string;
                export const PrimaryInsuranceTypeId: string;
                export const PrimaryInsuranceZipCode: string;
                export const PrimaryLanguage: string;
                export const PrimaryPhone: string;
                export const Race: string;
                export const RecordNumber: string;
                export const ReferralDate: string;
                export const ReferralSource: string;
                export const SecondaryInsuranceAddress1: string;
                export const SecondaryInsuranceCity: string;
                export const SecondaryInsuranceGroup: string;
                export const SecondaryInsuranceHolder: string;
                export const SecondaryInsuranceHolderDob: string;
                export const SecondaryInsuranceNumber: string;
                export const SecondaryInsuranceRelationship: string;
                export const SecondaryInsuranceState: string;
                export const SecondaryInsuranceTypeId: string;
                export const SecondaryInsuranceZipCode: string;
                export const SecondaryPhone: string;
                export const SiteName: string;
                export const SiteTypeId: string;
                export const SocialSecurityNum: string;
                export const State: string;
                export const SystemStatus: string;
                export const TenantId: string;
                export const UserId: string;
                export const Zipcode: string;
            }

            namespace Documents {
                export const DocumentId: string;
                export const FileType: string;
                export const Filename: string;
                export const IsFinalized: string;
                export const IsTemplate: string;
                export const MajorVersion: string;
                export const MinorVersion: string;
                export const OriginalUploadDate: string;
                export const RevisionVersion: string;
                export const Title: string;
                export const UserId: string;
            }

            namespace MyInvoices {
                export const DatePaid: string;
                export const DateSent: string;
                export const DueDate: string;
                export const FileName: string;
                export const InvoiceNumber: string;
                export const PaymentTerms: string;
                export const Status: string;
                export const TotalDue: string;
                export const TotalPaid: string;
                export const UserId: string;
                export const UserInvoiceId: string;
            }

            namespace VGlobalAgencyDashboardWorker {
                export const ActiveCases: string;
                export const AppointmentsScheduled: string;
                export const ApprovedProgressNotes: string;
                export const AuthorizationsExpiringNextMonth: string;
                export const AuthorizationsExpiringThisMonth: string;
                export const CredentialsExpiringThisMonth: string;
                export const DocumentsPendingReview: string;
                export const DocumentsPendingSignature: string;
                export const InActiveCases: string;
                export const InvoicesPaid: string;
                export const InvoicesSubmitted: string;
                export const RejectedProgressNotes: string;
                export const SavedProgressNotes: string;
                export const SubmittedProgressNotes: string;
                export const TotalBilled: string;
                export const TotalPaid: string;
                export const UserId: string;
            }

            namespace WorkerCaseAssignments {
                export const AssignedDate: string;
                export const AuthorizationEndDate: string;
                export const AuthorizationId: string;
                export const AuthorizationStartDate: string;
                export const AuthorizationStatus: string;
                export const AuthorizationUnitContactGranted: string;
                export const BillCode: string;
                export const CaseAssignmentId: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const IsTeamLead: string;
                export const Notes: string;
                export const ProgramCodeTypeId: string;
                export const ProgramTypeId: string;
                export const TenantId: string;
                export const UnassignedDate: string;
                export const UserId: string;
                export const WorkerDisplayName: string;
            }

            namespace WorkersPortal {
                export const ESignatureBase64: string;
                export const ESignaturePlainText: string;
                export const FirstName: string;
                export const IsWorker: string;
                export const LastName: string;
                export const MiddleName: string;
                export const SignatureVerified: string;
                export const TenantId: string;
                export const UserId: string;
            }
        }

        namespace Workflows {

            namespace Activities {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace ActivitiesArchive {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const BillCode: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace ActivitiesLog {
                export const ActivitiesLogId: string;
                export const Activity: string;
                export const ActivityActivityDate: string;
                export const ActivityActivityFromTime: string;
                export const ActivityActivityToTime: string;
                export const ActivityBillCode: string;
                export const ActivityClientId: string;
                export const ActivityHours: string;
                export const ActivityId: string;
                export const ActivityInvoiceId: string;
                export const ActivityIsBillable: string;
                export const ActivityNotes: string;
                export const ActivityProgressNoteId: string;
                export const ActivityProgressNoteInOut: string;
                export const ActivityProgressNoteLocation: string;
                export const ActivityProgressNoteTemplateId: string;
                export const ActivityStatus: string;
                export const ActivityTenantId: string;
                export const ActivityUserId: string;
                export const Date: string;
                export const Notes: string;
                export const RejectionReason: string;
                export const UserAddress1: string;
                export const UserAddress2: string;
                export const UserBillRateAdmin: string;
                export const UserBillRateClientLate: string;
                export const UserBillRateClientOnTime: string;
                export const UserBillRateMeeting: string;
                export const UserBillRateTraining: string;
                export const UserCity: string;
                export const UserDisplayName: string;
                export const UserDriverLicenseExpiration: string;
                export const UserDriverLicenseNumber: string;
                export const UserDriverLicenseState: string;
                export const UserESignatureBase64: string;
                export const UserESignaturePlainText: string;
                export const UserEmail: string;
                export const UserEmergencyContact: string;
                export const UserEmergencyContactPhone: string;
                export const UserEmployeeId: string;
                export const UserFirstName: string;
                export const UserHireDate: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserIsWorker: string;
                export const UserLastDirectoryUpdate: string;
                export const UserLastName: string;
                export const UserMiddleName: string;
                export const UserNotes: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserPrimaryPhone: string;
                export const UserSecondaryPhone: string;
                export const UserSignatureVerified: string;
                export const UserSocialSecurityNumber: string;
                export const UserSource: string;
                export const UserState: string;
                export const UserTenantId: string;
                export const UserType: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
                export const UserZipcode: string;
            }

            namespace BillingActivities {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const BillCode: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace BillingLog {
                export const Activity: string;
                export const ActivityActivityDate: string;
                export const ActivityActivityFromTime: string;
                export const ActivityActivityToTime: string;
                export const ActivityAlertSent: string;
                export const ActivityBillCode: string;
                export const ActivityBillableAmount: string;
                export const ActivityClientId: string;
                export const ActivityHours: string;
                export const ActivityId: string;
                export const ActivityInvoiceId: string;
                export const ActivityIsBillable: string;
                export const ActivityNotes: string;
                export const ActivityProgressNoteId: string;
                export const ActivityProgressNoteInOut: string;
                export const ActivityProgressNoteLocation: string;
                export const ActivityProgressNoteTemplateId: string;
                export const ActivityStatus: string;
                export const ActivityTenantId: string;
                export const ActivityUserId: string;
                export const BillingId: string;
                export const BillingResponse: string;
                export const BillingResponseDate: string;
                export const BillingResponseNotes: string;
            }

            namespace DocumentWorkflow {
                export const Description: string;
                export const DocumentWorkflowId: string;
                export const DocumentWorkflowStepsList: string;
                export const FileName: string;
                export const Name: string;
                export const Status: string;
                export const WorkflowId: string;
            }

            namespace DocumentWorkflowSteps {
                export const DateCompleted: string;
                export const DocumentStepId: string;
                export const DueDate: string;
                export const PerformerName: string;
                export const StepActionType: string;
                export const StepOrder: string;
                export const StepPerformerPatientFullName: string;
                export const StepPerformerPatientId: string;
                export const StepPerformerStaffFullName: string;
                export const StepPerformerStaffId: string;
                export const StepPerformerType: string;
                export const WorkflowId: string;
            }

            namespace Invoices {
                export const DatePaid: string;
                export const DateSent: string;
                export const DueDate: string;
                export const FileName: string;
                export const InvoiceNumber: string;
                export const PaymentTerms: string;
                export const Status: string;
                export const TotalDue: string;
                export const TotalPaid: string;
                export const UserId: string;
                export const UserInvoiceId: string;
            }

            namespace WorkerActivities {
                export const Activity: string;
                export const ActivityDate: string;
                export const ActivityFromTime: string;
                export const ActivityId: string;
                export const ActivityToTime: string;
                export const AuthorizationId: string;
                export const BillCode: string;
                export const BillableAmount: string;
                export const ClientFullName: string;
                export const ClientId: string;
                export const Hours: string;
                export const InvoiceId: string;
                export const IsBillable: string;
                export const Notes: string;
                export const ProgressNoteId: string;
                export const ProgressNoteInOut: string;
                export const ProgressNoteLocation: string;
                export const ProgressNoteTemplateId: string;
                export const Status: string;
                export const TenantId: string;
                export const UserId: string;
            }

            namespace WorkerActivitiesLog {
                export const ActivitiesLogId: string;
                export const Activity: string;
                export const ActivityActivityDate: string;
                export const ActivityActivityFromTime: string;
                export const ActivityActivityToTime: string;
                export const ActivityBillCode: string;
                export const ActivityClientId: string;
                export const ActivityHours: string;
                export const ActivityId: string;
                export const ActivityInvoiceId: string;
                export const ActivityIsBillable: string;
                export const ActivityNotes: string;
                export const ActivityProgressNoteId: string;
                export const ActivityProgressNoteInOut: string;
                export const ActivityProgressNoteLocation: string;
                export const ActivityProgressNoteTemplateId: string;
                export const ActivityStatus: string;
                export const ActivityTenantId: string;
                export const ActivityUserId: string;
                export const Date: string;
                export const Notes: string;
                export const RejectionReason: string;
                export const UserAddress1: string;
                export const UserAddress2: string;
                export const UserBillRateAdmin: string;
                export const UserBillRateClientLate: string;
                export const UserBillRateClientOnTime: string;
                export const UserBillRateMeeting: string;
                export const UserBillRateTraining: string;
                export const UserCity: string;
                export const UserDisplayName: string;
                export const UserDriverLicenseExpiration: string;
                export const UserDriverLicenseNumber: string;
                export const UserDriverLicenseState: string;
                export const UserESignatureBase64: string;
                export const UserESignaturePlainText: string;
                export const UserEmail: string;
                export const UserEmergencyContact: string;
                export const UserEmergencyContactPhone: string;
                export const UserEmployeeId: string;
                export const UserFirstName: string;
                export const UserHireDate: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserIsWorker: string;
                export const UserLastDirectoryUpdate: string;
                export const UserLastName: string;
                export const UserMiddleName: string;
                export const UserNotes: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserPrimaryPhone: string;
                export const UserSecondaryPhone: string;
                export const UserSignatureVerified: string;
                export const UserSocialSecurityNumber: string;
                export const UserSource: string;
                export const UserState: string;
                export const UserTenantId: string;
                export const UserType: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
                export const UserZipcode: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const GoogleButton: string;
                export const LoginToYourAccount: string;
                export const LoginVersion: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Dialogs {
            export const PendingChangesConfirmation: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeAzure: string;
            export const ThemeAzureLight: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeCosmos: string;
            export const ThemeCosmosLight: string;
            export const ThemeGlassy: string;
            export const ThemeGlassyLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    GeniusOneAi['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Billing:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,BillCode:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},InsuranceTypes:{Address1:1,Address2:1,City:1,County:1,Description:1,InsuranceTypeId:1,Name:1,PayerId:1,PrimaryPhone:1,State:1,Status:1,Type:1,Zipcode:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{Address1:1,Address2:1,BillRateAdmin:1,BillRateClientLate:1,BillRateClientOnTime:1,BillRateMeeting:1,BillRateTraining:1,City:1,Classification:1,DisplayName:1,DriverLicenseExpiration:1,DriverLicenseNumber:1,DriverLicenseState:1,ESignatureBase64:1,ESignaturePlainText:1,Email:1,EmergencyContact:1,EmergencyContactPhone:1,EmployeeId:1,FirstName:1,HireDate:1,ImpersonationToken:1,InsertDate:1,InsertUserId:1,IsActive:1,IsWorker:1,LastDirectoryUpdate:1,LastName:1,MiddleName:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Notes:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,PrimaryPhone:1,RecAlerts:1,SecondaryPhone:1,SignatureVerified:1,SocialSecurityNumber:1,Source:1,State:1,TenantId:1,TwoFactorAuth:1,Type:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1,Zipcode:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},AgencyAdministration:{ClientGoalInterventionsLibrary:{ClientGoalId:1,ClientGoalInterventionId:1,InterDesc:1,TenantId:1},ClientGoalsLibrary:{ClientGoalId:1,ClientInterventionsLibraryList:1,Description:1,GoalType:1,TenantId:1},ClientSiteTypes:{ClientId:1,ClientSiteTypeId:1,SiteTypeId:1,TenantId:1},CredentialTypes:{CredentialTypeId:1,Description:1,Name:1,TenantId:1},FormTypes:{Description:1,FormTypeId:1,Name:1},ProgramCodeTypes:{BillCode:1,BillCodeWithMods:1,BillRate:1,BillRateUnit:1,Description:1,FundingSource:1,InsuranceId:1,Mod1:1,Mod2:1,Mod3:1,Mod4:1,ProgramCodeTypeId:1,ProgramName:1,ProgramTypeId:1,RateEffective:1,RateEnd:1,SpecialtyName:1,TenantId:1},ProgramNoteTemplates:{Field01Label:1,Field01Status:1,Field01Type:1,Field02Label:1,Field02Status:1,Field02Type:1,Field03Label:1,Field03Status:1,Field03Type:1,Field04Label:1,Field04Status:1,Field04Type:1,Field05Label:1,Field05Status:1,Field05Type:1,Field06Label:1,Field06Status:1,Field06Type:1,Field07Label:1,Field07Status:1,Field07Type:1,Field08Label:1,Field08Status:1,Field08Type:1,Field09Label:1,Field09Status:1,Field09Type:1,Field10Label:1,Field10Status:1,Field10Type:1,Name:1,ProgramNoteTemplateId:1,Status:1},ProgramNoteType:{IsEnabled:1,ProgramNoteTypeId:1,ProgramNoteTypeName:1,ProgramNoteTypeOrder:1,TenantId:1},ProgramTypes:{BackupApproverId:1,DefaultApproverId:1,Description:1,EscalationMetric:1,Name:1,ProgramNoteTemplateId:1,ProgramNoteTemplateName:1,ProgramTypeId:1,Status:1,TenantId:1},SitesTypes:{Address1:1,Address2:1,City:1,Description:1,Name:1,Npi:1,PrimaryPhone:1,SiteTypeId:1,State:1,Status:1,TaxId:1,Taxonomy:1,TenantId:1,Zipcode:1},TemplateCodeList:{QuestionId:1,TemplateCodeListId:1,TemplateId:1,ValueText:1},WorkerTypes:{Description:1,Name:1,TenantId:1,UserTypeId:1}},Archive:{ActivitiesArchive:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,AuthorizationId:1,BillCode:1,BillableAmount:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgramNoteFileName:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},ProgressNotesArchive:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,AuthorizationId:1,BillCode:1,BillableAmount:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,PrimaryInsuranceType:1,ProgramNoteField00:1,ProgramNoteFileName:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1,WorkerFullName:1}},ClientManager:{ClientAuthorizations:{ApprovalDate:1,ApprovalStatus:1,AuthDateRange:1,AuthorizationId:1,AuthorizationType:1,BillCode:1,ClientId:1,EndDate:1,ProgramCodeTypeId:1,ProgramTypeId:1,StartDate:1,Status:1,TenantId:1,UnitCalculationMetric:1,UnitContactGranted:1},ClientDocuments:{ClientId:1,DocumentId:1,FileName:1,FinalizedDate:1,IsFinalized:1,Title:1},ClientGoalInterventions:{ClientGoalClientId:1,ClientGoalCompletionDate:1,ClientGoalDescription:1,ClientGoalGoal:1,ClientGoalGoalType:1,ClientGoalId:1,ClientGoalInterventionId:1,ClientGoalIsActive:1,ClientGoalStatus:1,ClientGoalTenantId:1,InterDesc:1,InterNumber:1,IsActiveFriday:1,IsActiveMonday:1,IsActiveSaturday:1,IsActiveSunday:1,IsActiveThursday:1,IsActiveTuesday:1,IsActiveWednesday:1,TenantId:1},ClientGoals:{ClientGoalId:1,ClientId:1,ClientInterventionsList:1,CompletionDate:1,Description:1,Goal:1,GoalType:1,IsActiveFriday:1,IsActiveMonday:1,IsActiveSaturday:1,IsActiveSunday:1,IsActiveThursday:1,IsActiveTuesday:1,IsActiveWednesday:1,Owner:1,OwnerCreateDate:1,Status:1,TenantId:1,WorkerFullName:1},ClientGoalsLibrarySelector:{ClientGoalId:1,Description:1,GoalType:1,TenantId:1},Clients:{Address1:1,Address2:1,AdmissionDate:1,Allergies:1,AllergiesMoreInfo:1,BirthDate:1,CellPhone:1,City:1,ClientFullName:1,ClientId:1,ClientStatus:1,CountryOfBirth:1,County:1,DiagnosisDate:1,DiagnosisNotes:1,DischargeDate:1,EducationLevel:1,Email:1,EmergencyPerson:1,EmergencyPhone:1,EmploymentStatus:1,Ethnicity:1,FathersName:1,FirstName:1,Gender:1,GrossIncomeDollar:1,GrossIncomePer:1,GuardianName:1,IsVeteran:1,LastName:1,LicenseStateId:1,LivingArrangements:1,MaidenName:1,MaritalStatus:1,MiddleName:1,MothersName:1,NameOfSchool:1,NextOfKinName:1,NextOfKinPhone:1,Notes:1,NumberDepenentIncome:1,NumberInHouse:1,OriginalServiceDate:1,OtherName:1,Pcn:1,PharmacyPhone:1,PharmacyUsed:1,PlanExpirationDate:1,PreferredPhysician:1,PreferredPhysicianAddress:1,PreferredPhysicianCounty:1,PreferredPhysicianPhone:1,PrimaryInsuranceAddress1:1,PrimaryInsuranceCity:1,PrimaryInsuranceGroup:1,PrimaryInsuranceHolder:1,PrimaryInsuranceHolderDob:1,PrimaryInsuranceNumber:1,PrimaryInsuranceRelationship:1,PrimaryInsuranceState:1,PrimaryInsuranceTypeId:1,PrimaryInsuranceZipCode:1,PrimaryLanguage:1,PrimaryPhone:1,Race:1,RecordNumber:1,ReferralDate:1,ReferralSource:1,SecondaryInsuranceAddress1:1,SecondaryInsuranceCity:1,SecondaryInsuranceGroup:1,SecondaryInsuranceHolder:1,SecondaryInsuranceHolderDob:1,SecondaryInsuranceNumber:1,SecondaryInsuranceRelationship:1,SecondaryInsuranceState:1,SecondaryInsuranceTypeId:1,SecondaryInsuranceZipCode:1,SecondaryPhone:1,SiteTypeId:1,SocialSecurityNum:1,State:1,SystemStatus:1,TenantId:1,Zipcode:1},WorkerCaseAssignments:{AssignedDate:1,AuthorizationEndDate:1,AuthorizationId:1,AuthorizationStartDate:1,AuthorizationStatus:1,AuthorizationUnitContactGranted:1,BillCode:1,CaseAssignmentId:1,ClientFullName:1,ClientId:1,IsTeamLead:1,Notes:1,ProgramCodeTypeId:1,ProgramTypeId:1,TenantId:1,UnassignedDate:1,UserId:1,WorkerDisplayName:1}},Dashboards:{GlobalAgencyDashboard:{ActiveCases:1,AppointmentsScheduled:1,ApprovedProgressNotes:1,AuthorizationsExpiringNextMonth:1,AuthorizationsExpiringThisMonth:1,CredentialsExpiringThisMonth:1,DocumentsPendingReview:1,DocumentsPendingSignature:1,InActiveCases:1,InvoicesPaid:1,InvoicesSubmitted:1,RejectedProgressNotes:1,SavedProgressNotes:1,SubmittedProgressNotes:1,TenantId:1,TotalBilled:1,TotalPaid:1}},DocumentManager:{DocumentSelector:{DocumentId:1,FileType:1,Filename:1,IsFinalized:1,IsTemplate:1,MajorVersion:1,MinorVersion:1,OriginalUploadDate:1,RevisionVersion:1,Title:1,UserId:1},DocumentWorkflowStepsTemplates:{DocumentStepId:1,StepActionType:1,StepOrder:1,StepPerformerType:1,WorkflowTemplateId:1},DocumentWorkflowTemplates:{Description:1,DocumentId:1,DocumentWorkflowStepsList:1,Name:1,WorkflowTemplateId:1},Documents:{DocumentId:1,FileName:1,FileType:1,IsFinalized:1,IsTemplate:1,MajorVersion:1,MinorVersion:1,OriginalUploadDate:1,RevisionVersion:1,Title:1,UserId:1}},MiscEntities:{ApprovedBilling:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,AlertSent:1,AuthorizationId:1,BillCode:1,BillableAmount:1,BirthDate:1,ClientId:1,FirstName:1,Gender:1,Hours:1,InvoiceId:1,IsBillable:1,LastName:1,MiddleName:1,Notes:1,OtherName:1,PrimaryInsuranceAddress1:1,PrimaryInsuranceCity:1,PrimaryInsuranceGroup:1,PrimaryInsuranceHolder:1,PrimaryInsuranceHolderDob:1,PrimaryInsuranceName:1,PrimaryInsuranceNumber:1,PrimaryInsuranceRelationship:1,PrimaryInsuranceState:1,PrimaryInsuranceTypeId:1,PrimaryInsuranceZipCode:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Race:1,RecordNumber:1,SecondaryInsuranceAddress1:1,SecondaryInsuranceCity:1,SecondaryInsuranceGroup:1,SecondaryInsuranceHolder:1,SecondaryInsuranceHolderDob:1,SecondaryInsuranceName:1,SecondaryInsuranceNumber:1,SecondaryInsuranceRelationship:1,SecondaryInsuranceState:1,SecondaryInsuranceTypeId:1,SecondaryInsuranceZipCode:1,SocialSecurityNum:1,Status:1,TenantId:1,UserId:1},ClientAssignments:{AuthorizationId:1,BillCode:1,ClientFullName:1,ClientId:1,EndDate:1,ProgramName:1,StartDate:1,UserId:1},Events:{Description:1,End:1,EventId:1,IsFullDay:1,Start:1,Subject:1,ThemeColor:1,UserId:1},PatientDetails:{PatientBirthDate:1,PatientFirstName:1,PatientFullName:1,PatientId:1,PatientLastName:1,PatientMedicalRecordNumber:1,PatientMiddleName:1,PatientPrimaryInsuranceNumber:1},SitesTypes:{Address1:1,Address2:1,City:1,Description:1,Name:1,Npi:1,PrimaryPhone:1,SiteTypeId:1,State:1,Status:1,TaxId:1,Taxonomy:1,TenantId:1,Zipcode:1},TimesheetNoteData:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,ApprovedBy:1,AuthorizationId:1,BillCode:1,BillableAmount:1,BillingModifier1:1,BillingModifier2:1,BillingModifier3:1,BillingModifier4:1,BirthDate:1,ClientId:1,DateApproved:1,DateSigned:1,ESignaturePlainText:1,Field00:1,Field01:1,Field01Label:1,Field01Status:1,Field01Type:1,Field02:1,Field02Label:1,Field02Status:1,Field02Type:1,Field03:1,Field03Label:1,Field03Status:1,Field03Type:1,Field04:1,Field04Label:1,Field04Status:1,Field04Type:1,Field05:1,Field05Label:1,Field05Status:1,Field05Type:1,Field06:1,Field06Label:1,Field06Status:1,Field06Type:1,Field07:1,Field07Label:1,Field07Status:1,Field07Type:1,Field08:1,Field08Label:1,Field08Status:1,Field08Type:1,Field09:1,Field09Label:1,Field09Status:1,Field09Type:1,Field10:1,Field10Label:1,Field10Status:1,Field10Type:1,FileName:1,FirstName:1,Gender:1,GoalData:1,Hours:1,InterventionData:1,InvoiceId:1,IsBillable:1,LastName:1,MiddleName:1,Notes:1,NotesStatus:1,OriginalSubmittalDate:1,PrimaryInsuranceName:1,PrimaryInsuranceNumber:1,PrimaryInsurancePayerId:1,PrimaryInsuranceTypeId:1,ProgramName:1,ProgramNoteTemplateId:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Race:1,RecordNumber:1,SecondaryInsuranceName:1,SecondaryInsuranceNumber:1,SecondaryInsurancePayerId:1,SecondaryInsuranceTypeId:1,SignatureGuid:1,SignatureImage:1,SiteName:1,Status:1,TenantId:1,UserId:1,WorkerFirstName:1,WorkerLastName:1,WorkerMiddleName:1,WorkerType:1},UsStateTypes:{Id:1,State:1,StateCode:1},WorkerClientBillRates:{AuthorizationId:1,BillRate:1,BillRateMetric:1,BillRatePercent:1,BillRateUnit:1,CalculatedBillRate:1,UserId:1}},ProgramNoteManager:{ProgramNotes:{ActivityId:1,DateSigned:1,ESignaturePlainText:1,Field00:1,Field01:1,Field02:1,Field03:1,Field04:1,Field05:1,Field06:1,Field07:1,Field08:1,Field09:1,Field10:1,FileName:1,NoteUpdateStatus:1,ProgramNoteId:1,ProgramNoteTemplateId:1,SignatureGuid:1,SignatureImage:1,Status:1}},Reports:{Reports:{ReportDescription:1,ReportFileName:1,ReportId:1,ReportName:1,ReportType:1,TenantId:1}},WorkerManager:{ContractorRates:{BillCategory:1,BillCode:1,BillRate:1,BillRateMetric:1,UserContractorId:1,UserId:1},WorkerCaseAssignments:{AssignedDate:1,AuthorizationEndDate:1,AuthorizationId:1,AuthorizationStartDate:1,AuthorizationStatus:1,AuthorizationUnitContactGranted:1,BillCode:1,CaseAssignmentId:1,ClientFullName:1,ClientId:1,IsTeamLead:1,Notes:1,ProgramCodeTypeId:1,ProgramTypeId:1,TenantId:1,UnassignedDate:1,UserId:1,WorkerDisplayName:1},WorkerCredentials:{AlertStatus:1,CredentialName:1,CredentialTypeId:1,EffectiveDate:1,ExpirationDate:1,TenantId:1,UserCredentialId:1,UserId:1},WorkerDelinquencies:{DelinquencyDate:1,DelinquencyNotes:1,ResolutionDate:1,ResolutionNotes:1,TenantId:1,UserDelinquencyId:1,UserId:1},WorkerForms:{AlertStatus:1,DueDate:1,FormName:1,FormTypeId:1,TenantId:1,UserFormId:1,UserId:1},WorkerInvoices:{DatePaid:1,DateSent:1,DueDate:1,InvoiceNumber:1,PaymentTerms:1,Status:1,TotalDue:1,TotalPaid:1,UserId:1,UserInvoiceId:1},WorkerSites:{SiteTypeId:1,TenantId:1,UserId:1,UserSiteId:1},Workers:{Address1:1,Address2:1,BillRateAdmin:1,BillRateClientLate:1,BillRateClientOnTime:1,BillRateMeeting:1,BillRateTraining:1,City:1,Classification:1,DriverLicenseExpiration:1,DriverLicenseNumber:1,DriverLicenseState:1,ESignatureBase64:1,ESignaturePlainText:1,Email:1,EmergencyContact:1,EmergencyContactPhone:1,EmployeeId:1,FirstName:1,HireDate:1,IsWorker:1,LastName:1,MiddleName:1,Notes:1,Npi:1,PrimaryPhone:1,SecondaryPhone:1,SignatureVerified:1,SocialSecurityNumber:1,State:1,Taxonomy:1,TenantId:1,Type:1,UserId:1,Username:1,WorkerFullName:1,Zipcode:1}},WorkerPortal:{Activities:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,AuthorizationId:1,BillCode:1,BillableAmount:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgramNoteFileName:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},ActivitiesLog:{ActivitiesLogId:1,Activity:1,ActivityActivityDate:1,ActivityActivityFromTime:1,ActivityActivityToTime:1,ActivityBillCode:1,ActivityClientId:1,ActivityHours:1,ActivityId:1,ActivityInvoiceId:1,ActivityIsBillable:1,ActivityNotes:1,ActivityProgressNoteId:1,ActivityProgressNoteInOut:1,ActivityProgressNoteLocation:1,ActivityProgressNoteTemplateId:1,ActivityStatus:1,ActivityTenantId:1,ActivityUserId:1,Date:1,Notes:1,RejectionReason:1,UserAddress1:1,UserAddress2:1,UserBillRateAdmin:1,UserBillRateClientLate:1,UserBillRateClientOnTime:1,UserBillRateMeeting:1,UserBillRateTraining:1,UserCity:1,UserDisplayName:1,UserDriverLicenseExpiration:1,UserDriverLicenseNumber:1,UserDriverLicenseState:1,UserESignatureBase64:1,UserESignaturePlainText:1,UserEmail:1,UserEmergencyContact:1,UserEmergencyContactPhone:1,UserEmployeeId:1,UserFirstName:1,UserHireDate:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserIsWorker:1,UserLastDirectoryUpdate:1,UserLastName:1,UserMiddleName:1,UserNotes:1,UserPasswordHash:1,UserPasswordSalt:1,UserPrimaryPhone:1,UserSecondaryPhone:1,UserSignatureVerified:1,UserSocialSecurityNumber:1,UserSource:1,UserState:1,UserTenantId:1,UserType:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1,UserZipcode:1},ClientAuthorizations:{ApprovalDate:1,ApprovalStatus:1,AuthDateRange:1,AuthorizationId:1,AuthorizationType:1,ClientId:1,EndDate:1,StartDate:1,Status:1,TenantId:1,UnitCalculationMetric:1,UnitContactGranted:1},ClientDocuments:{ClientId:1,DocumentId:1,FileName:1,FinalizedDate:1,IsFinalized:1,Title:1},ClientGoals:{ClientGoalId:1,ClientId:1,CompletionDate:1,Description:1,Goal:1,Owner:1,OwnerCreateDate:1,Status:1,TenantId:1},Clients:{Address1:1,Address2:1,AdmissionDate:1,BirthDate:1,CellPhone:1,City:1,ClientFullName:1,ClientId:1,ClientStatus:1,CountryOfBirth:1,County:1,DiagnosisDate:1,DiagnosisNotes:1,DischargeDate:1,EducationLevel:1,Email:1,EmploymentStatus:1,Ethnicity:1,FathersName:1,FirstName:1,Gender:1,GrossIncomeDollar:1,GrossIncomePer:1,GuardianName:1,IsVeteran:1,LastName:1,LicenseStateId:1,LivingArrangements:1,MaidenName:1,MaritalStatus:1,MiddleName:1,MothersName:1,NameOfSchool:1,NextOfKinName:1,NextOfKinPhone:1,Notes:1,NumberDepenentIncome:1,NumberInHouse:1,OriginalServiceDate:1,OtherName:1,Pcn:1,PlanExpirationDate:1,PrimaryInsuranceAddress1:1,PrimaryInsuranceCity:1,PrimaryInsuranceGroup:1,PrimaryInsuranceHolder:1,PrimaryInsuranceHolderDob:1,PrimaryInsuranceNumber:1,PrimaryInsuranceRelationship:1,PrimaryInsuranceState:1,PrimaryInsuranceTypeId:1,PrimaryInsuranceZipCode:1,PrimaryLanguage:1,PrimaryPhone:1,Race:1,RecordNumber:1,ReferralDate:1,ReferralSource:1,SecondaryInsuranceAddress1:1,SecondaryInsuranceCity:1,SecondaryInsuranceGroup:1,SecondaryInsuranceHolder:1,SecondaryInsuranceHolderDob:1,SecondaryInsuranceNumber:1,SecondaryInsuranceRelationship:1,SecondaryInsuranceState:1,SecondaryInsuranceTypeId:1,SecondaryInsuranceZipCode:1,SecondaryPhone:1,SiteName:1,SiteTypeId:1,SocialSecurityNum:1,State:1,SystemStatus:1,TenantId:1,UserId:1,Zipcode:1},Documents:{DocumentId:1,FileType:1,Filename:1,IsFinalized:1,IsTemplate:1,MajorVersion:1,MinorVersion:1,OriginalUploadDate:1,RevisionVersion:1,Title:1,UserId:1},MyInvoices:{DatePaid:1,DateSent:1,DueDate:1,FileName:1,InvoiceNumber:1,PaymentTerms:1,Status:1,TotalDue:1,TotalPaid:1,UserId:1,UserInvoiceId:1},VGlobalAgencyDashboardWorker:{ActiveCases:1,AppointmentsScheduled:1,ApprovedProgressNotes:1,AuthorizationsExpiringNextMonth:1,AuthorizationsExpiringThisMonth:1,CredentialsExpiringThisMonth:1,DocumentsPendingReview:1,DocumentsPendingSignature:1,InActiveCases:1,InvoicesPaid:1,InvoicesSubmitted:1,RejectedProgressNotes:1,SavedProgressNotes:1,SubmittedProgressNotes:1,TotalBilled:1,TotalPaid:1,UserId:1},WorkerCaseAssignments:{AssignedDate:1,AuthorizationEndDate:1,AuthorizationId:1,AuthorizationStartDate:1,AuthorizationStatus:1,AuthorizationUnitContactGranted:1,BillCode:1,CaseAssignmentId:1,ClientFullName:1,ClientId:1,IsTeamLead:1,Notes:1,ProgramCodeTypeId:1,ProgramTypeId:1,TenantId:1,UnassignedDate:1,UserId:1,WorkerDisplayName:1},WorkersPortal:{ESignatureBase64:1,ESignaturePlainText:1,FirstName:1,IsWorker:1,LastName:1,MiddleName:1,SignatureVerified:1,TenantId:1,UserId:1}},Workflows:{Activities:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,AuthorizationId:1,BillCode:1,BillableAmount:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},ActivitiesArchive:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,BillCode:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},ActivitiesLog:{ActivitiesLogId:1,Activity:1,ActivityActivityDate:1,ActivityActivityFromTime:1,ActivityActivityToTime:1,ActivityBillCode:1,ActivityClientId:1,ActivityHours:1,ActivityId:1,ActivityInvoiceId:1,ActivityIsBillable:1,ActivityNotes:1,ActivityProgressNoteId:1,ActivityProgressNoteInOut:1,ActivityProgressNoteLocation:1,ActivityProgressNoteTemplateId:1,ActivityStatus:1,ActivityTenantId:1,ActivityUserId:1,Date:1,Notes:1,RejectionReason:1,UserAddress1:1,UserAddress2:1,UserBillRateAdmin:1,UserBillRateClientLate:1,UserBillRateClientOnTime:1,UserBillRateMeeting:1,UserBillRateTraining:1,UserCity:1,UserDisplayName:1,UserDriverLicenseExpiration:1,UserDriverLicenseNumber:1,UserDriverLicenseState:1,UserESignatureBase64:1,UserESignaturePlainText:1,UserEmail:1,UserEmergencyContact:1,UserEmergencyContactPhone:1,UserEmployeeId:1,UserFirstName:1,UserHireDate:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserIsWorker:1,UserLastDirectoryUpdate:1,UserLastName:1,UserMiddleName:1,UserNotes:1,UserPasswordHash:1,UserPasswordSalt:1,UserPrimaryPhone:1,UserSecondaryPhone:1,UserSignatureVerified:1,UserSocialSecurityNumber:1,UserSource:1,UserState:1,UserTenantId:1,UserType:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1,UserZipcode:1},BillingActivities:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,BillCode:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},BillingLog:{Activity:1,ActivityActivityDate:1,ActivityActivityFromTime:1,ActivityActivityToTime:1,ActivityAlertSent:1,ActivityBillCode:1,ActivityBillableAmount:1,ActivityClientId:1,ActivityHours:1,ActivityId:1,ActivityInvoiceId:1,ActivityIsBillable:1,ActivityNotes:1,ActivityProgressNoteId:1,ActivityProgressNoteInOut:1,ActivityProgressNoteLocation:1,ActivityProgressNoteTemplateId:1,ActivityStatus:1,ActivityTenantId:1,ActivityUserId:1,BillingId:1,BillingResponse:1,BillingResponseDate:1,BillingResponseNotes:1},DocumentWorkflow:{Description:1,DocumentWorkflowId:1,DocumentWorkflowStepsList:1,FileName:1,Name:1,Status:1,WorkflowId:1},DocumentWorkflowSteps:{DateCompleted:1,DocumentStepId:1,DueDate:1,PerformerName:1,StepActionType:1,StepOrder:1,StepPerformerPatientFullName:1,StepPerformerPatientId:1,StepPerformerStaffFullName:1,StepPerformerStaffId:1,StepPerformerType:1,WorkflowId:1},Invoices:{DatePaid:1,DateSent:1,DueDate:1,FileName:1,InvoiceNumber:1,PaymentTerms:1,Status:1,TotalDue:1,TotalPaid:1,UserId:1,UserInvoiceId:1},WorkerActivities:{Activity:1,ActivityDate:1,ActivityFromTime:1,ActivityId:1,ActivityToTime:1,AuthorizationId:1,BillCode:1,BillableAmount:1,ClientFullName:1,ClientId:1,Hours:1,InvoiceId:1,IsBillable:1,Notes:1,ProgressNoteId:1,ProgressNoteInOut:1,ProgressNoteLocation:1,ProgressNoteTemplateId:1,Status:1,TenantId:1,UserId:1},WorkerActivitiesLog:{ActivitiesLogId:1,Activity:1,ActivityActivityDate:1,ActivityActivityFromTime:1,ActivityActivityToTime:1,ActivityBillCode:1,ActivityClientId:1,ActivityHours:1,ActivityId:1,ActivityInvoiceId:1,ActivityIsBillable:1,ActivityNotes:1,ActivityProgressNoteId:1,ActivityProgressNoteInOut:1,ActivityProgressNoteLocation:1,ActivityProgressNoteTemplateId:1,ActivityStatus:1,ActivityTenantId:1,ActivityUserId:1,Date:1,Notes:1,RejectionReason:1,UserAddress1:1,UserAddress2:1,UserBillRateAdmin:1,UserBillRateClientLate:1,UserBillRateClientOnTime:1,UserBillRateMeeting:1,UserBillRateTraining:1,UserCity:1,UserDisplayName:1,UserDriverLicenseExpiration:1,UserDriverLicenseNumber:1,UserDriverLicenseState:1,UserESignatureBase64:1,UserESignaturePlainText:1,UserEmail:1,UserEmergencyContact:1,UserEmergencyContactPhone:1,UserEmployeeId:1,UserFirstName:1,UserHireDate:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserIsWorker:1,UserLastDirectoryUpdate:1,UserLastName:1,UserMiddleName:1,UserNotes:1,UserPasswordHash:1,UserPasswordSalt:1,UserPrimaryPhone:1,UserSecondaryPhone:1,UserSignatureVerified:1,UserSocialSecurityNumber:1,UserSource:1,UserState:1,UserTenantId:1,UserType:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1,UserZipcode:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,LoginVersion:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
