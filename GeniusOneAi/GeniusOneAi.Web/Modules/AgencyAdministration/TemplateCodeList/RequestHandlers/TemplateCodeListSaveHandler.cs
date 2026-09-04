using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.AgencyAdministration.TemplateCodeListRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.AgencyAdministration.TemplateCodeListRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface ITemplateCodeListSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateCodeListSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateCodeListSaveHandler
    {
        public TemplateCodeListSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}