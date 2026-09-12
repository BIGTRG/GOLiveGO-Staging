
namespace GeniusOneAi.WorkerPortal.Entities
{
   
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("WorkerPortal"), TableName("[dbo].[ClientGoals]")]
    [DisplayName("Client Goals"), InstanceName("Client Goals")]
    [ReadPermission(PermissionKeys.MyPatients)]
    [ModifyPermission(PermissionKeys.MyPatients)]
    public sealed class ClientGoalsRow : Row<ClientGoalsRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Client Goal Id"), Identity, IdProperty]
        public Int32? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }

        [DisplayName("Client Id")]
        public Int32? ClientId
        {
            get => fields.ClientId[this];
            set => fields.ClientId[this] = value;
        }

        [DisplayName("Goal"), Size(200), QuickSearch, NameProperty]
        public String Goal
        {
            get => fields.Goal[this];
            set => fields.Goal[this] = value;
        }

        [DisplayName("Description"), Size(2000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }
        [DisplayName("Owner create date")]
        public DateTime? OwnerCreateDate
        {
            get => fields.OwnerCreateDate[this];
            set => fields.OwnerCreateDate[this] = value;
        }
        [DisplayName("Owner"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUsers")]
        public Int32? Owner
        {
            get => fields.Owner[this];
            set => fields.Owner[this] = value;
        }
        [DisplayName("Completion Date")]
        public DateTime? CompletionDate
        {
            get => fields.CompletionDate[this];
            set => fields.CompletionDate[this] = value;
        }

        [DisplayName("Status"), Size(25)]
        public String Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
        }

        [DisplayName("Tenant Id")]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }


        [DisplayName("Episode"), ForeignKey("[dbo].[CrisisEpisodes]", "EpisodeId"), LeftJoin("jEpisode")]
        public Int32? EpisodeId
        {
            get => fields.EpisodeId[this];
            set => fields.EpisodeId[this] = value;
        }
        [DisplayName("Phase"), Size(10)]
        public String Phase
        {
            get => fields.Phase[this];
            set => fields.Phase[this] = value;
        }
        [DisplayName("Library Goal Id")]
        public Int32? LibraryGoalId
        {
            get => fields.LibraryGoalId[this];
            set => fields.LibraryGoalId[this] = value;
        }
        [DisplayName("Source Rule Id")]
        public Int32? SourceRuleId
        {
            get => fields.SourceRuleId[this];
            set => fields.SourceRuleId[this] = value;
        }
        [DisplayName("Protocol Goal"), NotNull]
        public Boolean? IsProtocol
        {
            get => fields.IsProtocol[this];
            set => fields.IsProtocol[this] = value;
        }
        public ClientGoalsRow()
        {
        }

        public ClientGoalsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalId;
            public Int32Field ClientId;
            public StringField Goal;
            public StringField Description;
            public DateTimeField CompletionDate;
            public StringField Status;
            public Int32Field TenantId;
            public DateTimeField OwnerCreateDate;
            public Int32Field Owner;
            public Int32Field EpisodeId;
            public StringField Phase;
            public Int32Field LibraryGoalId;
            public Int32Field SourceRuleId;
            public BooleanField IsProtocol;
        }
    }
}
