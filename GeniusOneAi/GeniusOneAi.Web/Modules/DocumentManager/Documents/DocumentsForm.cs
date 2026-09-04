
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.DocumentManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DocumentManager.Documents")]
    [BasedOnRow(typeof(Entities.DocumentsRow), CheckNames = true)]
    public class DocumentsForm
    {
        [DisplayName("Document Title")]
        [Required]
        public String Title { get; set; }
        [DisplayName("Type")]
        [DocumentTypeEditor]
        [Required]
        public String FileType { get; set; }
        [DisplayName("File")]
        [Required]
        [FileUploadEditor]
        public String FileName { get; set; }
        [DisplayName("Template")]
        [Required]
        public bool IsTemplate { get; set; }

        [DisplayName("Major Version")]
        [Required]
        [DefaultValue(1)]
        public Int32 MajorVersion { get; set; }
        [DisplayName("Minor Version")]
        [Required]
        [DefaultValue(0)]
        public Int32 MinorVersion { get; set; }
        
    }
}