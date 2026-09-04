
namespace GeniusOneAi.DocumentManager.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("DocumentManager.DocumentSelector")]
    [BasedOnRow(typeof(Entities.DocumentSelectorRow), CheckNames = true)]
    public class DocumentSelectorColumns
    {
        [DisplayName("Document")]
        [UrlFormatter(DisplayFormat = "Preview Document", UrlFormat = "javascript:loadDocViewerExt(1,'{0}');")]
        [Width(200)]
        public String Filename { get; set; }
        [DisplayName("Document Title")]
        [Width(300)][QuickFilter(true)]
        public String Title { get; set; }
        //[DisplayName("Template")]
        //[Width(100)]
        //[QuickFilter(true)]
        //public bool IsTemplate { get; set; }
        //[DisplayName("Document Type")]
        //[QuickFilter(true)]
        //[Width(200)]
        //public String FileType { get; set; }
        //[DisplayName("Date Created")]
        //[QuickFilter(true)]
        //[Width(200)]
        //public DateTime OriginalUploadDate { get; set; }
        //[DisplayName("Major Version")]
        //[Width(200)]
        //public Int32 MajorVersion { get; set; }
        //[DisplayName("Minor Version")]
        //[Width(200)]
        //public Int32 MinorVersion { get; set; }
        //[DisplayName("Revision Number")]
        //[Width(200)]
        //public Int32 RevisionVersion { get; set; }
    }
}