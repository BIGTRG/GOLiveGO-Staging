using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.DocumentManager
{
    [NestedPermissionKeys]
    [DisplayName("Document Manager")]
    public class PermissionKeys
    {
        [Description("Content Library")]
        public const string ContentLibrary = "DocumentManager:ContentLibrary";
        [Description("Workflow Templates")]
        public const string WorkflowTemplates = "DocumentManager:WorkflowTemplates";
    }
}
