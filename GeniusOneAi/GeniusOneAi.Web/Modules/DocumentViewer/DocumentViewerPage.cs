using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace GeniusOneAi.Document.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using System;

    public class DocumentViewerController : Controller
    {
        [HttpGet, Route("Document/DocumentViewer/{FileType=null}/{FileName=null}")]
        public ActionResult Index(int fileType, string fileName, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var model = new DocumentViewerPageModel();
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
            return View("~/Modules/DocumentViewer/DocumentViewerIndex.cshtml", model);
        }
    }
}