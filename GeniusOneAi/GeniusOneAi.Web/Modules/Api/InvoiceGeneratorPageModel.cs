using System.Collections.Generic;
using GeniusOneAi.WorkerManager.Entities;

namespace GeniusOneAi.Api
{
    public class InvoiceGeneratorPageModel
    {
        public string InvoiceNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }

        public string Email { get; set; }
        public string PrimaryPhone { get; set; }
        public List<InvoiceData> InvoiceData { get; set; }
        public List<int> RecIds { get; set; }
        public string InvoiceTotal { get; set; }

}
    public class InvoiceData
    {
        public string ActivityInvoiceNumber { get; set; }
        public string ActivityType { get; set; }
        public string ActivityUnitCost { get; set; }
        public string ActivityQuantity { get; set; }
        public string ActivityTotal { get; set; }

    }
}