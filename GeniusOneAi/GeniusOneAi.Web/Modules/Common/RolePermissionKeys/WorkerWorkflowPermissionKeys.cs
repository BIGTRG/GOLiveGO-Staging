using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.WorkerPortal.Workflows
{
    [NestedPermissionKeys]
    [DisplayName("Worker Workflows")]
    public class PermissionKeys
    {
        [Description("Worker Review")]
        public const string NotesReview = "Worker:NotesReview";
    }
}
