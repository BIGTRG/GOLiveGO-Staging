using GeniusOneAi.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using GeniusOneAi.Web.Modules.Common.CustomClasses;
using Serenity.Extensions;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using System.IO;
using System.Linq;
using GeniusOneAi.DocumentManager.Entities;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting.Internal;
using Serenity.Data;

namespace GeniusOneAi.Api.Pages
{
   

    public class ApiController : Controller
    {
        //Begin Billing Endpoints//////////////////////////////////////////////////////////
        [HttpGet]
        [Route("Api/GenerateBillingFiles/{apiKey=null}")]
        public ActionResult SetBillingPending(string apiKey)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new EmptyResult();
            BillingExtension.SetBillingPending();
            return new EmptyResult();
        }

        [HttpGet]
        [Route("Api/ProcessBilling/{apiKey=null}")]
        public ActionResult SetBillingProcessed(string apiKey)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if(!isSecureAccess) return new EmptyResult();
            BillingExtension.SetBillingProcessed();
            return new EmptyResult();
        }
        //End Billing Endpoints/////////////////////////////////////////////////////////////

        [HttpGet]
        [Route("ProgramNotes/Download/{fileName}")]
        public FileResult Download(string fileName)
        {
            var path = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "App_Data\\NotesRepository\\";
            byte[] fileBytes = System.IO.File.ReadAllBytes(path + fileName);
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }

        [HttpGet]
        //[NoDirectAccess]
        [Route("Api/InvoiceGeneratorGenerator/{workerId=null}/{fileName=null}")]
        public ActionResult Index(string apiKey,int workerId, string fileName)
        {
            var model = BillingExtension.GetBillableActivities(workerId, fileName);
            return View("~/Modules/Api/InvoiceGeneratorIndex.cshtml", model);
        }

        [HttpGet]
        [Route("Api/ProcessInvoices/{apiKey=null}")]
        public ActionResult SaveInvoice(string apiKey)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new EmptyResult();
            var workerIDs = BillingExtension.GetWorkerInfo();
            foreach (var workerID in workerIDs)
            {
                if (BillingExtension.HasOpenInvoiceItems(workerID))
                {
                    var fileName = Guid.NewGuid() + ".pdf";
                    Pdf.CreateWorkerInvoicePdf(workerID, fileName);
                }

            }


            return new EmptyResult();
        }

        [HttpGet]
        [Route("Api/ProgressNotesGenerator/{activityId=null}")]
        public ActionResult Index(int activityId)
        {
            var model = TimesheetExtension.GetTimeSheetNoteDataAll(activityId);
            return View("~/Modules/Api/ProgramNotesGeneratorIndex.cshtml", model);
        }
        //Email Endpoint//////////////////////////////////////////////////////////
        [HttpGet]
        [Route("Api/SendEmail/{apiKey=null}/{recEmail=null}/{subject=null}/{body=null}")]
        public ActionResult SendEmail(string apiKey, string recEmail, string subject, string body)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new EmptyResult();
            var sm = new Email();
            sm.SendEmail(recEmail, subject, body);
            return new EmptyResult();
        }

        //Begin Maintenance Endpoints//////////////////////////////////////////////////////////
        [HttpGet]
        [Route("Api/Dcu/{apiKey=null}")]
        public ActionResult DocumentCleanup(string apiKey)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new EmptyResult();

            var dbConn = GeniusOneBase.DbConn;
            using var connection = new SqlConnection(dbConn);

            var fields = DocumentsRow.Fields;
            var rows = connection.Query(new SqlQuery().From(fields).Select(fields.FileName).Where(fields.IsFinalized == 0));
            var filesToKeep = rows.Select(row => row.FileName).Cast<string>().ToList();

            if (filesToKeep.Count < 1) return new EmptyResult();

            var sourceDirectoryPath = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "App_Data\\DocumentRepository\\temporary\\";
            var destinationDirectoryPath = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "App_Data\\DocumentRepository\\archive\\";


            try
            {
                
                var sourceDirectory = new DirectoryInfo(sourceDirectoryPath);
                var destinationDirectory = new DirectoryInfo(destinationDirectoryPath);
                var files = sourceDirectory.GetFiles();

                if (!destinationDirectory.Exists)
                {
                    destinationDirectory.Create();
                }

                foreach (var file in files)
                {
                    if (filesToKeep.Contains(file.Name)) continue;
                    var destinationFilePath = Path.Combine(destinationDirectoryPath, file.Name);
                    file.MoveTo(destinationFilePath);
                }

            }
            catch (Exception ex)
            {

            }

            return new EmptyResult();
        }
        //End Maintenance Endpoints//////////////////////////////////////////////////////////
        //Begin get dropdown for note templates
        [HttpGet]
        [Route("Api/GetDdl/{apiKey=null}/{templateId=null}/{questionId=null}")]
        public IEnumerable<string> GetDdl(string apiKey,int templateId, int questionId)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new List<string>();
            var lst = TimesheetExtension.GetTemplateDdlValues(templateId, questionId);
            return lst;
        }
        [HttpGet]
        [Route("Api/GetProgramNote/{apiKey=null}")]
        public IEnumerable<string> GetProgramNote(string apiKey)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new List<string>();
            var lst = TimesheetExtension.GetProgramNoteTypeDdlValues();
            return lst;
        }
        [HttpGet]
        [Route("Api/GetClientGoals/{apiKey=null}/{clientId=null}/{goalType=null}/{actDay=null}")]
        public Dictionary<string,string> GetClientGoals(string apiKey, string clientId, string goalType, string actDay)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return new Dictionary<string,string>();
            var lst = TimesheetExtension.GetClientGoalInterventions(clientId, goalType, actDay);
            return lst;
        }

        [HttpGet]
        [Route("Api/ProcessAlertEmails/{apiKey=null}")]
        public bool ProcessAlertEmails(string apiKey)
        {
            var isSecureAccess = GeniusOneBase.CheckApiKey(apiKey);
            if (!isSecureAccess) return false;
            //var lst = TimesheetExtension.GetClientGoalInterventions(clientId, goalType, actDay);
            return false;
        }
    }
    
}