
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientGoalsDialog extends Serenity.EntityDialog<ClientGoalsRow, any> {
        protected getFormKey() { return ClientGoalsForm.formKey; }
        protected getIdProperty() { return ClientGoalsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalsRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalsRow.nameProperty; }
        protected getService() { return ClientGoalsService.baseUrl; }
        protected form = new ClientGoalsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 800;
            opt.height = 800;
            return opt;
        }
        protected updateTitle(): void {

            this.dialogTitle = 'Patient Goal';
        }
        protected updateInterface(): void
        {
            super.updateInterface();
            $('.category-links').remove();
        }
    }
}