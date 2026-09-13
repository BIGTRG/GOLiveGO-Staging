namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class ResourceDirectoryDialog extends Serenity.EntityDialog<ResourceDirectoryRow, any> {
        protected getFormKey() { return ResourceDirectoryForm.formKey; }
        protected getIdProperty() { return ResourceDirectoryRow.idProperty; }
        protected getLocalTextPrefix() { return ResourceDirectoryRow.localTextPrefix; }
        protected getNameProperty() { return ResourceDirectoryRow.nameProperty; }
        protected getService() { return ResourceDirectoryService.baseUrl; }
        protected form = new ResourceDirectoryForm(this.idPrefix);
        protected getDialogOptions() { var opt = super.getDialogOptions(); opt.width = 700; return opt; }
        protected updateTitle(): void { this.dialogTitle = 'Resource'; }
    }
}
