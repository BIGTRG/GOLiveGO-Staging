using Serenity.ComponentModel;
using System;

namespace GeniusOneAi.Administration.Forms
{
    [FormScript("Administration.User")]
    [BasedOnRow(typeof(UserRow), CheckNames = true)]
    public class UserForm
    {
        [LabelWidth(200, UntilNext = true)]
        public String Username { get; set; }
        public Boolean IsWorker { get; set; }
        public Boolean RecAlerts { get; set; }
        public String DisplayName { get; set; }
        [EmailAddressEditor]
        public String Email { get; set; }
        public String MobilePhoneNumber { get; set; }
        public Boolean MobilePhoneVerified { get; set; }
        //public TwoFactorAuthType TwoFactorAuth { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        //[OneWay]
        //public string Source { get; set; }
    }
}