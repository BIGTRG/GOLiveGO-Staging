using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Drawing;
using System.IO;
using System.Linq;
using GeniusOneAi.MiscEntities.Entities;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Microsoft.Extensions.DependencyInjection;
using SelectPdf;
using Serenity.Abstractions;
using StackExchange.Exceptional.Internal;
using System.Collections.Generic;
using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class Pdf : GeniusOneBase
    {
        public static void UpdateGoalsInter(string f1, string f2, int activityId)
        {
            string updateQuery = "UPDATE [dbo].[ProgramNotes] SET Field01 = @f1, Field02 = @f2 WHERE ActivityId = @activityId;";
            f1 ??= "Missing!";
            f2 ??= "Missing!";
            using (SqlConnection conn = new SqlConnection(DbConn))
            using (SqlCommand cmd = new SqlCommand(updateQuery, conn))
            {
                cmd.Parameters.AddWithValue("@f1", f1);
                cmd.Parameters.AddWithValue("@f2", f2);
                cmd.Parameters.AddWithValue("@activityId", activityId);

                conn.Open();
                cmd.ExecuteNonQuery();
            }
        }
        public static void CreateProgressNotePdf(int activityId, string currentName, int uid)
        {
            try
            {
                SelectPdf.GlobalProperties.LicenseKey = SelectPdfKey;
                var doc = new PdfDocument();
                doc.Margins = new PdfMargins(100, 10, 0, 0);
                var fileName = currentName.HasValue() ? currentName : Guid.NewGuid() + ".pdf";
                var path = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "App_Data\\NotesRepository\\";
                var url = $"{BaseUrl}Api/ProgressNotesGenerator/{activityId}";
                var converter = new SelectPdf.HtmlToPdf();

                converter.Options.DisplayFooter = true;
                converter.Footer.DisplayOnFirstPage = true;
                converter.Footer.DisplayOnOddPages = true;
                converter.Footer.DisplayOnEvenPages = true;
                converter.Footer.Height = 30;

                var footerHtml = new PdfHtmlSection("<div></div>",string.Empty);
                footerHtml.AutoFitHeight = HtmlToPdfPageFitMode.AutoFit;
                converter.Footer.Add(footerHtml);
                var text = new PdfTextSection(0, 0, "Page: {page_number} of {total_pages}  ", new System.Drawing.Font("Times New Roman", 8));
                    text.HorizontalAlign = PdfTextHorizontalAlign.Center;
                    converter.Footer.Add(text);
         

                doc = converter.ConvertUrl(url);
                var ms = new MemoryStream();
                doc.Save(ms);
                doc.Close();
                var fs = new FileStream(path + fileName, FileMode.Create);
                ms.WriteTo(fs);
                ms.Close();
                fs.Close();
                fs.Dispose();
                UpdateFileName(fileName, activityId);

                using var connection = new SqlConnection(DbConn);
                var insert = $"INSERT INTO [dbo].[ActivitiesLog] ([ActivityId],[Date],[RejectionReason],[Notes],[UserId]) VALUES  ( {activityId},'{DateTime.Now}','N/A','Progress Note Approved.',{uid})";
                connection.Execute(insert);

            }
            catch (Exception e)
            {
                TimesheetExtension.UpdateTimeRecordStatus(activityId, "Submitted", uid);
                throw new ValidationError($"There was an error generating final document.  Please try again!  Error:{e}");
            }
         
            
        }
        public static void CreateWorkerInvoicePdf(int workerId, string fileName)
        {
            try
            {
                SelectPdf.GlobalProperties.LicenseKey = SelectPdfKey;
                var doc = new PdfDocument();
                doc.Margins = new PdfMargins(100, 10, 0, 0);
                var path = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "App_Data\\InvoiceRepository\\";
                var url = $"{BaseUrl}Api/InvoiceGeneratorGenerator/{workerId}/{fileName}";

                var converter = new SelectPdf.HtmlToPdf();
                converter.Options.DisplayFooter = true;
                converter.Footer.DisplayOnFirstPage = true;
                converter.Footer.DisplayOnOddPages = true;
                converter.Footer.DisplayOnEvenPages = true;
                converter.Footer.Height = 30;

                var footerHtml = new PdfHtmlSection("<div></div>", string.Empty);
                footerHtml.AutoFitHeight = HtmlToPdfPageFitMode.AutoFit;
                converter.Footer.Add(footerHtml);
                var text = new PdfTextSection(0, 0, "Page: {page_number} of {total_pages}  ", new System.Drawing.Font("Arial", 8));
                text.HorizontalAlign = PdfTextHorizontalAlign.Center;
                converter.Footer.Add(text);


                doc = converter.ConvertUrl(url);
                var ms = new MemoryStream();
                doc.Save(ms);
                doc.Close();
                var fs = new FileStream(path + fileName, FileMode.Create);
                ms.WriteTo(fs);
                ms.Close();
                fs.Close();
                fs.Dispose();
 
            }
            catch (Exception e)
            {
               throw new ValidationError("There was an error generating final document.  Please try again!");
            }


        }
        public static void UpdateFileName(string fileName, int activityId)
        {
            using var connection = new SqlConnection(DbConn);
            var updateQuery = $"UPDATE [dbo].[ProgramNotes] SET FileName = '{fileName}' where ActivityId = {activityId} ";
            connection.Execute(updateQuery);
        }
        //public static void InsertInvoice(string fileName, string invoiceNumber, int workerId)
        //{
        //    var totalDue = BillingExtension.GetTotalDue(workerId);
        //    using var connection = new SqlConnection(DbConn);
        //    var paymentTerms = "Immediately";
        //    var insertQuery = $"INSERT INTO [dbo].[WorkerInvoices] VALUES ({workerId},'{invoiceNumber}',{totalDue},'{DateTime.Now}','{paymentTerms}','{DateTime.Now}',null,null,'Open','{fileName}')";
        //    var invoiceId = connection.Execute(insertQuery);
        //    var updateQuery = $"UPDATE [dbo].[Activities] SET InvoiceId = '{invoiceId}' where UserId = {workerId} and InvoiceId;";
        //    connection.Execute(updateQuery);
        //}
       


    }
}