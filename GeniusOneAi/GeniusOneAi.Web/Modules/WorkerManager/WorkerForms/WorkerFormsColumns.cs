
namespace GeniusOneAi.WorkerManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerManager.WorkerForms")]
    [BasedOnRow(typeof(Entities.WorkerFormsRow), CheckNames = true)]
    public class WorkerFormsColumns
    {
        [DisplayName("Form Type")]
        [Width(300)]
        public String FormName { get; set; }
        [DisplayName("Due Date")]
        [Width(100)]
        public DateTime DueDate { get; set; }
        [DisplayName("Alert Status")]
        public Boolean AlertStatus { get; set; }

    }
}