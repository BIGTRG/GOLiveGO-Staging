namespace GeniusOneAi.WorkerPortal.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("WorkerPortal"), TableName("[dbo].[Users]")]
    [DisplayName("Workers"), InstanceName("Workers")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class WorkersPortalRow : Row<WorkersPortalRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("User Id"), Identity, IdProperty]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }
        [DisplayName("First Name"), Size(50), NameProperty]
        public String FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("Middle Name"), Size(50)]
        public String MiddleName
        {
            get => fields.MiddleName[this];
            set => fields.MiddleName[this] = value;
        }

        [DisplayName("Last Name"), Size(50)]
        public String LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
        }

        [DisplayName("E Signature Base64"), Column("eSignatureBase64")]
        public String ESignatureBase64
        {
            get => fields.ESignatureBase64[this];
            set => fields.ESignatureBase64[this] = value;
        }

        [DisplayName("E Signature Plan Text"), Column("eSignaturePlainText"), Size(255)]
        public String ESignaturePlainText
        {
            get => fields.ESignaturePlainText[this];
            set => fields.ESignaturePlainText[this] = value;
        }

        [DisplayName("Signature Verified")]
        public Boolean? SignatureVerified
        {
            get => fields.SignatureVerified[this];
            set => fields.SignatureVerified[this] = value;
        }

        [DisplayName("Is Worker")]
        public Boolean? IsWorker
        {
            get => fields.IsWorker[this];
            set => fields.IsWorker[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }
       
        public WorkersPortalRow()
        {
        }

        public WorkersPortalRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField LastName;
            public StringField ESignatureBase64;
            public StringField ESignaturePlainText;
            public BooleanField SignatureVerified;
            public BooleanField IsWorker;
            public Int32Field TenantId;
        }
    }
}
