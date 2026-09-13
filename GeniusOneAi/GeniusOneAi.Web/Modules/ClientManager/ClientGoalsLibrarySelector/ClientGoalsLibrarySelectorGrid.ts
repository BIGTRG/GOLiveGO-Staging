namespace GeniusOneAi.ClientManager {

    export interface LibrarySelectorContext { clientID: number; episodeId?: number; phase?: string; onAdded?: () => void; }

    /** Need label from the CrisisNeeds lookup (NeedKey -> Label); falls back to the key. */
    export function needLabel(key: string): string {
        if (!key) return '';
        var lk = AgencyAdministration.CrisisNeedsRow.getLookup();
        var it = lk && lk.itemById ? lk.itemById[key] : null;
        return it ? it.Label : key;
    }

    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibrarySelectorGrid extends Serenity.EntityGrid<ClientGoalsLibrarySelectorRow, any> {
        protected getColumnsKey() { return ClientGoalsLibrarySelectorColumns.columnsKey; }
        protected getDialogType() { return ClientGoalsLibrarySelectorDialog; }
        protected getIdProperty() { return ClientGoalsLibrarySelectorRow.idProperty; }
        protected getInsertPermission() { return ClientGoalsLibrarySelectorRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalsLibrarySelectorRow.localTextPrefix; }
        protected getService() { return ClientGoalsLibrarySelectorService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;
        private phaseSelect: Serenity.SelectEditor;
        public clientID: number;
        public episodeId: number;
        public phase: string;
        public onAdded: () => void;

        constructor(container: JQuery) {
            super(container);
        }
        protected getGridCanLoad() { return super.getGridCanLoad() && !!this.clientID; }

        setContext(ctx: LibrarySelectorContext) {
            this.clientID = ctx.clientID;
            this.episodeId = ctx.episodeId;
            this.phase = ctx.phase;
            this.onAdded = ctx.onAdded;
            if (this.phaseSelect) this.phaseSelect.value = this.phase || '';
            this.refresh();
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            // phase filter: defaults to the episode's current phase; "All phases" lets the clinician pull ahead
            var div = $('<div class="s-QuickFilterItem"><span class="quick-filter-label">Phase</span><div class="quick-filter-item"></div></div>')
                .appendTo(this.toolbar.element.find('.s-QuickFilterBar').length ? this.toolbar.element.find('.s-QuickFilterBar') : this.toolbar.element);
            this.phaseSelect = new Serenity.SelectEditor(div.find('.quick-filter-item'), {
                items: [['', 'All phases']].concat(CustomEditors.EpisodePhaseEditor.items.filter(x => x[0] !== 'Closed')), emptyOptionText: 'All phases'
            } as any);
            this.phaseSelect.value = this.phase || '';
            this.phaseSelect.changeSelect2(() => { this.phase = this.phaseSelect.value || null; this.refresh(); });
        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) return false;
            var req = this.view.params as Serenity.ListRequest;
            req.Criteria = Serenity.Criteria.and(req.Criteria, [['IsActive'], '=', true], ['is not null', ['Code']]);
            if (this.phase) req.Criteria = Serenity.Criteria.and(req.Criteria, [['Phase'], '=', this.phase]);
            return true;
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() { return "Goal Library"; }
        protected getDefaultSortBy() { return ['Phase', 'Code']; }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        }
        protected getButtons() {
            return [{
                title: 'Add Selected Goals',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) return;
                    var ids = this.rowSelection.getSelectedKeys().map(x => Number(x));
                    if (ids.length === 0) { Q.notifyError("Select at least one goal to add."); return; }
                    var where = this.episodeId ? ('episode #' + this.episodeId + (this.phase ? ', ' + CustomEditors.EpisodePhaseEditor.label(this.phase) : '')) : 'this client (no open episode)';
                    Swal.fire({
                        title: 'Add ' + ids.length + ' goal' + (ids.length === 1 ? '' : 's') + '?',
                        text: 'The goals, their interventions and projected outcomes will be added to ' + where + '.',
                        showCancelButton: true, confirmButtonColor: '#3C8DBC', cancelButtonColor: '#d33', confirmButtonText: 'Add', cancelButtonText: 'Cancel'
                    }).then(result => {
                        if (!result.isConfirmed) return;
                        ClientGoalsLibrarySelectorService.CopyLibraryGoals({ ClientId: this.clientID, EpisodeId: this.episodeId, Phase: this.phase, Ids: ids }, response => {
                            Q.notifySuccess('Added ' + response.Copied + ' goal(s)' + (response.Skipped ? ', ' + response.Skipped + ' already on this episode' : '') + '.');
                            this.rowSelection.resetCheckedAndRefresh();
                            this.element.closest('.ui-dialog-content').dialog('close');
                            if (this.onAdded) this.onAdded();
                        });
                    });
                }
            }];
        }
        protected getColumns() {
            var columns = super.getColumns();
            var phase = columns.filter(c => c.field === 'Phase')[0];
            if (phase) phase.format = ctx => Q.htmlEncode(CustomEditors.EpisodePhaseEditor.label(ctx.value));
            var prot = columns.filter(c => c.field === 'IsProtocol')[0];
            if (prot) prot.format = ctx => ctx.value ? '<i class="fa fa-lock text-blue" title="Protocol goal - locked once added"></i>' : '';
            var need = columns.filter(c => c.field === 'NeedKey')[0];
            if (need) need.format = ctx => Q.htmlEncode(needLabel(ctx.value));
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }
    }
}
