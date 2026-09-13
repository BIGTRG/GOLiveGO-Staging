namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class OutcomeQuestionsDialog extends Serenity.Extensions.GridEditorDialog<OutcomeQuestionsRow> {
        protected getFormKey() { return OutcomeQuestionsForm.formKey; }
        protected getIdProperty() { return OutcomeQuestionsRow.idProperty; }
        protected getLocalTextPrefix() { return OutcomeQuestionsRow.localTextPrefix; }
        protected getNameProperty() { return OutcomeQuestionsRow.nameProperty; }
        protected getService() { return OutcomeQuestionsService.baseUrl; }
        protected form = new OutcomeQuestionsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 700;
            opt.height = 560;
            return opt;
        }
        protected updateTitle(): void { this.dialogTitle = 'Question'; }
    }
}
