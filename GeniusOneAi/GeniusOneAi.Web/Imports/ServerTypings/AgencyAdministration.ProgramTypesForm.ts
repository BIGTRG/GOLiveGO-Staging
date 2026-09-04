namespace GeniusOneAi.AgencyAdministration {
    export interface ProgramTypesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Status: Serenity.BooleanEditor;
        ProgramNoteTemplateId: Serenity.LookupEditor;
        BackupApproverId: WorkerManager.WorkersLookup;
        EscalationMetric: Serenity.IntegerEditor;
    }

    export class ProgramTypesForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ProgramTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgramTypesForm.init)  {
                ProgramTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.LookupEditor;
                var w3 = WorkerManager.WorkersLookup;
                var w4 = s.IntegerEditor;

                Q.initFormType(ProgramTypesForm, [
                    'Name', w0,
                    'Description', w0,
                    'Status', w1,
                    'ProgramNoteTemplateId', w2,
                    'BackupApproverId', w3,
                    'EscalationMetric', w4
                ]);
            }
        }
    }
}
