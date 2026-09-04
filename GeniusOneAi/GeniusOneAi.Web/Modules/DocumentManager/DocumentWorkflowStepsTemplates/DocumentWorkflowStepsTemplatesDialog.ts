
namespace GeniusOneAi.DocumentManager {
   /* @Serenity.Decorators.panel()*/
    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowStepsTemplatesDialog extends Serenity.Extensions.GridEditorDialog<DocumentWorkflowStepsTemplatesRow> {
        protected getFormKey() { return DocumentWorkflowStepsTemplatesForm.formKey; }
        protected getIdProperty() { return DocumentWorkflowStepsTemplatesRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentWorkflowStepsTemplatesRow.localTextPrefix; }
        protected getNameProperty() { return DocumentWorkflowStepsTemplatesRow.nameProperty; }
        protected getService() { return DocumentWorkflowStepsTemplatesService.baseUrl; }
        protected getDeletePermission() { return DocumentWorkflowStepsTemplatesRow.deletePermission; }
        protected getInsertPermission() { return DocumentWorkflowStepsTemplatesRow.insertPermission; }
        protected getUpdatePermission() { return DocumentWorkflowStepsTemplatesRow.updatePermission; }

        protected form = new DocumentWorkflowStepsTemplatesForm(this.idPrefix);
        constructor() {
            super();
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Workflow Step Editor';
            opt.width = 600;
            opt.height = 325;
            return opt;
        }
    }
}