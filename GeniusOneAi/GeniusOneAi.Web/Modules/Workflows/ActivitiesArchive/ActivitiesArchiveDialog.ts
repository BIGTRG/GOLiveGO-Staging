
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class ActivitiesArchiveDialog extends Serenity.EntityDialog<ActivitiesArchiveRow, any> {
        protected getFormKey() { return ActivitiesArchiveForm.formKey; }
        protected getIdProperty() { return ActivitiesArchiveRow.idProperty; }
        protected getLocalTextPrefix() { return ActivitiesArchiveRow.localTextPrefix; }
        protected getNameProperty() { return ActivitiesArchiveRow.nameProperty; }
        protected getService() { return ActivitiesArchiveService.baseUrl; }
        protected getDeletePermission() { return ActivitiesArchiveRow.deletePermission; }
        protected getInsertPermission() { return ActivitiesArchiveRow.insertPermission; }
        protected getUpdatePermission() { return ActivitiesArchiveRow.updatePermission; }
        constructor() {
            super();
        }
        protected form = new ActivitiesArchiveForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Notes';
            opt.width = 500;
            opt.height = 400;
            return opt;
        }
        getToolbarButtons() {
            let buttons = [];
           return buttons;
        }
      
      
    }
}