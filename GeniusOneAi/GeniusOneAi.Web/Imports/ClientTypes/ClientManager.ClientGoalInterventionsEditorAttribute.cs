using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    public partial class ClientGoalInterventionsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.ClientManager.ClientGoalInterventionsEditor";

        public ClientGoalInterventionsEditorAttribute()
            : base(Key)
        {
        }
    }
}
