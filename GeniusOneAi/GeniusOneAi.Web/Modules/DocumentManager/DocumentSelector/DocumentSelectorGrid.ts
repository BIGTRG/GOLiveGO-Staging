
namespace GeniusOneAi.DocumentManager
{
    @Serenity.Decorators.registerClass()
    export class DocumentSelectorGrid extends Serenity.EntityGrid<DocumentSelectorRow, any> {
        protected getColumnsKey() { return 'DocumentManager.DocumentSelector'; }
        protected getIdProperty() { return DocumentSelectorRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentSelectorRow.localTextPrefix; }
        protected getService() { return DocumentSelectorService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery)
        {
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
            return "Document Repository";
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
                title: 'Generate Documents',
                cssClass: 'send-button',
                onClick: () =>
                {
                    if (!this.onViewSubmit())
                    {
                        return;
                    }
                    var ids = this.rowSelection.getSelectedKeys();
                    var clientID = Number(this.clientID);
                    if (ids.length === 0) { Q.notifyError("Select atleast 1 document to generate"); return; }
                 Swal.fire({
                        title: 'Warning!',
                        text: "Please confirm that you would like to generate the selected documents for this client.",
                        showCancelButton: true,
                        confirmButtonColor: '#3C8DBC',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Proceed',
                        cancelButtonText: 'Cancel'
                    }).then((result) =>
                    {
                        if (result.isConfirmed)
                        {
                            GeniusOneAi.DocumentManager.DocumentSelectorService.CopyDocumentsToClient({ Ids: ids, clientId: clientID }, response =>
                            {
                                Swal.fire({
                                    title: 'Success',
                                    text: 'You have successfully generated ' + response.Resp + ' documents for this client.',
                                    confirmButtonColor: '#3C8DBC'
                                });
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