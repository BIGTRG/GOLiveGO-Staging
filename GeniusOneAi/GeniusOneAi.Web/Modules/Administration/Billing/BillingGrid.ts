
namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class BillingGrid extends Serenity.EntityGrid<BillingRow, any> {
        protected getColumnsKey() { return 'Administration.Billing'; }
        protected getIdProperty() { return BillingRow.idProperty; }
        protected getInsertPermission() { return BillingRow.insertPermission; }
        protected getLocalTextPrefix() { return BillingRow.localTextPrefix; }
        protected getService() { return BillingService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;
        constructor(container: JQuery) {
            super(container);
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Billing Manager Que";
        }
        protected createToolbarExtensions()
        {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }
        protected getColumns()
        {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
            buttons.push({
                title: 'Generate Billing Files',
                cssClass: 'apply-changes-button',
                onClick: e => { },
                separator: true
            });
            buttons.push({
                title: 'Process Billing Files',
                cssClass: 'apply-changes-button',
                onClick: e => { },
                separator: true
            });
            return buttons;
        }        
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getViewOptions()
        {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 2500;
            return opt;
        }
    }
}