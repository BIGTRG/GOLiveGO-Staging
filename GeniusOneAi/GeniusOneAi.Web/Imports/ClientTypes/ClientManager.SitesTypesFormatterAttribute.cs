using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    public partial class SitesTypesFormatterAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "GeniusOneAi.ClientManager.SitesTypesFormatter";

        public SitesTypesFormatterAttribute()
            : base(Key)
        {
        }
    }
}
