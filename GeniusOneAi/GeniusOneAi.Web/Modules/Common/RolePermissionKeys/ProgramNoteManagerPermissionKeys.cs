using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.ProgramNoteManager
{
    [NestedPermissionKeys]
    [DisplayName("Program Note Manager")]
    public class PermissionKeys
    {
        [Description("Manage Notes")]
        public const string ManageNotes = "ProgramNotes:ManageNotes";

    }
}
