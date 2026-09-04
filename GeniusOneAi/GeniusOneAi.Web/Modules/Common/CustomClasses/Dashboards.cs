using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using GeniusOneAi.Administration;
using GeniusOneAi.Dashboards;
using GeniusOneAi.Web.Modules.MiscEntities;
using Serenity;
using Serenity.Data;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class Dashboards : GeniusOneBase
    {
        private static int tenantId = 0;
        public static GlobalDashboardDataModel GetGlobalDashboardData()
        {
            var data = new GlobalDashboardDataModel();

            using var connection = new SqlConnection(DbConn);
            {
                var fields = GlobalAgencyDashboardRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.TenantId == tenantId)).FirstOrDefault();
                if (row == null) return data;
                data.TenantId = 0;
                data.RejectedProgressNotes = row.RejectedProgressNotes ?? 0;
                data.SavedProgressNotes = row.SavedProgressNotes ?? 0;
                data.SubmittedProgressNotes = row.SubmittedProgressNotes ?? 0;
                data.ApprovedProgressNotes = row.ApprovedProgressNotes ?? 0;
                data.ActiveCases = row.ActiveCases ?? 0;
                data.InActiveCases = row.InActiveCases ?? 0;
                data.AuthorizationsExpiringThisMonth = row.AuthorizationsExpiringThisMonth ?? 0;
                data.AuthorizationsExpiringNextMonth = row.AuthorizationsExpiringNextMonth ?? 0;
                data.AppointmentsScheduled = row.AppointmentsScheduled ?? 0;
                data.DocumentsPendingSignature = row.DocumentsPendingSignature ?? 0;
                data.DocumentsPendingReview = row.DocumentsPendingReview ?? 0;
                data.CredentialsExpiringThisMonth = row.CredentialsExpiringThisMonth ?? 0;
                data.InvoicesSubmitted = row.InvoicesSubmitted ?? 0;
                data.InvoicesPaid = row.InvoicesPaid ?? 0;
                data.TotalBilled = row.TotalBilled ?? 0.00;
                data.TotalPaid = row.TotalPaid ?? 0.00;
            }

            return data;
        }
      
        public static GlobalDashboardDataModel GetWorkerDashboardData(int userId)
        {
            var data = new GlobalDashboardDataModel();

            using var connection = new SqlConnection(DbConn);
            {
           
                var fields = VGlobalAgencyDashboardWorkerRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.UserId == userId)).FirstOrDefault();
                if (row == null) return data;
                data.TenantId = 0;
                data.RejectedProgressNotes = row.RejectedProgressNotes ?? 0;
                data.SavedProgressNotes = row.SavedProgressNotes ?? 0;
                data.SubmittedProgressNotes = row.SubmittedProgressNotes ?? 0;
                data.ApprovedProgressNotes = row.ApprovedProgressNotes ?? 0;
                data.ActiveCases = row.ActiveCases ?? 0;
                data.InActiveCases = row.InActiveCases ?? 0;
                data.AuthorizationsExpiringThisMonth = row.AuthorizationsExpiringThisMonth ?? 0;
                data.AuthorizationsExpiringNextMonth = row.AuthorizationsExpiringNextMonth ?? 0;
                data.AppointmentsScheduled = row.AppointmentsScheduled ?? 0;
                data.DocumentsPendingSignature = row.DocumentsPendingSignature ?? 0;
                data.DocumentsPendingReview = row.DocumentsPendingReview ?? 0;
                data.CredentialsExpiringThisMonth = row.CredentialsExpiringThisMonth ?? 0;
                data.InvoicesSubmitted = row.InvoicesSubmitted ?? 0;
                data.InvoicesPaid = row.InvoicesPaid ?? 0;
                data.TotalBilled = row.TotalBilled ?? 0.00;
                data.TotalPaid = row.TotalPaid ?? 0.00;
            }

            return data;
        }
    }
    public class GlobalDashboardDataModel
    {
        public int TenantId { get; set; }
        //Notes

        public int? RejectedProgressNotes { get; set; }
        public int? SavedProgressNotes { get; set; }
        public int? SubmittedProgressNotes { get; set; }
        public int? ApprovedProgressNotes { get; set; }
        //Cases
        
        public int? ActiveCases { get; set; }
        public int? InActiveCases { get; set; }
        public int? AuthorizationsExpiringThisMonth { get; set; }
        public int? AuthorizationsExpiringNextMonth { get; set; }


        //Operational
        public int? AppointmentsScheduled { get; set; }
        public int? DocumentsPendingSignature { get; set; }
        public int? DocumentsPendingReview { get; set; }
        public int? CredentialsExpiringThisMonth { get; set; }
        //Financial
        public int? InvoicesSubmitted { get; set; }
        public int? InvoicesPaid { get; set; }
        public decimal? TotalBilled { get; set; }
        public decimal? TotalPaid { get; set; }


    }
    public class BillingDashboardDataModel
    {
        public int TenantId { get; set; }
        public int TotalBilled { get; set; }
        public int TotalSubmitted { get; set; }
        public int TotalNotesBilled { get; set; }
        public int TotalAccepted { get; set; }
        public int TotalRejected { get; set; }
        public int TotalPaid { get; set; }

    }
}