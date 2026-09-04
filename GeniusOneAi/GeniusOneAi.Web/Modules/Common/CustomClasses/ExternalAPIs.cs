using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;
using GeniusOneAi.AgencyAdministration.Entities;
using GeniusOneAi.MiscEntities.Entities;
using Microsoft.Data.SqlClient;
using Serenity.Data;
using StackExchange.Exceptional.Internal;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class ExternalAPIs : GeniusOneBase
    {
        private static ISqlConnections sqlConnections;
        private static readonly HttpClient _client = new HttpClient();

        public static async Task<string> CheckPatientEligibility(EligibilityRequest patient)
        {
            _client.DefaultRequestHeaders.Add("Accept", "application/xml");

            List<KeyValuePair<string, string>> postData = new List<KeyValuePair<string, string>>();
            postData.Add(new KeyValuePair<string, string>("AccountKey", ClaimMdApiKey));
            postData.Add(new KeyValuePair<string, string>("ins_name_l", patient.FirstName));
            postData.Add(new KeyValuePair<string, string>("ins_name_f", patient.LastName));
            postData.Add(new KeyValuePair<string, string>("payerid", GetPayerId(int.Parse(patient.InsuranceId))));
            postData.Add(new KeyValuePair<string, string>("pat_rel", "18"));
            postData.Add(new KeyValuePair<string, string>("fdos", patient.ServiceDate));
            postData.Add(new KeyValuePair<string, string>("prov_npi", GetProviderNpi(int.Parse(patient.SiteTypeId))));
            var request = await _client.PostAsync("https://www.claim.md/services/eligdata/", new FormUrlEncodedContent(postData));
            var response = await request.Content.ReadAsStringAsync();

            return response;
        }

        public static EligibilityResponse FormatPatientData(string xmlData)
        {
            var xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(xmlData);
            var response = new EligibilityResponse();
            var errorNode = xmlDoc.SelectSingleNode("//error");
            var htmlData = "";
            if (errorNode != null)
            {
                var errorMessage = errorNode.Attributes?["error_mesg"]?.Value;
                var errorCode = errorNode.Attributes?["error_code"]?.Value;
                htmlData += "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    " +
                            "<meta charset=\"UTF-8\">\r\n    " +
                            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    " +
                            "<title>View Eligibility</title>\r\n    " +
                            "<style>\r\n " +
                            "td {\r\n            " +
                            "text-align: right;\r\n        }\r\n    " +
                            "</style>\r\n</head>\r\n<body>";
                htmlData += "<table><thead><tr><th></th><th></th></tr></thead>";
                htmlData += "<tbody>";
                htmlData += $"<tr><td>Code:</td><td>{errorCode}</td></tr>";
                htmlData += $"<tr><td>Message:</td><td>{errorMessage}</td></tr>";
                htmlData += "</tbody></table></body>\r\n</html>";
                response.Response = htmlData;
                response.isError = true;
                return response;
            }

            var dataNode = xmlDoc.SelectSingleNode("//elig");
            if (dataNode == null)
            {
                response.isError = true;
                return response;
            }
            var insuranceName = dataNode.Attributes?["ins_name_l"]?.Value+", "+dataNode.Attributes?["ins_name_f"]?.Value;
            var policyNum = dataNode.Attributes?["ins_number"]?.Value;
            var groupNum = dataNode.Attributes?["group_number"]?.Value;
            var planNum = dataNode.Attributes?["plan_number"]?.Value;
            var insDob = dataNode.Attributes?["ins_dob"]?.Value;
            var insGender = dataNode.Attributes?["ins_sex"]?.Value;
            var insAddress = dataNode.Attributes?["ins_addr_1"]?.Value;
            var insCity = dataNode.Attributes?["ins_city"]?.Value;
            var insState = dataNode.Attributes?["ins_state"]?.Value;
            var insZipcode = dataNode.Attributes?["ins_zip"]?.Value;
            var planBegin = dataNode.Attributes?["plan_begin_date"]?.Value;
            if (insDob.HasValue()) insDob = GetDateFormat(insDob);
            
            htmlData += "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    " +
                        "<meta charset=\"UTF-8\">\r\n    " +
                        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    " +
                        "<title>View Eligibility</title>\r\n    " +
                        "<style>\r\n " +
                        "td {\r\n            " +
                        "text-align: right;\r\n        }\r\n    " +
                        "</style>\r\n</head>\r\n<body>";

            htmlData += "<table><thead><tr><th></th><th></th></tr></thead>";
            htmlData += "<tbody>";
            htmlData += $"<tr><td>Insured Name</td><td>{insuranceName}</td></tr>";
            htmlData += $"<tr><td>Policy #:</td><td>{policyNum}</td></tr>";
            htmlData += $"<tr><td>Group #:</td><td>{groupNum}</td></tr>";
            htmlData += $"<tr><td>Plan #:</td><td>{planNum}</td></tr>";
            htmlData += $"<tr><td>Insured DOB:</td><td>{GetDateFormat(insDob)}</td></tr>";
            htmlData += $"<tr><td>Insured Gender:</td><td>{insGender}</td></tr>";
            htmlData += $"<tr><td>Plan Begin:</td><td>{GetDateFormat(planBegin)}</td></tr>";
            htmlData += $"<tr><td>Insured Address:</td><td>{insAddress}</td></tr>";
            htmlData += $"<tr><td></td><td>{insCity}, {insState} {insZipcode}</td></tr>";
            htmlData += "</tbody></table></body>\r\n</html>";
            response.Response = htmlData;
            response.isError = false;
            response.PolicyNumber = policyNum;
            response.GroupNumber = groupNum;
            response.PlanNumber = planNum;
            response.insDob = insDob;
            response.insGender = insGender;
            response.insAddress1 = insAddress;
            response.insCity = insCity;
            response.insState = insState.HasValue() ? GetStateId(insState).ToString() : string.Empty;
            response.insZipcode = insZipcode;
            return response;
        }

        public static string GetPayerId(int insId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = InsuranceTypesRow.Fields;
            var row = connection
                .Query(new SqlQuery().From(fields).Select(fields.PayerId).Where(fields.InsuranceTypeId == insId))
                .SingleOrDefault();
            return row.PayerId != null ? row.PayerId : string.Empty;
        }

        public static string GetProviderNpi(int siteId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = SitesTypesRow.Fields;
            var row = connection
                .Query(new SqlQuery().From(fields).Select(fields.Npi).Where(fields.SiteTypeId == siteId))
                .SingleOrDefault();
            return row.Npi != null ? row.Npi : string.Empty;
        }

        public static string GetDateFormat(string dt)
        {
            var format = "yyyyMMdd";
            var dateParts = dt.Split('-');

            if (dateParts.Length > 1)
            {
                var startDate =
                    DateTime.TryParseExact(dateParts[0], format, null, System.Globalization.DateTimeStyles.None,
                        out DateTime result2)
                        ? result2.ToString("MM/dd/yyyy") : dt;

                var endDate =
                    DateTime.TryParseExact(dateParts[1], format, null, System.Globalization.DateTimeStyles.None,
                        out DateTime result3)
                        ? result3.ToString("MM/dd/yyyy") : dt;
                return startDate + " - " + endDate;
            }

            var singleDate = DateTime.TryParseExact(dt, format, null, System.Globalization.DateTimeStyles.None,
                out DateTime result1) ? result1.ToString("MM/dd/yyyy") : dt;


            return singleDate;
        }

    }
}

