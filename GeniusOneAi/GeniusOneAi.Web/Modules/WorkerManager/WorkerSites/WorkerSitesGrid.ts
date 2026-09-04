
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerSitesGrid extends Serenity.EntityGrid<WorkerSitesRow, any> {
        protected getColumnsKey() { return 'WorkerManager.WorkerSites'; }
        protected getDialogType() { return WorkerSitesDialog; }
        protected getIdProperty() { return WorkerSitesRow.idProperty; }
        protected getInsertPermission() { return WorkerSitesRow.insertPermission; }
        protected getLocalTextPrefix() { return WorkerSitesRow.localTextPrefix; }
        protected getService() { return WorkerSitesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}