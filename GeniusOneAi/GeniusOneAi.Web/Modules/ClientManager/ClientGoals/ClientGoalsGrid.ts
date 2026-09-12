
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientGoalsGrid extends Serenity.EntityGrid<ClientGoalsRow, any> {
        protected getColumnsKey() { return 'ClientManager.ClientGoals'; }
        protected getDialogType() { return ClientGoalsDialog; }
        protected getIdProperty() { return ClientGoalsRow.idProperty; }
        protected getInsertPermission() { return ClientGoalsRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalsRow.localTextPrefix; }
        protected getService() { return ClientGoalsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        ////////////////////////////////////////
        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.clientID;
        }
        private _clientID: string;
        get clientID() {
            return this._clientID;
        }
        set clientID(value: string) {
            if (this._clientID !== value) {
                this._clientID = value;
                this.setEquality('ClientId', value);
                this.refresh();
            }
        }
        ////////////////////////////////////////

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getAddButtonCaption(): string { return "Custom Goal"; }
        // Goals are grouped by encounter phase (E1..E5, follow-up), never by weekday.
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
        protected getDefaultSortBy() { return ['Phase', 'ClientGoalId']; }
        protected getColumns() {
            var columns = super.getColumns();
            var phase = columns.filter(c => c.field === 'Phase')[0];
            if (phase)
                phase.format = ctx => Q.htmlEncode(CustomEditors.EpisodePhaseEditor.label(ctx.value));
            var prot = columns.filter(c => c.field === 'IsProtocol')[0];
            if (prot)
                prot.format = ctx => ctx.value ? '<i class="fa fa-lock text-blue" title="Protocol goal - required by the pathway"></i>' : '';

            columns.splice(0, 0, {
                field: 'Edit Goal',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Goal"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            buttons.push({
                title: 'Add From Library',
                cssClass: '',
                onClick: e => loadGoalLibraryDocuments(this.clientID),
                separator: true
            });
            return buttons;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.ClientGoalId);
                }


            }

        }
        protected addButtonClick() {
            this.editItem({ ClientId: this.clientID });
        }
    }
}