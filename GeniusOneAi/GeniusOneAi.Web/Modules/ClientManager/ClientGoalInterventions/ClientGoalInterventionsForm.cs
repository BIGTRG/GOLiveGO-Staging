using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomEditors;
using GeniusOneAi.ClientManager;

namespace GeniusOneAi.ClientManager.Forms
{
    [FormScript("ClientManager.ClientGoalInterventions")]
    [BasedOnRow(typeof(ClientGoalInterventionsRow), CheckNames = true)]
    public class ClientGoalInterventionsForm
    {
        [Category("Active Dates")]
        [DisplayName("Monday")]
        public bool IsActiveMonday { get; set; }
        [DisplayName("Tuesday")]
        public bool IsActiveTuesday { get; set; }
        [DisplayName("Wednesday")]
        public bool IsActiveWednesday { get; set; }
        [DisplayName("Thursday")]
        public bool IsActiveThursday { get; set; }
        [DisplayName("Friday")]
        public bool IsActiveFriday { get; set; }
        [DisplayName("Saturday")]
        public bool IsActiveSaturday { get; set; }
        [DisplayName("Sunday")]
        public bool IsActiveSunday { get; set; }
        [DisplayName("Intervention #")]
        [NumberOrderEditor]
        public int InterNumber { get; set; }
        [DisplayName("Intervention")]
        [TextAreaEditor]
        public string InterDesc { get; set; }

        //public int TenantId { get; set; }
    }
}