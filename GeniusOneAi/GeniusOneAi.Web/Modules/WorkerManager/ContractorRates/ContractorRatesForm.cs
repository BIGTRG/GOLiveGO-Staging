using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.WorkerManager.Forms
{
    [FormScript("WorkerManager.ContractorRates")]
    [BasedOnRow(typeof(ContractorRatesRow), CheckNames = true)]
    public class ContractorRatesForm
    {
        [DisplayName("Category")] [ContratorRateEditor]
        public string BillCategory { get; set; }
        [DisplayName("Bill Code")]
        [LookupEditor("GeniusOneAi.Custom.ProgramCodeTypes")]
        public string BillCode { get; set; }
        [DisplayName("Rate")]
        [MaskedEditor(Mask = "99.99")]
        public decimal BillRate { get; set; }
        [DisplayName("Rate Metric")]
        [BillRateMetricEditor]
        public string BillRateMetric { get; set; }
        [Hidden]
        public int UserId { get; set; }
    }
}