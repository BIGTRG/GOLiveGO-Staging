
namespace GeniusOneAi.WorkerPortal {

    @Serenity.Decorators.registerClass()
    export class WorkerActivitiesLogDialog extends Serenity.EntityDialog<WorkerActivitiesLogRow, any> {
        protected getFormKey() { return WorkerActivitiesLogForm.formKey; }
        protected getIdProperty() { return WorkerActivitiesLogRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerActivitiesLogRow.localTextPrefix; }
        protected getNameProperty() { return WorkerActivitiesLogRow.nameProperty; }
        protected getService() { return WorkerActivitiesLogService.baseUrl; }

        protected form = new WorkerActivitiesLogForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Log';
            opt.width = 500;
            opt.height = 400;
            return opt;
        }
        getToolbarButtons() {
            var buttons = [];
            buttons.push({
                title: 'Submit',
                cssClass: 'apply-changes-button',
                onClick: e => {
                    this.save(() => {
                        window.location.replace('../../Workflows/WorkerActivities');

                }); }
            });

            return buttons;
        }
    }
}