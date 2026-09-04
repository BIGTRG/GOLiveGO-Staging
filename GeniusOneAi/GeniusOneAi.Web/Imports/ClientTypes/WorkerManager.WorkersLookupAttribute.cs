using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.WorkerManager
{
    public partial class WorkersLookupAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "GeniusOneAi.WorkerManager.WorkersLookup";

        public WorkersLookupAttribute()
            : base(Key)
        {
        }
    }
}

