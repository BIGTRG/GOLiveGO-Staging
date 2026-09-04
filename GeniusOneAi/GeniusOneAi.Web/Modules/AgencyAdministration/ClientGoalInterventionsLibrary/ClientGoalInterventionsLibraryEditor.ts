namespace GeniusOneAi.AgencyAdministration  {

    @Serenity.Decorators.registerEditor('GeniusOneAi.AgencyAdministration.ClientGoalInterventionsLibraryEditor')
    export class ClientGoalInterventionsLibraryEditor extends Serenity.Extensions.GridEditorBase<ClientGoalInterventionsLibraryRow> {
        protected getColumnsKey() { return ClientGoalInterventionsLibraryColumns.columnsKey; }
        protected getDialogType() { return ClientGoalInterventionsLibraryDialog; }
        protected getLocalTextPrefix() { return ClientGoalInterventionsLibraryRow.localTextPrefix; }

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