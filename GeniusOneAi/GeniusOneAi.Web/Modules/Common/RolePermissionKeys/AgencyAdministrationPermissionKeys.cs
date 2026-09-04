using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.AgencyAdministration
{
    [NestedPermissionKeys]
    [DisplayName("Agency Administration")]
    public class PermissionKeys
    {
        [Description("User Management")]
        public const string UserManagement = "AgencyAdministration:UserManagement";
        [Description("Note Templates")]
        public const string NoteTemplates = "AgencyAdministration:NoteTemplates";
        [Description("Note Types")]
        public const string NoteTypes = "AgencyAdministration:NoteTypes";
        [Description("Goal Library")]
        public const string GoalLibrary = "AgencyAdministration:GoalLibrary";
        [Description("Agency Types")]
        public const string AgencyTypes = "AgencyAdministration:AgencyTypes";
    }
}
