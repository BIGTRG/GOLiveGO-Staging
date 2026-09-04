
namespace GeniusOneAi.WorkerPortal {

    @Serenity.Decorators.registerClass()
    export class ClientAuthorizationsGrid extends Serenity.EntityGrid<ClientAuthorizationsRow, any> {
        protected getColumnsKey() { return 'ClientManager.ClientAuthorizations'; }
        protected getDialogType() { return ClientAuthorizationsDialog; }
        protected getIdProperty() { return ClientAuthorizationsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientAuthorizationsRow.localTextPrefix; }
        protected getService() { return ClientAuthorizationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
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
        
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getAddButtonCaption(): string { return "Authorization"; }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Authorization',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Authorization"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
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
                    slf.editItem(item.AuthorizationId);
                }


            }

        }
        protected addButtonClick() {
            this.editItem({ ClientId: this.clientID });
        }
    }
}