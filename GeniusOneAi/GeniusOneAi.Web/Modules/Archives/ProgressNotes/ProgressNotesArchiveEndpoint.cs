
using System;
using System.IO;
using System.Linq;
using OfficeOpenXml;
using OfficeOpenXml.Style;

namespace GeniusOneAi.Archives.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.ProgressNotesArchiveRepository;
    using MyRow = Entities.ProgressNotesArchiveRow;
    using GeniusOneAi.Archives.Entities;
    using Serenity.Extensions.Repositories;
    using Serenity.Web;
    using GleamTech.AspNet;
    using System.Globalization;
    using Serenity.Reporting;
    using Microsoft.Extensions.DependencyModel;
    using GeniusOneAi.AgencyAdministration;

    [Route("Services/Archive/ProgressNotes/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ProgressNotesArchiveController : ServiceEndpoint
    {
        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        //[HttpPost]
        //public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        //{
        //    return new MyRepository(Context).List(connection, request);
        //}
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
           [FromServices] IProgressNotesArchiveListHandler handler)
        {
            return handler.List(connection, request);
        }
        [HttpPost]
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
            [FromServices] IProgressNotesArchiveListHandler handler,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request, handler).Entities;
            var bytes = exporter.Export(data, typeof(Columns.ProgressNotesArchiveColumns), request.ExportColumns);

            // The Submission value contains a line break between the date and
            // On time/Late. Apply Excel wrapping and enough row height so both
            // lines are visible in the exported workbook.
            bytes = FormatSubmissionColumn(bytes);

            return ExcelContentResult.Create(bytes, "ProgressNotesArchiveList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }

        private static byte[] FormatSubmissionColumn(byte[] workbookBytes)
        {
            using (var stream = new MemoryStream(workbookBytes))
            using (var package = new ExcelPackage(stream))
            {
                var worksheet = package.Workbook.Worksheets.FirstOrDefault();

                if (worksheet == null || worksheet.Dimension == null)
                    return workbookBytes;

                var submissionColumn = 0;

                for (var column = 1; column <= worksheet.Dimension.End.Column; column++)
                {
                    var header = worksheet.Cells[1, column].Text?.Trim();

                    if (string.Equals(header, "Submission",
                        StringComparison.OrdinalIgnoreCase))
                    {
                        submissionColumn = column;
                        break;
                    }
                }

                if (submissionColumn == 0 || worksheet.Dimension.End.Row < 2)
                    return workbookBytes;

                var submissionCells = worksheet.Cells[
                    2,
                    submissionColumn,
                    worksheet.Dimension.End.Row,
                    submissionColumn];

                submissionCells.Style.WrapText = true;
                submissionCells.Style.VerticalAlignment = ExcelVerticalAlignment.Center;

                // Keep the date and status readable without requiring the user
                // to manually turn on Wrap Text or resize every exported row.
                for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
                {
                    var value = worksheet.Cells[row, submissionColumn].Value as string;

                    if (!string.IsNullOrWhiteSpace(value) &&
                        (value.Contains("\n") || value.Contains("\r")))
                    {
                        worksheet.Row(row).Height = Math.Max(
                            worksheet.Row(row).Height, 30D);
                    }
                }

                worksheet.Column(submissionColumn).Width = Math.Max(
                    worksheet.Column(submissionColumn).Width, 25D);

                return package.GetAsByteArray();
            }
        }
    }
}
