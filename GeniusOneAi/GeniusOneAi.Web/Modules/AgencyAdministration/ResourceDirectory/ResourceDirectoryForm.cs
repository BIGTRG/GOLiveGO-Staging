using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;

namespace GeniusOneAi.AgencyAdministration.Forms
{
    [FormScript("AgencyAdministration.ResourceDirectory")]
    [BasedOnRow(typeof(ResourceDirectoryRow), CheckNames = true)]
    public class ResourceDirectoryForm
    {
        [DisplayName("Type"), ResourceTypeEditor, Required, HalfWidth]
        public String ResourceType { get; set; }
        [DisplayName("County"), HalfWidth]
        public String County { get; set; }
        [DisplayName("Name"), Required]
        public String Name { get; set; }
        [DisplayName("Phone"), HalfWidth]
        public String Phone { get; set; }
        [DisplayName("Hours"), HalfWidth]
        public String Hours { get; set; }
        [DisplayName("Website")]
        public String Website { get; set; }
        [DisplayName("Address")]
        public String Address { get; set; }
        [DisplayName("City"), HalfWidth]
        public String City { get; set; }
        [DisplayName("Active"), HalfWidth]
        public Boolean IsActive { get; set; }
        [DisplayName("Notes"), TextAreaEditor]
        public String Notes { get; set; }
    }
}
