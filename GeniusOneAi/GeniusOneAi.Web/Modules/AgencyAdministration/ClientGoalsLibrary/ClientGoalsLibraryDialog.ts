
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibraryDialog extends Serenity.EntityDialog<ClientGoalsLibraryRow, any> {
        protected getFormKey() { return ClientGoalsLibraryForm.formKey; }
        protected getIdProperty() { return ClientGoalsLibraryRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalsLibraryRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalsLibraryRow.nameProperty; }
        protected getService() { return ClientGoalsLibraryService.baseUrl; }
        protected form = new ClientGoalsLibraryForm(this.idPrefix);
        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.width = 800;
            opt.height = 800;
            return opt;
        }
        protected updateTitle(): void
        {

            this.dialogTitle = 'Library Goal';
        }
        protected updateInterface(): void
        {
            super.updateInterface();
            $('.category-links').remove();
        }
    }
}