using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using GeniusOneAi.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Serenity.Web;
using GeniusOneAi.Modules.Common.CustomClasses;

namespace GeniusOneAi.Document.Pages
{
    public class DocumentEditorClientController : Controller
    {
        [HttpGet, PageAuthorize, Route("Document/DocumentEditorClient/{FileName=null}")]
        public ActionResult Index(string fileName, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var docData = Documents.GetClientDocumentId(fileName);
            var model = new DocumentEditorClientPageModel
            {
                documentName = fileName,
                Id = (int)docData.DocumentId,
            };
            return View("~/Modules/DocumentEditorClient/DocumentEditorClientIndex.cshtml", model);
        }


        [HttpGet, PageAuthorize, Route("Document/getClientPdf/{FileName=null}")]
        public async Task<IActionResult> getPdf(string fileName, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var isDocMine = Documents.IsDocOrg(fileName);
            string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");
            var fullPath = $"{docPath}\\ClientDocumentRepository\\";
            var pdfFilePath = Path.Combine(fullPath, fileName);

            if (!isDocMine || !System.IO.File.Exists(pdfFilePath))
            {
                return NotFound();
            }
            byte[] pdfBytes = System.IO.File.ReadAllBytes(pdfFilePath);
            return File(pdfBytes, "application/octet-stream");
        }


        [PageAuthorize, Route("Document/saveClientPdf")]
        [AcceptVerbs("POST"), IgnoreAntiforgeryToken]
        public async Task<ActionResult> savePdf(IFormFile file, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            if (file != null && file.Length > 0)
            {
                string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");
                var fullPath = $"{docPath}\\ClientDocumentRepository\\";
                var pdfFilePath = Path.Combine(fullPath, file.FileName);

                using (var stream = new FileStream(pdfFilePath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                return Ok(); // Return a success response
            }

            return BadRequest("No file received.");
        }
    }
}