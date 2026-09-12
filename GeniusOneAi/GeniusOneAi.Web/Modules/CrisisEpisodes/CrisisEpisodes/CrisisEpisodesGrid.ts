namespace GeniusOneAi.CrisisEpisodes {

    @Serenity.Decorators.registerClass()
    export class CrisisEpisodesGrid extends Serenity.EntityGrid<CrisisEpisodesRow, any> {
        protected getColumnsKey() { return 'CrisisEpisodes.CrisisEpisodes'; }
        protected getDialogType() { return CrisisEpisodesDialog; }
        protected getIdProperty() { return CrisisEpisodesRow.idProperty; }
        protected getInsertPermission() { return CrisisEpisodesRow.insertPermission; }
        protected getLocalTextPrefix() { return CrisisEpisodesRow.localTextPrefix; }
        protected getService() { return CrisisEpisodesService.baseUrl; }

        constructor(container: JQuery, options?: { clientScoped?: boolean }) {
            super(container, options);
        }

        // When hosted inside the client dialog the grid is scoped to one client.
        protected getGridCanLoad() {
            return super.getGridCanLoad() && (this.clientScoped ? !!this._clientID : true);
        }
        public get clientScoped(): boolean { return !!(this.options && (this.options as any).clientScoped); }
        private _clientID: number;
        get clientID() { return this._clientID; }
        set clientID(value: number) {
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
            var phase = columns.filter(c => c.field === 'Phase')[0];
            if (phase)
                phase.format = ctx => Q.htmlEncode(CustomEditors.EpisodePhaseEditor.label(ctx.value));
            var disp = columns.filter(c => c.field === 'Disposition')[0];
            if (disp)
                disp.format = ctx => Q.htmlEncode(CustomEditors.EpisodeDispositionEditor.label(ctx.value));
            if (this.clientScoped) {
                columns = columns.filter(c => c.field !== 'ClientName' && c.field !== 'ClientRecordNumber');
            }
            columns.splice(0, 0, {
                field: 'Edit Episode', name: '', width: 24, minWidth: 24, maxWidth: 24,
                format: ctx => '<a class="inline-action edit-row" title="Open episode"><i class="fa fa-pencil text-blue"></i></a>'
            });
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented()) return;
            var target = $(e.target);
            if (target.parent().hasClass('inline-action')) target = target.parent();
            if (target.hasClass('edit-row')) {
                e.preventDefault();
                this.editItem(this.itemAt(row).EpisodeId);
            }
        }

        // Status filter (Open / Closed / All) for the full list; defaults to open episodes.
        private statusFilter: Serenity.SelectEditor;
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            if (this.clientScoped) return;
            var div = $('<div class="s-QuickFilterBar"><div class="quick-filter-item"><span class="quick-filter-label">Status</span></div></div>')
                .insertAfter(this.toolbar.element);
            this.statusFilter = Serenity.Widget.create({
                type: Serenity.SelectEditor,
                element: e => e.appendTo(div.find('.quick-filter-item')),
                options: { items: [['open', 'Open'], ['closed', 'Closed'], ['all', 'All']], emptyOptionText: null }
            });
            this.statusFilter.value = 'open';
            this.statusFilter.changeSelect2(() => this.refresh());
        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) return false;
            var req = this.view.params as Serenity.ListRequest;
            var v = this.statusFilter ? this.statusFilter.value : null;
            if (v === 'open') req.Criteria = Serenity.Criteria.and(req.Criteria, ['is null', ['ClosedAt']]);
            else if (v === 'closed') req.Criteria = Serenity.Criteria.and(req.Criteria, ['is not null', ['ClosedAt']]);
            return true;
        }
    }
}
