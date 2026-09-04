
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
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();

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