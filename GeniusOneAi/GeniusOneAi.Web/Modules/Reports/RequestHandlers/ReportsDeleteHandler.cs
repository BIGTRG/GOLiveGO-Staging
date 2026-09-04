using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.Reports.ReportsRow;

namespace GeniusOneAi.Reports
{
    public interface IReportsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IReportsDeleteHandler
    {
        public ReportsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void OnBeforeDelete()
        {
            base.OnBeforeDelete();
            Modules.Common.CustomClasses.Reports.DeleteCustomReport(Row.ReportFileName);
        }

    }
}