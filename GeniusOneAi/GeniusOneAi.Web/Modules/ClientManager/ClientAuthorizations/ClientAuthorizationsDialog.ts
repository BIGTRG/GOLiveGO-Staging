
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientAuthorizationsDialog extends Serenity.EntityDialog<ClientAuthorizationsRow, any> {
        protected getFormKey() { return ClientAuthorizationsForm.formKey; }
        protected getIdProperty() { return ClientAuthorizationsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientAuthorizationsRow.localTextPrefix; }
        protected getNameProperty() { return ClientAuthorizationsRow.nameProperty; }
        protected getService() { return ClientAuthorizationsService.baseUrl; }
        protected form = new ClientAuthorizationsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 600;
            opt.height = 525;
            return opt;
        }
    }
}