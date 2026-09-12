namespace GeniusOneAi.CrisisEpisodes {
    export interface CrisisEpisodesForm {
        PresentingTrigger: Serenity.TextAreaEditor;
        Phase: CustomEditors.EpisodePhaseEditor;
        EncounterCount: Serenity.IntegerEditor;
        OpenedAt: Serenity.DateEditor;
        ProjectedDischarge: Serenity.DateEditor;
        ClinicianId: Serenity.LookupEditor;
        ClosedAt: Serenity.DateEditor;
        Disposition: CustomEditors.EpisodeDispositionEditor;
        Notes: Serenity.TextAreaEditor;
        ClientId: Serenity.IntegerEditor;
    }

    export class CrisisEpisodesForm extends Serenity.PrefixedContext {
        static formKey = 'CrisisEpisodes.CrisisEpisodes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CrisisEpisodesForm.init)  {
                CrisisEpisodesForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = CustomEditors.EpisodePhaseEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;
                var w4 = s.LookupEditor;
                var w5 = CustomEditors.EpisodeDispositionEditor;

                Q.initFormType(CrisisEpisodesForm, [
                    'PresentingTrigger', w0,
                    'Phase', w1,
                    'EncounterCount', w2,
                    'OpenedAt', w3,
                    'ProjectedDischarge', w3,
                    'ClinicianId', w4,
                    'ClosedAt', w3,
                    'Disposition', w5,
                    'Notes', w0,
                    'ClientId', w2
                ]);
            }
        }
    }
}
