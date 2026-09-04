using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.TemplateCodeList")]
    [BasedOnRow(typeof(TemplateCodeListRow), CheckNames = true)]
    public class TemplateCodeListForm
    {
        public int TemplateId { get; set; }
        public int QuestionId { get; set; }
        public string ValueText { get; set; }
    }
}