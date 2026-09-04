
namespace GeniusOneAi.WorkerPortal {

    @Serenity.Decorators.registerClass()
    export class MyClientGoalsDialog extends Serenity.EntityDialog<ClientGoalsRow, any> {
        protected getFormKey() { return MyClientGoalsForm.formKey; }
        protected getIdProperty() { return ClientGoalsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalsRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalsRow.nameProperty; }
        protected getService() { return ClientGoalsService.baseUrl; }


        protected form = new MyClientGoalsForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 650;
            opt.height = 425;
            return opt;
        }
        protected updateTitle(): void {

            this.dialogTitle = 'Patient Goal';
        }

    }
}