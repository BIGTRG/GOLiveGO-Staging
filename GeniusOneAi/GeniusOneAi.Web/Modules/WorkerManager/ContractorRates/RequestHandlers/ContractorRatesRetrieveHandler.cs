using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.WorkerManager.ContractorRatesRow>;
using MyRow = GeniusOneAi.WorkerManager.ContractorRatesRow;

namespace GeniusOneAi.WorkerManager
{
    public interface IContractorRatesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ContractorRatesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IContractorRatesRetrieveHandler
    {
        public ContractorRatesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}