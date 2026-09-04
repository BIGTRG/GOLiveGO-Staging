
namespace GeniusOneAi.AgencyAdministration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GeniusOneAi.CustomEditors;

    [FormScript("AgencyAdministration.ProgramNoteTemplates")]
    [BasedOnRow(typeof(Entities.ProgramNoteTemplatesRow), CheckNames = true)]
    public class ProgramNoteTemplatesForm
    {
        [DisplayName("Template Name")]
        public String Name { get; set; }
        [DisplayName("Form Active ?")]
        public Boolean Status { get; set; }

        [Category(" ")]
        [DisplayName("Field 1 Label")]
        public String Field01Label { get; set; }
        [DisplayName("Field 1 Type")]
        [FormTypeEditor]
        public String Field01Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field01Status { get; set; }
        [Category(" ")]
        [DisplayName("Field 2 Label")]
        public String Field02Label { get; set; }
        [DisplayName("Field 2 Type")]
        [FormTypeEditor]
        public String Field02Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field02Status { get; set; }
        [Category(" ")]
        [DisplayName("Field 3 Label")]
        public String Field03Label { get; set; }
        [DisplayName("Field 3 Type")]
        [FormTypeEditor]
        public String Field03Type { get; set; }
        [DisplayName("Is Active ?")]
        [Category(" ")]
        public Boolean Field03Status { get; set; }
        [DisplayName("Field 4 Label")]
        public String Field04Label { get; set; }
        [DisplayName("Field 4 Type")]
        [FormTypeEditor]
        public String Field04Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field04Status { get; set; }
        [Category(" ")]

        [DisplayName("Field 5 Label")]
        
        public String Field05Label { get; set; }
        [DisplayName("Field 5 Type")]
        [FormTypeEditor]
        public String Field05Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field05Status { get; set; }
        [Category(" ")]

        [DisplayName("Field 6 Label")]
        public String Field06Label { get; set; }
        [DisplayName("Field 6 Type")]
        [FormTypeEditor]
        public String Field06Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field06Status { get; set; }
        [Category(" ")]

        [DisplayName("Field 7 Label")]
        public String Field07Label { get; set; }
        [DisplayName("Field 7 Type")]
        [FormTypeEditor]
        public String Field07Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field07Status { get; set; }
        [Category(" ")]

        [DisplayName("Field 8 Label")]
        public String Field08Label { get; set; }
        [DisplayName("Field 8 Type")]
        [FormTypeEditor]
        public String Field08Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field08Status { get; set; }
        [Category(" ")]

        [DisplayName("Field 9 Label")]
        public String Field09Label { get; set; }
        [DisplayName("Field 9 Type")]
        [FormTypeEditor]
        public String Field09Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field09Status { get; set; }
        [Category(" ")]

        [DisplayName("Field 10 Label")]
        public String Field10Label { get; set; }
        [DisplayName("Field 10 Type")]
        [FormTypeEditor]
        public String Field10Type { get; set; }
        [DisplayName("Is Active ?")]
        public Boolean Field10Status { get; set; }
    }
}