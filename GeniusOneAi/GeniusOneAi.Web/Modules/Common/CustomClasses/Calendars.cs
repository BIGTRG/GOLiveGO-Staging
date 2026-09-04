using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using GeniusOneAi.MiscEntities.Entities;
using Serenity.Data;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class Calendar
    {
        static ISqlConnections sqlConnections;
        public static List<CalendarScheduleData> GetWorkerScheduleData()
        {
            var data = new List<CalendarScheduleData>();

            //using (var connection = sqlConnections.NewFor<MyRow>())
            //{
            //    //Todo: Get data from worker numbers
            //}

            return data;
        }

    }

    public class CalendarScheduleData
    {
        public int EventId { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string ThemeColor { get; set; }
        public Boolean IsFullDay { get; set; }
    }
}