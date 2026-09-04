
namespace GeniusOneAi.WorkerManager.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerManager"), TableName("[dbo].[WorkerCredentials]")]
    [DisplayName("Worker Credentials"), InstanceName("Worker Credentials")]
    [ReadPermission(PermissionKeys.Workers)]
    [ModifyPermission(PermissionKeys.Workers)]
    public sealed class WorkerCredentialsRow : Row<WorkerCredentialsRow.RowFields>, IIdRow
    {
       [DisplayName("User Credential Id"), Identity, IdProperty]
        public Int32? UserCredentialId
        {
            get => fields.UserCredentialId[this];
            set => fields.UserCredentialId[this] = value;
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Effective Date"), NotNull]
        public DateTime? EffectiveDate
        {
            get => fields.EffectiveDate[this];
            set => fields.EffectiveDate[this] = value;
        }

        [DisplayName("Expiration Date")]
        [NameProperty]
        public DateTime? ExpirationDate
        {
            get => fields.ExpirationDate[this];
            set => fields.ExpirationDate[this] = value;
        }

        [DisplayName("Alert Status"), NotNull]
        public Boolean? AlertStatus
        {
            get => fields.AlertStatus[this];
            set => fields.AlertStatus[this] = value;
        }

        [DisplayName("Credential Id"), NotNull, ForeignKey("[dbo].[CredentialTypes]", "CredentialTypeId"), LeftJoin("jCredential")]
        [LookupEditor(typeof(GeniusOneAi.AgencyAdministration.Entities.CredentialTypesRow))]
        public Int32? CredentialTypeId
        {
            get => fields.CredentialTypeId[this];
            set => fields.CredentialTypeId[this] = value;
        }
        [Expression("jCredential.Name")]
        public String CredentialName
        {
            get => fields.CredentialName[this];
            set => fields.CredentialName[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public WorkerCredentialsRow()
        {
        }

        public WorkerCredentialsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserCredentialId;
            public Int32Field CredentialTypeId;
            public StringField CredentialName;
            public Int32Field UserId;
            public DateTimeField EffectiveDate;
            public DateTimeField ExpirationDate;
            public BooleanField AlertStatus;
            public Int32Field TenantId;
        }
    }
}
