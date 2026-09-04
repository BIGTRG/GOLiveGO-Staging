using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using GeniusOneAi.Api;
using GeniusOneAi.MiscEntities;
using GeniusOneAi.WorkerManager.Entities;
using GeniusOneAi.Workflows.Entities;
using GeniusOneAi.ClientManager.Entities;
using Serenity.Data;
using System.IO;
using Serenity.Data.Mapping;
using System.Dynamic;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class BillingExtension : GeniusOneBase
    {
        public static InvoiceGeneratorPageModel GetBillableActivities(int workerId, string fileName)
        {
            var inv = new InvoiceGeneratorPageModel
            {
                InvoiceData = new List<InvoiceData>(),
                RecIds = new List<int>(),
            };

            using var connection = new SqlConnection(DbConn);

            var fields1 = WorkersRow.Fields;
            var workerRow = connection.Query(new SqlQuery().From(fields1).Select("*").Where(fields1.UserId == workerId)).FirstOrDefault();

            string wF = workerRow.FirstName;
            string wL = workerRow.LastName;

            inv.FirstName = workerRow.FirstName;
            inv.LastName = workerRow.LastName;
            inv.Address1 = workerRow.Address1;
            inv.Address2 = workerRow.Address2;
            inv.City = workerRow.City;
            //inv.State = GetState(int.Parse(Convert.ToString(workerRow.State)));
            inv.State = "NC";
            inv.Zipcode = workerRow.Zipcode;
            inv.Email = workerRow.Email;
            inv.PrimaryPhone = workerRow.PrimaryPhone;

            var fields2 = ActivitiesRow.Fields;
            var invoicesRow = connection.Query(new SqlQuery().From(fields2).Select("*").
                Where(fields2.UserId == workerId && (fields2.Status == "Paid" || fields2.Status == "Processed") && fields2.InvoiceId.IsNull()).Where(fields2.IsBillable == "true")
            );

            if (invoicesRow == null) return inv;

            var invoiceTotal = 0.00m;
            inv.InvoiceNumber = "GO-00" + GetInvoiceNumber();
            var lst = new List<int>();
            foreach (var item in invoicesRow)
            {
                var quantity = item.Hours;
                var unitCost = item.BillableAmount;
                var actDate = item.ActivityDate.ToString("MM/dd/yyyy");
                var total = quantity * unitCost;
                var clientName = string.Empty;
                if (item.Activity == "Patient" && item.ClientId != null) clientName = GetClientInfo(item.ClientId);
                inv.InvoiceData.Add(new InvoiceData
                {
                    ActivityType = item.Activity == "Patient" ? "<b>" + clientName + " " + "[" + item.BillCode + "]" + " [" + actDate + "]</b><br/><br/>" + item.Notes : "<b>" + item.Activity + " [" + actDate + "]</b><br/><br/>" + item.Notes,
                    ActivityQuantity = quantity.ToString("F"),
                    ActivityUnitCost = unitCost.ToString("F"),
                    ActivityTotal = total.ToString("F"),
                    ActivityInvoiceNumber = item.InvoiceNumber
                });
                inv.RecIds.Add(item.ActivityId);
                invoiceTotal += total;
                lst.Add(item.ActivityId);


            }
            inv.InvoiceTotal = invoiceTotal.ToString("F");
            if (lst.Count > 0)
            {
                var ids = string.Join<int>(",", lst);
                var paymentTerms = "Immediately";
                var insertQuery = $"INSERT INTO [dbo].[WorkerInvoices] VALUES ({workerId},'{inv.InvoiceNumber}',{inv.InvoiceTotal},'{DateTime.Now}','{paymentTerms}','{DateTime.Now}',null,null,'Open','{fileName}',0)";
                var invoiceId = connection.Execute(insertQuery);
                var updateQuery = $"UPDATE [dbo].[Activities] SET InvoiceId = '{invoiceId}' where UserId = {workerId} and ActivityId in ({ids});";
                connection.Execute(updateQuery);
            }
            return inv;
        }
        public static decimal GetBillableAmount(int workerId, string activity, int authorizationId)
        {
            using var connection = new SqlConnection(DbConn);

            var fields1 = WorkersRow.Fields;
            var fields2 = WorkerClientBillRatesRow.Fields;

            switch (activity)
            {
                case "Administrative":
                    {
                        var row = connection.Query(new SqlQuery().From(fields1).Select(fields1.BillRateAdmin).Where(fields1.UserId == workerId)).FirstOrDefault();
                        if (row != null) return row.BillRateAdmin ?? 0.00m;
                        break;
                    }
                case "Training":
                    {
                        var row = connection.Query(new SqlQuery().From(fields1).Select(fields1.BillRateTraining).Where(fields1.UserId == workerId)).FirstOrDefault();
                        if (row != null) return row.BillRateTraining ?? 0.00m;
                        break;
                    }
                case "Meetings":
                    {
                        var row = connection.Query(new SqlQuery().From(fields1).Select(fields1.BillRateMeeting).Where(fields1.UserId == workerId)).FirstOrDefault();
                        if (row != null) return row.BillRateMeeting ?? 0.00m;
                        break;
                    }
                case "Client":
                    {
                        var row = connection.Query(new SqlQuery().From(fields2).Select(fields2.CalculatedBillRate).Where(fields2.UserId == workerId && fields2.AuthorizationId == authorizationId)).FirstOrDefault();
                        if (row != null) return row.CalculatedBillRate ?? 0.00m;
                        break;
                    }
            }

            return 0.00m;
        }
        public static int GetInvoiceNumber()
        {
            var invoiceNumber = 0;
            using var connection = new SqlConnection(DbConn);
            var fields = WorkerInvoicesRow.Fields;
            invoiceNumber = connection.Query<int>(new SqlQuery().From(fields).Select("*")).Count();
            return invoiceNumber + 1;
        }
        public static int GetInvoiceId(string fileName)
        {
            
            using var connection = new SqlConnection(DbConn);
            var fields = InvoicesRow.Fields;
            var invoiceNumber = connection.Query(new SqlQuery().From(fields).Select(fields.UserInvoiceId).Where(fields.FileName == fileName)).FirstOrDefault();
            return invoiceNumber.UserInvoiceId;
        }
        public static List<int> GetWorkerInfo()
        {
            var workerInfo = new List<int>();
            using var connection = new SqlConnection(DbConn);
            var fields = WorkersRow.Fields;
            var rows = connection.Query(new SqlQuery().From(fields).Select(fields.UserId));
            foreach (var row in rows)
            {
                workerInfo.Add(row.UserId);
            }
            return workerInfo;
        }
        public static string GetClientInfo(int clientId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = ClientsRow.Fields;
            var clientRow = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.ClientId == clientId)).FirstOrDefault();
            var fullName = clientRow.FirstName + " " + clientRow.LastName + " [" + clientRow.RecordNumber + "]";
            return fullName;
        }
        public static bool HasOpenInvoiceItems(int workerId)
        {
            using var connection = new SqlConnection(DbConn);

            var fields = ActivitiesRow.Fields;
            var activitiesRow = connection.Query(new SqlQuery().From(fields).Select("ActivityId").
                Where(fields.UserId == workerId && fields.Status == "Paid" && fields.InvoiceId.IsNull()).Where(fields.IsBillable == "true")
            );
            return activitiesRow != null;
        }
        public static void GenerateBillingOutputFiles(dynamic rows)
        {

            foreach (var row in rows)
            {
                var billingFilePath = "";
                string jsonTemplate = File.ReadAllText(BillingProcessDirTemplateKey+"BillingTemplate.json");
                Dictionary<string, object> dic = ToDictionary(row);
                string generatedJson = ReplaceBillingPlaceholders(jsonTemplate, dic); 
                try
                {
                    billingFilePath = BillingProcessDirOutgoingKey + row.ActivityId + "_" + DateTime.Now.ToString("yyyyMMddHHmm") + ".json";
                    File.WriteAllText(billingFilePath, generatedJson);
                    using var connection = new SqlConnection(DbConn);
                    var updateQuery = $"UPDATE [dbo].[Activities] SET Status = 'Processing' WHERE Status = 'Approved' AND IsBillable = 'True' AND ActivityId = {row.ActivityId};";
                    connection.Execute(updateQuery);
                }
                catch (Exception e)
                {
                    using var connection = new SqlConnection(DbConn);
                    var update = $"UPDATE [dbo].[Activities] SET Status = 'Rejected' WHERE ActivityId = {row.ActivityId};";
                    var insert = $"INSERT INTO [dbo].[ActivitiesLog] ([ActivityId],[Date],[RejectionReason],[Notes],[UserId]) VALUES  ( {row.ActivityId},'{DateTime.Now}','Billing Error','{e.Message}',{SystemAccountId})";
                    connection.Execute(update);
                    connection.Execute(insert);
                    if (File.Exists(billingFilePath))
                    {
                        File.Delete(billingFilePath);
                    }
                }


            }

            
        }
        static Dictionary<string, object> ToDictionary(dynamic dynamicObject)
        {
            // Using LINQ to convert properties to key-value pairs and then to a dictionary
            var dictionary = ((IDictionary<string, object>)dynamicObject)
                .ToDictionary(property => property.Key, property => property.Value);

            return dictionary;
        }
        public static void SetBillingPending()
        {
            using var connection = new SqlConnection(DbConn);
            var fields = ApprovedBillingRow.Fields;
            var rows = connection.Query(new SqlQuery().From(fields).Select("*"));

            try
                {
                   GenerateBillingOutputFiles(rows);
                }
                catch (Exception e)
                {
                   
                }
            
        
        }
        public static void SetBillingProcessed()
        {

            var id = 0;
            using var connection = new SqlConnection(DbConn);

            string directoryPath = BillingProcessDirIncomingKey; 

            try
            {
                string[] files = Directory.GetFiles(directoryPath);
                foreach (string file in files)
                {
                    var fileName = Path.GetFileName(file);
                    //var updateQuery = $"UPDATE [dbo].[Activities] SET Status = 'Processed' WHERE ActivityID = {id};";
                    var updateQuery = $"UPDATE [dbo].[Activities] SET Status = 'Processed' WHERE Status = 'Processing';";
                    connection.Execute(updateQuery);
         
                    if (File.Exists(file))
                    {
                        File.Move(file, directoryPath + "Archive\\" + fileName);
                    }

                }
            }
            catch (DirectoryNotFoundException ex)
            {
               
            }
            catch (UnauthorizedAccessException ex)
            {
               
            }
            catch (IOException ex)
            {
                
            }
        

            
        }
        static char GetFileRecordId(string input)
        {
            int underscoreIndex = input.IndexOf('_');//This may change before golive

            if (underscoreIndex > 0)
            {
                // If underscore exists and is not at the beginning of the string
                return input[underscoreIndex - 1];
            }
            else
            {
                // Underscore not found or it's at the beginning of the string
                // Handle this case as you see fit. Here, we return a default character ('N') to indicate it's not found.
                return '0';
            }
        }
        public static string ReplaceBillingPlaceholders(string template, Dictionary<string, object> dic)
        {
            var fileId = Guid.NewGuid().ToString();
            var firstName         = dic["FirstName"].ToString();
            var lastName          = dic["LastName"].ToString();
            var activityDate      = dic["ActivityDate"].ToString();
            var billableAmount    = dic["BillableAmount"].ToString();
            







            template = template
                .Replace("{{FileId}}", fileId)
                .Replace("{{FirstName}}", firstName)
                .Replace("{{LastName}}", lastName)
                .Replace("{{ActivityDate}}", DateTime.Parse(activityDate).ToString("MM/dd/yyyy"))
                .Replace("{{BillableAmount}}", billableAmount);
                //.Replace("{{}}", dic[""].ToString());


            return template;
        }


    }
}
