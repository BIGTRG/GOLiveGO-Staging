
using Dapper;
using GeniusOneAi.AgencyAdministration;
using GeniusOneAi.ClientManager;
using GeniusOneAi.ClientManager.Entities;
using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using static MVC.Views.Administration;
using static MVC.Views.ClientManager;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class PatientExtention : GeniusOneBase
    {
        public static BaseResponse CopyGoalsToClient(BaseRecsRequest ids)
        {
            var cnt = 0;
            var resp = new BaseResponse();
            var clientId = ids.clientId;
            var goalNumber = 0;

            foreach (var id in ids.Ids)
            {
                var recID = id;
                var row = GetGoal(int.Parse(id));
                if (row != null)
                {
                    goalNumber++;
                    using var connection = new SqlConnection(DbConn);
                    var ident = (int)connection.InsertAndGetID(new ClientGoalsRow
                    {
                        ClientId = clientId,
                        GoalType = row.GoalType,
                        Description = row.Description,
                        IsActiveMonday = true,
                        IsActiveTuesday = true,
                        IsActiveWednesday = true,
                        IsActiveThursday = true,
                        IsActiveFriday = true,
                        IsActiveSaturday = true,
                        IsActiveSunday = true,
                        //Owner = int.Parse(int.Parse(int.Parse(User?.GetIdentifier())),
                        OwnerCreateDate = DateTime.Now,
                        Goal = "Goal "+goalNumber.ToString()
                    });

                    if (ident > 0)
                    {
                        var iList = GetInterventions(int.Parse(recID));
                        if (iList.Count > 0)
                        { 
                            var num = 1;
                            foreach (var i in iList)
                            {
                               
                                connection.Insert(new ClientGoalInterventionsRow
                                {
                                    ClientGoalId = ident,
                                    InterNumber = num,
                                    InterDesc = i,
                                    IsActiveMonday = true,
                                    IsActiveTuesday = true,
                                    IsActiveWednesday = true,
                                    IsActiveThursday = true,
                                    IsActiveFriday = true,
                                    IsActiveSaturday = true,
                                    IsActiveSunday = true
                                });
                                num++;
                            }

                        }
                    }
                    cnt++;
                }

            }

            resp.Response = cnt.ToString();

            return resp;
        }
        public static ClientGoalsLibraryRow GetGoal(int goalId)
        {
            using var connection = new SqlConnection(DbConn);
            connection.Open();

            var gl = new ClientGoalsLibraryRow();
            var fields = ClientGoalsLibraryRow.Fields;

            var sqlQuery = new SqlQuery()
                .From(fields)
                .Select(fields.GoalType, fields.Description)
                .Where(fields.ClientGoalId == goalId);

            var row = connection.Query(sqlQuery).FirstOrDefault();

            if (row != null)
            {
                gl.GoalType = row.GoalType?.ToString() ?? string.Empty;
                gl.Description = row.Description?.ToString() ?? string.Empty;
            }

            return gl;
        }
        public static List<string> GetInterventions(int goalId)
        {
            var interventions = new List<string>();

            using (var connection = new SqlConnection(DbConn))
            {
                connection.Open();

                var fields = ClientGoalInterventionsLibraryRow.Fields;

                var sqlQuery = new SqlQuery()
                    .From(fields)
                    .Select(fields.InterDesc)
                    .Where(fields.ClientGoalId == goalId);

                var rows = connection.Query(sqlQuery).ToList();

                foreach (var row in rows)
                {
                    interventions.Add(row.InterDesc?.ToString() ?? string.Empty);
                }
            }

            return interventions;
        }
    }
}
