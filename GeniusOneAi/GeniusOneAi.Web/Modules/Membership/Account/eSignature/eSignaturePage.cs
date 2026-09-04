using GeniusOneAi.Membership;
using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity.Services;
using Serenity.Web;

namespace GeniusOneAi.Account.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using Microsoft.AspNetCore.Mvc;

    public class eSignatureController : Controller
    {
        [PageAuthorize, HttpGet]
        [Route("User/eSignature")]
        public ActionResult Index()
        { 
            var model = UserExtension.GetUserSignatureData(int.Parse(User?.GetIdentifier() ?? string.Empty));
            model.eSignatureImage ??= string.Empty;
           return View("~/Modules/Membership/Account/eSignature/eSignatureIndex.cshtml", model);
        }
    }
} 