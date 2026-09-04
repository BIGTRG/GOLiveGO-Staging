
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AgencyAdministration.FormTypes")]
    [BasedOnRow(typeof(Entities.FormTypesRow), CheckNames = true)]
    public class FormTypesForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}