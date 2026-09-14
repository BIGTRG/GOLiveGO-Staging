namespace GeniusOneAi.CrisisEpisodes {

    /** Starts the next encounter of an episode: creates the timesheet activity + the encounter note pre-loaded with the phase goals, then opens the note. */
    @Serenity.Decorators.registerClass()
    export class StartEncounterDialog extends Serenity.TemplatedDialog<any> {
        episodeId: number;
        phaseLabel: string;
        followUp: TimelineFollowUp;
        constructor() { super(); }
        protected getTemplate() {
            return '<div class="start-enc">' +
                '<div class="se-title" id="~_Title"></div>' +
                '<div class="se-row"><label>Date of service</label><input type="date" class="form-control" id="~_Date"></div>' +
                '<div class="se-row half"><div><label>Start time</label><input type="time" class="form-control" id="~_From"></div><div><label>End time</label><input type="time" class="form-control" id="~_To"></div></div>' +
                '<div class="se-row"><label>Place of service</label><select class="form-control" id="~_Loc"><option>Community</option><option>Home</option><option>Provider site</option><option>Hospital / ED</option><option>Shelter</option><option>Phone</option><option>Telehealth</option><option>Other</option></select></div>' +
                '<div class="se-row"><label>Contact</label><select class="form-control" id="~_Contact"><option>Face to Face</option><option>Phone</option><option>Video</option></select></div>' +
                '<div class="se-row"><label><input type="checkbox" id="~_Billable" checked> Billable</label></div>' +
                '<div class="se-actions"><button type="button" class="btn btn-primary se-start"><i class="fa fa-play"></i> Start and open the note</button> <button type="button" class="btn btn-default se-cancel">Cancel</button></div>' +
                '</div>';
        }
        protected getDialogOptions() { var o = super.getDialogOptions(); o.title = 'Start encounter'; o.width = 520; return o; }
        protected onDialogOpen() {
            super.onDialogOpen();
            var fu = this.followUp;
            this.byId('Title').html('<b>' + Q.htmlEncode(fu ? 'Post-Discharge Follow-up - Day ' + fu.Day : this.phaseLabel) + '</b><div class="se-sub">Episode #' + this.episodeId + (fu ? ' - due ' + Q.formatDate(Q.parseISODateTime(fu.DueDate), 'MM/dd/yyyy') : '') + '. The note opens pre-loaded with this encounter\'s goals and every library intervention as a checkbox.</div>');
            var now = new Date(); var pad = (n: number) => (n < 10 ? '0' : '') + n;
            (this.byId('Date')[0] as HTMLInputElement).value = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
            (this.byId('From')[0] as HTMLInputElement).value = pad(now.getHours()) + ':' + pad(now.getMinutes());
            if (fu) { this.byId('Loc').val('Phone'); this.byId('Contact').val('Phone'); }
            this.element.find('.se-cancel').click(() => this.dialogClose());
            this.element.find('.se-start').click(() => {
                EncounterNotesService.StartEncounter({
                    EpisodeId: this.episodeId, ServiceDate: this.byId('Date').val() as string, FromTime: this.byId('From').val() as string, ToTime: this.byId('To').val() as string,
                    Location: this.byId('Loc').val() as string, ContactMethod: this.byId('Contact').val() as string, IsBillable: (this.byId('Billable')[0] as HTMLInputElement).checked,
                    FollowUpId: fu ? fu.FollowUpId : null
                }, r => {
                    if (r.Resumed) Q.notifyInfo('An unsigned note already exists for this episode - opening it.');
                    this.dialogClose();
                    window.location.href = Q.resolveUrl('~/WorkerPortal/ProgramNotes/' + r.ActivityId);
                });
            });
        }
    }
}
