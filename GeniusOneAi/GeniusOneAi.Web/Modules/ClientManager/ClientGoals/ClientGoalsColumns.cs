
namespace GeniusOneAi.ClientManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ClientManager.ClientGoals")]
    [BasedOnRow(typeof(Entities.ClientGoalsRow), CheckNames = true)]
    public class ClientGoalsColumns
    {
        [DisplayName("Need"), Width(160)]
        public String NeedLabel { get; set; }
        [DisplayName("Phase")]
        [Width(210)]
        public String Phase { get; set; }
        [DisplayName("Goal #")]
        [Width(75)]
        public String Goal { get; set; }
        [DisplayName("Description")]
        [Width(320)]
        public String Description { get; set; }
        [DisplayName("Protocol")]
        [Width(70)]
        public Boolean IsProtocol { get; set; }
        [DisplayName("Completion Date")]
        [Width(125)]
        public DateTime CompletionDate { get; set; }
        [DisplayName("Status")]
        [Width(100)]
        public String Status { get; set; }

        [DisplayName("Created User")]
        [Width(200)]
        public String WorkerFullName{ get; set; }
        [DisplayName("Date Created")]
        [Width(100)]
        public DateTime OwnerCreateDate { get; set; }
    }
}