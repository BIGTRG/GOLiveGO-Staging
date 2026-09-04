
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class InvoicesDialog extends Serenity.EntityDialog<InvoicesRow, any> {
        protected getFormKey() { return InvoicesForm.formKey; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getNameProperty() { return InvoicesRow.nameProperty; }
        protected getService() { return InvoicesService.baseUrl; }

        protected form = new InvoicesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Invoice Payment';
            opt.width = 400;
            opt.height = 400;
            return opt;
        }
        getToolbarButtons() {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "apply-changes-button"), 1);
            return buttons;
        }

    }
}