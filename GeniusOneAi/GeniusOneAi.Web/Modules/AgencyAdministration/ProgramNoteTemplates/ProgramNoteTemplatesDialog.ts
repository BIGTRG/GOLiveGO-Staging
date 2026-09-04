
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ProgramNoteTemplatesDialog extends Serenity.EntityDialog<ProgramNoteTemplatesRow, any> {
        protected getFormKey() { return ProgramNoteTemplatesForm.formKey; }
        protected getIdProperty() { return ProgramNoteTemplatesRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramNoteTemplatesRow.localTextPrefix; }
        protected getNameProperty() { return ProgramNoteTemplatesRow.nameProperty; }
        protected getService() { return ProgramNoteTemplatesService.baseUrl; }
        protected getDeletePermission() { return ProgramNoteTemplatesRow.deletePermission; }
        protected getInsertPermission() { return ProgramNoteTemplatesRow.insertPermission; }
        protected getUpdatePermission() { return ProgramNoteTemplatesRow.updatePermission; }

        protected form = new ProgramNoteTemplatesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Program Note Template Editor';
            opt.width = 700;
            opt.height = 850;
            return opt;
        }
    }
}