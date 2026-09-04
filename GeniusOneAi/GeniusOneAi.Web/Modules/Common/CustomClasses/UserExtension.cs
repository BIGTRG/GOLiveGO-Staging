using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Web;
using GeniusOneAi.Administration;
using GeniusOneAi.AgencyAdministration.Entities;
using GeniusOneAi.Membership;
using GeniusOneAi.MiscEntities.Entities;
using GeniusOneAi.WorkerManager.Entities;
using MVC;
using NUglify.Html;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class UserExtension : GeniusOneBase
    {
        public static eSignaturePageModel GetUserSignatureData(int uid)
        {
            var rec = new eSignaturePageModel();
            var userId = uid;
            using var connection = new SqlConnection(DbConn);
            var fields = WorkersRow.Fields;
            var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.UserId == userId)).FirstOrDefault();
            if (row == null) return rec;
            rec.eSignaturePlainText = row.eSignaturePlainText;
            rec.IsVerified = row.SignatureVerified;
            rec.eSignatureImage = row.eSignatureBase64;
            return rec;
        }
        public static bool GetUserFormsDue(){return true;}
        public static bool GetUserCredentalDue() { return true; }

    }
}