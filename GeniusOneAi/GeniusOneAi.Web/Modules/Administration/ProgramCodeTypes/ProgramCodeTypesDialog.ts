
namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class ProgramCodeTypesDialog extends Serenity.EntityDialog<ProgramCodeTypesRow, any> {
        protected getFormKey() { return ProgramCodeTypesForm.formKey; }
        protected getIdProperty() { return ProgramCodeTypesRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramCodeTypesRow.localTextPrefix; }
        protected getNameProperty() { return ProgramCodeTypesRow.nameProperty; }
        protected getService() { return ProgramCodeTypesService.baseUrl; }
        protected getDeletePermission() { return ProgramCodeTypesRow.deletePermission; }
        protected getInsertPermission() { return ProgramCodeTypesRow.insertPermission; }
        protected getUpdatePermission() { return ProgramCodeTypesRow.updatePermission; }

        protected form = new ProgramCodeTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Program Code Type Editor';
            opt.width = 600;
            opt.height = 600;
            return opt;
        }
    }
}