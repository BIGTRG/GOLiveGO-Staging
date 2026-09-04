using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.Dashboards
{
    [NestedPermissionKeys]
    [DisplayName("Dashboard")]
    public class PermissionKeys
    {
        [Description("Main Agency")]
        public const string MainAgency = "Dashboard:MainAgency";

    }
}
