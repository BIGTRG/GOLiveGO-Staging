
namespace GeniusOneAi.WorkerManager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("WorkerManager.WorkerCredentials")]
    [BasedOnRow(typeof(Entities.WorkerCredentialsRow), CheckNames = true)]
    public class WorkerCredentialsForm
    {
        [DisplayName("Credential")]
        [Required]
        public Int32 CredentialTypeId { get; set; }
        [DisplayName("Effective Date")]
        [Required]
        public DateTime EffectiveDate { get; set; }
        [DisplayName("Expiration Date")]
        [Required]
        public DateTime ExpirationDate { get; set; }
        [DisplayName("Alert Status")]
        public Boolean AlertStatus { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }
    }
}