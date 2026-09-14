using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace GeniusOneAi.CrisisAssessments.Columns
{
    [ColumnsScript("CrisisAssessments.CrisisAssessments")]
    [BasedOnRow(typeof(CrisisAssessmentsRow), CheckNames = true)]
    public class CrisisAssessmentsColumns
    {
        [DisplayName("Date"), Width(100), EditLink, DisplayFormat("d")]
        public DateTime ServiceDate { get; set; }
        [DisplayName("Client"), Width(180)]
        public String ClientName { get; set; }
        [DisplayName("Form"), Width(70)]
        public String FormType { get; set; }
        [DisplayName("Score"), Width(60), AlignRight]
        public Int32 Score { get; set; }
        [DisplayName("High Risk"), Width(90)]
        public Boolean HighRisk { get; set; }
        [DisplayName("Needs"), Width(60), AlignRight]
        public Int32 NeedCount { get; set; }
        [DisplayName("Status"), Width(90)]
        public String Status { get; set; }
        [DisplayName("Episode #"), Width(80), AlignRight]
        public Int32 EpisodeId { get; set; }
        [DisplayName("1st Team Member"), Width(150)]
        public String TeamMember1Name { get; set; }
        [DisplayName("County"), Width(100)]
        public String County { get; set; }
    }
}
