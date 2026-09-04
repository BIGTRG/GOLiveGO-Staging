using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.WorkerManager.ContractorRatesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.WorkerManager.ContractorRatesRow;

namespace GeniusOneAi.WorkerManager
{
    public interface IContractorRatesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ContractorRatesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IContractorRatesSaveHandler
    {
        public ContractorRatesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}