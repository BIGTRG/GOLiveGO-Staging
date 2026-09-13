
namespace GeniusOneAi.ClientManager.Entities
{
    using GeniusOneAi.ClientManager;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ClientManager"), TableName("[dbo].[ClientGoals]")]
    [DisplayName("Client Goals"), InstanceName("Client Goals")]
    [ReadPermission(PermissionKeys.Patients)]
    [ModifyPermission(PermissionKeys.Patients)]
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

        [DisplayName("Completion Date")]
        public DateTime? CompletionDate
        {
            get => fields.CompletionDate[this];
            set => fields.CompletionDate[this] = value;
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
        //[Expression("jUsers.LastName +', '+ jUsers.FirstName+' ['+ jUsers.EmployeeId +']'")]
        [Expression("jUsers.DisplayName")]
        public String WorkerFullName
        {
            get => fields.WorkerFullName[this];
            set => fields.WorkerFullName[this] = value;
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
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "ClientGoalId"), NotMapped]
        public List<ClientGoalInterventionsRow> ClientInterventionsList
        {
            get => fields.ClientInterventionsList[this];
            set => fields.ClientInterventionsList[this] = value;
        }

        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveMonday
        {
            get => fields.IsActiveMonday[this];
            set => fields.IsActiveMonday[this] = value;
        }
        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveTuesday
        {
            get => fields.IsActiveTuesday[this];
            set => fields.IsActiveTuesday[this] = value;
        }
        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveWednesday
        {
            get => fields.IsActiveWednesday[this];
            set => fields.IsActiveWednesday[this] = value;
        }
        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveThursday
        {
            get => fields.IsActiveThursday[this];
            set => fields.IsActiveThursday[this] = value;
        }
        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveFriday
        {
            get => fields.IsActiveFriday[this];
            set => fields.IsActiveFriday[this] = value;
        }
        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveSaturday
        {
            get => fields.IsActiveSaturday[this];
            set => fields.IsActiveSaturday[this] = value;
        }
        [DisplayName("Is Active"), NotNull]
        public bool? IsActiveSunday
        {
            get => fields.IsActiveSunday[this];
            set => fields.IsActiveSunday[this] = value;
        }
        [DisplayName("Goal Type"), Size(100)]
        public String GoalType
        {
            get => fields.GoalType[this];
            set => fields.GoalType[this] = value;
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
        [DisplayName("Need"), Size(40), ForeignKey("[dbo].[CrisisNeeds]", "NeedKey"), LeftJoin("jNeed"), TextualField("NeedLabel")]
        public String NeedKey
        {
            get => fields.NeedKey[this];
            set => fields.NeedKey[this] = value;
        }
        [DisplayName("Need"), Expression("jNeed.[Label]")]
        public String NeedLabel
        {
            get => fields.NeedLabel[this];
            set => fields.NeedLabel[this] = value;
        }
        [DisplayName("Carried from goal")]
        public Int32? CarriedFromGoalId
        {
            get => fields.CarriedFromGoalId[this];
            set => fields.CarriedFromGoalId[this] = value;
        }
        [DisplayName("Effectiveness Measure"), Size(500)]
        public String EffectivenessMeasure
        {
            get => fields.EffectivenessMeasure[this];
            set => fields.EffectivenessMeasure[this] = value;
        }
        [DisplayName("Protocol Goal"), NotNull]
        public Boolean? IsProtocol
        {
            get => fields.IsProtocol[this];
            set => fields.IsProtocol[this] = value;
        }
        [DisplayName("Outcomes"), MasterDetailRelation(foreignKey: "ClientGoalId"), NotMapped]
        public List<GeniusOneAi.ClientManager.ClientGoalOutcomesRow> OutcomesList
        {
            get => fields.OutcomesList[this];
            set => fields.OutcomesList[this] = value;
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
            public StringField WorkerFullName;
            public DateTimeField CompletionDate;
            public DateTimeField OwnerCreateDate;
            public Int32Field Owner;
            public StringField Status;
            public StringField GoalType;
            public Int32Field TenantId;
            public RowListField<ClientGoalInterventionsRow> ClientInterventionsList;
            public BooleanField IsActiveMonday;
            public BooleanField IsActiveTuesday;
            public BooleanField IsActiveWednesday;
            public BooleanField IsActiveThursday;
            public BooleanField IsActiveFriday;
            public BooleanField IsActiveSaturday;
            public BooleanField IsActiveSunday;
            public Int32Field EpisodeId;
            public StringField Phase;
            public Int32Field LibraryGoalId;
            public Int32Field SourceRuleId;
            public BooleanField IsProtocol;
            public StringField NeedKey;
            public StringField NeedLabel;
            public Int32Field CarriedFromGoalId;
            public StringField EffectivenessMeasure;
            public RowListField<GeniusOneAi.ClientManager.ClientGoalOutcomesRow> OutcomesList;

        }
    }
}
