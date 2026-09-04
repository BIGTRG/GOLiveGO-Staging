
namespace GeniusOneAi.WorkerPortal
{

    @Serenity.Decorators.registerClass()
    export class WorkerActivitiesLogNotesDialog extends Serenity.EntityDialog<WorkerActivitiesLogRow, any> {
        protected getFormKey() { return WorkerActivitiesLogNotesForm.formKey; }
        protected getIdProperty() { return WorkerActivitiesLogRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerActivitiesLogRow.localTextPrefix; }
        protected getNameProperty() { return WorkerActivitiesLogRow.nameProperty; }
        protected getService() { return WorkerActivitiesLogService.baseUrl; }

        protected form = new WorkerActivitiesLogNotesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Log Note';
            opt.width = 500;
            opt.height = 400;
            return opt;
        }
        getToolbarButtons() {
            var buttons = [];
            return buttons;
        }
    }
}