using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.WorkerManager
{
    [NestedPermissionKeys]
    [DisplayName("Worker Manager")]
    public class PermissionKeys
    {
        [Description("Workers")]
        public const string Workers = "WorkerManager:Workers";
    }
}
