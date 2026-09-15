using System;
using System.Text.Json;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serenity;

namespace GeniusOneAi.FieldMode.Pages
{
    /// <summary>
    /// Field mode - the phone-first flow for mobile crisis workers (Direction A, "Clinical Clean").
    /// One HTML shell; the screens live in wwwroot/field/field.js and call the existing Serenity
    /// services (CrisisAssessments, EncounterNotes, Consent, ProgramNotes) plus Services/Field for
    /// the phone-specific aggregates. Same login cookie as the desktop app; nothing new is stored.
    /// </summary>
    public class FieldPageController : Controller
    {
        [HttpGet, Route("~/Field"), Route("~/Field/{*path}")]
        public IActionResult Index([FromServices] IAntiforgery antiforgery)
        {
            // The shell is not a Razor view, so Serenity's result filter does not drop the CSRF cookie for us.
            var tokens = antiforgery.GetAndStoreTokens(HttpContext);
            Response.Cookies.Append("CSRF-TOKEN", tokens.RequestToken, new CookieOptions { HttpOnly = false, Secure = Request.IsHttps, SameSite = SameSiteMode.Lax, Path = "/" });
            var user = User?.Identity?.IsAuthenticated == true ? new { name = User.Identity.Name, id = User.GetIdentifier() } : null;
            var boot = JsonSerializer.Serialize(new { user, version = "1.0", server = DateTime.Now.ToString("o") });
            return Content(Shell(boot), "text/html; charset=utf-8");
        }

        private static string Shell(string boot) =>
            "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\">" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1\">" +
            "<meta name=\"robots\" content=\"noindex\"><meta name=\"theme-color\" content=\"#19355f\">" +
            "<meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">" +
            "<title>GeniusOneAi Field</title>" +
            "<link rel=\"stylesheet\" href=\"/field/field.css?v=1\">" +
            "</head><body><div id=\"app\" class=\"fd-app\"><div class=\"fd-boot\">Loading Field mode...</div></div>" +
            "<script>window.FIELD_BOOT=" + boot + ";</script>" +
            "<script src=\"/field/field-options.js?v=1\"></script>" +
            "<script src=\"/field/field.js?v=1\"></script>" +
            "</body></html>";
    }
}
