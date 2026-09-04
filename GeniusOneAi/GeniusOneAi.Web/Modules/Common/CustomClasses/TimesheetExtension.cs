using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using GeniusOneAi.AgencyAdministration;
using GeniusOneAi.AgencyAdministration.Entities;
using GeniusOneAi.ClientManager;
using GeniusOneAi.ClientManager.Entities;
using GeniusOneAi.MiscEntities.Entities;
using GeniusOneAi.WorkerManager.Entities;
using GeniusOneAi.Workflows.Entities;
using Serenity.Data;
using static MVC.Views.Administration;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class TimesheetExtension : GeniusOneBase
    {
        private static Dictionary<int, string> _locationLookup = new Dictionary<int, string>
        {
            { 1, "Face To Face" }, { 2, "Telehealth" }, { 3, "Face to Face/COVID" },{ 4, "Non Face to Face" }
        };
        private static Dictionary<string, string> _dayMappings = new Dictionary<string, string>
                    {
                        { "Monday", "IsActiveMonday = '1'" },
                        { "Tuesday", "IsActiveTuesday = '1'" },
                        { "Wednesday", "IsActiveWednesday = '1'" },
                        { "Thursday", "IsActiveThursday = '1'" },
                        { "Friday", "IsActiveFriday = '1'" },
                        { "Saturday", "IsActiveSaturday = '1'" },
                        { "Sunday", "IsActiveSunday = '1'" }
                    };
        public static WorkerManager.Entities.WorkerCaseAssignmentsRow GetBillInfo(int clientId, int location, int uid)
        {
            var rec = new WorkerManager.Entities.WorkerCaseAssignmentsRow();
            using var connection = new SqlConnection(DbConn);
            var fld = WorkerManager.Entities.WorkerCaseAssignmentsRow.Fields;
            var recs = connection.Query(new SqlQuery().From(fld)
                .Select(fld.AuthorizationId,fld.BillCode, fld.AuthorizationUnitContactGranted, fld.AuthorizationStartDate, fld.AuthorizationEndDate, fld.ProgramTypeId)
                .Where(fld.ClientId == clientId && fld.UserId == uid)
                //.Where(fld.AuthorizationStatus == "Approved")-----------------------------------------This needs to be reviewed
                //.Where(fld.AuthorizationEndDate > DateTime.Now)
            ).FirstOrDefault();
            if (recs == null) return rec;
            //Todo:  Convert to typed object and properties
            rec.BillCode = recs.BillCode;
            rec.AuthorizationUnitContactGranted = recs.AuthorizationUnitContactGranted;
            rec.AuthorizationStartDate = recs.AuthorizationStartDate;
            rec.AuthorizationEndDate = recs.AuthorizationEndDate;
            rec.AuthorizationStatus = recs.AuthorizationStatus;
            rec.ProgramTypeId = recs.ProgramTypeId;
            rec.AuthorizationId = recs.AuthorizationId;

            return rec;
        }
        public static int GetTemplateId(int programTypeId)
        {
            var progId = 0;
            using var connection = new SqlConnection(DbConn);

            var fld = ProgramTypesRow.Fields;
            var recs = connection.Query(new SqlQuery().From(fld)
                .Select(fld.ProgramNoteTemplateId)
                .Where(fld.Status == 1 && fld.ProgramTypeId == programTypeId)).FirstOrDefault();
            if (recs == null) return progId;
            progId = recs.ProgramNoteTemplateId;



            return progId;
        }
        public static double GetCalculatedHours(TimeSpan start, TimeSpan end)
        {
            var duration = (end - start);
            return duration.TotalHours;
        }
        public static TimesheetNoteDataRow GetTimeSheetNoteDate(int id, int uid)
        {
            var rec = new TimesheetNoteDataRow();
            using var connection = new SqlConnection(DbConn);
            var fields = TimesheetNoteDataRow.Fields;
            var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.ActivityId == id && fields.UserId == uid)).FirstOrDefault();

            if (row != null)
            {
                rec.ActivityId = row.ActivityId;
                rec.UserId = row.UserId;
                rec.ClientId = row.ClientId;
                rec.Activity = row.Activity;
                rec.ActivityDate = row.ActivityDate;
                rec.ActivityFromTime = row.ActivityFromTime;
                rec.ActivityToTime = row.ActivityToTime;
                rec.IsBillable = row.IsBillable;
                rec.BillableAmount = row.BillableAmount;
                rec.Status = row.Status;
                rec.Notes = row.Notes;
                rec.InvoiceId = row.InvoiceId;
                rec.ProgressNoteId = row.ProgressNoteId;
                rec.ProgressNoteTemplateId = row.ProgressNoteTemplateId;
                rec.ProgressNoteInOut = row.ProgressNoteInOut;
                rec.BillCode = row.BillCode;
                rec.BillingModifier1 = row.BillingModifier1;
                rec.BillingModifier2 = row.BillingModifier2;
                rec.BillingModifier3 = row.BillingModifier3;
                rec.BillingModifier4 = row.BillingModifier4;
                rec.Hours = row.Hours;
                rec.TenantId = row.TenantId;
                rec.AuthorizationId = row.AuthorizationId;
                rec.WorkerFirstName = row.WorkerFirstName;
                rec.WorkerMiddleName = row.WorkerMiddleName;
                rec.WorkerLastName = row.WorkerLastName;
                rec.WorkerType = row.WorkerType;
                rec.FirstName = row.FirstName;
                rec.MiddleName = row.MiddleName;
                rec.LastName = row.LastName;
                rec.BirthDate = row.BirthDate;
                rec.Race = row.Race;
                rec.Gender = row.Gender;
                rec.RecordNumber = row.RecordNumber;
                rec.PrimaryInsuranceTypeId = row.PrimaryInsuranceTypeId;
                rec.PrimaryInsuranceNumber = row.PrimaryInsuranceNumber;
                rec.SecondaryInsuranceTypeId = row.SecondaryInsuranceTypeId;
                rec.SecondaryInsuranceNumber = row.SecondaryInsuranceNumber;
                rec.PrimaryInsuranceName = row.PrimaryInsuranceName;
                rec.PrimaryInsurancePayerId = row.PrimaryInsurancePayerId;
                rec.SecondaryInsuranceName = row.SecondaryInsuranceName;
                rec.SecondaryInsurancePayerId = row.SecondaryInsurancePayerId;
                rec.ProgramNoteTemplateId = row.ProgramNoteTemplateId;
                rec.Field00 = row.Field00;
                rec.Field01 = row.Field01;
                rec.Field02 = row.Field02;
                rec.Field03 = row.Field03;
                rec.Field04 = row.Field04;
                rec.Field05 = row.Field05;
                rec.Field06 = row.Field06;
                rec.Field07 = row.Field07;
                rec.Field08 = row.Field08;
                rec.Field09 = row.Field09;
                rec.Field10 = row.Field10;
                rec.NotesStatus = row.NotesStatus;
                rec.OriginalSubmittalDate = row.OriginalSubmittalDate;
                rec.DateSigned = row.DateSigned;
                rec.ESignaturePlainText = row.eSignaturePlainText;
                rec.SignatureImage = row.SignatureImage;
                rec.SignatureGuid = row.SignatureGUID;
                rec.FileName = row.FileName;
                rec.Field01Label = row.Field01Label;
                rec.Field02Label = row.Field02Label;
                rec.Field03Label = row.Field03Label;
                rec.Field04Label = row.Field04Label;
                rec.Field05Label = row.Field05Label;
                rec.Field06Label = row.Field06Label;
                rec.Field07Label = row.Field07Label;
                rec.Field08Label = row.Field08Label;
                rec.Field09Label = row.Field09Label;
                rec.Field10Label = row.Field10Label;
                rec.Field01Status = row.Field01Status;
                rec.Field02Status = row.Field02Status;
                rec.Field03Status = row.Field03Status;
                rec.Field04Status = row.Field04Status;
                rec.Field05Status = row.Field05Status;
                rec.Field06Status = row.Field06Status;
                rec.Field07Status = row.Field07Status;
                rec.Field08Status = row.Field08Status;
                rec.Field09Status = row.Field09Status;
                rec.Field10Status = row.Field10Status;
                rec.Field01Type = row.Field01Type;
                rec.Field02Type = row.Field02Type;
                rec.Field03Type = row.Field03Type;
                rec.Field04Type = row.Field04Type;
                rec.Field05Type = row.Field05Type;
                rec.Field06Type = row.Field06Type;
                rec.Field07Type = row.Field07Type;
                rec.Field08Type = row.Field08Type;
                rec.Field09Type = row.Field09Type;
                rec.Field10Type = row.Field10Type;
                rec.SiteName = row.SiteName;
                rec.ProgressNoteLocation = row.ProgressNoteLocation;
                rec.ProgramName = GetServiceProvided(row.ClientId, row.UserId, row.AuthorizationId);
                rec.ApprovedBy = row.ApprovedBy;
                rec.DateApproved = row.DateApproved;
                rec.GoalData = row.GoalData;
                rec.InterventionData = row.InterventionData;
            }


            return rec;
        }
        public static TimesheetNoteDataRow GetTimeSheetNoteDataAll(int id)
        {
            var rec = new TimesheetNoteDataRow();

            using var connection = new SqlConnection(DbConn);

            var fields = TimesheetNoteDataRow.Fields;
            var row = connection.Query(new SqlQuery().From(fields).Select("*").Where(fields.ActivityId == id)).FirstOrDefault();

            if (row != null)
            {
                rec.ActivityId = row.ActivityId;
                rec.UserId = row.UserId;
                rec.ClientId = row.ClientId;
                rec.Activity = row.Activity;
                rec.ActivityDate = row.ActivityDate;
                rec.ActivityFromTime = row.ActivityFromTime;
                rec.ActivityToTime = row.ActivityToTime;
                rec.IsBillable = row.IsBillable;
                rec.BillableAmount = row.BillableAmount;
                rec.Status = row.Status;
                rec.Notes = row.Notes;
                rec.InvoiceId = row.InvoiceId;
                rec.ProgressNoteId = row.ProgressNoteId;
                rec.ProgressNoteTemplateId = row.ProgressNoteTemplateId;
                rec.ProgressNoteInOut = row.ProgressNoteInOut;
                rec.BillCode = row.BillCode;
                rec.BillingModifier1 = row.BillingModifier1;
                rec.BillingModifier2 = row.BillingModifier2;
                rec.BillingModifier3 = row.BillingModifier3;
                rec.BillingModifier4 = row.BillingModifier4;
                rec.Hours = row.Hours;
                rec.TenantId = row.TenantId;
                rec.AuthorizationId = row.AuthorizationId;
                rec.WorkerFirstName = row.WorkerFirstName;
                rec.WorkerMiddleName = row.WorkerMiddleName;
                rec.WorkerLastName = row.WorkerLastName;
                rec.WorkerType = row.WorkerType;
                rec.FirstName = row.FirstName;
                rec.MiddleName = row.MiddleName;
                rec.LastName = row.LastName;
                rec.BirthDate = row.BirthDate;
                rec.Race = row.Race;
                rec.Gender = row.Gender;
                rec.RecordNumber = row.RecordNumber;
                rec.PrimaryInsuranceTypeId = row.PrimaryInsuranceTypeId;
                rec.PrimaryInsuranceNumber = row.PrimaryInsuranceNumber;
                rec.SecondaryInsuranceTypeId = row.SecondaryInsuranceTypeId;
                rec.SecondaryInsuranceNumber = row.SecondaryInsuranceNumber;
                rec.PrimaryInsuranceName = row.PrimaryInsuranceName;
                rec.PrimaryInsurancePayerId = row.PrimaryInsurancePayerId;
                rec.SecondaryInsuranceName = row.SecondaryInsuranceName;
                rec.SecondaryInsurancePayerId = row.SecondaryInsurancePayerId;
                rec.ProgramNoteTemplateId = row.ProgramNoteTemplateId;
                rec.Field00 = row.Field00;
                rec.Field01 = row.Field01;
                rec.Field02 = row.Field02;
                rec.Field03 = row.Field03;
                rec.Field04 = row.Field04;
                rec.Field05 = row.Field05;
                rec.Field06 = row.Field06;
                rec.Field07 = row.Field07;
                rec.Field08 = row.Field08;
                rec.Field09 = row.Field09;
                rec.Field10 = row.Field10;
                rec.NotesStatus = row.NotesStatus;
                rec.OriginalSubmittalDate = row.OriginalSubmittalDate;
                rec.DateSigned = row.DateSigned;
                rec.ESignaturePlainText = row.ESignaturePlainText;
                rec.SignatureImage = row.SignatureImage;
                rec.SignatureGuid = row.SignatureGUID;
                rec.FileName = row.FileName;
                rec.Field01Label = row.Field01Label;
                rec.Field02Label = row.Field02Label;
                rec.Field03Label = row.Field03Label;
                rec.Field04Label = row.Field04Label;
                rec.Field05Label = row.Field05Label;
                rec.Field06Label = row.Field06Label;
                rec.Field07Label = row.Field07Label;
                rec.Field08Label = row.Field08Label;
                rec.Field09Label = row.Field09Label;
                rec.Field10Label = row.Field10Label;
                rec.Field01Status = row.Field01Status;
                rec.Field02Status = row.Field02Status;
                rec.Field03Status = row.Field03Status;
                rec.Field04Status = row.Field04Status;
                rec.Field05Status = row.Field05Status;
                rec.Field06Status = row.Field06Status;
                rec.Field07Status = row.Field07Status;
                rec.Field08Status = row.Field08Status;
                rec.Field09Status = row.Field09Status;
                rec.Field10Status = row.Field10Status;
                rec.Field01Type = row.Field01Type;
                rec.Field02Type = row.Field02Type;
                rec.Field03Type = row.Field03Type;
                rec.Field04Type = row.Field04Type;
                rec.Field05Type = row.Field05Type;
                rec.Field06Type = row.Field06Type;
                rec.Field07Type = row.Field07Type;
                rec.Field08Type = row.Field08Type;
                rec.Field09Type = row.Field09Type;
                rec.Field10Type = row.Field10Type;
                rec.SiteName = row.SiteName;
                rec.ProgressNoteLocation = row.ProgressNoteLocation;
                rec.ProgramName = GetServiceProvided(row.ClientId, row.UserId, row.AuthorizationId);
                rec.DateApproved = row.DateApproved;
                rec.ApprovedBy = row.ApprovedBy;
            }

            return rec;
        }
        public static int CloseoutGoalsForDischarge(int activityId)
        {
            var data = GetTimeSheetNoteDataAll(activityId);

            if (data.ActivityId == 0)
                throw new InvalidOperationException(
                    $"Timesheet activity {activityId} was not found.");

            if (!data.OriginalSubmittalDate.HasValue)
                throw new InvalidOperationException(
                    $"Activity {activityId} does not have a discharge date.");

            const string updateQuery = @"
        UPDATE dbo.ClientGoals
        SET Status = @Status
        WHERE ClientId = @ClientId
          AND OwnerCreateDate < @DischargeDate;";

            using var connection = new SqlConnection(DbConn);

            return connection.Execute(updateQuery, new
            {
                Status = "Completed",
                ClientId = data.ClientId,
                DischargeDate = data.OriginalSubmittalDate.Value
            });
        }
        public static bool HasRejection(int activityId)
        {
            using var connection = new SqlConnection(DbConn);

            var fields = ActivitiesLogRow.Fields;
            var row = connection.Query(new SqlQuery().From(fields).Select(fields.ActivityId).Where(fields.ActivityId == activityId)).FirstOrDefault();

            return row != null;
        }
        public static bool UpdateTimeRecordStatus(int activityId, string status, int uid)
        {

            using var connection = new SqlConnection(DbConn);

            var userId = uid;
            var userDetails = GetApproverDetails(uid);
            var updateQuery1 = $"UPDATE [Activities] SET status = '{status}' where ActivityId = {activityId};";
            connection.Execute(updateQuery1);
            if (status == "Approved")
            {
               
              var updateQuery2 = $"UPDATE [ProgramNotes] SET status = '{status}', ApprovedBy='{userDetails}', DateApproved='{DateTime.Now}'  where ActivityId = {activityId}";
              connection.Execute(updateQuery2);
            }

            return true;
        }
        
        public static bool CreateNotesAuditTrail(int activityId, string status, int uid)
        {

            using var connection = new SqlConnection(DbConn);

            var userId = uid;
            var userDetails = GetApproverDetails(uid);
            var updateQuery1 = $"UPDATE [Activities] SET status = '{status}' where ActivityId = {activityId};";
            var updateQuery2 = $"UPDATE [ProgramNotes] SET status = '{status}', ApprovedBy='{userDetails}', DateApproved='{DateTime.Now}'  where ActivityId = {activityId}";
            connection.Execute(updateQuery1);
            connection.Execute(updateQuery2);


            return true;
        }
        public static bool IsBillable(int? activityId, int uid)
        {
            if (activityId == null) return false;
            var id = (int)activityId;
            using var connection = new SqlConnection(DbConn);
            var fields = ActivitiesArchiveRow.Fields;
            var row = connection.Query(new SqlQuery().From(fields).Select(fields.IsBillable).Where(fields.ActivityId == id && fields.UserId == uid)).FirstOrDefault();

            if (row != null)
            {
                return (bool)row.IsBillable;
            }

            return false;
        }
        public static string GetAuthorizationStatusResponse(DateTime actDate, int authId)
        {
            var resp = "Success";

            using var connection = new SqlConnection(DbConn);

            var fields = ClientAuthorizationsRow.Fields;
            var row = connection.Query(new SqlQuery()
                .From(fields)
                .Select("*")
                .Where(fields.AuthorizationId == authId)).FirstOrDefault();
            if (row == null) return resp;
  
            if (!(actDate >= (DateTime)row.StartDate && actDate <= (DateTime)row.EndDate))
            {
                return
                    $"You are trying to bill outside of the authorization range of {row.StartDate.ToString("MM/dd/yyyy")} - {row.EndDate.ToString("MM/dd/yyyy")}";
            }
            return resp;
        }
        public static int GetAuthorizationProgramTypeId(int authId)
        {
            if (authId == 0) throw new Exception("An error occurred!");

            using var connection = new SqlConnection(DbConn);

            var fields = ClientAuthorizationsRow.Fields;
            var row = connection.Query<int>(new SqlQuery().From(fields).Select(fields.ProgramCodeTypeId).Where(fields.AuthorizationId == authId)).FirstOrDefault();
            return row;
        }
        public static void CheckBeforeAuthorizationDelete(int authId)
        {
            if (authId == 0) throw new Exception("An error occurred!");

            using var connection = new SqlConnection(DbConn);

            var fields1 = ActivitiesRow.Fields;
            var fields2 = WorkerManager.Entities.WorkerCaseAssignmentsRow.Fields;
            var row1 = connection.Query<int>(new SqlQuery().From(fields1).Select(fields1.AuthorizationId).Where(fields1.AuthorizationId == authId)).Count();
            var row2 = connection.Query<int>(new SqlQuery().From(fields2).Select(fields2.AuthorizationId).Where(fields2.AuthorizationId == authId)).Count();
            if (row1 > 0 || row2 > 0) { throw new Exception("This authorization cannot be deleted because there are activities or assignments associated with it!"); }
        }
        public static List<string> GetTemplateDdlValues(int templateId, int questionId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = TemplateCodeListRow.Fields;
            var row = connection.Query<string>(new SqlQuery().From(fields).Select(fields.ValueText).Where(fields.TemplateId == templateId && fields.QuestionId == questionId).OrderBy(fields.ValueText)).ToList();
            return row;

        }
        public static List<string> GetProgramNoteTypeDdlValues()
        {
            using var connection = new SqlConnection(DbConn);
            var fields = ProgramNoteTypeRow.Fields;
            var row = connection.Query<string>(new SqlQuery().From(fields).Select(fields.ProgramNoteTypeName).Where(fields.IsEnabled == 1).OrderBy(fields.ProgramNoteTypeOrder)).ToList();
            return row;

        }
        public static Dictionary<string, string> GetClientGoalInterventions(string clientId, string goalType, string actDay)
        {
            using var connection = new SqlConnection(DbConn);
            var goalFields = ClientGoalsRow.Fields;
            var interventionFields = ClientGoalInterventionsRow.Fields;
            var whatDay = _dayMappings.ContainsKey(actDay) ? _dayMappings[actDay] : null;
            
            var goalRow = connection.Query(new SqlQuery()
                        .From(goalFields)
                        .Select(goalFields.Goal, goalFields.Description, goalFields.ClientGoalId)
                        .Where(goalFields.ClientId == int.Parse(clientId) && goalFields.GoalType == goalType)
                        .Where(whatDay)
                        .Where(goalFields.Status.IsNotNull() & (goalFields.Status != "Completed") &  goalFields.CompletionDate.IsNull()) //2.08 patch
                        .OrderBy(goalFields.Goal))
                        .ToList();

            var dic = new Dictionary<string, string>();
            var gs = string.Empty;
            var iv = string.Empty;
            var iv_Ids = new Dictionary<int,string>();

            foreach(var row in goalRow)
            {
                gs += Environment.NewLine + row.Goal + ": " + row.Description;
                iv_Ids.Add(row.ClientGoalId, row.Goal);
            }

            foreach(var d in iv_Ids)
            {
                var intRow = connection.Query(new SqlQuery()
                      .From(interventionFields)
                      .Select(interventionFields.InterDesc,interventionFields.InterNumber)
                      .Where(interventionFields.ClientGoalId == d.Key)
                      .Where(whatDay)
                      .OrderBy(interventionFields.InterNumber))
                      .ToList();
                foreach(var row in intRow)
                {
                    iv += Environment.NewLine + $"{d.Value} (Intervention # {row.InterNumber}): " + row.InterDesc;
                }
            }
            dic.Add("Goals", gs);
            dic.Add("Interventions", iv);
            return dic;

        }
        public static string GetServiceProvided(int ClientId, int UserId, int AuthId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = ClientAssignmentsRow.Fields;
            var row = connection.Query<string>(new SqlQuery().From(fields).Select(fields.ProgramName).Where(fields.UserId == UserId && fields.ClientId == ClientId && fields.AuthorizationId == AuthId)).FirstOrDefault();
            return row ?? string.Empty;

        }
        public static string GetApproverDetails(int UserId)
        {
            using var connection = new SqlConnection(DbConn);
            var fields = GeniusOneAi.Administration.UserRow.Fields;
            var row = connection.Query<string>(new SqlQuery().From(fields).Select(fields.DisplayName).Where(fields.UserId == UserId)).FirstOrDefault();
            return row ?? string.Empty;
        }
    }
}