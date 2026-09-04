
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientDocumentsDialog extends Serenity.EntityDialog<ClientDocumentsRow, any> {
        protected getFormKey() { return ClientDocumentsForm.formKey; }
        protected getIdProperty() { return ClientDocumentsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientDocumentsRow.localTextPrefix; }
        protected getNameProperty() { return ClientDocumentsRow.nameProperty; }
        protected getService() { return ClientDocumentsService.baseUrl; }

        protected form = new ClientDocumentsForm(this.idPrefix);
        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.width = 700;
            opt.height = 425;
            return opt;
        }
        protected updateTitle(): void
        {
            this.dialogTitle = 'Client Document';
        }
    }
}