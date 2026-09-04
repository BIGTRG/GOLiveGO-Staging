namespace GeniusOneAi.WorkerPortal {
  

    @Serenity.Decorators.registerClass()
    export class ClientsDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey() { return ClientsForm.formKey; }
        protected getIdProperty() { return ClientsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getNameProperty() { return ClientsRow.nameProperty; }
        protected getService() { return ClientsService.baseUrl; }

        protected form = new ClientsForm(this.idPrefix);
        private authorizationsGrid = MyClientAuthorizationsGrid;
        private goalsGrid = MyClientGoalsGrid;
        private teamAssignmentGrid = TeamAssignmentsGrid;
        private documentGrid = ClientDocumentsGrid;

        constructor() {
            super();

            this.authorizationsGrid =
                ((new WorkerPortal.MyClientAuthorizationsGrid(this.byId('ClientAuthorizationsGrid')) as any));

            this.goalsGrid =
                ((new WorkerPortal.MyClientGoalsGrid(this.byId('ClientGoalsGrid')) as any));

            this.teamAssignmentGrid  =
                ((new WorkerPortal.TeamAssignmentsGrid(this.byId('ClientTeamGrid')) as any));
            this.documentGrid =
                ((new WorkerPortal.ClientDocumentsGrid(this.byId('ClientDocumentsGrid')) as any));
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            return buttons;
        }
        protected updateTitle(): void {
      
            this.dialogTitle = 'My Patient (' + this.getEntityNameFieldValue() + ')';
        }

        protected updateInterface(): void {

            super.updateInterface();
            Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            this.element.find('sup').hide();
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 725;
            opt.height = 750;
            return opt;
        }
        loadEntity(entity: ClientsRow) {
            super.loadEntity(entity);
            this.authorizationsGrid.clientID = entity.ClientId;
            this.goalsGrid.clientID = entity.ClientId;
            this.teamAssignmentGrid.clientID = entity.ClientId;
            this.documentGrid.clientID = entity.ClientId;
        }

    }
}