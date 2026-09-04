
namespace GeniusOneAi.DocumentManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DocumentManager.Documents")]
    [BasedOnRow(typeof(Entities.DocumentsRow), CheckNames = true)]
    public class DocumentColumns
    {
        [DisplayName("Document Title")]
        [Width(300)][QuickFilter(true)]
        public String Title { get; set; }
        [DisplayName("Finalized")]
        [QuickFilter(true)]
        [Width(100)]
        public bool IsFinalized { get; set; }
        [DisplayName("Template")]
        [Width(100)]
        [QuickFilter(true)]
        public bool IsTemplate { get; set; }
        [DisplayName("Document Type")]
        [QuickFilter(true)]
        [Width(200)]
        public String FileType { get; set; }
        [DisplayName("Date Created")]
        [QuickFilter(true)]
        [Width(200)]
        public DateTime OriginalUploadDate { get; set; }
        [DisplayName("Major Version")]
        [Width(200)]
        public Int32 MajorVersion { get; set; }
        [DisplayName("Minor Version")]
        [Width(200)]
        public Int32 MinorVersion { get; set; }
        [DisplayName("Revision Number")]
        [Width(200)]
        public Int32 RevisionVersion { get; set; }
    }
}