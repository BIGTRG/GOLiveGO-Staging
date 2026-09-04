using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    public partial class ClientGoalInterventionsLibraryEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryEditor";

        public ClientGoalInterventionsLibraryEditorAttribute()
            : base(Key)
        {
        }
    }
}
