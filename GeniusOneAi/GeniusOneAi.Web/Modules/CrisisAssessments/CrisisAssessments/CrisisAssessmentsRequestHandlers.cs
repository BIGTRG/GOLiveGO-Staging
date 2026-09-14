using System;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.CrisisAssessments.Services;
using MyRow = GeniusOneAi.CrisisAssessments.CrisisAssessmentsRow;

namespace GeniusOneAi.CrisisAssessments
{
    public interface ICrisisAssessmentsSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class CrisisAssessmentsSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, ICrisisAssessmentsSaveHandler
    {
        public CrisisAssessmentsSaveHandler(IRequestContext context) : base(context) { }

        protected override void ValidateRequest()
        {
            base.ValidateRequest();
            if (!IsCreate && Old != null && Old.Status == "Signed")
                throw new ValidationError("AssessmentSigned", "A signed assessment cannot be edited. Start a new assessment.");
        }

        protected override void SetInternalFields()
        {
            base.SetInternalFields();
            var uid = int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
            if (IsCreate)
            {
                Row.Owner = uid;
                Row.OwnerCreateDate = DateTime.Now;
                Row.Status = Row.Status ?? "Draft";
                Row.FormType = Row.FormType ?? "Adult";
                Row.ServiceDate = Row.ServiceDate ?? DateTime.Now;
                Row.ProjectedDischarge = Row.ProjectedDischarge ?? DateTime.Today.AddDays(7);
                if (Row.TenantId == null && Row.ClientId != null)
                    Row.TenantId = Connection.TryFirst<ClientManager.Entities.ClientsRow>(q => q.Select(ClientManager.Entities.ClientsRow.Fields.TenantId)
                        .Where(ClientManager.Entities.ClientsRow.Fields.ClientId == Row.ClientId.Value))?.TenantId;
            }
            // score and hard stops are always recomputed server-side from the answers
            var merged = IsCreate ? Row : AssessmentEngine.Merge(Old, Row);
            var ev = AssessmentEngine.Evaluate(Connection, merged, forSave: true);
            Row.Score = ev.Score;
            Row.HighRisk = ev.HighRisk;
            Row.HardStopReasons = ev.HardStops.Count == 0 ? null : string.Join(" | ", ev.HardStops.ConvertAll(h => h.Title + ": " + h.Source));
        }
    }

    public interface ICrisisAssessmentsDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class CrisisAssessmentsDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, ICrisisAssessmentsDeleteHandler
    {
        public CrisisAssessmentsDeleteHandler(IRequestContext context) : base(context) { }
        protected override void ValidateRequest()
        {
            base.ValidateRequest();
            if (Row.Status == "Completed" || Row.Status == "Signed")
                throw new ValidationError("AssessmentCompleted", "A completed assessment cannot be deleted; its goals are already on the episode.");
        }
    }

    public interface ICrisisAssessmentsRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class CrisisAssessmentsRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, ICrisisAssessmentsRetrieveHandler
    { public CrisisAssessmentsRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentsListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class CrisisAssessmentsListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, ICrisisAssessmentsListHandler
    { public CrisisAssessmentsListHandler(IRequestContext context) : base(context) { } }
}
