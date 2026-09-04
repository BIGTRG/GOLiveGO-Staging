
namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class InsuranceTypesDialog extends Serenity.EntityDialog<InsuranceTypesRow, any> {
        protected getFormKey() { return InsuranceTypesForm.formKey; }
        protected getIdProperty() { return InsuranceTypesRow.idProperty; }
        protected getLocalTextPrefix() { return InsuranceTypesRow.localTextPrefix; }
        protected getNameProperty() { return InsuranceTypesRow.nameProperty; }
        protected getService() { return InsuranceTypesService.baseUrl; }

        //private codesGrid = ProgramCodeTypesGrid;

        protected form = new InsuranceTypesForm(this.idPrefix);
        constructor()
        {
            super();

           // this.codesGrid = ((new ProgramCodeTypesGrid(this.byId('InsuranceCodesGrid')) as any));

        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Insurance Type Editor';
            opt.width = 800;
            opt.height = 850;
            return opt;
        }
        protected getToolbarButtons(): Serenity.ToolButton[]
        {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            //buttons.push({
            //    title: 'Bill Code Manager',
            //    cssClass: '',
            //    onClick: e => '',
            //    separator: true
            //});

            return buttons;
        }
        protected updateInterface(): void
        {
            super.updateInterface();
            $('.category-links').remove();
        }
        //loadEntity(entity: Pro)
        //{
        //    super.loadEntity(entity);
        //    Serenity.TabsExtensions.setDisabled(this.tabs, 'ClientAuthorizations', this.isNewOrDeleted());

        //    this.codesGrid. = entity.ClientId;
           
        //}
    }
}