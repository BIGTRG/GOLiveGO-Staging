
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class ActivitiesLogCommentsDialog extends Serenity.TemplatedDialog<any> {

        private ActivitiesLogGrid = Workflows.ActivitiesLogGrid;
        protected form = new ActivitiesLogForm(this.idPrefix);

        constructor(actId?: number) {
            super(actId);
            this.ActivitiesLogGrid = ((new Workflows.ActivitiesLogGrid(this.byId('CommentsGrid')) as any));
            this.ActivitiesLogGrid.activityID = actId;
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Log';
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