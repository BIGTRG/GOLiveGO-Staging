using Serenity.ComponentModel;
using System.ComponentModel;

namespace GeniusOneAi.ClientManager
{
    [NestedPermissionKeys]
    [DisplayName("Patient Manager")]
    public class PermissionKeys
    {
        [Description("Patients")]
        public const string Patients = "PatientManager:Patients";
    }
}
