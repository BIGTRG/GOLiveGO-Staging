using System.Net.Mail;
using System.Net;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using GeniusOneAi.Modules.Common.CustomClasses;
using System.Xml.Linq;
using Serenity.Data;
using System.Globalization;
using System.Linq;
using GeniusOneAi.Administration;
using GeniusOneAi.MiscEntities.Entities;
using GeniusOneAi.WorkerManager.Entities;
//using Telerik.Reporting;
using System.Collections;
using GeniusOneAi.Workflows.Entities;
using SqlMapper = Dapper.SqlMapper;
using pdftron.PDF;

namespace GeniusOneAi.Web.Modules.Common.CustomClasses
{
    public class Email : GeniusOneBase
    {
        public string SubmittedProgressSubject => "GeniusOneAi Progress Notes Notification (Submitted)";
        public string ReSubmittedProgressSubject => "GeniusOneAi Progress Notes Notification (Re-Submitted)";
        public string SubmittedSignatureSubject => "GeniusOneAi Signature Approval Needed for - ";
        public string SubmittedProgressBody => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  " +
                                               "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" " +
                                               "content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Progress Notes Notification</title>\r\n" +
                                               "</head>\r\n<body>\r\n  <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\r\n    " +
                                               "<p>A worker has submitted progress notes to be reviewed.</p>\r\n    <p>Please login to GeniusOneAi to review.</p>\r\n    " +
                                               "<p>Regards,</p>\r\n    <p>GeniusOneAi support team</p>\r\n  </div>\r\n</body>\r\n</html>\r\n";
        public string ReSubmittedProgressBody => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  " +
                                       "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" " +
                                       "content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Progress Notes Notification</title>\r\n" +
                                       "</head>\r\n<body>\r\n  <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\r\n    " +
                                       "<p>A worker has re-submitted a progress note to be reviewed again.</p>\r\n    <p>Please login to GeniusOneAi to review.</p>\r\n    " +
                                       "<p>Regards,</p>\r\n    <p>GeniusOneAi support team</p>\r\n  </div>\r\n</body>\r\n</html>\r\n";
        public string SubmittedSignatureBody => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  " +
                                              "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" " +
                                              "content=\"width=device-width, initial-scale=1.0\">\r\n  <title>New GeniusOne Signature Approval Needed</title>\r\n" +
                                              "</head>\r\n<body>\r\n  <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\r\n    " +
                                              "<p>A worker has submitted a new signature to be reviewed.</p>\r\n    <p>Please login to GeniusOneAi to review.</p>\r\n    " +
                                              "<p>Regards,</p>\r\n    <p>GeniusOneAi support team</p>\r\n  </div>\r\n</body>\r\n</html>\r\n";
        //public string ApprovedProgressSubject => "GeniusOne Progress Notes Notification (Approved)";
        //public string ApprovedProgressBody => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  " +
        //                                      "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" " +
        //                                      "content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Progress Notes Notification</title>\r\n" +
        //                                      "</head>\r\n<body>\r\n  <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\r\n    " +
        //                                      "<p>.</p>\r\n    <p>Please login to GeniusOneAi to review.</p>\r\n    " +
        //                                      "<p>Regards,</p>\r\n    <p>GeniusOneAi support team</p>\r\n  </div>\r\n</body>\r\n</html>\r\n";
        public string RejectedProgressSubject => "GeniusOne Progress Notes Notification (Rejected)";
        public string RejectedProgressBody => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  " +
                                              "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" " +
                                              "content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Progress Notes Notification</title>\r\n" +
                                              "</head>\r\n<body>\r\n  <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\r\n    " +
                                              "<p>You have a progress note that was rejected.</p>\r\n    <p>Please login to GeniusOneAi to review.</p>\r\n    " +
                                              "<p>Regards,</p>\r\n    <p>GeniusOneAi support team</p>\r\n  </div>\r\n</body>\r\n</html>\r\n";
        public void SendEmail(string recipientEmail, string subject, string body)
        {
            try
            {
                // Set the sender's email address and password
                string senderEmail = EmailSender;
                string password = EmailPassword;

                // Set Network Solutions SMTP server details
                string smtpServer = EmailSmtp;
                int port = int.Parse(EmailPort); // or 25 if 587 doesn't work

                // Create a new SMTP client
                using (SmtpClient client = new SmtpClient(smtpServer, port))
                {
                    client.EnableSsl = true;
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential(senderEmail, password);

                    // Create a new email message
                    using (MailMessage message = new MailMessage(senderEmail, recipientEmail))
                    {
                        message.Subject = subject;
                        message.Body = body;
                        message.IsBodyHtml = true;

                        // Send the email
                        client.Send(message);
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle any exceptions
                Console.WriteLine("An error occurred while sending the email: " + ex.Message);
            }
        }
        public List<int> GetSystemUserAlerts()
        {
            using var connection = new SqlConnection(DbConn);
            var lst = new List<int>();
            var usrFields = UserRow.Fields;
            var userRows = connection.Query<int>(new SqlQuery().From(usrFields)
                .Select(usrFields.UserId)
                .Where(usrFields.RecAlerts == 1));
            lst.AddRange(userRows);
            return lst;

        }
        public List<string> GetRecipientsEmail(List<int> ids)
        {
            using var connection = new SqlConnection(DbConn);
            var emails = new List<string>();
            var query = $"select Email from users where userid in ({string.Join(",", ids)});";
            var rows = connection.Query(query);
            if (rows == null) return emails;
            emails = rows.Select(row => row.Email).Cast<string>().ToList();
            return emails;

        }
        public string GetRecipientEmail(int id)
        {
            using var connection = new SqlConnection(DbConn);
            var query = $"select Email from users where userid = {id};";
            var row = connection.Query(query).FirstOrDefault();
            if (row == null) return "";
            return row.Email.ToString();

        }
        public List<int> GetTeamLead(int activityId)
        {
            using var connection = new SqlConnection(DbConn);
            var lst = new List<int>();
            var authId = GetAuthId(activityId);
            var caseFields = WorkerCaseAssignmentsRow.Fields;
            var userRows = connection.Query<int>(new SqlQuery().From(caseFields)
                .Select(caseFields.UserId)
                .Where(caseFields.AuthorizationId == authId)
                .Where(caseFields.IsTeamLead == 1));
            lst.AddRange(userRows);
            return lst;
        }
        public int GetAuthId(int activityId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = ActivitiesRow.Fields;
            // Encounter-engine activities (mobile crisis episodes) carry no authorization; a NULL here used to throw inside Dapper on sign.
            var actId = connection.Query<int?>(new SqlQuery().From(fields)
                .Select(fields.AuthorizationId)
                .Where(fields.ActivityId == activityId)).FirstOrDefault();
            return actId ?? 0;
        }
        public int GetAuthWorkerId(int activityId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = ActivitiesRow.Fields;
            var actId = connection.Query<int>(new SqlQuery().From(fields)
                .Select(fields.UserId)
                .Where(fields.ActivityId == activityId)).FirstOrDefault();
            return actId;
        }
        public string GetLastNoteRejectorEmail(int activityId)
        {
            using var connection = new SqlConnection(DbConn);

            var fields = ActivitiesLogRow.Fields;

            return connection.Query<string>(
                new SqlQuery()
                    .From(fields)
                    .Select(fields.UserEmail)
                    .Where(fields.ActivityId == activityId)
                    .OrderBy(fields.ActivitiesLogId,true)
            ).FirstOrDefault() ?? string.Empty;
        }
    }
}