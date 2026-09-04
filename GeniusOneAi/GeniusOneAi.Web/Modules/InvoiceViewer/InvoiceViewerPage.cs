using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace GeniusOneAi.Document.Pages
{
    using GeniusOneAi.Modules.Common.CustomClasses;
    using Microsoft.AspNetCore.Mvc;
    using System;

    public class InvoiceViewerController : Controller
    {
        [HttpGet, Route("Document/InvoiceViewer/{FileName=null}")]
        public ActionResult Index(string fileName,string fileId, [FromServices] IWebHostEnvironment hostingEnvironment)
        {
            var model = new InvoiceViewerPageModel();
            string docPath = Path.Combine(hostingEnvironment.ContentRootPath, "App_Data");
            model.fileNamePath = $"{docPath}\\InvoiceRepository\\{fileName}";
            model.toolbarVisible = true;
            model.invoiceId = BillingExtension.GetInvoiceId(fileName);


            return View("~/Modules/InvoiceViewer/InvoiceViewerIndex.cshtml", model);
        }
    }
}