
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AgencyAdministration.WorkerTypes")]
    [BasedOnRow(typeof(Entities.WorkerTypesRow), CheckNames = true)]
    public class WorkerTypesForm
    {
        [DisplayName("Type Name")]
        public String Name { get; set; }
        [DisplayName("Description")]
        public String Description { get; set; }

    }
}