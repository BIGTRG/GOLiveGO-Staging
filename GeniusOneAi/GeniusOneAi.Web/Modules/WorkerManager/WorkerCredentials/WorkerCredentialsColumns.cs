
namespace GeniusOneAi.WorkerManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("WorkerManager.WorkerCredentials")]
    [BasedOnRow(typeof(Entities.WorkerCredentialsRow), CheckNames = true)]
    public class WorkerCredentialsColumns
    {
        [DisplayName("Credential")]
        [Width(200)]
        public String CredentialName { get; set; }
        [DisplayName("Effective Date")]
        [Width(100)]
        public DateTime EffectiveDate { get; set; }
        [DisplayName("Expiration Date")]
        [Width(100)]
        public DateTime ExpirationDate { get; set; }
        [DisplayName("Alert Status")]
        public Boolean AlertStatus { get; set; }

    }
}