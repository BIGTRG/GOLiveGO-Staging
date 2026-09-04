
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class WorkerActivitiesDialog extends Serenity.EntityDialog<WorkerActivitiesRow, any> {
        protected getFormKey() { return WorkerActivitiesForm.formKey; }
        protected getIdProperty() { return WorkerActivitiesRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerActivitiesRow.localTextPrefix; }
        protected getNameProperty() { return WorkerActivitiesRow.nameProperty; }
        protected getService() { return WorkerActivitiesService.baseUrl; }
        constructor() {
            super();
        }
        protected form = new ActivitiesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Notes';
            opt.width = 500;
            opt.height = 400;
            return opt;
        }
        getToolbarButtons() {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "apply-changes-button"), 1);
            buttons.push({
                    title: "Approve Activity",
                    cssClass: "approveActivity",
                    onClick: e => { this.approve(); }
                });
            buttons.push({
                    title: "Reject Activity",
                    cssClass: "rejectActivity",
                    onClick: e => { this.reject(); }
                });
            return buttons;
        }
        protected updateInterface(): void {
            super.updateInterface();
            const actType = this.form.Activity.value;
            if (actType === 'Patient') {
                $(".approveActivity").remove();
                $(".rejectActivity").remove();
            }
        }
        protected approve():void {
            this.form.Status.value = "Processed";
            this.save(() => this.dialogClose());
    }
        protected reject(): void {
            this.form.Status.value = "Rejected";
            var dlg = new GeniusOneAi.Workflows.ActivitiesLogDialog();
            this.save(() => dlg.loadEntityAndOpenDialog({ ActivityId: this.entityId }));
            this.dialogClose();
        }
    }
}