using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.ClientManager.Forms
{
    [FormScript("ClientManager.ClientGoalsLibrarySelector")]
    [BasedOnRow(typeof(ClientGoalsLibrarySelectorRow), CheckNames = true)]
    public class ClientGoalsLibrarySelectorForm
    {
        public string GoalType { get; set; }
        public string Description { get; set; }
        public int TenantId { get; set; }
    }
}