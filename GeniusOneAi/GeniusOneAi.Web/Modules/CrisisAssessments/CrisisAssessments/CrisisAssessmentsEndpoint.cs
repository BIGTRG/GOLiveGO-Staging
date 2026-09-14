using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using GeniusOneAi.CrisisAssessments.Services;
using System.Linq;
using Serenity;
using MyRow = GeniusOneAi.CrisisAssessments.CrisisAssessmentsRow;

namespace GeniusOneAi.CrisisAssessments.Endpoints
{
    [Route("Services/CrisisAssessments/CrisisAssessments/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CrisisAssessmentsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ICrisisAssessmentsSaveHandler handler) => handler.Create(uow, request);
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request, [FromServices] ICrisisAssessmentsSaveHandler handler) => handler.Update(uow, request);
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request, [FromServices] ICrisisAssessmentsDeleteHandler handler) => handler.Delete(uow, request);
        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request, [FromServices] ICrisisAssessmentsRetrieveHandler handler) => handler.Retrieve(connection, request);
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request, [FromServices] ICrisisAssessmentsListHandler handler) => handler.List(connection, request);

        /// <summary>Live scoring / hard stops / needs / goal suggestions for an unsaved form state. Nothing is persisted.</summary>
        [HttpPost]
        public EvaluationResult Evaluate(IDbConnection connection, EvaluateRequest request)
        {
            if (request.Entity == null) throw new ValidationError("Entity is required.");
            return AssessmentEngine.Evaluate(connection, request.Entity);
        }

        /// <summary>Evaluation for a saved assessment by id (used by the review step).</summary>
        [HttpPost]
        public EvaluationResult Recommendations(IDbConnection connection, RetrieveRequest request)
        {
            var row = connection.TryById<MyRow>(Convert.ToInt32(request.EntityId));
            if (row == null) throw new ValidationError("Assessment not found.");
            return AssessmentEngine.Evaluate(connection, row);
        }

        /// <summary>Licensed clinician signs a completed assessment; the row is locked afterwards.</summary>
        [HttpPost]
        public ServiceResponse Sign(IUnitOfWork uow, RetrieveRequest request)
        {
            var row = uow.Connection.TryById<MyRow>(Convert.ToInt32(request.EntityId)) ?? throw new ValidationError("Assessment not found.");
            if (row.Status != "Completed") throw new ValidationError("Only a completed assessment can be signed.");
            var uid = int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
            uow.Connection.UpdateById(new MyRow { AssessmentId = row.AssessmentId, Status = "Signed", SignedBy = uid, SignedAt = DateTime.Now, SignedName = User?.Identity?.Name });
            return new ServiceResponse();
        }

        /// <summary>Clinician confirmed the needs and tonight's goals: opens/links the episode, writes needs, copies goals per encounter phase.</summary>
        [HttpPost]
        public CompleteResponse Complete(IUnitOfWork uow, CompleteRequest request)
        {
            var uid = int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
            return AssessmentEngine.Complete(uow, request, uid);
        }
    }
}
