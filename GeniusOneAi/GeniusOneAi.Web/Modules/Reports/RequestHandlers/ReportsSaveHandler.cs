using GeniusOneAi.Modules.Common.CustomClasses;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.Reports.ReportsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.Reports.ReportsRow;

namespace GeniusOneAi.Reports
{
    public interface IReportsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReportsSaveHandler
    {
        public ReportsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void SetInternalFields()
        {
            base.SetInternalFields();
            var fileName = Guid.NewGuid();
            if (IsCreate)
            {
                Row.ReportType = "Custom";
                Row.ReportFileName = fileName.ToString();
                Row.TenantId = 1;
            }
        }
        protected override void AfterSave()
        {
            base.AfterSave();
            if (IsCreate)
            {
                Modules.Common.CustomClasses.Reports.CreateCustomReport(Row.ReportFileName);
            }
        }
    }
}