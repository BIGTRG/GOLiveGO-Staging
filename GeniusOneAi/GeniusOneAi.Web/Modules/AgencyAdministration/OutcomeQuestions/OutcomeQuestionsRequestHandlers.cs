using Serenity.Services;
using MyRow = GeniusOneAi.AgencyAdministration.OutcomeQuestionsRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface IOutcomeQuestionsSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }
    public class OutcomeQuestionsSaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>, IOutcomeQuestionsSaveHandler
    { public OutcomeQuestionsSaveHandler(IRequestContext context) : base(context) { } }

    public interface IOutcomeQuestionsDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }
    public class OutcomeQuestionsDeleteHandler : DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>, IOutcomeQuestionsDeleteHandler
    { public OutcomeQuestionsDeleteHandler(IRequestContext context) : base(context) { } }

    public interface IOutcomeQuestionsRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }
    public class OutcomeQuestionsRetrieveHandler : RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>, IOutcomeQuestionsRetrieveHandler
    { public OutcomeQuestionsRetrieveHandler(IRequestContext context) : base(context) { } }

    public interface IOutcomeQuestionsListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }
    public class OutcomeQuestionsListHandler : ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>, IOutcomeQuestionsListHandler
    { public OutcomeQuestionsListHandler(IRequestContext context) : base(context) { } }
}
