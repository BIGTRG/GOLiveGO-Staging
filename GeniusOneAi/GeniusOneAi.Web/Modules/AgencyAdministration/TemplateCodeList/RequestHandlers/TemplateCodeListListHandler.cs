using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.AgencyAdministration.TemplateCodeListRow>;
using MyRow = GeniusOneAi.AgencyAdministration.TemplateCodeListRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface ITemplateCodeListListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateCodeListListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateCodeListListHandler
    {
        public TemplateCodeListListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}