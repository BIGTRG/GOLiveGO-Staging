using System.Data.SqlClient;
using System.Linq;
//using Dapper;
using GeniusOneAi.DocumentManager.Entities;
using GeniusOneAi.DocumentManager;
using GeniusOneAi.MiscEntities.Entities;
using GeniusOneAi.ClientManager.Entities;
using Serenity.Data;
using System;
using System.IO;
using pdftron.PDF;
using pdftron.SDF;
using pdftron.Common;
using Microsoft.AspNetCore.Hosting;
using pdftron;
using GeniusOneAi.ClientManager;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class Documents : GeniusOneBase
    {
        public static DocumentsRow GetDocumentId(string fileName)
        {
            var docRow = new DocumentsRow();

            using (var connection = new SqlConnection(DbConn))
            {
                var fields = DocumentsRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select(fields.DocumentId, fields.IsFinalized).Where(fields.FileName == "temporary/" + fileName || fields.FileName == fileName)).FirstOrDefault(); ;
                if (row == null) return docRow;
                docRow.DocumentId = row.DocumentId;
                docRow.IsFinalized = row.IsFinalized;
                return docRow;
            }
        }
        public static DocumentsRow GetClientDocumentId(string fileName)
        {
            var docRow = new DocumentsRow();

            using (var connection = new SqlConnection(DbConn))
            {
                var fields = ClientDocumentsRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select(fields.DocumentId, fields.IsFinalized).Where(fields.FileName == fileName)).FirstOrDefault(); ;
                if (row == null) return docRow;
                docRow.DocumentId = row.DocumentId;
                docRow.IsFinalized = row.IsFinalized;
                return docRow;
            }
        }
        public static string CreateDocumentWorkflow(long workflowId)
        {
            var resp = new BaseResponse();
            resp.Response = "Success";
            using (var connection = new SqlConnection(DbConn))
            {
                var templateFields = DocumentWorkflowTemplatesRow.Fields;
                var stepFields = DocumentWorkflowStepsTemplatesRow.Fields;
                var templateRow = connection.Query(new SqlQuery()
                    .From(templateFields)
                    .Select(templateFields.Name, templateFields.Description, templateFields.DocumentId)
                    .Where(templateFields.WorkflowTemplateId == workflowId))
                    .FirstOrDefault();

                //var templateStepsRow = connection.Query(new SqlQuery()
                //   .From(templateFields)
                //   .Select(templateFields.Name, templateFields.Description, templateFields.DocumentId)
                //   .Where(templateFields.WorkflowTemplateId == workflowId))
                //   .FirstOrDefault();

                if (templateRow == null)
                {
                    resp.Response = "Error";
                    return resp.Response;
                }
                var WorkflowName = templateRow.Name;
                var WorkflowDescription = templateRow.Description;
                var WorkflowDocumentId = templateRow.DocumentId;

                var templateWorkflowId = connection.Execute($"INSERT INTO [dbo].[DocumentWorkflows] VALUES ('{WorkflowName}','{WorkflowDescription}','document.pdf','Stopped')");


                return resp.Response;
            }









        }
        public static bool IsDocOrg(string docName)
        {
            return true;
        }
        public static BaseResponse CopyDocumentsToClient(BaseRecsRequest ids)
        {
            var cnt = 0;
            var resp = new BaseResponse();
            var clientId = ids.clientId;

            foreach (var id in ids.Ids)
            {
                var isCopied = CopyDocumentToClient(id, clientId);
                if (isCopied) { cnt++; }
            }

            resp.Response = cnt.ToString();

            return resp;
        }
        public static bool CopyDocumentToClient(string id, int clientId)
        {
            var resp = false;
            var newDocName = Guid.NewGuid()+".pdf";
            var oldDocMeta = GetDocumentMetaData(id);

            var oldDocPath = Path.Combine(Directory.GetCurrentDirectory(), "App_Data");
            var oldDocFullPath = $"{oldDocPath}\\DocumentRepository\\{oldDocMeta.DocumentFileName}";
            var newDocFullPath = $"{oldDocPath}\\ClientDocumentRepository\\{newDocName}";

            string sourceFilePath = oldDocFullPath;
            string destinationFilePath = newDocFullPath;

            try
            {
                if (File.Exists(sourceFilePath))
                {
                    File.Copy(sourceFilePath, destinationFilePath, true);
                    using var connection = new SqlConnection(DbConn);
                    var insertQuery = $"INSERT INTO [dbo].[ClientDocuments]([ClientId],[Title],[FileName],[IsFinalized])VALUES('{clientId}','{oldDocMeta.DocumentName}','{newDocName}','0'); ";
                    connection.Execute(insertQuery);
                    PopulateClientDocument(newDocName, clientId.ToString());
                }
                else
                {
                    resp = false;  
                }
            }
            catch (Exception ex)
            {
                resp = false;
            }
            return resp;
        }
        public static bool CopyDocumentToClient(string fileName)
        {
            var resp = false;

            var oldDocPath = Path.Combine(Directory.GetCurrentDirectory(), "App_Data");
            var oldDocFullPath = $"{oldDocPath}\\DocumentRepository\\temporary\\{fileName}";
            var newDocFullPath = $"{oldDocPath}\\ClientDocumentRepository\\{fileName}";

            string sourceFilePath = oldDocFullPath;
            string destinationFilePath = newDocFullPath;

            try
            {
                if (File.Exists(sourceFilePath))
                {
                    File.Move(sourceFilePath, destinationFilePath);
                    resp = true;
                }
                else
                {
                    resp = false;
                }
            }
            catch (Exception ex)
            {
                resp = false;
            }
            return resp;
        }
        public static DocumentMeta GetDocumentMetaData(string id)
        {
            var doc = new DocumentMeta();
            
            using (var connection = new SqlConnection(DbConn))
            {
                var fields = DocumentsRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select(fields.Title, fields.FileName).Where(fields.DocumentId == id)).FirstOrDefault(); ;
                if (row == null) return doc;
                doc.DocumentFileName = row.FileName;
                doc.DocumentName = row.Title;
                return doc;
            }
        }
        public static bool PopulateClientDocument(string docName, string clientId)
        {
            var isComplete = false;
            var DocPath = Path.Combine(Directory.GetCurrentDirectory(), "App_Data");
            var FullDocPath = $"{DocPath}\\ClientDocumentRepository\\{docName}";
            var pd = GetPatientDetails(clientId);
            PDFNet.Initialize("demo:1696609756459:7cec0d610300000000e4777dd91ccdda4cccad707e2b97e299a9d182aa");
            var pdfDoc = new PDFDoc(FullDocPath);
            
            pdfDoc.InitSecurityHandler();
            var dob = pd.PatientBirthDate.HasValue ? String.Format("{0:MM/dd/yyyy}", pd.PatientBirthDate) : string.Empty;

            var PatientFullName = pdfDoc.GetField("PatientFullName");
            var PatientPrimaryInsuranceNumber = pdfDoc.GetField("PatientPrimaryInsuranceNumber");
            var PatientMedicalRecordNumber = pdfDoc.GetField("PatientMedicalRecordNumber");
            var PatientBirthDate = pdfDoc.GetField("PatientBirthDate");
            PatientFullName?.SetValue(pd.PatientFullName ?? string.Empty);
            PatientPrimaryInsuranceNumber?.SetValue(pd.PatientPrimaryInsuranceNumber ?? string.Empty);
            PatientMedicalRecordNumber?.SetValue(pd.PatientMedicalRecordNumber ?? string.Empty);
            PatientBirthDate?.SetValue(dob);

            pdfDoc.Save(FullDocPath, SDFDoc.SaveOptions.e_remove_unused);
            pdfDoc.Close();

            return isComplete;
        }
        public static PatientDetailsRow GetPatientDetails(string id)
        {
            var pd = new PatientDetailsRow();
            using (var connection = new SqlConnection(DbConn))
            {
                var fields = PatientDetailsRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.PatientId == id)).FirstOrDefault(); ;
                if (row == null) return pd;

                pd.PatientId = row.PatientId;
                pd.PatientFirstName = row.PatientFirstName;
                pd.PatientLastName = row.PatientLastName;
                pd.PatientMiddleName = row.PatientMiddleName;
                pd.PatientFullName = row.PatientFullName;
                pd.PatientBirthDate = row.PatientBirthDate;
                pd.PatientPrimaryInsuranceNumber = row.PatientPrimaryInsuranceNumber;
                pd.PatientMedicalRecordNumber = row.PatientMedicalRecordNumber;  
               
            }
            return pd;
        }
    }
}