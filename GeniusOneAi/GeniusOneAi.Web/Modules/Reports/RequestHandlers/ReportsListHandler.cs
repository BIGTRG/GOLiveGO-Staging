using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.Reports.ReportsRow>;
using MyRow = GeniusOneAi.Reports.ReportsRow;

namespace GeniusOneAi.Reports
{
    public interface IReportsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IReportsListHandler
    {
        public ReportsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}