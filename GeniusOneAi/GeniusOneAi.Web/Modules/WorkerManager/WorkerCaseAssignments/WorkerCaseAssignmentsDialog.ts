
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class WorkerCaseAssignmentsDialog extends Serenity.EntityDialog<WorkerCaseAssignmentsRow, any> {
        protected getFormKey() { return WorkerCaseAssignmentsForm.formKey; }
        protected getIdProperty() { return WorkerCaseAssignmentsRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerCaseAssignmentsRow.localTextPrefix; }
        protected getNameProperty() { return WorkerCaseAssignmentsRow.nameProperty; }
        protected getService() { return WorkerCaseAssignmentsService.baseUrl; }

        protected form = new WorkerCaseAssignmentsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Case Assignment';
            opt.width = 600;
            opt.height = 525;
            return opt;
        }
    }
}