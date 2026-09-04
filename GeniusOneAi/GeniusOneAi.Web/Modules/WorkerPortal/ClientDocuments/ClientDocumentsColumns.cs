using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.WorkerPortal.Columns
{
    [ColumnsScript("WorkerPortal.ClientDocuments")]
    [BasedOnRow(typeof(ClientDocumentsRow), CheckNames = true)]
    public class ClientDocumentsColumns
    {
        [DisplayName("Document Name")]
        [Width(350)]
        public string Title { get; set; }
        
        [DisplayName("Date Finalized")]
        [Width(190)]
        public DateTime? FinalizedDate { get; set; }

    }
}