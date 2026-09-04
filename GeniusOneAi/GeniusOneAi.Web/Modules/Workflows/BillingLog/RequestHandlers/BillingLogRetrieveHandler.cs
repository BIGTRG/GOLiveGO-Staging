using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.Workflows.BillingLogRow>;
using MyRow = GeniusOneAi.Workflows.BillingLogRow;

namespace GeniusOneAi.Workflows
{
    public interface IBillingLogRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillingLogRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBillingLogRetrieveHandler
    {
        public BillingLogRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}