
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ClientGoalInterventionsLibraryDialog extends Serenity.Extensions.GridEditorDialog<ClientGoalInterventionsLibraryRow> {
        protected getFormKey() { return ClientGoalInterventionsLibraryForm.formKey; }
        protected getIdProperty() { return ClientGoalInterventionsLibraryRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalInterventionsLibraryRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalInterventionsLibraryRow.nameProperty; }
        protected getService() { return ClientGoalInterventionsLibraryService.baseUrl; }

        protected form = new ClientGoalInterventionsLibraryForm(this.idPrefix);
        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.width = 600;
            opt.height = 425;
            return opt;
        }
    }
}