using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.Workflows
{
    [NestedPermissionKeys]
    [DisplayName("Workflows")]
    public class PermissionKeys
    {
        [Description("Worker Reviews")]
        public const string WorkerReviews= "Workflows:WorkerReviews";
        [Description("Activities")]
        public const string Activities = "Workflows:Activities";
        [Description("Billing")]
        public const string Billing = "Workflows:Billing";
        [Description("Contractor Invoices")]
        public const string ContractorInvoices = "Workflows:ContractorInvoices";
        [Description("Document Workflows")]
        public const string DocumentWorkflows = "Workflows:Documents";
    }
}
