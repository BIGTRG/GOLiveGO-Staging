
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class ActivitiesLogNotesDialog extends Serenity.EntityDialog<ActivitiesLogRow, any> {
        protected getFormKey() { return ActivitiesLogNotesForm.formKey; }
        protected getIdProperty() { return ActivitiesLogRow.idProperty; }
        protected getLocalTextPrefix() { return ActivitiesLogRow.localTextPrefix; }
        protected getNameProperty() { return ActivitiesLogRow.nameProperty; }
        protected getService() { return ActivitiesLogService.baseUrl; }

        protected form = new ActivitiesLogNotesForm(this.idPrefix);
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