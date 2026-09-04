using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<GeniusOneAi.AgencyAdministration.TemplateCodeListRow>;
using MyRow = GeniusOneAi.AgencyAdministration.TemplateCodeListRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface ITemplateCodeListRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateCodeListRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateCodeListRetrieveHandler
    {
        public TemplateCodeListRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}