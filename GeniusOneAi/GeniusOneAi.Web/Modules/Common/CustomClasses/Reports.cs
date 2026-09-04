using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Globalization;
using System.IO;
using System.Linq;
using GeniusOneAi.Administration;
using GeniusOneAi.Dashboards;
using GeniusOneAi.Reports;
using GeniusOneAi.WorkerPortal;
using Serenity;
using Serenity.Data;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class Reports : GeniusOneBase
    {
        private static int tenantId = -1;
        public static ReportModel GetReportData(string fileName)
        {
            var data = new ReportModel();

            using var connection = new SqlConnection(DbConn);
            {
                var fields = ReportsRow.Fields;
                var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.ReportFileName == fileName)).FirstOrDefault();
                if (row == null)
                {
                    data.fileName = fileName+".trdp";
                    data.tenantId = -1;
                    return data;
                }
                data.fileName = row.ReportFileName+".trdp";
                data.tenantId = row.TenantId;
            }
            return data;
        }
        public static void CreateCustomReport(string fileName)
        {
            var sourceFile = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "Reports\\BlankTemplate.trdp"; 
            var destinationFile = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "Reports\\"+fileName+".trdp";
            File.Copy(sourceFile, destinationFile);
        }
        public static void DeleteCustomReport(string fileName)
        {
            var sourceFile = (string)AppDomain.CurrentDomain.GetData("\\ContentRootPath") + "Reports\\" + fileName + ".trdp";
            File.Delete(sourceFile);
        }

    }

}