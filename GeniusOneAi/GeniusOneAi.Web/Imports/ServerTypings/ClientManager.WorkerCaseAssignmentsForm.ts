namespace GeniusOneAi.ClientManager {
    export interface WorkerCaseAssignmentsForm {
        UserId: WorkerManager.WorkersLookup;
        IsTeamLead: Serenity.BooleanEditor;
        AuthorizationId: ClientAuthorizationLookup;
        AssignedDate: Serenity.DateEditor;
        UnassignedDate: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        ClientId: Serenity.IntegerEditor;
    }

    export class WorkerCaseAssignmentsForm extends Serenity.PrefixedContext {
        static formKey = 'ClientManager.WorkerCaseAssignments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerCaseAssignmentsForm.init)  {
                WorkerCaseAssignmentsForm.init = true;

                var s = Serenity;
                var w0 = WorkerManager.WorkersLookup;
                var w1 = s.BooleanEditor;
                var w2 = ClientAuthorizationLookup;
                var w3 = s.DateEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(WorkerCaseAssignmentsForm, [
                    'UserId', w0,
                    'IsTeamLead', w1,
                    'AuthorizationId', w2,
                    'AssignedDate', w3,
                    'UnassignedDate', w3,
                    'Notes', w4,
                    'ClientId', w5
                ]);
            }
        }
    }
}
