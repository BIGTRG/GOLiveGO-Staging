namespace GeniusOneAi.AgencyAdministration {
    export interface ClientGoalsLibraryForm {
        GoalType: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        ClientInterventionsLibraryList: ClientGoalInterventionsLibraryEditor;
    }

    export class ClientGoalsLibraryForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ClientGoalsLibrary';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientGoalsLibraryForm.init)  {
                ClientGoalsLibraryForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = ClientGoalInterventionsLibraryEditor;

                Q.initFormType(ClientGoalsLibraryForm, [
                    'GoalType', w0,
                    'Description', w1,
                    'ClientInterventionsLibraryList', w2
                ]);
            }
        }
    }
}
