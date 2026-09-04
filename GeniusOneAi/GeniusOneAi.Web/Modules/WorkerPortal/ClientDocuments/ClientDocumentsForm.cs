using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.WorkerPortal.Forms
{
    [FormScript("WorkerPortal.ClientDocuments")]
    [BasedOnRow(typeof(ClientDocumentsRow), CheckNames = true)]
    public class ClientDocumentsForm
    {
        [Hidden]
        public int ClientId { get; set; }
        [DisplayName("Document Name")]
        [Required]
        public string Title { get; set; }
        [DisplayName("File")]
        [Required]
        [FileUploadEditor(FilenameFormat = "ClientDocumentRepository/Repo")]
        public string FileName { get; set; }

    }
}