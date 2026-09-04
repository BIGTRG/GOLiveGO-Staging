
namespace GeniusOneAi.MiscEntities.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[vClientAssignments]")]
    [DisplayName("Client Assignments"), InstanceName("Client Assignments")]
    [LookupScript("GeniusOneAi.ClientAssignments")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class ClientAssignmentsRow : Row<ClientAssignmentsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Full Name"), Size(205), QuickSearch, NameProperty]
        public String ClientFullName
        {
            get => fields.ClientFullName[this];
            set => fields.ClientFullName[this] = value;
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

       [DisplayName("Client Id"), IdProperty]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("Bill Code"), Size(25)]
        public String BillCode
        {
            get => fields.BillCode[this];
            set => fields.BillCode[this] = value;
        }

        [DisplayName("Authorization Id"), NotNull]
        public Int32? AuthorizationId
        {
            get => fields.AuthorizationId[this];
            set => fields.AuthorizationId[this] = value;
        }

        [DisplayName("Start Date")]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get => fields.EndDate[this];
            set => fields.EndDate[this] = value;
        }
        [DisplayName("Program Name"), Size(25)]
        public String ProgramName
        {
            get => fields.ProgramName[this];
            set => fields.ProgramName[this] = value;
        }
        public ClientAssignmentsRow()
        {
        }

        public ClientAssignmentsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ClientFullName;
            public Int32Field UserId;
            public Int32Field ClientId;
            public StringField BillCode;
            public Int32Field AuthorizationId;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public StringField ProgramName;
        }
    }
}
