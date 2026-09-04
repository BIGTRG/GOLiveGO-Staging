
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class SitesTypesDialog extends Serenity.EntityDialog<SitesTypesRow, any> {
        protected getFormKey() { return SitesTypesForm.formKey; }
        protected getIdProperty() { return SitesTypesRow.idProperty; }
        protected getLocalTextPrefix() { return SitesTypesRow.localTextPrefix; }
        protected getNameProperty() { return SitesTypesRow.nameProperty; }
        protected getService() { return SitesTypesService.baseUrl; }

        protected form = new SitesTypesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Site Type Editor';
            opt.width = 700;
            opt.height = 750;
            return opt;
        }
    }
}