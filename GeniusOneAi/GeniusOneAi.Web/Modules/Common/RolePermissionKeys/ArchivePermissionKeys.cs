using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.Archives
{
    [NestedPermissionKeys]
    [DisplayName("Archives")]
    public class PermissionKeys
    {
        [Description("Activities")]
        public const string Activities = "Archives:Activities";
        [Description("Progress Notes")]
        public const string ProgressNotes = "Archives:ProgressNotes";

    }
}
