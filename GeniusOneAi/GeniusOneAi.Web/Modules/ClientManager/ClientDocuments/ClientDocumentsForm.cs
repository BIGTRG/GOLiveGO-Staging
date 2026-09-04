using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.ClientManager.Forms
{
    [FormScript("ClientManager.ClientDocuments")]
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
        //[FileUploadEditor(FilenameFormat = "ClientDocumentRepository/Repo")]
        [FileUploadEditor]
        public string FileName { get; set; }

    }
}