
using GeniusOneAi.AgencyAdministration;

namespace GeniusOneAi.MiscEntities.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[UsStateTypes]")]
    [DisplayName("Us State Types"), InstanceName("Us State Types")]
    [LookupScript("GeniusOneAi.UsStateTypes", Permission="?")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class UsStateTypesRow : Row<UsStateTypesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Id"), Column("id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("State"), Column("state"), Size(22), NotNull, QuickSearch, NameProperty]
        public String State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("State Code"), Column("stateCode"), Size(255), NotNull]
        public String StateCode
        {
            get => fields.StateCode[this];
            set => fields.StateCode[this] = value;
        }

        public UsStateTypesRow()
        {
        }

        public UsStateTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField State;
            public StringField StateCode;
        }
    }
}
