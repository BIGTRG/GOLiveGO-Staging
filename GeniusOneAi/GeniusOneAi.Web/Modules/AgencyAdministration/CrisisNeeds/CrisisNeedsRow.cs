using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[CrisisNeeds]")]
    [DisplayName("Crisis Needs"), InstanceName("Crisis Needs")]
    [ReadPermission(PermissionKeys.GoalLibrary)]
    [ModifyPermission(PermissionKeys.GoalLibrary)]
    [LookupScript("AgencyAdministration.CrisisNeeds", LookupType = typeof(GeniusOneAi.CustomLookups.CrisisNeedsLookup))]
    public sealed class CrisisNeedsRow : Row<CrisisNeedsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Need Id"), Identity, IdProperty]
        public Int32? NeedId
        {
            get => fields.NeedId[this];
            set => fields.NeedId[this] = value;
        }
        [DisplayName("Key"), Size(40), NotNull, QuickSearch]
        public String NeedKey
        {
            get => fields.NeedKey[this];
            set => fields.NeedKey[this] = value;
        }
        [DisplayName("Need"), Size(120), NotNull, QuickSearch, NameProperty]
        public String Label
        {
            get => fields.Label[this];
            set => fields.Label[this] = value;
        }
        [DisplayName("Category"), Size(40), NotNull]
        public String Category
        {
            get => fields.Category[this];
            set => fields.Category[this] = value;
        }
        [DisplayName("Category Name"), Size(60)]
        public String CategoryLabel
        {
            get => fields.CategoryLabel[this];
            set => fields.CategoryLabel[this] = value;
        }
        [DisplayName("Order")]
        public Int32? SortOrder
        {
            get => fields.SortOrder[this];
            set => fields.SortOrder[this] = value;
        }
        [DisplayName("Active")]
        public Boolean? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        public CrisisNeedsRow() : base() { }
        public CrisisNeedsRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NeedId;
            public StringField NeedKey;
            public StringField Label;
            public StringField Category;
            public StringField CategoryLabel;
            public Int32Field SortOrder;
            public BooleanField IsActive;
        }
    }
}
