namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class CrisisNeedsDialog extends Serenity.EntityDialog<CrisisNeedsRow, any> {
        protected getFormKey() { return CrisisNeedsForm.formKey; }
        protected getIdProperty() { return CrisisNeedsRow.idProperty; }
        protected getLocalTextPrefix() { return CrisisNeedsRow.localTextPrefix; }
        protected getNameProperty() { return CrisisNeedsRow.nameProperty; }
        protected getService() { return CrisisNeedsService.baseUrl; }
        protected form = new CrisisNeedsForm(this.idPrefix);
        protected updateTitle(): void { this.dialogTitle = 'Crisis Need'; }
    }
}
