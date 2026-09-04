namespace GeniusOneAi.Administration.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[InsuranceTypes]")]
    [DisplayName("Insurance Types"), InstanceName("Insurance Types")]
    [ReadPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.AgencyTypes)]
    [ModifyPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.AgencyTypes)]
    [LookupScript("GeniusOneAi.InsuranceTypes")]

    public sealed class InsuranceTypesRow : Row<InsuranceTypesRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Insurance Type Id"), Identity, IdProperty]
        public Int32? InsuranceTypeId
        {
            get => fields.InsuranceTypeId[this];
            set => fields.InsuranceTypeId[this] = value;
        }

        [DisplayName("Name"), Size(100), QuickSearch, NameProperty]
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

        [DisplayName("PayerId"), Size(255)]
        public String PayerId
        {
            get => fields.PayerId[this];
            set => fields.PayerId[this] = value;
        }
        
        [DisplayName("Address1"), Size(50)]
        public string Address1
        {
            get => fields.Address1[this];
            set => fields.Address1[this] = value;
        }

        [DisplayName("Address2"), Size(50)]
        public string Address2
        {
            get => fields.Address2[this];
            set => fields.Address2[this] = value;
        }

        [DisplayName("City"), Size(50)]
        public string City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(2)]
        public string State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zipcode"), Size(10)]
        public string Zipcode
        {
            get => fields.Zipcode[this];
            set => fields.Zipcode[this] = value;
        }

        [DisplayName("County"), Size(100)]
        public string County
        {
            get => fields.County[this];
            set => fields.County[this] = value;
        }

        [DisplayName("Primary Phone"), Size(15)]
        public string PrimaryPhone
        {
            get => fields.PrimaryPhone[this];
            set => fields.PrimaryPhone[this] = value;
        }
        [DisplayName("Type"), Size(100)]
        public string Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }
        [DisplayName("Status")]
        public Boolean? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }
        public InsuranceTypesRow()
        {
        }

        public InsuranceTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field InsuranceTypeId;
            public StringField Name;
            public StringField Description;
            public StringField PayerId;
            public BooleanField Status;
            public StringField Address1;
            public StringField Address2;
            public StringField City;
            public StringField State;
            public StringField Zipcode;
            public StringField County;
            public StringField PrimaryPhone;
            public StringField Type;
        }
    }
}
