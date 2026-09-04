namespace GeniusOneAi.Api
{
    public class InvoiceGeneratorPageModels
    {
        public string DateOfService { get; set; }
        public string ClientName { get; set; }
        public string InsuranceId { get; set; }
        public string InsuranceType { get; set; }
        public string MedicalRecord { get; set; }
        public string DateOfBirth { get; set; }
        public string ContactType { get; set; }
        public string Worker { get; set; }
        public string Duration { get; set; }
        public string ServiceProvided { get; set; }
        public string Units { get; set; }
        public string Location { get; set; }
        public AgencyAdministration.Entities.ProgramNoteTemplatesRow Template { get; set; }
        public ProgramNoteManager.Entities.ProgramNotesRow Notes { get; set; }
    }
}