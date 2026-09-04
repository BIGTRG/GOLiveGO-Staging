
namespace GeniusOneAi.WorkerManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerManager.WorkerDelinquencies")]
    [BasedOnRow(typeof(Entities.WorkerDelinquenciesRow), CheckNames = true)]
    public class WorkerDelinquenciesColumns
    {
        [DisplayName("Delinquency Date")]
        [Width(300)]
        public DateTime DelinquencyDate { get; set; }
        [DisplayName("Resolution Date")]
        [Width(300)]
        public DateTime ResolutionDate { get; set; }
    }
}