
using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        //[Description("User, Role Management and Permissions")]
       // public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("View Access")]
        public const string View = "Administration:View";

        [Description("Modify Access")]
        public const string Modify = "Administration:Modify";
    }
}
