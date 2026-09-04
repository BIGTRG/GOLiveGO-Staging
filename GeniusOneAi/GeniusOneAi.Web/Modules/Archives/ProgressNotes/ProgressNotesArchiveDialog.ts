
namespace GeniusOneAi.Archives {

    @Serenity.Decorators.registerClass()
    export class ProgressNotesArchiveDialog extends Serenity.EntityDialog<ProgressNotesArchiveRow, any> {
        protected getFormKey() { return ProgressNotesArchiveForm.formKey; }
        protected getIdProperty() { return ProgressNotesArchiveRow.idProperty; }
        protected getLocalTextPrefix() { return ProgressNotesArchiveRow.localTextPrefix; }
        protected getNameProperty() { return ProgressNotesArchiveRow.nameProperty; }
        protected getService() { return ProgressNotesArchiveService.baseUrl; }
        constructor() {
            super();
        }
        protected form = new ProgressNotesArchiveForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Notes';
            opt.width = 500;
            opt.height = 400;
            return opt;
        }
        getToolbarButtons() {
            let buttons = []
            return buttons;
        }
       
       
    }
}