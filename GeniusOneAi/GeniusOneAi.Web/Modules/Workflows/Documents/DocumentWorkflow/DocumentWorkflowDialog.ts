
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowDialog extends Serenity.EntityDialog<DocumentWorkflowRow, any> {
        protected getFormKey() { return DocumentWorkflowForm.formKey; }
        protected getIdProperty() { return DocumentWorkflowRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentWorkflowRow.localTextPrefix; }
        protected getNameProperty() { return DocumentWorkflowRow.nameProperty; }
        protected getService() { return DocumentWorkflowService.baseUrl; }
        protected getDeletePermission() { return DocumentWorkflowRow.deletePermission; }
        protected getInsertPermission() { return DocumentWorkflowRow.insertPermission; }
        protected getUpdatePermission() { return DocumentWorkflowRow.updatePermission; }

        protected form = new DocumentWorkflowForm(this.idPrefix);

        constructor() {
            super();
            this.form.DocumentWorkflowStepsList.element.css('height', '350px'); 
        }
        protected updateInterface(): void {
            super.updateInterface();
            $('.category-links').remove();
        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            return buttons;
        }
      
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Workflow Template Editor';
            opt.width = 800;
            opt.height = 700;
            return opt;
        }

    }
}