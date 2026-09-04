namespace GeniusOneAi.ClientManager  {

    @Serenity.Decorators.registerEditor('GeniusOneAi.ClientManager.ClientGoalInterventionsEditor')
    export class ClientGoalInterventionsEditor extends Serenity.Extensions.GridEditorBase<ClientGoalInterventionsRow> {
        protected getColumnsKey() { return ClientGoalInterventionsColumns.columnsKey; }
        protected getDialogType() { return ClientGoalInterventionsDialog; }
        protected getLocalTextPrefix() { return ClientGoalInterventionsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getAddButtonCaption(): string { return "Add Intervention"; }
     
    }
}