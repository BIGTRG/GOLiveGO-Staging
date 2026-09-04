namespace GeniusOneAi.WorkerManager {
    export interface WorkerCaseAssignmentsForm {
        ClientId: Serenity.LookupEditor;
        IsTeamLead: Serenity.BooleanEditor;
        AuthorizationId: Serenity.LookupEditor;
        AssignedDate: Serenity.DateEditor;
        UnassignedDate: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class WorkerCaseAssignmentsForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.WorkerCaseAssignments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerCaseAssignmentsForm.init)  {
                WorkerCaseAssignmentsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(WorkerCaseAssignmentsForm, [
                    'ClientId', w0,
                    'IsTeamLead', w1,
                    'AuthorizationId', w0,
                    'AssignedDate', w2,
                    'UnassignedDate', w2,
                    'Notes', w3,
                    'UserId', w4
                ]);
            }
        }
    }
}
