
namespace GeniusOneAi.WorkerManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerManager.WorkerForms")]
    [BasedOnRow(typeof(Entities.WorkerFormsRow), CheckNames = true)]
    public class WorkerFormsForm
    {
        [DisplayFormat("Form")]
        public Int32 FormTypeId { get; set; }
        [DisplayFormat("Due Date")]
        public DateTime DueDate { get; set; }
        [DisplayFormat("Alert Status")]
        public bool AlertStatus { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }
    } 
}