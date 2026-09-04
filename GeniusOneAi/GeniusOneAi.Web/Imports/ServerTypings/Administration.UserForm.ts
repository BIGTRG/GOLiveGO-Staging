namespace GeniusOneAi.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        IsWorker: Serenity.BooleanEditor;
        RecAlerts: Serenity.BooleanEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.EmailAddressEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.PasswordEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'IsWorker', w1,
                    'RecAlerts', w1,
                    'DisplayName', w0,
                    'Email', w2,
                    'MobilePhoneNumber', w0,
                    'MobilePhoneVerified', w1,
                    'UserImage', w3,
                    'Password', w4,
                    'PasswordConfirm', w4
                ]);
            }
        }
    }
}
