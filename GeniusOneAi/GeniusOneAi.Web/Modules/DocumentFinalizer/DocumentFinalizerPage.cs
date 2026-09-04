using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace GeniusOneAi.Document.Pages
{
    using GeniusOneAi.Modules.Common.CustomClasses;
    using Microsoft.AspNetCore.Mvc;
    public class DocumentFinalizerController : Controller
    {
        [HttpGet, Route("Document/DocumentFinalizer/{FileName=null}")]
        public ActionResult Index(string fileName,[FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var model = new DocumentfinalizerPageModel();
            var doc = Documents.GetDocumentId(fileName);
            string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");
            //var fullPath = doc.IsFinalized == 1 ? $"{docPath}\\DocumentRepository\\{fileName}" : $"{docPath}\\DocumentRepository\\temporary\\{fileName}";
            var fullPath = doc.IsFinalized == 1 ? $"{docPath}\\DocumentRepository\\{fileName}" : $"{docPath}\\DocumentRepository\\{fileName}";
            model.fileNamePath = fullPath;
            model.fileName = fileName;
            model.isFinal = doc.IsFinalized;
            model.fileId = (int)doc.DocumentId;
            return View("~/Modules/Documentfinalizer/DocumentfinalizerIndex.cshtml", model);
        }
    }
}