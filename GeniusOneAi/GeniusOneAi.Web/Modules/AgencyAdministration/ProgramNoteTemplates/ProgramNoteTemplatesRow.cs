using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.AgencyAdministration.Entities
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[ProgramNoteTemplates]")]
    [DisplayName("Program Note Templates"), InstanceName("Program Note Templates")]
    [LookupScript("GeniusOneAi.ProgramNoteTemplates")]
    [ReadPermission(PermissionKeys.NoteTemplates)]
    [ModifyPermission(PermissionKeys.NoteTemplates)]
    public sealed class ProgramNoteTemplatesRow : Row<ProgramNoteTemplatesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Program Note Template Id"), Identity, IdProperty]
        public int? ProgramNoteTemplateId
        {
            get => fields.ProgramNoteTemplateId[this];
            set => fields.ProgramNoteTemplateId[this] = value;
        }

        [DisplayName("Name"), Size(100), QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Status")]
        public bool? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Field01 Label"), Column("Field01Label"), Size(255)]
        public string Field01Label
        {
            get => fields.Field01Label[this];
            set => fields.Field01Label[this] = value;
        }

        [DisplayName("Field02 Label"), Column("Field02Label"), Size(255)]
        public string Field02Label
        {
            get => fields.Field02Label[this];
            set => fields.Field02Label[this] = value;
        }

        [DisplayName("Field03 Label"), Column("Field03Label"), Size(255)]
        public string Field03Label
        {
            get => fields.Field03Label[this];
            set => fields.Field03Label[this] = value;
        }

        [DisplayName("Field04 Label"), Column("Field04Label"), Size(255)]
        public string Field04Label
        {
            get => fields.Field04Label[this];
            set => fields.Field04Label[this] = value;
        }

        [DisplayName("Field05 Label"), Column("Field05Label"), Size(255)]
        public string Field05Label
        {
            get => fields.Field05Label[this];
            set => fields.Field05Label[this] = value;
        }

        [DisplayName("Field06 Label"), Column("Field06Label"), Size(255)]
        public string Field06Label
        {
            get => fields.Field06Label[this];
            set => fields.Field06Label[this] = value;
        }

        [DisplayName("Field07 Label"), Column("Field07Label"), Size(255)]
        public string Field07Label
        {
            get => fields.Field07Label[this];
            set => fields.Field07Label[this] = value;
        }

        [DisplayName("Field08 Label"), Column("Field08Label"), Size(255)]
        public string Field08Label
        {
            get => fields.Field08Label[this];
            set => fields.Field08Label[this] = value;
        }

        [DisplayName("Field09 Label"), Column("Field09Label"), Size(255)]
        public string Field09Label
        {
            get => fields.Field09Label[this];
            set => fields.Field09Label[this] = value;
        }

        [DisplayName("Field10 Label"), Column("Field10Label"), Size(255)]
        public string Field10Label
        {
            get => fields.Field10Label[this];
            set => fields.Field10Label[this] = value;
        }

        [DisplayName("Field01 Status"), Column("Field01Status")]
        public bool? Field01Status
        {
            get => fields.Field01Status[this];
            set => fields.Field01Status[this] = value;
        }

        [DisplayName("Field02 Status"), Column("Field02Status")]
        public bool? Field02Status
        {
            get => fields.Field02Status[this];
            set => fields.Field02Status[this] = value;
        }

        [DisplayName("Field03 Status"), Column("Field03Status")]
        public bool? Field03Status
        {
            get => fields.Field03Status[this];
            set => fields.Field03Status[this] = value;
        }

        [DisplayName("Field04 Status"), Column("Field04Status")]
        public bool? Field04Status
        {
            get => fields.Field04Status[this];
            set => fields.Field04Status[this] = value;
        }

        [DisplayName("Field05 Status"), Column("Field05Status")]
        public bool? Field05Status
        {
            get => fields.Field05Status[this];
            set => fields.Field05Status[this] = value;
        }

        [DisplayName("Field06 Status"), Column("Field06Status")]
        public bool? Field06Status
        {
            get => fields.Field06Status[this];
            set => fields.Field06Status[this] = value;
        }

        [DisplayName("Field07 Status"), Column("Field07Status")]
        public bool? Field07Status
        {
            get => fields.Field07Status[this];
            set => fields.Field07Status[this] = value;
        }

        [DisplayName("Field08 Status"), Column("Field08Status")]
        public bool? Field08Status
        {
            get => fields.Field08Status[this];
            set => fields.Field08Status[this] = value;
        }

        [DisplayName("Field09 Status"), Column("Field09Status")]
        public bool? Field09Status
        {
            get => fields.Field09Status[this];
            set => fields.Field09Status[this] = value;
        }

        [DisplayName("Field10 Status"), Column("Field10Status")]
        public bool? Field10Status
        {
            get => fields.Field10Status[this];
            set => fields.Field10Status[this] = value;
        }

        [DisplayName("Field01 Type"), Column("Field01Type"), Size(50)]
        public string Field01Type
        {
            get => fields.Field01Type[this];
            set => fields.Field01Type[this] = value;
        }

        [DisplayName("Field02 Type"), Column("Field02Type"), Size(50)]
        public string Field02Type
        {
            get => fields.Field02Type[this];
            set => fields.Field02Type[this] = value;
        }

        [DisplayName("Field03 Type"), Column("Field03Type"), Size(50)]
        public string Field03Type
        {
            get => fields.Field03Type[this];
            set => fields.Field03Type[this] = value;
        }

        [DisplayName("Field04 Type"), Column("Field04Type"), Size(50)]
        public string Field04Type
        {
            get => fields.Field04Type[this];
            set => fields.Field04Type[this] = value;
        }

        [DisplayName("Field05 Type"), Column("Field05Type"), Size(50)]
        public string Field05Type
        {
            get => fields.Field05Type[this];
            set => fields.Field05Type[this] = value;
        }

        [DisplayName("Field06 Type"), Column("Field06Type"), Size(50)]
        public string Field06Type
        {
            get => fields.Field06Type[this];
            set => fields.Field06Type[this] = value;
        }

        [DisplayName("Field07 Type"), Column("Field07Type"), Size(50)]
        public string Field07Type
        {
            get => fields.Field07Type[this];
            set => fields.Field07Type[this] = value;
        }

        [DisplayName("Field08 Type"), Column("Field08Type"), Size(50)]
        public string Field08Type
        {
            get => fields.Field08Type[this];
            set => fields.Field08Type[this] = value;
        }

        [DisplayName("Field09 Type"), Column("Field09Type"), Size(50)]
        public string Field09Type
        {
            get => fields.Field09Type[this];
            set => fields.Field09Type[this] = value;
        }

        [DisplayName("Field10 Type"), Column("Field10Type"), Size(50)]
        public string Field10Type
        {
            get => fields.Field10Type[this];
            set => fields.Field10Type[this] = value;
        }

        public ProgramNoteTemplatesRow()
            : base()
        {
        }

        public ProgramNoteTemplatesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramNoteTemplateId;
            public StringField Name;
            public BooleanField Status;
            public StringField Field01Label;
            public StringField Field02Label;
            public StringField Field03Label;
            public StringField Field04Label;
            public StringField Field05Label;
            public StringField Field06Label;
            public StringField Field07Label;
            public StringField Field08Label;
            public StringField Field09Label;
            public StringField Field10Label;
            public BooleanField Field01Status;
            public BooleanField Field02Status;
            public BooleanField Field03Status;
            public BooleanField Field04Status;
            public BooleanField Field05Status;
            public BooleanField Field06Status;
            public BooleanField Field07Status;
            public BooleanField Field08Status;
            public BooleanField Field09Status;
            public BooleanField Field10Status;
            public StringField Field01Type;
            public StringField Field02Type;
            public StringField Field03Type;
            public StringField Field04Type;
            public StringField Field05Type;
            public StringField Field06Type;
            public StringField Field07Type;
            public StringField Field08Type;
            public StringField Field09Type;
            public StringField Field10Type;
        }
    }
}
