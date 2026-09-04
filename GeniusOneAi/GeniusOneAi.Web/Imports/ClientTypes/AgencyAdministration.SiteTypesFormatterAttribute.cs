using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    public partial class SiteTypesFormatterAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "GeniusOneAi.AgencyAdministration.SiteTypesFormatter";

        public SiteTypesFormatterAttribute()
            : base(Key)
        {
        }
    }
}
