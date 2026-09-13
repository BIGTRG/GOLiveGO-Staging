namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibrarySelectorDialog extends Serenity.TemplatedDialog<any> {
        private goalsGrid: ClientGoalsLibrarySelectorGrid;
        clientID: number;
        episodeId: number;
        phase: string;
        constructor() { super(); }
        protected getTemplate() { return "<div id='~_Banner' class='goal-library-banner'></div><div id='~_Grid'></div>"; }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.goalsGrid = new ClientGoalsLibrarySelectorGrid(this.byId('Grid'));
            this.goalsGrid.setContext({ clientID: this.clientID, episodeId: this.episodeId, phase: this.phase });
            var b = this.byId('Banner');
            if (this.episodeId)
                b.text('Open episode #' + this.episodeId + ' - showing ' + (this.phase ? CustomEditors.EpisodePhaseEditor.label(this.phase) : 'all phases') + ' goals. Goals are keyed to the next encounter, not to weekdays.');
            else
                b.text('This client has no open crisis episode. Goals added here will not be tied to an encounter phase; open an episode first for the pathway.');
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Add From Library';
            opt.width = 1150;
            opt.height = 680;
            return opt;
        }
    }

    /** Opens the library picker for the client's open episode (phase pre-selected), or plain if none. */
    export function openGoalLibraryForClient(clientId: number, phase?: string) {
        CrisisEpisodes.CrisisEpisodesService.GetOpen({ ClientId: clientId }, r => {
            var dlg = new ClientGoalsLibrarySelectorDialog();
            dlg.clientID = clientId;
            if (r.Entity) { dlg.episodeId = r.Entity.EpisodeId; dlg.phase = phase || r.Entity.Phase; }
            dlg.dialogOpen(false);
        });
    }
}
