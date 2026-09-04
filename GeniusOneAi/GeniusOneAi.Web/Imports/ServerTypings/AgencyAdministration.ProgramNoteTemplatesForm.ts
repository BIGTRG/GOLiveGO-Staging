namespace GeniusOneAi.AgencyAdministration {
    export interface ProgramNoteTemplatesForm {
        Name: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
        Field01Label: Serenity.StringEditor;
        Field01Type: CustomEditors.FormTypeEditor;
        Field01Status: Serenity.BooleanEditor;
        Field02Label: Serenity.StringEditor;
        Field02Type: CustomEditors.FormTypeEditor;
        Field02Status: Serenity.BooleanEditor;
        Field03Label: Serenity.StringEditor;
        Field03Type: CustomEditors.FormTypeEditor;
        Field03Status: Serenity.BooleanEditor;
        Field04Label: Serenity.StringEditor;
        Field04Type: CustomEditors.FormTypeEditor;
        Field04Status: Serenity.BooleanEditor;
        Field05Label: Serenity.StringEditor;
        Field05Type: CustomEditors.FormTypeEditor;
        Field05Status: Serenity.BooleanEditor;
        Field06Label: Serenity.StringEditor;
        Field06Type: CustomEditors.FormTypeEditor;
        Field06Status: Serenity.BooleanEditor;
        Field07Label: Serenity.StringEditor;
        Field07Type: CustomEditors.FormTypeEditor;
        Field07Status: Serenity.BooleanEditor;
        Field08Label: Serenity.StringEditor;
        Field08Type: CustomEditors.FormTypeEditor;
        Field08Status: Serenity.BooleanEditor;
        Field09Label: Serenity.StringEditor;
        Field09Type: CustomEditors.FormTypeEditor;
        Field09Status: Serenity.BooleanEditor;
        Field10Label: Serenity.StringEditor;
        Field10Type: CustomEditors.FormTypeEditor;
        Field10Status: Serenity.BooleanEditor;
    }

    export class ProgramNoteTemplatesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ProgramNoteTemplates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgramNoteTemplatesForm.init)  {
                ProgramNoteTemplatesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = CustomEditors.FormTypeEditor;

                Q.initFormType(ProgramNoteTemplatesForm, [
                    'Name', w0,
                    'Status', w1,
                    'Field01Label', w0,
                    'Field01Type', w2,
                    'Field01Status', w1,
                    'Field02Label', w0,
                    'Field02Type', w2,
                    'Field02Status', w1,
                    'Field03Label', w0,
                    'Field03Type', w2,
                    'Field03Status', w1,
                    'Field04Label', w0,
                    'Field04Type', w2,
                    'Field04Status', w1,
                    'Field05Label', w0,
                    'Field05Type', w2,
                    'Field05Status', w1,
                    'Field06Label', w0,
                    'Field06Type', w2,
                    'Field06Status', w1,
                    'Field07Label', w0,
                    'Field07Type', w2,
                    'Field07Status', w1,
                    'Field08Label', w0,
                    'Field08Type', w2,
                    'Field08Status', w1,
                    'Field09Label', w0,
                    'Field09Type', w2,
                    'Field09Status', w1,
                    'Field10Label', w0,
                    'Field10Type', w2,
                    'Field10Status', w1
                ]);
            }
        }
    }
}
