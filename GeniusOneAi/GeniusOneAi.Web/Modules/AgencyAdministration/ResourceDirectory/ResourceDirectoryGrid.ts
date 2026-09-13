namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class ResourceDirectoryGrid extends Serenity.EntityGrid<ResourceDirectoryRow, any> {
        protected getColumnsKey() { return ResourceDirectoryColumns.columnsKey; }
        protected getDialogType() { return ResourceDirectoryDialog; }
        protected getIdProperty() { return ResourceDirectoryRow.idProperty; }
        protected getInsertPermission() { return ResourceDirectoryRow.insertPermission; }
        protected getLocalTextPrefix() { return ResourceDirectoryRow.localTextPrefix; }
        protected getService() { return ResourceDirectoryService.baseUrl; }
        constructor(container: JQuery) { super(container); }
        protected getDefaultSortBy() { return ['ResourceType', 'Name']; }
        protected getInitialTitle() { return "Resource Directory (where / who pick-lists for outcome questions)"; }
        protected getAddButtonCaption(): string { return "Add Resource"; }
        protected getColumns() {
            var columns = super.getColumns();
            var t = columns.filter(c => c.field === 'ResourceType')[0];
            if (t) t.format = ctx => Q.htmlEncode(CustomEditors.ResourceTypeEditor.label(ctx.value));
            return columns;
        }
    }
}
