using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace GeniusOneAi.WorkerManager.Columns
{
    [ColumnsScript("WorkerManager.ContractorRates")]
    [BasedOnRow(typeof(ContractorRatesRow), CheckNames = true)]
    public class ContractorRatesColumns
    {
        [DisplayName("Category")]
        [Width(100)]
        public string BillCategory { get; set; }
        [DisplayName("Bill Code")]
        [Width(100)]
        public string BillCode { get; set; }
        [DisplayName("Rate")]
        [Width(100)]
        public decimal BillRate { get; set; }
        [DisplayName("Rate Metric")]
        [Width(100)]
        public string BillRateMetric { get; set; }
    }
}