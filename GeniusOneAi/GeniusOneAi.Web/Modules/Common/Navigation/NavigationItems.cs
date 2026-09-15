using Newtonsoft.Json.Converters;
using Serenity.Navigation;
using aap = GeniusOneAi.AgencyAdministration.Pages;
using pat = GeniusOneAi.ClientManager.Pages;
using wmp = GeniusOneAi.WorkerManager.Pages;
using wpp = GeniusOneAi.WorkerPortal.Pages;
using sap = GeniusOneAi.Administration.Pages;
using das = GeniusOneAi.Dashboards.Pages;
using wcp = GeniusOneAi.WorkerPortal.Pages;
using doc = GeniusOneAi.DocumentManager.Pages;
using wap = GeniusOneAi.Workflows.Pages;
using ark = GeniusOneAi.Archives.Pages;
using rpt = GeniusOneAi.Reports.Pages;
using aia = GeniusOneAi.AiAdvisor.Pages;
using Administration = GeniusOneAi.Administration.Pages;


[assembly: NavigationGroup("Electronic Health Records", "fa-laptop-medical", Default = true)]
[assembly: NavigationLink(1, "Ai Advisor", typeof(aia.AiAdvisorController), icon: "fa-user")]
[assembly: NavigationLink(100, "Dashboard", typeof(das.GlobalAgencyDashboardController), icon: "fa-pie-chart")]
[assembly: NavigationMenu(300, "Worker Portal", icon: "fa-clipboard")]
//[assembly: NavigationLink(301, "Worker Portal/My Inbox", typeof(wpp.InboxController), icon: null)]
//[assembly: NavigationLink(303, "Worker Portal/My Calendar", typeof(wpp.CalendarController), icon: null)]
[assembly: NavigationLink(303, "Worker Portal/Tonight", typeof(wpp.TonightController), icon: null)]
[assembly: NavigationLink(304, "Worker Portal/My Dashboard", typeof(wpp.MyDashboardController), icon: null)]
[assembly: NavigationLink(305, "Worker Portal/My Activities", typeof(wpp.MyActivitiesController), icon: null)]
[assembly: NavigationLink(306, "Worker Portal/My Patients", typeof(wcp.ClientsController), icon: null)]
[assembly: NavigationLink(307, "Worker Portal/My Invoices (Contractors)", typeof(wpp.MyInvoicesController), icon: null)]
//[assembly: NavigationLink(308, "Worker Portal/Reports", typeof(wpp.DocumentRepositoryController), icon: null)]
[assembly: NavigationLink(309, "Worker Portal/Document Repository", typeof(wpp.DocumentRepositoryController), icon: null)]
[assembly: NavigationMenu(400, "Worker Manager", icon: "fa-users")]
[assembly: NavigationLink(401, "Worker Manager/Workers", typeof(wmp.WorkersController), icon: null)]
[assembly: NavigationMenu(500, "Patient Manager", icon: "fa-briefcase")]
[assembly: NavigationLink(501, "Patient Manager/Patients", typeof(pat.ClientsController), icon: null)]
[assembly: NavigationLink(502, "Patient Manager/Crisis Episodes", typeof(GeniusOneAi.CrisisEpisodes.Pages.CrisisEpisodesController), icon: null)]
[assembly: NavigationLink(503, "Patient Manager/Crisis Assessments", typeof(GeniusOneAi.CrisisAssessments.Pages.CrisisAssessmentsController), icon: null)]
[assembly: NavigationMenu(600, "Document Manager", icon: "fa-paperclip")]
//[assembly: NavigationLink(601, "Document Manager/Dashboard", typeof(doc.DocumentDashboardController), icon: null)]
[assembly: NavigationLink(601, "Document Manager/Content Library", typeof(doc.DocumentsController), icon: null)]
[assembly: NavigationLink(602, "Document Manager/Workflow Templates", typeof(doc.DocumentWorkflowTemplatesController), icon: null)]
[assembly: NavigationMenu(608, "Archives", icon: "fa-paperclip")]
[assembly: NavigationLink(609, "Archives/Progress Notes", typeof(ark.ProgressNotesArchiveController), icon: null)]
[assembly: NavigationLink(610, "Archives/Activites", typeof(ark.ActivitiesArchiveController), icon: null)]
[assembly: NavigationMenu(700, "Workflows", icon: "fa-exchange")]
[assembly: NavigationLink(701, "Workflows/Worker Reviews", typeof(wap.WorkerActivitiesController), icon: null)]
[assembly: NavigationLink(702, "Workflows/Activities", typeof(wap.ActivitiesController), icon: null)]
[assembly: NavigationLink(703, "Workflows/Billing", typeof(wap.BillingActivitiesController), icon: null)]
//[assembly: NavigationLink(704, "Workflows/Documents", typeof(wap.DocumentWorkflowController), icon: null)]
[assembly: NavigationLink(705, "Workflows/Contractor Invoices", typeof(wap.InvoicesController), icon: null)]
[assembly: NavigationMenu(800, "Reports", icon: "fa-file-excel-o")]
[assembly: NavigationLink(801, "Reports/Reports", typeof(rpt.ReportsController), icon: null)]
[assembly: NavigationMenu(2000, "Agency Administration", icon: "fa-lock")]
[assembly: NavigationLink(2001, "Agency Administration/User Management", typeof(sap.UserController), icon: null)]
[assembly: NavigationLink(2100, "Agency Administration/Program Note Templates", typeof(aap.ProgramNoteTemplatesController), icon: null)]
[assembly: NavigationLink(2101, "Agency Administration/Program Note Types", typeof(aap.ProgramNoteTypeController), icon: null)]
[assembly: NavigationLink(2102, "Agency Administration/Client Goal Library", typeof(aap.ClientGoalsLibraryController), icon: null)]
[assembly: NavigationLink(2103, "Agency Administration/Resource Directory", typeof(aap.ResourceDirectoryController), icon: null)]
[assembly: NavigationLink(2104, "Agency Administration/Crisis Needs", typeof(aap.CrisisNeedsController), icon: null)]
[assembly: NavigationMenu(2200, "Agency Administration/Agency Types", icon: null)]
[assembly: NavigationLink(2201, "Agency Administration/Agency Types/Credential Types", typeof(aap.CredentialTypesController), icon: null)]
[assembly: NavigationLink(2202, "Agency Administration/Agency Types/Form Types", typeof(aap.FormTypesController), icon: null)]
//[assembly: NavigationLink(2203, "Agency Administration/Agency Types/Insurance Types", typeof(aap.InsuranceTypesController), icon: null)]
[assembly: NavigationLink(2205, "Agency Administration/Agency Types/Program Types", typeof(aap.ProgramTypesController), icon: null)]
[assembly: NavigationLink(2206, "Agency Administration/Agency Types/Sites Types", typeof(aap.SitesTypesController), icon: null)]
[assembly: NavigationLink(2207, "Agency Administration/Agency Types/Worker Types", typeof(aap.WorkerTypesController), icon: null)]

[assembly: NavigationGroup("Global Helpdesk", "fa-life-ring")]
[assembly: NavigationMenu(9000, "Global Administration", icon: "fa-tools")]
[assembly: NavigationLink(9100, "Global Administration/Error Log", typeof(Administration.UserController), action: "ExceptionLog", icon: null, Target = "_blank")]
[assembly: NavigationLink(9200, "Global Administration/Insurance Management", typeof(Administration.InsuranceTypesController), icon: null)]
[assembly: NavigationLink(9300, "Global Administration/Program Code Types", typeof(Administration.ProgramCodeTypesController), icon: null)]
//[assembly: NavigationLink(9500, "Global Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
//[assembly: NavigationLink(9600, "Global Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9700, "Global Administration/Role Management", typeof(Administration.RoleController), icon: null)]
//[assembly: NavigationLink(9800, "Global Administration/Tenant Management", typeof(Administration.UserController), icon: null)]
//[assembly: NavigationLink(9800, "Global Administration/Billing Management", typeof(Administration.BillingController), icon: null)]

[assembly: NavigationMenu(10000, "User Toolbox", icon: "fa-wrench")]
[assembly: NavigationLink(10001, "User Toolbox/Change Password", url: "~/Account/ChangePassword", permission: "", icon: null)]
[assembly: NavigationLink(10002, "User Toolbox/Update eSignature", url: "~/User/eSignature", permission: "", icon: null)]
[assembly: NavigationLink(50000, "Logout", url: "~/Account/Signout", permission: "", icon: "fa-sign-out")]
