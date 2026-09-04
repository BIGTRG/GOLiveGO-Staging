using GeniusOneAi.ClientManager;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.MiscEntities
{

    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[SitesTypes]")]
    [DisplayName("Sites Types"), InstanceName("Sites Types")]
    [LookupScript("GeniusOneAi.MiscEntities.SiteTypes", Permission = "?")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class SitesTypesRow : Row<SitesTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Site Type Id"), Identity, IdProperty]
        public int? SiteTypeId
        {
            get => fields.SiteTypeId[this];
            set => fields.SiteTypeId[this] = value;
        }

        [DisplayName("Name"), Size(100), QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(500)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Npi"), Column("NPI"), Size(50)]
        [LookupInclude]
        public string Npi
        {
            get => fields.Npi[this];
            set => fields.Npi[this] = value;
        }

        [DisplayName("Tax Id"), Size(50)]
        public string TaxId
        {
            get => fields.TaxId[this];
            set => fields.TaxId[this] = value;
        }

        [DisplayName("Taxonomy"), Size(50)]
        public string Taxonomy
        {
            get => fields.Taxonomy[this];
            set => fields.Taxonomy[this] = value;
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

        [DisplayName("Primary Phone"), Size(15)]
        public string PrimaryPhone
        {
            get => fields.PrimaryPhone[this];
            set => fields.PrimaryPhone[this] = value;
        }

        [DisplayName("Status")]
        public bool? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public SitesTypesRow()
        {
        }

        public SitesTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SiteTypeId;
            public StringField Name;
            public StringField Description;
            public StringField Npi;
            public StringField TaxId;
            public StringField Taxonomy;
            public StringField Address1;
            public StringField Address2;
            public StringField City;
            public StringField State;
            public StringField Zipcode;
            public StringField PrimaryPhone;
            public BooleanField Status;
            public Int32Field TenantId;
        }
    }
}
