
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientGoalInterventionsDialog extends Serenity.Extensions.GridEditorDialog<ClientGoalInterventionsRow> {
        protected getFormKey() { return ClientGoalInterventionsForm.formKey; }
        protected getIdProperty() { return ClientGoalInterventionsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalInterventionsRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalInterventionsRow.nameProperty; }
        protected getService() { return ClientGoalInterventionsService.baseUrl; }

        protected form = new ClientGoalInterventionsForm(this.idPrefix);
        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.width = 600;
            opt.height = 750;
            return opt;
        }
    }
}