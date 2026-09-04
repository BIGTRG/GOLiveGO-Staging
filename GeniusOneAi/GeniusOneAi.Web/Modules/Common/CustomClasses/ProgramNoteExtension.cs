using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Web;
using GeniusOneAi.Administration;
using GeniusOneAi.ProgramNoteManager.Entities;
using GeniusOneAi.WorkerManager.Entities;
using GeniusOneAi.WorkerPortal;
using NUglify.Html;
using Serenity.Data;
using Serenity.Services;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class ProgramNoteExtension : GeniusOneBase
    {

        public static GetSignageResponse GetSignage(string userId)
        {
            var sig = new GetSignageResponse();

            using (var connection = new SqlConnection(DbConn))
            {
                var gd = Guid.NewGuid();
                var fld = UserRow.Fields;
                var rec = connection.Query(new SqlQuery().From(fld)
                    .Select(fld.ESignatureBase64, fld.ESignaturePlainText, fld.SignatureVerified)
                    .Where(fld.UserId == int.Parse(userId))).FirstOrDefault();
                if (rec == null) return sig;
                sig.signatureGuid = gd.ToString();
                sig.signatureImage = rec.ESignatureBase64;
                sig.signatureText = rec.ESignaturePlainText;
                sig.signatureVerified = (bool)rec.SignatureVerified;
            }
            return sig;
        }
        public static bool UpdateNoteSubmit(int noteId)
        {

            using (var connection = new SqlConnection(DbConn))
            {
                var updateQuery = $"UPDATE [ProgramNotes] SET OriginalSubmittalDate = '{DateTime.Now}' WHERE ProgramNoteId = {noteId} and (OriginalSubmittalDate is null or OriginalSubmittalDate = '') ;";
                connection.Execute(updateQuery);
            }

            return true;
        }
    }
    public class GetSignageResponse : ServiceResponse
    {
        public string signatureText { get; set; }
        public string signatureImage { get; set; }
        public string signatureGuid { get; set; }
        public bool signatureVerified { get; set; }
    }
}