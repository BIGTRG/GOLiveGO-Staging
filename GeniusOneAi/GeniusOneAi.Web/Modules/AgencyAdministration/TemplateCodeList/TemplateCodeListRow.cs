using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.AgencyAdministration
{
    [ConnectionKey("Default"), Module("AgencyAdministration"), TableName("[dbo].[TemplateCodeList]")]
    [DisplayName("Template Code List"), InstanceName("Template Code List")]
    [ReadPermission(PermissionKeys.NoteTemplates)]
    [ModifyPermission(PermissionKeys.NoteTemplates)]
    public sealed class TemplateCodeListRow : Row<TemplateCodeListRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Template Code List Id"), Identity, IdProperty]
        public int? TemplateCodeListId
        {
            get => fields.TemplateCodeListId[this];
            set => fields.TemplateCodeListId[this] = value;
        }

        [DisplayName("Template Id"), NotNull]
        public int? TemplateId
        {
            get => fields.TemplateId[this];
            set => fields.TemplateId[this] = value;
        }

        [DisplayName("Question Id"), NotNull]
        public int? QuestionId
        {
            get => fields.QuestionId[this];
            set => fields.QuestionId[this] = value;
        }

        [DisplayName("Value Text"), Size(100), NotNull, QuickSearch, NameProperty]
        public string ValueText
        {
            get => fields.ValueText[this];
            set => fields.ValueText[this] = value;
        }

        public TemplateCodeListRow()
            : base()
        {
        }

        public TemplateCodeListRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TemplateCodeListId;
            public Int32Field TemplateId;
            public Int32Field QuestionId;
            public StringField ValueText;
        }
    }
}
