
using System.Threading.Tasks;

namespace GeniusOneAi.ClientManager.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ClientsRepository;
    using MyRow = Entities.ClientsRow;
    using GeniusOneAi.Modules.Common.CustomClasses;

    public class CheckRecordNumberRequest : ServiceRequest
    {
        public string RecordNumber { get; set; }
        public int? ClientId { get; set; }
    }

    public class CheckRecordNumberResponse : ServiceResponse
    {
        public bool Exists { get; set; }
    }

    [Route("Services/ClientManager/Clients/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ClientsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

        [HttpPost]
        public CheckRecordNumberResponse CheckRecordNumber(
            IDbConnection connection,
            CheckRecordNumberRequest request)
        {
            var recordNumber = request.RecordNumber?.Trim();

            if (string.IsNullOrWhiteSpace(recordNumber))
            {
                return new CheckRecordNumberResponse
                {
                    Exists = false
                };
            }

            var rowFields = MyRow.Fields;

            var existing = connection.TryFirst<MyRow>(query =>
            {
                query
                    .Select(rowFields.ClientId)
                    .Where(rowFields.RecordNumber == recordNumber);

                // When editing, exclude the patient currently open in the dialog.
                if (request.ClientId.HasValue)
                {
                    query.Where(rowFields.ClientId != request.ClientId.Value);
                }
            });

            return new CheckRecordNumberResponse
            {
                Exists = existing != null
            };
        }

        [HttpPost]
        public Task<EligibilityResponse> CheckPatientEligibility(EligibilityRequest req)
        {
            return new MyRepository(Context).CheckPatientEligibility(req);
        }
    }
}
