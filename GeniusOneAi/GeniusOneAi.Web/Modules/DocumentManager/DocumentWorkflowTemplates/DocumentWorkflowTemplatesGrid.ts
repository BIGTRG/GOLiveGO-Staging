
namespace GeniusOneAi.DocumentManager {

    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowTemplatesGrid extends Serenity.EntityGrid<DocumentWorkflowTemplatesRow, any> {
        protected getColumnsKey() { return DocumentWorkflowTemplatesColumns.columnsKey; }
        protected getDialogType() { return DocumentWorkflowTemplatesDialog; }
        protected getIdProperty() { return DocumentWorkflowTemplatesRow.idProperty; }
        protected getInsertPermission() { return DocumentWorkflowTemplatesRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentWorkflowTemplatesRow.localTextPrefix; }
        protected getService() { return DocumentWorkflowTemplatesService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Workflow Document Templates";
        }
        protected getAddButtonCaption(): string { return "Add Template"; }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();
          
            columns.splice(0, 0, {
                field: 'Edit Template',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Template Metadata"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
           return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.WorkflowTemplateId);
                }
               
            }



        }
        protected getItemCssClass(item: DocumentManager.DocumentWorkflowTemplatesRow, index: number): string {
            let klass: string = "";

            //if (item. {
            //    klass += " document-finalized";
            //    return Q.trimToNull(klass);
            //}

            return Q.trimToNull(klass);
        }
    }
}