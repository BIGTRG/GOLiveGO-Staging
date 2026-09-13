namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibraryGrid extends Serenity.EntityGrid<ClientGoalsLibraryRow, any> {
        protected getColumnsKey() { return ClientGoalsLibraryColumns.columnsKey; }
        protected getDialogType() { return ClientGoalsLibraryDialog; }
        protected getIdProperty() { return ClientGoalsLibraryRow.idProperty; }
        protected getInsertPermission() { return ClientGoalsLibraryRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalsLibraryRow.localTextPrefix; }
        protected getService() { return ClientGoalsLibraryService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected getInitialTitle() { return "Goals Library - by encounter phase"; }
        protected getDefaultSortBy() { return ['Phase', 'Code']; }
        // Library goals are grouped by the encounter phase they belong to (E1..E5, follow-up).
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
            return opt;
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin((this.slickGrid.getOptions() as any).groupItemMetadataProvider);
            this.view.setGrouping([{
                getter: 'Phase',
                formatter: g => '<span class="goal-phase-group">' + Q.htmlEncode(CustomEditors.EpisodePhaseEditor.label(g.value) || 'No phase assigned') +
                    '</span> <span class="goal-phase-count">' + g.count + ' goal' + (g.count === 1 ? '' : 's') + '</span>',
                comparer: (a, b) => CustomEditors.EpisodePhaseEditor.order(a.value) - CustomEditors.EpisodePhaseEditor.order(b.value),
                aggregateCollapsed: false,
                lazyTotalsCalculation: true
            }] as any);
            return grid;
        }
        protected getColumns() {
            var columns = super.getColumns();
            var phase = columns.filter(c => c.field === 'Phase')[0];
            if (phase) phase.format = ctx => Q.htmlEncode(CustomEditors.EpisodePhaseEditor.label(ctx.value));
            var prot = columns.filter(c => c.field === 'IsProtocol')[0];
            if (prot) prot.format = ctx => ctx.value ? '<i class="fa fa-lock text-blue" title="Protocol goal - locked on the client"></i>' : '';
            var origin = columns.filter(c => c.field === 'Origin')[0];
            if (origin) origin.format = ctx => Q.htmlEncode(CustomEditors.GoalOriginEditor.label(ctx.value));
            columns.splice(0, 0, {
                field: 'Edit Goal', name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Goal"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24, minWidth: 24, maxWidth: 24
            });
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented()) return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action')) target = target.parent();
            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('edit-row')) {
                    if (!this.onViewSubmit()) return;
                    this.editItem(item.ClientGoalId);
                }
            }
        }
        protected addButtonClick() {
            this.editItem({ Phase: 'E1', Origin: 'Clinician', IsActive: true, GoalType: 'Mobile Crisis' });
        }
        protected getAddButtonCaption(): string { return "Add Goal"; }
    }
}
