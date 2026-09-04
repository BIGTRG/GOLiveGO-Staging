using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.WorkerManager.ContractorRatesRow>;
using MyRow = GeniusOneAi.WorkerManager.ContractorRatesRow;

namespace GeniusOneAi.WorkerManager
{
    public interface IContractorRatesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ContractorRatesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IContractorRatesListHandler
    {
        public ContractorRatesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}