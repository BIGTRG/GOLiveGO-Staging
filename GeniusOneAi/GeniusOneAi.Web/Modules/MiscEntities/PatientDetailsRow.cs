using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace GeniusOneAi.MiscEntities.Entities
{
    [ConnectionKey("Default"), Module("MiscEntities"), TableName("[dbo].[vPatientDetails]")]
    [DisplayName("Patient Details"), InstanceName("Patient Details")]
    [ReadPermission("*")]
    [ModifyPermission("*")]

    public sealed class PatientDetailsRow : Row<PatientDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Patient Id"), Identity, IdProperty]
        public int? PatientId
        {
            get => fields.PatientId[this];
            set => fields.PatientId[this] = value;
        }

        [DisplayName("Patient First Name"), Size(50), QuickSearch, NameProperty]
        public string PatientFirstName
        {
            get => fields.PatientFirstName[this];
            set => fields.PatientFirstName[this] = value;
        }

        [DisplayName("Patient Middle Name"), Size(50)]
        public string PatientMiddleName
        {
            get => fields.PatientMiddleName[this];
            set => fields.PatientMiddleName[this] = value;
        }

        [DisplayName("Patient Last Name"), Size(50)]
        public string PatientLastName
        {
            get => fields.PatientLastName[this];
            set => fields.PatientLastName[this] = value;
        }

        [DisplayName("Patient Full Name"), Size(152)]
        public string PatientFullName
        {
            get => fields.PatientFullName[this];
            set => fields.PatientFullName[this] = value;
        }

        [DisplayName("Patient Birth Date")]
        public DateTime? PatientBirthDate
        {
            get => fields.PatientBirthDate[this];
            set => fields.PatientBirthDate[this] = value;
        }

        [DisplayName("Patient Primary Insurance Number"), Size(100)]
        public string PatientPrimaryInsuranceNumber
        {
            get => fields.PatientPrimaryInsuranceNumber[this];
            set => fields.PatientPrimaryInsuranceNumber[this] = value;
        }

        [DisplayName("Patient Medical Record Number"), Size(100), NotNull]
        public string PatientMedicalRecordNumber
        {
            get => fields.PatientMedicalRecordNumber[this];
            set => fields.PatientMedicalRecordNumber[this] = value;
        }

        public PatientDetailsRow()
            : base()
        {
        }

        public PatientDetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            public StringField PatientFirstName;
            public StringField PatientMiddleName;
            public StringField PatientLastName;
            public StringField PatientFullName;
            public DateTimeField PatientBirthDate;
            public StringField PatientPrimaryInsuranceNumber;
            public StringField PatientMedicalRecordNumber;
        }
    }
}
