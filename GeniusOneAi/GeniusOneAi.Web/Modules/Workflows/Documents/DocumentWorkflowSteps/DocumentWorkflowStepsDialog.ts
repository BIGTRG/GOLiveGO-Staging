
namespace GeniusOneAi.Workflows {
   /* @Serenity.Decorators.panel()*/
    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowStepsDialog extends Serenity.Extensions.GridEditorDialog<DocumentWorkflowStepsRow> {
        protected getFormKey() { return DocumentWorkflowStepsForm.formKey; }
        protected getIdProperty() { return DocumentWorkflowStepsRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentWorkflowStepsRow.localTextPrefix; }
        protected getNameProperty() { return DocumentWorkflowStepsRow.nameProperty; }
        protected getService() { return DocumentWorkflowStepsService.baseUrl; }
        protected getDeletePermission() { return DocumentWorkflowStepsRow.deletePermission; }
        protected getInsertPermission() { return DocumentWorkflowStepsRow.insertPermission; }
        protected getUpdatePermission() { return DocumentWorkflowStepsRow.updatePermission; }

        protected form = new DocumentWorkflowStepsForm(this.idPrefix);
        constructor() {
            super();
            this.form.StepPerformerType.change((e) => this.checkPerformerType());
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Workflow Step Editor';
            opt.width = 600;
            opt.height = 325;
            return opt;
        }
        checkPerformerType() {

            var performerType = this.form.StepPerformerType.value;
            if (performerType === "") {
                this.form.StepPerformerStaffId.clearItems;
                this.form.StepPerformerPatientId.clearItems;
                this.form.StepPerformerStaffId.element.prop('required', false);
                this.form.StepPerformerPatientId.element.prop('required', false);
                $('.StepPerformerStaffId').hide();
                $('.StepPerformerPatientId').hide();
            };
            

            if (performerType === "Staff") {
                this.form.StepPerformerStaffId.forceUpdate;
                this.form.StepPerformerPatientId.clearItems;
                $('.StepPerformerStaffId').show();
                $('.StepPerformerPatientId').hide();
            };

            if (performerType === "Patient") {

                this.form.StepPerformerStaffId.clearItems;
                this.form.StepPerformerPatientId.forceUpdate;
                $('.StepPerformerStaffId').hide();
                $('.StepPerformerPatientId').show();
            };


        }
    }
}