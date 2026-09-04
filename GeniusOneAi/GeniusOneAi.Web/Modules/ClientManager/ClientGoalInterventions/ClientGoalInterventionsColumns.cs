using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.ClientManager;

namespace GeniusOneAi.ClientManager.Columns
{
    [ColumnsScript("ClientManager.ClientGoalInterventions")]
    [BasedOnRow(typeof(ClientGoalInterventionsRow), CheckNames = true)]
    public class ClientGoalInterventionsColumns
    {
        [DisplayName("#")]
        [Sortable(true)]
        [Width(50)]
        [EditLink]
        public int InterNumber { get; set; }
        [DisplayName("Intervention")]
        [Width(500)]
        [Sortable(false)]
        public String InterDesc { get; set; }
    }
}