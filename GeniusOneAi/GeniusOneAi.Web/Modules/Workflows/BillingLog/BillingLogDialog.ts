
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class BillingLogDialog extends Serenity.TemplatedDialog<any> {

        private BillingLogGrid = Workflows.BillingLogGrid;
        protected form = new BillingLogForm(this.idPrefix);

        constructor(actId?: number) {
            super(actId);
            this.BillingLogGrid = ((new Workflows.BillingLogGrid(this.byId('CommentsGrid')) as any));
            this.BillingLogGrid.activityID = actId;
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Billing Comments';
            opt.width = 750;
            opt.height = 500;
            return opt;
        }
        protected getTemplate() {
            return "<div id='~_CommentsGrid'></div>";
        }
        protected onDialogOpen() {
            super.onDialogOpen();
        }
        getToolbarButtons() {
            var buttons = [];
            return buttons;
        }

    }
}