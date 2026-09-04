
namespace GeniusOneAi.WorkerPortal {

    @Serenity.Decorators.registerClass()
    export class DocumentRepositoryGrid extends Serenity.EntityGrid<DocumentsRow, any> {
        protected getColumnsKey() { return 'WorkerPortal.DocumentRepository'; }
        protected getIdProperty() { return DocumentsRow.idProperty; }
        protected getInsertPermission() { return DocumentsRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentsRow.localTextPrefix; }
        protected getService() { return DocumentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Document Repository";
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getButtons() {
            var buttons = [];
            return buttons;
        }
     }
}