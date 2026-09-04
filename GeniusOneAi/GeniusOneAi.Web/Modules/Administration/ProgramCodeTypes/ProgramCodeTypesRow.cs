
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.Administration.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ProgramCodeTypes]")]
    [DisplayName("Program Code Types"), InstanceName("Program Code Types")]
    [LookupScript("GeniusOneAi.ProgramCodeTypes", Permission = "?")]
    [ReadPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.AgencyTypes)]
    [ModifyPermission(GeniusOneAi.AgencyAdministration.PermissionKeys.AgencyTypes)]
    public sealed class ProgramCodeTypesRow : Row<ProgramCodeTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Program Code Type Id"), Identity, IdProperty]
        public Int32? ProgramCodeTypeId
        {
            get => fields.ProgramCodeTypeId[this];
            set => fields.ProgramCodeTypeId[this] = value;
        }

        [DisplayName("Program Type Id"), ForeignKey("ProgramTypes", "ProgramTypeId"), LeftJoin("jProgram")]
        [QuickFilter]
        public Int32? ProgramTypeId
        {
            get => fields.ProgramTypeId[this];
            set => fields.ProgramTypeId[this] = value;
        }
        [DisplayName("Program Name"), Expression("jProgram.[Name]")]
        public String ProgramName
        {
            get => fields.ProgramName[this];
            set => fields.ProgramName[this] = value;
        }

        [DisplayName("Bill Code"), Size(25), QuickSearch, NameProperty]
        public String BillCode
        {
            get => fields.BillCode[this];
            set => fields.BillCode[this] = value;
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Modifier1"), Size(10)]
        public String Mod1
        {
            get => fields.Mod1[this];
            set => fields.Mod1[this] = value;
        }

        [DisplayName("Modifier2"), Size(10)]
        public String Mod2
        {
            get => fields.Mod2[this];
            set => fields.Mod2[this] = value;
        }

        [DisplayName("Modifier3"), Size(10)]
        public String Mod3
        {
            get => fields.Mod3[this];
            set => fields.Mod4[this] = value;
        }

        [DisplayName("Modifier4"), Size(10)]
        public String Mod4
        {
            get => fields.Mod4[this];
            set => fields.Mod4[this] = value;
        }
        [DisplayName("Billcode with Mod")]
        [Expression(" jProgram.[Name]+ ' ' +BillCode + ' ' + " +
                    "COALESCE(NULLIF(Mod1, ''), '') + ' ' + " +
                    "COALESCE(NULLIF(Mod2, ''), '') + ' ' + " +
                    "COALESCE(NULLIF(Mod3, ''), '') + ' ' + " +
                    "COALESCE(NULLIF(Mod4, ''), '')")]
        public string BillCodeWithMods
        {
        get => fields.BillCodeWithMods[this];
        set => fields.BillCodeWithMods[this] = value;
    }

    [DisplayName("Insurance")]
        public Int32? InsuranceId
        {
            get => fields.InsuranceId[this];
            set => fields.InsuranceId[this] = value;
        }
        [DisplayName("Bill Rate"), Size(10), Scale(2)]
        public Decimal? BillRate
        {
            get => fields.BillRate[this];
            set => fields.BillRate[this] = value;
        }
        [DisplayName("Bill Rate Unit"), Size(25)][BillRateUnitEditor]
        public String BillRateUnit
        {
            get => fields.BillRateUnit[this];
            set => fields.BillRateUnit[this] = value;
        }
        [DisplayName("Rate Effective")]
        public DateTime? RateEffective
        {
            get => fields.RateEffective[this];
            set => fields.RateEffective[this] = value;
        }
        [DisplayName("Rate End")]
        public DateTime? RateEnd
        {
            get => fields.RateEnd[this];
            set => fields.RateEnd[this] = value;
        }

        [DisplayName("Specialty Name"), Size(500)]
        public String SpecialtyName
        {
            get => fields.SpecialtyName[this];
            set => fields.SpecialtyName[this] = value;
        }
        [DisplayName("Funding Source"), Size(100)]
        public String FundingSource
        {
            get => fields.FundingSource[this];
            set => fields.FundingSource[this] = value;
        }
        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ProgramCodeTypesRow()
        {
        }

        public ProgramCodeTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramCodeTypeId;
            public Int32Field ProgramTypeId;
            public StringField BillCode;
            public StringField Mod1;
            public StringField Mod2;
            public StringField Mod3;
            public StringField Mod4;
            public StringField FundingSource;
            public StringField Description;
            public Int32Field InsuranceId;
            public DecimalField BillRate;
            public StringField BillRateUnit;
            public Int32Field TenantId;
            public DateTimeField RateEffective;
            public DateTimeField RateEnd;
            public StringField SpecialtyName;
            public StringField BillCodeWithMods;
            public StringField ProgramName;

        }
    }
}
