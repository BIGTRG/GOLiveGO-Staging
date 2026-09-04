namespace GeniusOneAi.WorkerManager {
    export interface WorkerDelinquenciesForm {
        DelinquencyDate: Serenity.DateEditor;
        DelinquencyNotes: Serenity.TextAreaEditor;
        ResolutionDate: Serenity.DateEditor;
        ResolutionNotes: Serenity.TextAreaEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class WorkerDelinquenciesForm extends Serenity.PrefixedContext {
        static formKey = 'WorkerManager.WorkerDelinquencies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkerDelinquenciesForm.init)  {
                WorkerDelinquenciesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(WorkerDelinquenciesForm, [
                    'DelinquencyDate', w0,
                    'DelinquencyNotes', w1,
                    'ResolutionDate', w0,
                    'ResolutionNotes', w1,
                    'UserId', w2
                ]);
            }
        }
    }
}

