
namespace GeniusOneAi.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportsDialog extends Serenity.EntityDialog<ReportsRow, any> {
        protected getFormKey() { return ReportsForm.formKey; }
        protected getIdProperty() { return ReportsRow.idProperty; }
        protected getLocalTextPrefix() { return ReportsRow.localTextPrefix; }
        protected getNameProperty() { return ReportsRow.nameProperty; }
        protected getService() { return ReportsService.baseUrl; }
        protected getDeletePermission() { return ReportsRow.deletePermission; }
        protected getInsertPermission() { return ReportsRow.insertPermission; }
        protected getUpdatePermission() { return ReportsRow.updatePermission; }

        protected form = new ReportsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Report Editor';
            opt.width = 550;
            opt.height = 400;
            return opt;
        }
        //getToolbarButtons() {
        //    var buttons = [];
        //    buttons.push({
        //        title: "Save",
        //        cssClass: "save-and-close-button",
        //        onClick: e => { this.save(() => this.dialogClose()); }
        //    });

        //    return buttons;
        //}
    }
}