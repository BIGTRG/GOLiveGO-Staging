using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace GeniusOneAi.Document.Pages
{
    using Microsoft.AspNetCore.Mvc;

    public class DocumentEditorViewerController : Controller
    {
        [HttpGet, Route("Document/DocumentEditorViewer/{FileType=null}/{FileName=null}")]
        public ActionResult Index(int fileType, string fileName)
        {

            return View("~/Modules/DocumentManager/EditorViewer/DocumentEditorViewerIndex.cshtml");
        }

        //[HttpPost]
        //public IActionResult Index(IFormFile file, [FromServices] IHostingEnvironment hostingEnvironment)
        //{
        //    string fileName = $"{hostingEnvironment.WebRootPath}\\files\\{file.FileName}";
        //    using (FileStream fileStream = System.IO.File.Create(fileName))
        //    {
        //        file.CopyTo(fileStream);
        //        fileStream.Flush();
        //    }
        //    return Index();
        //}
       
    }
}