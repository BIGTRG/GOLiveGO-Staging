
namespace GeniusOneAi.MiscEntities.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[Events]")]
    [DisplayName("Events"), InstanceName("Events")]
    [ReadPermission("")]
    [ModifyPermission("")]
    public sealed class EventsRow : Row<EventsRow.RowFields>, IIdRow, INameRow
    {
       [DisplayName("Event Id"), Identity, IdProperty]
        public Int32? EventId
        {
            get => fields.EventId[this];
            set => fields.EventId[this] = value;
        }

        [DisplayName("Subject"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Subject
        {
            get => fields.Subject[this];
            set => fields.Subject[this] = value;
        }

        [DisplayName("Description"), Size(300)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Start"), NotNull]
        public DateTime? Start
        {
            get => fields.Start[this];
            set => fields.Start[this] = value;
        }

        [DisplayName("End")]
        public DateTime? End
        {
            get => fields.End[this];
            set => fields.End[this] = value;
        }

        [DisplayName("Theme Color"), Size(10)]
        public String ThemeColor
        {
            get => fields.ThemeColor[this];
            set => fields.ThemeColor[this] = value;
        }

        [DisplayName("Is Full Day"), NotNull]
        public Boolean? IsFullDay
        {
            get => fields.IsFullDay[this];
            set => fields.IsFullDay[this] = value;
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        public EventsRow()
        {
        }

        public EventsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EventId;
            public StringField Subject;
            public StringField Description;
            public DateTimeField Start;
            public DateTimeField End;
            public StringField ThemeColor;
            public BooleanField IsFullDay;
            public Int32Field UserId;
        }
    }
}
