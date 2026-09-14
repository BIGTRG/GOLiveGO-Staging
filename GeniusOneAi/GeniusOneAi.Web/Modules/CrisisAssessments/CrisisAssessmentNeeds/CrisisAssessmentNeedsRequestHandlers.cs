using Serenity.Services;
using MyRow = GeniusOneAi.CrisisAssessments.CrisisAssessmentNeedsRow;

namespace GeniusOneAi.CrisisAssessments
{
    public interface ICrisisAssessmentNeedsSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class CrisisAssessmentNeedsSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, ICrisisAssessmentNeedsSaveHandler
    { public CrisisAssessmentNeedsSaveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentNeedsDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class CrisisAssessmentNeedsDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, ICrisisAssessmentNeedsDeleteHandler
    { public CrisisAssessmentNeedsDeleteHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentNeedsRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class CrisisAssessmentNeedsRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, ICrisisAssessmentNeedsRetrieveHandler
    { public CrisisAssessmentNeedsRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentNeedsListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class CrisisAssessmentNeedsListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, ICrisisAssessmentNeedsListHandler
    { public CrisisAssessmentNeedsListHandler(IRequestContext context) : base(context) { } }
}
