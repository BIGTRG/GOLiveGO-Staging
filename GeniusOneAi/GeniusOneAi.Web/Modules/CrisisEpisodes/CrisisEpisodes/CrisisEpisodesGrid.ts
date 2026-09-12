namespace GeniusOneAi.CrisisEpisodes {

    @Serenity.Decorators.registerClass()
    export class CrisisEpisodesGrid extends Serenity.EntityGrid<CrisisEpisodesRow, any> {
        protected getColumnsKey() { return 'CrisisEpisodes.CrisisEpisodes'; }
        protected getDialogType() { return CrisisEpisodesDialog; }
        protected getIdProperty() { return CrisisEpisodesRow.idProperty; }
        protected getInsertPermission() { return CrisisEpisodesRow.insertPermission; }
        protected getLocalTextPrefix() { return CrisisEpisodesRow.localTextPrefix; }
        protected getService() { return CrisisEpisodesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        // When hosted inside the client dialog the grid is scoped to one client.
        protected getGridCanLoad() {
            return super.getGridCanLoad() && (this.clientScoped ? !!this._clientID : true);
        }
        public clientScoped = false;
        private _clientID: number;
        get clientID() { return this._clientID; }
        set clientID(value: number) {
            this.clientScoped = true;
            if (this._clientID !== value) {
                this._clientID = value;
                this.setEquality('ClientId', value);
                this.refresh();
            }
        }

        protected getAddButtonCaption(): string { return "Open Episode"; }

        protected addButtonClick() {
            this.editItem(this.clientScoped ? { ClientId: this._clientID } : {});
        }

        protected getDefaultSortBy() { return ['OpenedAt DESC']; }

        protected getColumns() {
            var columns = super.getColumns();
            var phase = Q.first(columns, c => c.field === 'Phase');
            if (phase)
                phase.format = ctx => Q.htmlEncode(EpisodePhaseEditor.label(ctx.value));
            var disp = Q.first(columns, c => c.field === 'Disposition');
            if (disp)
                disp.format = ctx => Q.htmlEncode(EpisodeDispositionEditor.label(ctx.value));
            if (this.clientScoped) {
                columns = columns.filter(c => c.field !== 'ClientName' && c.field !== 'ClientRecordNumber');
            }
            return columns;
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();
            if (!this.clientScoped) {
                filters.push({
                    field: 'ClosedAt', type: Serenity.SelectEditor, title: 'Status',
                    options: { items: [['open', 'Open'], ['closed', 'Closed']] },
                    handler: h => {
                        h.handled = true;
                        if (h.value === 'open') h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [['ClosedAt'], 'is null']);
                        else if (h.value === 'closed') h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [['ClosedAt'], 'is not null']);
                    }
                } as any);
            }
            return filters;
        }
    }
}
