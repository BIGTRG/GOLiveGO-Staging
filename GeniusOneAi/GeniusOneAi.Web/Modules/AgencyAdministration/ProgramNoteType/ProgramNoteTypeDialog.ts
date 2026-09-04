
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ProgramNoteTypeDialog extends Serenity.EntityDialog<ProgramNoteTypeRow, any> {
        protected getFormKey() { return ProgramNoteTypeForm.formKey; }
        protected getIdProperty() { return ProgramNoteTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramNoteTypeRow.localTextPrefix; }
        protected getNameProperty() { return ProgramNoteTypeRow.nameProperty; }
        protected getService() { return ProgramNoteTypeService.baseUrl; }
        protected getDeletePermission() { return ProgramNoteTypeRow.deletePermission; }
        protected getInsertPermission() { return ProgramNoteTypeRow.insertPermission; }
        protected getUpdatePermission() { return ProgramNoteTypeRow.updatePermission; }

        protected form = new ProgramNoteTypeForm(this.idPrefix);
        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.title = 'Type Editor';
            opt.width = 600;
            opt.height = 245;
            return opt;
        }
    }
}