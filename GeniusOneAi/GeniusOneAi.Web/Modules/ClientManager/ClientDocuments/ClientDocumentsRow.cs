
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.ClientManager
{
    [ConnectionKey("Default"), Module("ClientManager"), TableName("[dbo].[ClientDocuments]")]
    [DisplayName("Client Documents"), InstanceName("Client Documents")]
    [ReadPermission(PermissionKeys.Patients)]
    [ModifyPermission(PermissionKeys.Patients)]
    public sealed class ClientDocumentsRow : Row<ClientDocumentsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Document Id"), Identity, IdProperty]
        public int? DocumentId
        {
            get => fields.DocumentId[this];
            set => fields.DocumentId[this] = value;
        }

        [DisplayName("Client Id"), NotNull]
        public int? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("Title"), Size(100), NotNull, QuickSearch, NameProperty]
        public string Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("File Name"), Size(50), NotNull]
        public string FileName
        {
            get => fields.FileName[this];
            set => fields.FileName[this] = value;
        }

        [DisplayName("Is Finalized")]
        public int? IsFinalized
        {
            get => fields.IsFinalized[this];
            set => fields.IsFinalized[this] = value;
        }

        [DisplayName("Original Upload Date")]
        public DateTime? FinalizedDate
        {
            get => fields.FinalizedDate[this];
            set => fields.FinalizedDate[this] = value;
        }

               public ClientDocumentsRow()
            : base()
        {
        }

        public ClientDocumentsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DocumentId;
            public Int32Field ClientId;
            public StringField Title;
            public StringField FileName;
            public Int32Field IsFinalized;
            public DateTimeField FinalizedDate;
        }
    }
}
