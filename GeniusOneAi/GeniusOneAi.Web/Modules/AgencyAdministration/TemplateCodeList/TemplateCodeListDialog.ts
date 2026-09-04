
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class TemplateCodeListDialog extends Serenity.EntityDialog<TemplateCodeListRow, any> {
        protected getFormKey() { return TemplateCodeListForm.formKey; }
        protected getIdProperty() { return TemplateCodeListRow.idProperty; }
        protected getLocalTextPrefix() { return TemplateCodeListRow.localTextPrefix; }
        protected getNameProperty() { return TemplateCodeListRow.nameProperty; }
        protected getService() { return TemplateCodeListService.baseUrl; }
        protected getDeletePermission() { return TemplateCodeListRow.deletePermission; }
        protected getInsertPermission() { return TemplateCodeListRow.insertPermission; }
        protected getUpdatePermission() { return TemplateCodeListRow.updatePermission; }

        protected form = new TemplateCodeListForm(this.idPrefix);

    }
}