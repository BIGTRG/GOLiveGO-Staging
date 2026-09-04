using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.WorkerPortal
{
    [NestedPermissionKeys]
    [DisplayName("Worker Portal")]
    public class PermissionKeys
    {
        [Description("My Dashboard")]
        public const string MyDashboard = "WorkerPortal:MyDashboard";
        [Description("My Activities")]
        public const string MyActivities = "WorkerPortal:MyActivities";
        [Description("My Patients")]
        public const string MyPatients = "WorkerPortal:MyPatients";
        [Description("My Invoices")]
        public const string MyInvoices = "WorkerPortal:MyInvoices";
        [Description("Document Repository")]
        public const string DocumentRepository = "WorkerPortal:DocumentRepository";
    }
}
