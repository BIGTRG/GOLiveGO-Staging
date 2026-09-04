
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class ActivitiesLogDialog extends Serenity.EntityDialog<ActivitiesLogRow, any> {
        protected getFormKey() { return ActivitiesLogForm.formKey; }
        protected getIdProperty() { return ActivitiesLogRow.idProperty; }
        protected getLocalTextPrefix() { return ActivitiesLogRow.localTextPrefix; }
        protected getNameProperty() { return ActivitiesLogRow.nameProperty; }
        protected getService() { return ActivitiesLogService.baseUrl; }
        protected getDeletePermission() { return ActivitiesLogRow.deletePermission; }
        protected getInsertPermission() { return ActivitiesLogRow.insertPermission; }
        protected getUpdatePermission() { return ActivitiesLogRow.updatePermission; }

        protected form = new ActivitiesLogForm(this.idPrefix);
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
                        window.location.replace('../../Workflows/Activities');

                }); }
            });

            return buttons;
        }
    }
}