using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.WorkerManager.ContractorRatesRow;

namespace GeniusOneAi.WorkerManager
{
    public interface IContractorRatesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ContractorRatesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IContractorRatesDeleteHandler
    {
        public ContractorRatesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}