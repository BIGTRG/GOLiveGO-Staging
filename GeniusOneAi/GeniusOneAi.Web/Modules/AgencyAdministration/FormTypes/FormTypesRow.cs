
namespace GeniusOneAi.AgencyAdministration.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[FormTypes]")]
    [DisplayName("Form Types"), InstanceName("Form Types")]
    [LookupScript("GeniusOneAi.FormTypes")]
    [ReadPermission(PermissionKeys.AgencyTypes)]
    [ModifyPermission(PermissionKeys.AgencyTypes)]
    public sealed class FormTypesRow : Row<FormTypesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Form Type Id"), Identity, IdProperty]
        public Int32? FormTypeId
        {
            get => fields.FormTypeId[this];
            set => fields.FormTypeId[this] = value;
        }

        [DisplayName("Name"), Size(25), QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(255)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        public FormTypesRow()
        {
        }

        public FormTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FormTypeId;
            public StringField Name;
            public StringField Description;
        }
    }
}
