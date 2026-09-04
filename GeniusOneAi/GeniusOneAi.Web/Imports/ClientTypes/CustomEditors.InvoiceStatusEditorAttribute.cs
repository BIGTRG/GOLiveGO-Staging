using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CustomEditors
{
    public partial class InvoiceStatusEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.CustomEditors.InvoiceStatusEditor";

        public InvoiceStatusEditorAttribute()
            : base(Key)
        {
        }
    }
}
