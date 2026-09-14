using GeniusOneAi.CrisisAssessments.Services;
using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Web;

namespace GeniusOneAi.CrisisAssessments.Pages
{
    /// <summary>Print-ready HTML of a crisis assessment (opened from the "View document" button). Same permission as the assessment page.</summary>
    [PageAuthorize(typeof(CrisisAssessmentsRow))]
    public class CrisisAssessmentDocumentController : Controller
    {
        [HttpGet, Route("~/CrisisAssessments/Document/{id:int}")]
        public IActionResult Document(int id, [FromServices] ISqlConnections sqlConnections)
        {
            using var connection = sqlConnections.NewFor<CrisisAssessmentsRow>();
            return Content(AssessmentDocument.Render(connection, id), "text/html; charset=utf-8");
        }
    }
}
