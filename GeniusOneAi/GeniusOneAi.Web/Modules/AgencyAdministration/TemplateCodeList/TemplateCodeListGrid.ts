
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class TemplateCodeListGrid extends Serenity.EntityGrid<TemplateCodeListRow, any> {
        protected getColumnsKey() { return TemplateCodeListColumns.columnsKey; }
        protected getDialogType() { return TemplateCodeListDialog; }
        protected getIdProperty() { return TemplateCodeListRow.idProperty; }
        protected getInsertPermission() { return TemplateCodeListRow.insertPermission; }
        protected getLocalTextPrefix() { return TemplateCodeListRow.localTextPrefix; }
        protected getService() { return TemplateCodeListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}