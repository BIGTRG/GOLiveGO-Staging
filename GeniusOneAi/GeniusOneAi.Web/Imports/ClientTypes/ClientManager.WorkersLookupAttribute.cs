using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    public partial class WorkersLookupAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "GeniusOneAi.ClientManager.WorkersLookup";

        public WorkersLookupAttribute()
            : base(Key)
        {
        }
    }
}
