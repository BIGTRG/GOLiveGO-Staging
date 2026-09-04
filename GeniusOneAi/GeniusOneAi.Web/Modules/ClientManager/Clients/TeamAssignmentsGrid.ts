namespace GeniusOneAi.ClientManager
{

    @Serenity.Decorators.registerClass()
    export class TeamAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey() { return 'ClientManager.TeamAssignments'; }
        protected getIdProperty() { return WorkerCaseAssignmentsRow.idProperty; }
        protected getInsertPermission() { return WorkerCaseAssignmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return WorkerCaseAssignmentsRow.localTextPrefix; }
        protected getService() { return WorkerCaseAssignmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createQuickSearchInput() { }
        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.clientID;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
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
        protected addButtonClick()
        {
/*            this.editItem({ ClientId: this.clientID });*/
            var dlg = new GeniusOneAi.ClientManager.WorkerCaseAssignmentsDialog();
            dlg.clientID = Number(this.clientID);
            dlg.loadNewAndOpenDialog();
        }
        protected getAddButtonCaption()
        {
            return "Add Assignment"
        }
        protected getColumns()
        {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Assignment',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Assignment"><i class="fa fa-pencil text-blue"></i></a>',
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
                if (target.hasClass('edit-row'))
                {

                    if (!this.onViewSubmit())
                    {
                        return;
                    }
                    var dlg = new GeniusOneAi.ClientManager.WorkerCaseAssignmentsDialog();
                    dlg.clientID = item.ClientId;
                    dlg.loadByIdAndOpenDialog(item.CaseAssignmentId);
                }

            }

        }
    }
}