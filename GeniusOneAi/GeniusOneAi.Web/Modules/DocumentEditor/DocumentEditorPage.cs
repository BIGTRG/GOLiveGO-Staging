using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using GeniusOneAi.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Serenity.Web;

namespace GeniusOneAi.Document.Pages
{
    public class DocumentEditorController : Controller
    {
        [HttpGet, PageAuthorize, Route("Document/DocumentEditor/{FileName=null}")]
        public ActionResult Index(string fileName, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var model = new DocumentEditorPageModel
            {
                documentName = fileName
            };
            return View("~/Modules/DocumentEditor/DocumentEditorIndex.cshtml", model);
        }


        [HttpGet, PageAuthorize, Route("Document/getPdf/{FileName=null}")]
        public async Task<IActionResult> getPdf(string fileName, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var isDocMine = Documents.IsDocOrg(fileName);
            string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");
            var fullPath = $"{docPath}\\DocumentRepository\\";
            var pdfFilePath = Path.Combine(fullPath, fileName);

            if (!isDocMine || !System.IO.File.Exists(pdfFilePath))
            {
                return NotFound();
            }
            byte[] pdfBytes = System.IO.File.ReadAllBytes(pdfFilePath);
            return File(pdfBytes, "application/octet-stream");
        }


        [PageAuthorize, Route("Document/savePdf")]
        [AcceptVerbs("POST"), IgnoreAntiforgeryToken]
        public async Task<ActionResult> savePdf(IFormFile file, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            if (file != null && file.Length > 0)
            {
                string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");
                var fullPath = $"{docPath}\\DocumentRepository\\";
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