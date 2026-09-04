
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibrarySelectorGrid extends Serenity.EntityGrid<ClientGoalsLibrarySelectorRow, any> {
        protected getColumnsKey() { return ClientGoalsLibrarySelectorColumns.columnsKey; }
        protected getDialogType() { return ClientGoalsLibrarySelectorDialog; }
        protected getIdProperty() { return ClientGoalsLibrarySelectorRow.idProperty; }
        protected getInsertPermission() { return ClientGoalsLibrarySelectorRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalsLibrarySelectorRow.localTextPrefix; }
        protected getService() { return ClientGoalsLibrarySelectorService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery) {
            super(container);
        }
        private _clientID: string;
        get clientID()
        {
            return this._clientID;
        }
        set clientID(value: string)
        {
            if (this._clientID !== value)
            {
                this._clientID = value;
            }
        }
        protected createToolbarExtensions()
        {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected createQuickSearchInput() { }

        protected getInitialTitle()
        {
            return "Goal Selector";
        }

        protected getSlickOptions()
        {
            var opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        }

        protected getButtons()
        {
            return [{
                title: 'Copy Goals',
                cssClass: 'send-button',
                onClick: () =>
                {
                    if (!this.onViewSubmit())
                    {
                        return;
                    }
                    var ids = this.rowSelection.getSelectedKeys();
                    var clientID = Number(this.clientID);
                    if (ids.length === 0) { Q.notifyError("Select atleast 1 goal to copy"); return; }
                    Swal.fire({
                        title: 'Warning!',
                        text: "Please confirm that you would like to copy the selected goals to this client.",
                        showCancelButton: true,
                        confirmButtonColor: '#3C8DBC',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Proceed',
                        cancelButtonText: 'Cancel'
                    }).then((result) =>
                    {
                        if (result.isConfirmed)
                        {
                            GeniusOneAi.ClientManager.ClientGoalsLibrarySelectorService.CopyGoalsToClient({ Ids: ids, clientId: clientID }, response =>
                            {
                                Swal.fire({
                                    title: 'Success',
                                    text: 'You have successfully copied ' + response.Response + ' goal(s) to this client.  Please close this dialoge and to goal selector then click on the refresh button to load the new data.',
                                    confirmButtonColor: '#3C8DBC'
                                });
                                var parentGrid = this.element.closest('.s-ClientGoalsGrid').data('grid');
                                if (parentGrid)
                                {
                                    parentGrid.refresh();
                                }
                            });
                        }
                    })

                }
            }];
        }

        protected getColumns()
        {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }
    }
}