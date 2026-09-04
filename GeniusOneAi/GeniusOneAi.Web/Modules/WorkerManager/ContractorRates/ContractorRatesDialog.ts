
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class ContractorRatesDialog extends Serenity.EntityDialog<ContractorRatesRow, any> {
        protected getFormKey() { return ContractorRatesForm.formKey; }
        protected getIdProperty() { return ContractorRatesRow.idProperty; }
        protected getLocalTextPrefix() { return ContractorRatesRow.localTextPrefix; }
        protected getNameProperty() { return ContractorRatesRow.nameProperty; }
        protected getService() { return ContractorRatesService.baseUrl; }
        protected getDeletePermission() { return ContractorRatesRow.deletePermission; }
        protected getInsertPermission() { return ContractorRatesRow.insertPermission; }
        protected getUpdatePermission() { return ContractorRatesRow.updatePermission; }

        protected form = new ContractorRatesForm(this.idPrefix);
        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.width = 450;
            opt.height = 350;
            return opt;
        }
    }
}