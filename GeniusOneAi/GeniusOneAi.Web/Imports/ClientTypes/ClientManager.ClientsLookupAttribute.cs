using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    public partial class ClientsLookupAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "GeniusOneAi.ClientManager.ClientsLookup";

        public ClientsLookupAttribute()
            : base(Key)
        {
        }
    }
}
