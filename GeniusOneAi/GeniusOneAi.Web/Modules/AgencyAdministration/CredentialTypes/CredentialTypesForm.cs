
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AgencyAdministration.CredentialTypes")]
    [BasedOnRow(typeof(Entities.CredentialTypesRow), CheckNames = true)]
    public class CredentialTypesForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        [Hidden]
        public Int32 TenantId { get; set; }
    }
}