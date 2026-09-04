
namespace GeniusOneAi.WorkerManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerManager.Workers")]
    [BasedOnRow(typeof(Entities.WorkersRow), CheckNames = true)]
    public class WorkersColumns
    {
        [DisplayName("Username")]
        [Width(200)]
        [QuickFilter(true)]
        public String Username { get; set; }
        [DisplayName("Employee Number")]
        [Width(200)]
        [QuickFilter(true)]
        public String EmployeeId { get; set; }
        [DisplayName("First Name")]
        [Width(200)]
        [QuickFilter(true)]
        public String FirstName { get; set; }
        [DisplayName("Middle Name")]
        [Width(200)]
        [QuickFilter(true)]
        public String MiddleName { get; set; }
        [DisplayName("Last Name")]
        [Width(200)]
        [QuickFilter(true)]
        public String LastName { get; set; }
        [DisplayName("Primary Phone")]
        [Width(200)]
        public String PrimaryPhone { get; set; }
        [DisplayName("Cell Phone")]
        [Width(200)]
        public String SecondaryPhone { get; set; }
        [DisplayName("Worker Classification")]
        [Width(100)]
        [QuickFilter(true)]
        public String Classification { get; set; }

    }
}