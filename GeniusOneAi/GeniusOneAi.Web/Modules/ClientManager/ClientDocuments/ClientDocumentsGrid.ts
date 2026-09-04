
namespace GeniusOneAi.ClientManager
{

    @Serenity.Decorators.registerClass()
    export class ClientDocumentsGrid extends Serenity.EntityGrid<ClientDocumentsRow, any> {
        protected getColumnsKey() { return ClientDocumentsColumns.columnsKey; }
        protected getIdProperty() { return ClientDocumentsRow.idProperty; }
        protected getInsertPermission() { return ClientDocumentsRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientDocumentsRow.localTextPrefix; }
        protected getService() { return ClientDocumentsService.baseUrl; }

        constructor(container: JQuery)
        {
            super(container);
        }
        protected getGridCanLoad()
        {
            return super.getGridCanLoad() && !!this.clientID;
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
                this.setEquality('ClientId', value);
                this.refresh();
            }
        }
        protected getColumns()
        {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'View Document',
                name: '',
                format: ctx => '<a class="inline-action view-document-row" title="View Document"><i class="fa fa-file-text-o text-green"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number)
        {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action'))
            {
                e.preventDefault();
                if (target.hasClass('view-document-row'))
                {

                    if (!this.onViewSubmit())
                    {
                        return;
                    }
                    loadClientDocEditor(item.FileName);
                }
            }



        }

        protected getButtons()
        {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass === "refresh-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
            //buttons.push({
            //    title: 'Add Document',
            //    cssClass: '',
            //    onClick: e => Q.alert("Feature not enabled just yet!"),
            //    separator: true
            //});
            buttons.push({
                title: 'Generate Document(s)',
                cssClass: '',
                onClick: e => loadPatientDocuments(this.clientID),
                separator: true
            });
            return buttons;
        }
        protected getAddButtonCaption()
        {
            return "Upload Document";
        }
        protected addButtonClick()
        {
            this.editItem({ ClientId: this.clientID });
        }
    }
}