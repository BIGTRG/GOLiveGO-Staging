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
            opt.width = 760;
            return opt;
        }

        protected updateTitle(): void {
            var e = this.entity || {};
            this.dialogTitle = this.isNew() ? 'Open Crisis Episode' :
                'Crisis Episode #' + e.EpisodeId + (e.ClientName ? ' - ' + e.ClientName : '');
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
                title: 'Close Episode',
                cssClass: 'close-episode-button',
                icon: 'fa-flag-checkered',
                onClick: () => {
                    if (this.isNew() || !this.entity || this.entity.ClosedAt) return;
                    var disp = this.form.Disposition.value || 'Discharged';
                    Q.confirm('Close episode #' + this.entity.EpisodeId + ' as "' + EpisodeDispositionEditor.label(disp) + '"? Open goals will be marked Incomplete.', () => {
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
