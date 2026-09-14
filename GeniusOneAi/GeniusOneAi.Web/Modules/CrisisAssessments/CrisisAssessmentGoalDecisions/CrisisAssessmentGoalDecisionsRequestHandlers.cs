using Serenity.Services;
using MyRow = GeniusOneAi.CrisisAssessments.CrisisAssessmentGoalDecisionsRow;

namespace GeniusOneAi.CrisisAssessments
{
    public interface ICrisisAssessmentGoalDecisionsSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class CrisisAssessmentGoalDecisionsSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, ICrisisAssessmentGoalDecisionsSaveHandler
    { public CrisisAssessmentGoalDecisionsSaveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentGoalDecisionsDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class CrisisAssessmentGoalDecisionsDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, ICrisisAssessmentGoalDecisionsDeleteHandler
    { public CrisisAssessmentGoalDecisionsDeleteHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentGoalDecisionsRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class CrisisAssessmentGoalDecisionsRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, ICrisisAssessmentGoalDecisionsRetrieveHandler
    { public CrisisAssessmentGoalDecisionsRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface ICrisisAssessmentGoalDecisionsListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class CrisisAssessmentGoalDecisionsListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, ICrisisAssessmentGoalDecisionsListHandler
    { public CrisisAssessmentGoalDecisionsListHandler(IRequestContext context) : base(context) { } }
}
