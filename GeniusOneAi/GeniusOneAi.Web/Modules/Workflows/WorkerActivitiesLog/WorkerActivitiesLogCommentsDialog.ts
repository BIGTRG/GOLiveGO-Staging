
namespace GeniusOneAi.WorkerPortal{

    @Serenity.Decorators.registerClass()
    export class WorkerActivitiesLogCommentsDialog extends Serenity.TemplatedDialog<any> {

        private WorkerActivitiesLogGrid = WorkerPortal.WorkerActivitiesLogGrid;
        protected form = new WorkerActivitiesLogForm(this.idPrefix);

        constructor(actId?: number) {
            super(actId);
            this.WorkerActivitiesLogGrid = ((new WorkerPortal.WorkerActivitiesLogGrid(this.byId('CommentsGrid')) as any));
            this.WorkerActivitiesLogGrid.activityID = actId;
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