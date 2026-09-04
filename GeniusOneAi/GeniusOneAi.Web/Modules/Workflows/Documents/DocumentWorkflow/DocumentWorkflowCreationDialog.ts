
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowCreationDialog extends Serenity.EntityDialog<DocumentWorkflowRow, any> {
        protected getFormKey() { return DocumentWorkflowCreationForm.formKey; }
        protected getIdProperty() { return DocumentWorkflowRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentWorkflowRow.localTextPrefix; }
        protected getNameProperty() { return DocumentWorkflowRow.nameProperty; }
        protected getService() { return DocumentWorkflowService.baseUrl; }
        protected getDeletePermission() { return DocumentWorkflowRow.deletePermission; }
        protected getInsertPermission() { return DocumentWorkflowRow.insertPermission; }
        protected getUpdatePermission() { return DocumentWorkflowRow.updatePermission; }
        protected form = new DocumentWorkflowCreationForm(this.idPrefix);
        constructor() {
            super();
        }
      
        getToolbarButtons() {
            var buttons = [];
            buttons.push({
                title: 'Initiate Workflow',
                cssClass: 'add-button',
                onClick: async () => {
                    Workflows.DocumentWorkflowService.IssueNewDocumentWorkflow({
                        Id: Number(this.form.DocumentWorkflowId.value)
                    },
                        response => {
                            if (response.Response == 'Success') {
                                Q.success('Workflow created successfully!', () => { });  
                                return;
                            }
                            Q.alert('Error creating workflow.  Please try again');          

                        }, { async: false });
                },
                separator: true
            });
            return buttons;
        }
      
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'New Workflow';
            opt.width = 600;
            opt.height = 200;
            return opt;
        }

    }
}