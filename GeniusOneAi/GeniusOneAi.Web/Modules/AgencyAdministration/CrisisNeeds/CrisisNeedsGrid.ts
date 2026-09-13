namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class CrisisNeedsGrid extends Serenity.EntityGrid<CrisisNeedsRow, any> {
        protected getColumnsKey() { return CrisisNeedsColumns.columnsKey; }
        protected getDialogType() { return CrisisNeedsDialog; }
        protected getIdProperty() { return CrisisNeedsRow.idProperty; }
        protected getInsertPermission() { return CrisisNeedsRow.insertPermission; }
        protected getLocalTextPrefix() { return CrisisNeedsRow.localTextPrefix; }
        protected getService() { return CrisisNeedsService.baseUrl; }
        constructor(container: JQuery) { super(container); }
        protected getDefaultSortBy() { return ['SortOrder']; }
        protected getInitialTitle() { return "Crisis Needs (mapped to the 14 DA V3 categories)"; }
        protected getAddButtonCaption(): string { return "Add Need"; }
    }
}
