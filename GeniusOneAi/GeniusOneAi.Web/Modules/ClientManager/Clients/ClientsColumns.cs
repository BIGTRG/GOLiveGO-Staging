
namespace GeniusOneAi.ClientManager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ClientManager.Clients")]
    [BasedOnRow(typeof(Entities.ClientsRow), CheckNames = true)]
    public class ClientsColumns
    {
        [DisplayName("Record Number")]
        [QuickFilter(true)]
        public String RecordNumber { get; set; }
        //[DisplayName("Insurance Number")]
        //[QuickFilter(true)]
        //public String InsuranceNumber { get; set; }
        [DisplayName("First Name")]
        [QuickFilter(true)]
        public String FirstName { get; set; }
        [DisplayName("Middle Name")]
        [QuickFilter(true)]
        public String MiddleName { get; set; }
        [DisplayName("Last Name")]
        [QuickFilter(true)]
        public String LastName { get; set; }
        [DisplayName("Birth Date")]
        public DateTime BirthDate { get; set; }
        [DisplayName("Race")]
        public String Race { get; set; }
        [DisplayName("Gender")]
        public String Gender { get; set; }
        [DisplayName("Address 1")]
        public String Address1 { get; set; }
        [DisplayName("Address 2")]
        public String Address2 { get; set; }
        [DisplayName("City")]
        public String City { get; set; }
        [DisplayName("State")]
        public String State { get; set; }
        [DisplayName("Zipcode")]
        public String Zipcode { get; set; }
        [DisplayName("County")]
        public String County { get; set; }
        [DisplayName("Primary Phone")]
        public String PrimaryPhone { get; set; }
        [DisplayName("Secondary Phone")]
        public String SecondaryPhone { get; set; }
        //[DisplayName("System Status")]
        //public String SystemStatus { get; set; }
        [DisplayName("Patient Status")]
        public String ClientStatus { get; set; }

    }
}