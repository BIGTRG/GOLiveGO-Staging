using GeniusOneAi.Modules.Common.CustomClasses;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using System.Linq;
using MyRow = GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorRow;

namespace GeniusOneAi.ClientManager.Endpoints
{
    [Route("Services/ClientManager/ClientGoalsLibrarySelector/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ClientGoalsLibrarySelectorController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] IClientGoalsLibrarySelectorSaveHandler handler)
        {
            return handler.Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] IClientGoalsLibrarySelectorSaveHandler handler)
        {
            return handler.Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
            [FromServices] IClientGoalsLibrarySelectorDeleteHandler handler)
        {
            return handler.Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
            [FromServices] IClientGoalsLibrarySelectorRetrieveHandler handler)
        {
            return handler.Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
            [FromServices] IClientGoalsLibrarySelectorListHandler handler)
        {
            return handler.List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
            [FromServices] IClientGoalsLibrarySelectorListHandler handler,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request, handler).Entities;
            var bytes = exporter.Export(data, typeof(Columns.ClientGoalsLibrarySelectorColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "ClientGoalsLibrarySelectorList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }
        public BaseResponse CopyGoalsToClient(BaseRecsRequest ids)
        {
            return PatientExtention.CopyGoalsToClient(ids);
        }

        /// <summary>Phase-aware copy: goal + interventions + projected outcomes onto the client's open episode.</summary>
        [HttpPost]
        public CopyLibraryGoalsResponse CopyLibraryGoals(IUnitOfWork uow, CopyLibraryGoalsRequest request)
        {
            if (request.ClientId == null || request.Ids == null || request.Ids.Length == 0)
                throw new ValidationError("Select at least one goal.");
            var uid = int.TryParse(User?.GetIdentifier(), out var u) ? u : (int?)null;
            var r = CrisisEpisodes.Services.LibraryCopyService.Copy(uow, request.ClientId.Value, request.EpisodeId, request.Phase, request.Ids, uid);
            return new CopyLibraryGoalsResponse { Copied = r.Copied, Skipped = r.Skipped, GoalIds = r.GoalIds.ToArray() };
        }
    }

    public class CopyLibraryGoalsRequest : ServiceRequest
    {
        public int? ClientId { get; set; }
        public int? EpisodeId { get; set; }
        public string Phase { get; set; }
        public int[] Ids { get; set; }
    }
    public class CopyLibraryGoalsResponse : ServiceResponse
    {
        public int Copied { get; set; }
        public int Skipped { get; set; }
        public int[] GoalIds { get; set; }
    }
}