
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ProgramTypesDialog extends Serenity.EntityDialog<ProgramTypesRow, any> {
        protected getFormKey() { return ProgramTypesForm.formKey; }
        protected getIdProperty() { return ProgramTypesRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramTypesRow.localTextPrefix; }
        protected getNameProperty() { return ProgramTypesRow.nameProperty; }
        protected getService() { return ProgramTypesService.baseUrl; }
        protected getDeletePermission() { return ProgramTypesRow.deletePermission; }
        protected getInsertPermission() { return ProgramTypesRow.insertPermission; }
        protected getUpdatePermission() { return ProgramTypesRow.updatePermission; }

        protected form = new ProgramTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Program Type Editor';
            opt.width = 500;
            opt.height = 500;
            return opt;
        }
        protected getToolbarButtons()
        {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            return buttons;
        }
     
    }
}