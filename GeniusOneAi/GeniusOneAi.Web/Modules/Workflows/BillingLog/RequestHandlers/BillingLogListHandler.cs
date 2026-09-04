using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.Workflows.BillingLogRow>;
using MyRow = GeniusOneAi.Workflows.BillingLogRow;

namespace GeniusOneAi.Workflows
{
    public interface IBillingLogListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BillingLogListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBillingLogListHandler
    {
        public BillingLogListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}