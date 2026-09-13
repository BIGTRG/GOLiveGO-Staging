using Serenity.ComponentModel;
using System;
using System.ComponentModel;
using GeniusOneAi.CustomEditors;
namespace GeniusOneAi.AgencyAdministration.Columns
{
    [ColumnsScript("AgencyAdministration.ResourceDirectory")]
    [BasedOnRow(typeof(ResourceDirectoryRow), CheckNames = true)]
    public class ResourceDirectoryColumns
    {
        [DisplayName("Type"), Width(110), QuickFilter, ResourceTypeEditor]
        public String ResourceType { get; set; }
        [DisplayName("Name"), Width(320)]
        public String Name { get; set; }
        [DisplayName("Phone"), Width(130)]
        public String Phone { get; set; }
        [DisplayName("County"), Width(110), QuickFilter]
        public String County { get; set; }
        [DisplayName("Hours"), Width(110)]
        public String Hours { get; set; }
        [DisplayName("Website"), Width(160)]
        public String Website { get; set; }
        [DisplayName("Notes"), Width(320)]
        public String Notes { get; set; }
        [DisplayName("Active"), Width(70)]
        public Boolean IsActive { get; set; }
    }
}
