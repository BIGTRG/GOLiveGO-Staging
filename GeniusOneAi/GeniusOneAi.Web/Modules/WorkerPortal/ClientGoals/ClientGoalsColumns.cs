
namespace GeniusOneAi.WorkerPortal.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerPortal.ClientGoals")]
    [BasedOnRow(typeof(Entities.ClientGoalsRow), CheckNames = true)]
    public class ClientGoalsColumns
    {
        [DisplayName("Goal")]
        [Width(350)]
        public String Goal { get; set; }
        [DisplayName("Completion Date")]
        [Width(200)]
        public DateTime CompletionDate { get; set; }
        [DisplayName("Status")]
        [Width(100)]
        public String Status { get; set; }
    }
}