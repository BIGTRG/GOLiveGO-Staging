using GeniusOneAi.ClientManager;
using GeniusOneAi.DocumentManager;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;
using GeniusOneAi.ClientManager.Entities;

namespace GeniusOneAi.ClientManager
{
    [ConnectionKey("Default"), Module("ClientManager"), TableName("[dbo].[ClientGoalInterventions]")]
    [DisplayName("Client Goal Interventions"), InstanceName("Client Goal Interventions")]
    [ReadPermission(PermissionKeys.Patients)]
    [ModifyPermission(PermissionKeys.Patients)]
    public sealed class ClientGoalInterventionsRow : Row<ClientGoalInterventionsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Client Goal Intervention Id"), Identity, NotNull, IdProperty]
        public int? ClientGoalInterventionId
        {
            get => fields.ClientGoalInterventionId[this];
            set => fields.ClientGoalInterventionId[this] = value;
        }

        [DisplayName("Client Goal"), ForeignKey(typeof(ClientGoalsRow)), LeftJoin("jClientGoal"), TextualField("ClientGoalGoalType")]
        public int? ClientGoalId
        {
            get => fields.ClientGoalId[this];
            set => fields.ClientGoalId[this] = value;
        }

        [DisplayName("Inter Number"), NotNull]
        public int? InterNumber
        {
            get => fields.InterNumber[this];
            set => fields.InterNumber[this] = value;
        }

        [DisplayName("Inter Desc"), NotNull, QuickSearch, NameProperty]
        public string InterDesc
        {
            get => fields.InterDesc[this];
            set => fields.InterDesc[this] = value;
        }

        [DisplayName("Tenant Id")]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Client Goal Client Id"), Expression("jClientGoal.[ClientId]")]
        public int? ClientGoalClientId
        {
            get => fields.ClientGoalClientId[this];
            set => fields.ClientGoalClientId[this] = value;
        }

        [DisplayName("Client Goal Goal Type"), Expression("jClientGoal.[GoalType]")]
        public string ClientGoalGoalType
        {
            get => fields.ClientGoalGoalType[this];
            set => fields.ClientGoalGoalType[this] = value;
        }

        [DisplayName("Client Goal Goal"), Expression("jClientGoal.[Goal]")]
        public string ClientGoalGoal
        {
            get => fields.ClientGoalGoal[this];
            set => fields.ClientGoalGoal[this] = value;
        }

        [DisplayName("Client Goal Description"), Expression("jClientGoal.[Description]")]
        public string ClientGoalDescription
        {
            get => fields.ClientGoalDescription[this];
            set => fields.ClientGoalDescription[this] = value;
        }

        [DisplayName("Client Goal Completion Date"), Expression("jClientGoal.[CompletionDate]")]
        public DateTime? ClientGoalCompletionDate
        {
            get => fields.ClientGoalCompletionDate[this];
            set => fields.ClientGoalCompletionDate[this] = value;
        }

        [DisplayName("Client Goal Status"), Expression("jClientGoal.[Status]")]
        public string ClientGoalStatus
        {
            get => fields.ClientGoalStatus[this];
            set => fields.ClientGoalStatus[this] = value;
        }

        [DisplayName("Client Goal Is Active"), Expression("jClientGoal.[IsActive]")]
        public bool? ClientGoalIsActive
        {
            get => fields.ClientGoalIsActive[this];
            set => fields.ClientGoalIsActive[this] = value;
        }

        [DisplayName("Client Goal Tenant Id"), Expression("jClientGoal.[TenantId]")]
        public int? ClientGoalTenantId
        {
            get => fields.ClientGoalTenantId[this];
            set => fields.ClientGoalTenantId[this] = value;
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
        public ClientGoalInterventionsRow()
            : base()
        {
        }

        public ClientGoalInterventionsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ClientGoalInterventionId;
            public Int32Field ClientGoalId;
            public Int32Field InterNumber;
            public StringField InterDesc;
            public Int32Field TenantId;

            public Int32Field ClientGoalClientId;
            public StringField ClientGoalGoalType;
            public StringField ClientGoalGoal;
            public StringField ClientGoalDescription;
            public DateTimeField ClientGoalCompletionDate;
            public StringField ClientGoalStatus;
            public BooleanField ClientGoalIsActive;
            public Int32Field ClientGoalTenantId;
            public BooleanField IsActiveMonday;
            public BooleanField IsActiveTuesday;
            public BooleanField IsActiveWednesday;
            public BooleanField IsActiveThursday;
            public BooleanField IsActiveFriday;
            public BooleanField IsActiveSaturday;
            public BooleanField IsActiveSunday;
        }
    }
    }

