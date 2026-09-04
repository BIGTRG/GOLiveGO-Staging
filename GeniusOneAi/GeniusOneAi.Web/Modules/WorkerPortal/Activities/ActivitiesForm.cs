
using System.Diagnostics;
using GeniusOneAi.CustomEditors;
using GeniusOneAi.MiscEntities;
using GeniusOneAi.MiscEntities.Entities;

namespace GeniusOneAi.WorkerPortal.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerPortal.MyActivities")]
    [BasedOnRow(typeof(Entities.ActivitiesRow), CheckNames = true)]
    public class ActivitiesForm
    {
        [Category("Activity Details")]

        [DisplayName("Activity")]
        [Required(true)][HalfWidth][LabelWidth(65)]
        public String Activity { get; set; }

        [DisplayName("Date")]
        [Required(true)][HalfWidth] [LabelWidth(65)]
        public DateTime ActivityDate { get; set; }


        [Category("Patient Details")]

        [DisplayName("Patient")]
        [Required(true)]
        [LabelWidth(65)]
        [LookupEditor("GeniusOneAi.ClientAssignmentsFiltered")]
        public Int32 ClientId { get; set; }

        [DisplayName("Type of Contact")]
        [Required(true)]
        [LabelWidth(100)]
        [TimesheetLocationEditor][HalfWidth]
        public Int32 ProgressNoteLocation { get; set; }
        [DisplayName("Place of Service")]
        [Required(true)]
        [LabelWidth(100)]
        [TimesheetInOutEditor][HalfWidth]
        public String ProgressNoteInOut { get; set; }



        [Category("Time Details")]
        
        [LabelWidth(65)][HalfWidth][Required(true)]
        [DisplayName("Start")]
        public TimeSpan ActivityFromTime { get; set; }
        [LabelWidth(65)][HalfWidth]
        [Required(true)]
        [DisplayName("End")]
        public TimeSpan ActivityToTime { get; set; }
        [DisplayName("Is Billable?")]
        [LabelWidth(80)]
        [HalfWidth]
        //[Required(true)]
        public Boolean IsBillable { get; set; }
        [DisplayName("Hours")]
        [DecimalEditor(MinValue = "0.00", MaxValue = "24.0")]
        [Required(true)]
        [LabelWidth(65)]
        [HalfWidth]
        public Decimal Hours { get; set; }
        [LabelWidth(65)]
        [DisplayName("Notes")][TextAreaEditor(Rows = 8)]
        public String Notes { get; set; }
        [Hidden]
        public String Status { get; set; }
    }
}