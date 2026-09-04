using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.CustomEditors
{
    public partial class AuthorizationApprovalEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.CustomEditors.AuthorizationApprovalEditor";

        public AuthorizationApprovalEditorAttribute()
            : base(Key)
        {
        }
    }
}

