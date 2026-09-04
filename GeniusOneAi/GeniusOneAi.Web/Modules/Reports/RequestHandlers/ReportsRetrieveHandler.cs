using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.Reports.ReportsRow>;
using MyRow = GeniusOneAi.Reports.ReportsRow;

namespace GeniusOneAi.Reports
{
    public interface IReportsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IReportsRetrieveHandler
    {
        public ReportsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}