using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.AgencyAdministration.Entities
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ProgramNoteType]")]
    [DisplayName("Program Note Type"), InstanceName("Program Note Type")]
    [ReadPermission(PermissionKeys.NoteTypes)]
    [ModifyPermission(PermissionKeys.NoteTypes)]
    public sealed class ProgramNoteTypeRow : Row<ProgramNoteTypeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Program Note Type Id"), Identity, IdProperty]
        public int? ProgramNoteTypeId
        {
            get => fields.ProgramNoteTypeId[this];
            set => fields.ProgramNoteTypeId[this] = value;
        }

        [DisplayName("Is Enabled")]
        public bool? IsEnabled
        {
            get => fields.IsEnabled[this];
            set => fields.IsEnabled[this] = value;
        }

        [DisplayName("Program Note Type Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public string ProgramNoteTypeName
        {
            get => fields.ProgramNoteTypeName[this];
            set => fields.ProgramNoteTypeName[this] = value;
        }

        [DisplayName("Program Note Type Order")]
        public int? ProgramNoteTypeOrder
        {
            get => fields.ProgramNoteTypeOrder[this];
            set => fields.ProgramNoteTypeOrder[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ProgramNoteTypeRow()
            : base()
        {
        }

        public ProgramNoteTypeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramNoteTypeId;
            public BooleanField IsEnabled;
            public StringField ProgramNoteTypeName;
            public Int32Field ProgramNoteTypeOrder;
            public Int32Field TenantId;
        }
    }
}
