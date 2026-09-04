using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = GeniusOneAi.AgencyAdministration.TemplateCodeListRow;

namespace GeniusOneAi.AgencyAdministration
{
    public interface ITemplateCodeListDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateCodeListDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateCodeListDeleteHandler
    {
        public TemplateCodeListDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}