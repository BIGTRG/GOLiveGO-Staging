
namespace GeniusOneAi.WorkerManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerManager.WorkerDelinquencies")]
    [BasedOnRow(typeof(Entities.WorkerDelinquenciesRow), CheckNames = true)]
    public class WorkerDelinquenciesForm
    {
        [DisplayName("Delinquency Date")]
        public DateTime DelinquencyDate { get; set; }
        [DisplayName("Delinquency Notes")]
        [TextAreaEditor]
        public String DelinquencyNotes { get; set; }
        [DisplayName("Resolution Date")]
        public DateTime ResolutionDate { get; set; }
        [DisplayName("Resolution Notes")]
        [TextAreaEditor]
        public String ResolutionNotes { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }
    }
}