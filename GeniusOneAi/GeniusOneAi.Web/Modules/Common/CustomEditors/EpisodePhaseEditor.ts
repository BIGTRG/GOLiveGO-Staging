namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class EpisodePhaseEditor extends Serenity.Select2Editor<any, any> {
        static items: [string, string][] = [
            ["E1", "Encounter 1 - First Responder"],
            ["E2", "Encounter 2 - Needs Assessment"],
            ["E3", "Encounter 3 - Act on Needs"],
            ["E4", "Encounter 4 - Confirm and Link"],
            ["E5", "Encounter 5 - Pre-Discharge"],
            ["FU", "Follow-up (Day 7 / 14 / 21)"],
            ["Closed", "Closed"]
        ];
        static label(key: string): string {
            var m = EpisodePhaseEditor.items.filter(x => x[0] === key)[0];
            return m ? m[1] : (key || "");
        }
        static order(key: string): number {
            var i = EpisodePhaseEditor.items.map(x => x[0]).indexOf(key);
            return i < 0 ? 99 : i;
        }
        constructor(container: JQuery) {
            super(container, null);
            EpisodePhaseEditor.items.forEach(x => this.addOption(x[0], x[1]));
        }
    }

    @Serenity.Decorators.registerEditor()
    export class EpisodeDispositionEditor extends Serenity.Select2Editor<any, any> {
        static items: [string, string][] = [
            ["Discharged", "Discharged - crisis resolved"],
            ["LongTermAdmission", "Admitted to long-term service (no follow-ups)"],
            ["Transferred", "Transferred to another provider"],
            ["LostContact", "Lost contact"],
            ["Other", "Other (see notes)"]
        ];
        static label(key: string): string {
            var m = EpisodeDispositionEditor.items.filter(x => x[0] === key)[0];
            return m ? m[1] : (key || "");
        }
        constructor(container: JQuery) {
            super(container, null);
            EpisodeDispositionEditor.items.forEach(x => this.addOption(x[0], x[1]));
        }
    }
}
