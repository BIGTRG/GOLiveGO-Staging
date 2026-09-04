namespace GeniusOneAi.AgencyAdministration {
    export interface ProgramNoteTypeForm {
        IsEnabled: Serenity.BooleanEditor;
        ProgramNoteTypeName: Serenity.StringEditor;
    }

    export class ProgramNoteTypeForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ProgramNoteType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgramNoteTypeForm.init)  {
                ProgramNoteTypeForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ProgramNoteTypeForm, [
                    'IsEnabled', w0,
                    'ProgramNoteTypeName', w1
                ]);
            }
        }
    }
}
