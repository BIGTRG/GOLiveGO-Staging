namespace GeniusOneAi.WorkerPortal {
    import WorkerCaseAssignmentsRow = WorkerPortal.WorkerCaseAssignmentsRow;
    import WorkerCaseAssignmentsService = WorkerPortal.WorkerCaseAssignmentsService;

    @Serenity.Decorators.registerClass()
    export class TeamAssignmentsGrid extends Serenity.EntityGrid<WorkerCaseAssignmentsRow, any> {
        protected getColumnsKey() { return 'WorkerPortal.TeamAssignments'; }
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
            var buttons = [];
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

    }
}