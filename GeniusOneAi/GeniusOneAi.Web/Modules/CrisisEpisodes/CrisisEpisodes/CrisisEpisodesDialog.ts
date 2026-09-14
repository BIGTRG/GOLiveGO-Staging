namespace GeniusOneAi.CrisisEpisodes {

    @Serenity.Decorators.registerClass()
    export class CrisisEpisodesDialog extends Serenity.EntityDialog<CrisisEpisodesRow, any> {
        protected getFormKey() { return CrisisEpisodesForm.formKey; }
        protected getIdProperty() { return CrisisEpisodesRow.idProperty; }
        protected getLocalTextPrefix() { return CrisisEpisodesRow.localTextPrefix; }
        protected getNameProperty() { return CrisisEpisodesRow.nameProperty; }
        protected getService() { return CrisisEpisodesService.baseUrl; }
        protected form = new CrisisEpisodesForm(this.idPrefix);

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 900;
            return opt;
        }

        protected updateTitle(): void {
            var e = this.entity || {};
            this.dialogTitle = this.isNew() ? 'Open Crisis Episode' :
                'Crisis Episode #' + e.EpisodeId + (e.ClientName ? ' - ' + e.ClientName : '');
        }

        private timeline: EpisodeTimeline;
        private consent: ConsentPanel;
        protected onDialogOpen() { super.onDialogOpen(); this.loadTimeline(); this.loadConsent(); }
        protected afterLoadEntity() { super.afterLoadEntity(); this.loadTimeline(); this.loadConsent(); }
        protected onDialogClose() { if (this.consent) this.consent.destroy(); super.onDialogClose(); }
        private loadConsent() {
            if (this.isNew() || !this.entity || !this.entity.EpisodeId) { this.element.find('.ep-consent').remove(); return; }
            var $host = this.element.find('.ep-consent');
            if (!$host.length) { $host = $('<div class="ep-consent"></div>'); var $tl = this.element.find('.ep-timeline'); if ($tl.length) $tl.after($host); else this.element.find('.s-PropertyGrid').first().before($host); }
            if (!this.consent || (this.consent as any).episodeId !== this.entity.EpisodeId) { if (this.consent) this.consent.destroy(); this.consent = new ConsentPanel($host, this.entity.EpisodeId); }
            this.consent.reload();
        }
        private loadTimeline() {
            if (this.isNew() || !this.entity || !this.entity.EpisodeId) { this.element.find('.ep-timeline').remove(); return; }
            EncounterNotesService.Timeline({ EpisodeId: this.entity.EpisodeId }, t => { this.timeline = t; this.renderTimeline(); });
        }
        private renderTimeline() {
            var t = this.timeline, enc = Q.htmlEncode, h: string[] = [];
            var $host = this.element.find('.ep-timeline');
            if (!$host.length) { $host = $('<div class="ep-timeline"></div>'); this.element.find('.s-PropertyGrid').first().before($host); }
            h.push('<div class="ep-tl-head"><b>Encounter pathway</b><span class="ep-tl-next">' + enc(t.NextAction || '') + '</span></div>');
            h.push('<div class="ep-tl-steps">');
            ['E1', 'E2', 'E3', 'E4', 'E5', 'FU'].forEach(p => {
                var done = (t.Encounters || []).filter(e => e.Phase === p && e.Status === 'Approved').length, open = (t.Encounters || []).filter(e => e.Phase === p && e.Status !== 'Approved').length;
                var cls = p === t.Phase && !t.Closed ? 'current' : done ? 'done' : open ? 'open' : '';
                h.push('<div class="ep-tl-step ' + cls + '"><div class="ep-tl-dot">' + (p === 'FU' ? '7/14/21' : p.replace('E', '')) + '</div><div class="ep-tl-lbl">' + enc(CustomEditors.EpisodePhaseEditor.label(p)) + '</div></div>');
            });
            h.push('</div>');
            if (t.Encounters && t.Encounters.length) {
                h.push('<table class="ep-tl-table"><thead><tr><th>#</th><th>Encounter</th><th>Date</th><th>Status</th><th>Summary</th><th></th></tr></thead><tbody>');
                t.Encounters.forEach(e => h.push('<tr><td>' + (e.EncounterNo || '') + '</td><td>' + enc(e.PhaseLabel) + '</td><td>' + (e.ServiceDate ? Q.formatDate(Q.parseISODateTime(e.ServiceDate), 'MM/dd/yyyy') : '') + '</td><td><span class="ep-st ' + enc((e.Status || '').replace(/\s/g, '')) + '">' + enc(e.Status || '') + '</span></td><td class="ep-sum">' + enc(e.Summary || '') + '</td>' +
                    '<td><a class="btn btn-xs btn-default" href="' + Q.resolveUrl('~/WorkerPortal/ProgramNotes/' + e.ActivityId) + '"><i class="fa fa-file-text-o"></i> ' + (e.Status === 'Approved' || e.Status === 'Submitted' ? 'View note' : 'Open note') + '</a>' +
                    (e.Status === 'Submitted' || e.Status === 'Re-Submitted' ? ' <a class="btn btn-xs btn-default" href="' + Q.resolveUrl('~/Workflow/ViewProgressNote/' + e.ActivityId) + '"><i class="fa fa-check"></i> Review</a>' : '') + '</td></tr>'));
                h.push('</tbody></table>');
            }
            if (t.FollowUps && t.FollowUps.length) {
                h.push('<div class="ep-tl-fu"><b>Post-discharge follow-up</b> ');
                t.FollowUps.forEach(f => h.push('<span class="ep-fu ' + enc(f.Status) + '">Day ' + f.Day + ' - ' + Q.formatDate(Q.parseISODateTime(f.DueDate), 'MM/dd') + ' - ' + enc(f.Status) + (f.Status === 'Scheduled' && !t.Closed && !t.OpenActivityId ? ' <a class="ep-fu-start" data-fu="' + f.FollowUpId + '" data-day="' + f.Day + '">start call</a>' : '') + '</span>'));
                h.push('</div>');
            }
            $host.html(h.join(''));
            $host.find('.ep-fu-start').click(ev => { ev.preventDefault(); var fu = t.FollowUps.filter(f => f.FollowUpId == $(ev.currentTarget).data('fu'))[0]; this.startEncounter(fu); });
            this.toolbar.findButton('start-encounter-button').toggle(!t.Closed && !t.OpenActivityId && t.Phase !== 'FU' && !(t.Encounters || []).some(e => e.Status === 'Submitted' || e.Status === 'Re-Submitted'));
            this.toolbar.findButton('continue-note-button').toggle(!!t.OpenActivityId);
        }
        private startEncounter(fu?: TimelineFollowUp) {
            var d = new StartEncounterDialog(); d.episodeId = this.entity.EpisodeId; d.phaseLabel = CustomEditors.EpisodePhaseEditor.label(this.timeline.Phase); d.followUp = fu; d.dialogOpen();
        }
        protected updateInterface(): void {
            super.updateInterface();
            $('.category-links').remove();
            // Phase advances from approved notes; it is only editable on a brand new episode.
            this.form.Phase.readOnly = !this.isNew();
            this.form.Disposition.element.closest('.field').toggle(!this.isNew());
            this.form.ClosedAt.element.closest('.field').toggle(!this.isNew() && !!(this.entity && this.entity.ClosedAt));
            this.deleteButton.toggle(this.isNew() ? false : (this.entity.EncounterCount || 0) === 0);
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push({
                title: 'Start next encounter', cssClass: 'start-encounter-button', icon: 'fa-play',
                onClick: () => { if (!this.isNew() && this.timeline) this.startEncounter(); },
                visible: () => !this.isNew()
            });
            buttons.push({
                title: 'Continue the open note', cssClass: 'continue-note-button', icon: 'fa-pencil-square-o',
                onClick: () => { if (this.timeline && this.timeline.OpenActivityId) window.location.href = Q.resolveUrl('~/WorkerPortal/ProgramNotes/' + this.timeline.OpenActivityId); },
                visible: () => !this.isNew()
            });
            buttons.push({
                title: 'Close Episode',
                cssClass: 'close-episode-button',
                icon: 'fa-flag-checkered',
                onClick: () => {
                    if (this.isNew() || !this.entity || this.entity.ClosedAt) return;
                    var disp = this.form.Disposition.value || 'Discharged';
                    Q.confirm('Close episode #' + this.entity.EpisodeId + ' as "' + CustomEditors.EpisodeDispositionEditor.label(disp) + '"? Open goals will be marked Incomplete.', () => {
                        CrisisEpisodesService.Close({ EpisodeId: this.entity.EpisodeId, Disposition: disp, Notes: this.form.Notes.value }, () => {
                            Q.notifySuccess('Episode closed');
                            this.dialogClose();
                            this.element.triggerHandler('ondatachange', [{ operationType: 'update' }]);
                        });
                    });
                },
                visible: () => !this.isNew() && !!this.entity && !this.entity.ClosedAt
            });
            return buttons;
        }
    }
}
