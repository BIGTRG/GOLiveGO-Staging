using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.Workflows.BillingLogRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.Workflows.BillingLogRow;

namespace GeniusOneAi.Workflows
{
    public interface IBillingLogSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillingLogSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBillingLogSaveHandler
    {
        public BillingLogSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}