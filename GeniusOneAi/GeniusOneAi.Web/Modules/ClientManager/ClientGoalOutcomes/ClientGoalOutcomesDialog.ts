namespace GeniusOneAi.ClientManager {
    @Serenity.Decorators.registerClass()
    export class ClientGoalOutcomesDialog extends Serenity.Extensions.GridEditorDialog<ClientGoalOutcomesRow> {
        protected getFormKey() { return ClientGoalOutcomesForm.formKey; }
        protected getIdProperty() { return ClientGoalOutcomesRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalOutcomesRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalOutcomesRow.nameProperty; }
        protected getService() { return ClientGoalOutcomesService.baseUrl; }
        protected form = new ClientGoalOutcomesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 700;
            opt.height = 520;
            return opt;
        }
        protected updateTitle(): void { this.dialogTitle = 'Outcome'; }
    }
}
