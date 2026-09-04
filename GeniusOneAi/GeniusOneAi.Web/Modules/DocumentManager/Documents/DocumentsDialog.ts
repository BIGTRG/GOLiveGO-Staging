
namespace GeniusOneAi.DocumentManager {

    @Serenity.Decorators.registerClass()
    export class DocumentsDialog extends Serenity.EntityDialog<DocumentsRow, any> {
        protected getFormKey() { return DocumentsForm.formKey; }
        protected getIdProperty() { return DocumentsRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentsRow.localTextPrefix; }
        protected getNameProperty() { return DocumentsRow.nameProperty; }
        protected getService() { return DocumentsService.baseUrl; }
        protected getDeletePermission() { return DocumentsRow.deletePermission; }
        protected getInsertPermission() { return DocumentsRow.insertPermission; }
        protected getUpdatePermission() { return DocumentsRow.updatePermission; }

        protected form = new DocumentsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Document Editor';
            opt.width = 500;
            opt.height = 555;
            return opt;
        }
    }
}