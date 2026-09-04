using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.TemplateCodeList")]
    [BasedOnRow(typeof(TemplateCodeListRow), CheckNames = true)]
    public class TemplateCodeListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int TemplateCodeListId { get; set; }
        public int TemplateId { get; set; }
        public int QuestionId { get; set; }
        [EditLink]
        public string ValueText { get; set; }
    }
}