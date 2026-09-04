using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.Workflows.BillingLogRow;

namespace GeniusOneAi.Workflows
{
    public interface IBillingLogDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BillingLogDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBillingLogDeleteHandler
    {
        public BillingLogDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}