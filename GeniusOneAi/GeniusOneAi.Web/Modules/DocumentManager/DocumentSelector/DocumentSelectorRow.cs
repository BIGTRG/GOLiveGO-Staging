
namespace GeniusOneAi.DocumentManager.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("DocumentManager"), TableName("[dbo].[Documents]")]
    [DisplayName("Documents"), InstanceName("Documents")]
    [ReadPermission(PermissionKeys.ContentLibrary)]
    [ModifyPermission(PermissionKeys.ContentLibrary)]
    public sealed class DocumentSelectorRow : Row<DocumentSelectorRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Document Id"), Identity, IdProperty]
        public Int32? DocumentId
        {
            get => fields.DocumentId[this];
            set => fields.DocumentId[this] = value;
        }

        [DisplayName("Title"), Size(100), QuickSearch, NameProperty]
        public String Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("Filename"), Size(50)]
        public String Filename
        {
            get => fields.Filename[this];
            set => fields.Filename[this] = value;
        }

        [DisplayName("Is Template")]
        public Int32? IsTemplate
        {
            get => fields.IsTemplate[this];
            set => fields.IsTemplate[this] = value;
        }

        [DisplayName("File Type"), Size(50)]
        public String FileType
        {
            get => fields.FileType[this];
            set => fields.FileType[this] = value;
        }

        [DisplayName("Is Finalized")]
        public Int32? IsFinalized
        {
            get => fields.IsFinalized[this];
            set => fields.IsFinalized[this] = value;
        }

        [DisplayName("Original Upload Date")]
        public DateTime? OriginalUploadDate
        {
            get => fields.OriginalUploadDate[this];
            set => fields.OriginalUploadDate[this] = value;
        }

        [DisplayName("Major Version")]
        public Int32? MajorVersion
        {
            get => fields.MajorVersion[this];
            set => fields.MajorVersion[this] = value;
        }

        [DisplayName("Minor Version")]
        public Int32? MinorVersion
        {
            get => fields.MinorVersion[this];
            set => fields.MinorVersion[this] = value;
        }

        [DisplayName("Revision Version")]
        public Int32? RevisionVersion
        {
            get => fields.RevisionVersion[this];
            set => fields.RevisionVersion[this] = value;
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        public DocumentSelectorRow()
        {
        }

        public DocumentSelectorRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DocumentId;
            public StringField Title;
            public StringField Filename;
            public Int32Field IsTemplate;
            public StringField FileType;
            public Int32Field IsFinalized;
            public DateTimeField OriginalUploadDate;
            public Int32Field MajorVersion;
            public Int32Field MinorVersion;
            public Int32Field RevisionVersion;
            public Int32Field UserId;
        }
    }
}
