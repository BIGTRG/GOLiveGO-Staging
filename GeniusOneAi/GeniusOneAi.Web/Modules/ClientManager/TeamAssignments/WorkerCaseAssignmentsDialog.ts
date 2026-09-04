
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class WorkerCaseAssignmentsDialog extends Serenity.EntityDialog<WorkerCaseAssignmentsRow, any> {
        protected getFormKey() { return WorkerCaseAssignmentsForm.formKey; }
        protected getIdProperty() { return WorkerCaseAssignmentsRow.idProperty; }
        protected getLocalTextPrefix() { return WorkerCaseAssignmentsRow.localTextPrefix; }
        protected getNameProperty() { return WorkerCaseAssignmentsRow.nameProperty; }
        protected getService() { return WorkerCaseAssignmentsService.baseUrl; }

        protected form = new WorkerCaseAssignmentsForm(this.idPrefix);
        clientID: number;
        constructor()
        {
            super();
           
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Case Assignment';
            opt.width = 600;
            opt.height = 625;
            return opt;
        }
        protected updateInterface(): void
        {
            super.updateInterface();

                this.form.ClientId.value = this.clientID;
                this.form.AuthorizationId.clientId = this.clientID;
            this.form.AuthorizationId.updateItems();
            if (this.entity.AuthorizationId != null)
            {
                Serenity.EditorUtils.setValue(this.form.AuthorizationId, this.entity.AuthorizationId)
            }

          
        }

    }
}
