using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace GeniusOneAi.Document.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using System;

    public class DocumentViewerExtController : Controller
    {
        [HttpGet, Route("Document/DocumentViewerExt/{FileType=null}/{FileName=null}")]
        public ActionResult Index(int fileType, string fileName, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var model = new DocumentViewerExtPageModel();
            string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");

            var fullPath = fileType switch
            {
                1 => $"{docPath}\\DocumentRepository\\{fileName}",
                2 => $"{docPath}\\InvoiceRepository\\{fileName}",
                3 => $"{docPath}\\NotesRepository\\{fileName}",
                4 => $"{docPath}\\ClientDocumentRepository\\{fileName}",
                _ => string.Empty
            };
            model.fileNamePath = fullPath;
            model.toolbarVisible = true;
            return View("~/Modules/DocumentViewerExt/DocumentViewerExtIndex.cshtml", model);
        }
    }
}