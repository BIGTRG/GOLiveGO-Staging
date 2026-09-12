namespace GeniusOneAi.CrisisEpisodes.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("CrisisEpisodes"), TableName("[dbo].[CrisisEpisodes]")]
    [DisplayName("Crisis Episodes"), InstanceName("Crisis Episode")]
    [ReadPermission(ClientManager.PermissionKeys.Patients)]
    [ModifyPermission(ClientManager.PermissionKeys.Patients)]
    public sealed class CrisisEpisodesRow : Row<CrisisEpisodesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Episode Id"), Identity, IdProperty]
        public Int32? EpisodeId { get => fields.EpisodeId[this]; set => fields.EpisodeId[this] = value; }

        [DisplayName("Client"), NotNull, ForeignKey("[dbo].[Clients]", "ClientId"), LeftJoin("jClient")]
        public Int32? ClientId { get => fields.ClientId[this]; set => fields.ClientId[this] = value; }

        [DisplayName("Client"), Expression("(jClient.LastName + ', ' + jClient.FirstName)"), QuickSearch]
        public String ClientName { get => fields.ClientName[this]; set => fields.ClientName[this] = value; }

        [DisplayName("Record #"), Expression("jClient.RecordNumber")]
        public String ClientRecordNumber { get => fields.ClientRecordNumber[this]; set => fields.ClientRecordNumber[this] = value; }

        [DisplayName("Tenant Id")]
        public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

        [DisplayName("Opened"), NotNull]
        public DateTime? OpenedAt { get => fields.OpenedAt[this]; set => fields.OpenedAt[this] = value; }

        [DisplayName("Opened By"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jOpenedBy")]
        public Int32? OpenedBy { get => fields.OpenedBy[this]; set => fields.OpenedBy[this] = value; }

        [DisplayName("Opened By"), Expression("jOpenedBy.DisplayName")]
        public String OpenedByName { get => fields.OpenedByName[this]; set => fields.OpenedByName[this] = value; }

        [DisplayName("Presenting Trigger"), Size(500), QuickSearch, NameProperty]
        public String PresentingTrigger { get => fields.PresentingTrigger[this]; set => fields.PresentingTrigger[this] = value; }

        [DisplayName("Assessment Id")]
        public Int32? AssessmentId { get => fields.AssessmentId[this]; set => fields.AssessmentId[this] = value; }

        [DisplayName("Clinician"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jClinician")]
        public Int32? ClinicianId { get => fields.ClinicianId[this]; set => fields.ClinicianId[this] = value; }

        [DisplayName("Clinician"), Expression("jClinician.DisplayName")]
        public String ClinicianName { get => fields.ClinicianName[this]; set => fields.ClinicianName[this] = value; }

        [DisplayName("Phase"), Size(10), NotNull]
        public String Phase { get => fields.Phase[this]; set => fields.Phase[this] = value; }

        [DisplayName("Encounters"), NotNull]
        public Int32? EncounterCount { get => fields.EncounterCount[this]; set => fields.EncounterCount[this] = value; }

        [DisplayName("Projected Discharge")]
        public DateTime? ProjectedDischarge { get => fields.ProjectedDischarge[this]; set => fields.ProjectedDischarge[this] = value; }

        [DisplayName("Closed")]
        public DateTime? ClosedAt { get => fields.ClosedAt[this]; set => fields.ClosedAt[this] = value; }

        [DisplayName("Disposition"), Size(50)]
        public String Disposition { get => fields.Disposition[this]; set => fields.Disposition[this] = value; }

        [DisplayName("Notes"), Size(2000)]
        public String Notes { get => fields.Notes[this]; set => fields.Notes[this] = value; }

        [DisplayName("Owner")]
        public Int32? Owner { get => fields.Owner[this]; set => fields.Owner[this] = value; }

        [DisplayName("Owner create date")]
        public DateTime? OwnerCreateDate { get => fields.OwnerCreateDate[this]; set => fields.OwnerCreateDate[this] = value; }

        public CrisisEpisodesRow() { }
        public CrisisEpisodesRow(RowFields fields) : base(fields) { }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EpisodeId;
            public Int32Field ClientId;
            public StringField ClientName;
            public StringField ClientRecordNumber;
            public Int32Field TenantId;
            public DateTimeField OpenedAt;
            public Int32Field OpenedBy;
            public StringField OpenedByName;
            public StringField PresentingTrigger;
            public Int32Field AssessmentId;
            public Int32Field ClinicianId;
            public StringField ClinicianName;
            public StringField Phase;
            public Int32Field EncounterCount;
            public DateTimeField ProjectedDischarge;
            public DateTimeField ClosedAt;
            public StringField Disposition;
            public StringField Notes;
            public Int32Field Owner;
            public DateTimeField OwnerCreateDate;
        }
    }
}
