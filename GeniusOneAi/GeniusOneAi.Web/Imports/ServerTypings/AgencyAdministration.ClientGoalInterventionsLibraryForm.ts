namespace GeniusOneAi.AgencyAdministration {
    export interface ClientGoalInterventionsLibraryForm {
        InterDesc: Serenity.TextAreaEditor;
    }

    export class ClientGoalInterventionsLibraryForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ClientGoalInterventionsLibrary';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalInterventionsLibraryForm.init)  {
                ClientGoalInterventionsLibraryForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;

                Q.initFormType(ClientGoalInterventionsLibraryForm, [
                    'InterDesc', w0
                ]);
            }
        }
    }
}
