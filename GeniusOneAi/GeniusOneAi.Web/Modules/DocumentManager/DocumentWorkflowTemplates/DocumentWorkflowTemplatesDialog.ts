
namespace GeniusOneAi.DocumentManager {

    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowTemplatesDialog extends Serenity.EntityDialog<DocumentWorkflowTemplatesRow, any> {
        protected getFormKey() { return DocumentWorkflowTemplatesForm.formKey; }
        protected getIdProperty() { return DocumentWorkflowTemplatesRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentWorkflowTemplatesRow.localTextPrefix; }
        protected getNameProperty() { return DocumentWorkflowTemplatesRow.nameProperty; }
        protected getService() { return DocumentWorkflowTemplatesService.baseUrl; }
        protected getDeletePermission() { return DocumentWorkflowTemplatesRow.deletePermission; }
        protected getInsertPermission() { return DocumentWorkflowTemplatesRow.insertPermission; }
        protected getUpdatePermission() { return DocumentWorkflowTemplatesRow.updatePermission; }

        protected form = new DocumentWorkflowTemplatesForm(this.idPrefix);

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