namespace GeniusOneAi.ClientManager {
    @Serenity.Decorators.registerEditor('GeniusOneAi.ClientManager.ClientGoalOutcomesEditor')
    export class ClientGoalOutcomesEditor extends Serenity.Extensions.GridEditorBase<ClientGoalOutcomesRow> {
        protected getColumnsKey() { return ClientGoalOutcomesColumns.columnsKey; }
        protected getDialogType() { return ClientGoalOutcomesDialog; }
        protected getLocalTextPrefix() { return ClientGoalOutcomesRow.localTextPrefix; }
        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getAddButtonCaption(): string { return "Add Outcome"; }

        protected getColumns() {
            var columns = super.getColumns();
            var m = columns.filter(c => c.field === 'IsMet')[0];
            if (m) m.format = ctx => ctx.value === true ? '<span class="goal-st-met">Met</span>' : ctx.value === false ? '<span class="goal-st-notmet">Not met</span>' : '<span class="goal-st-active">Pending</span>';
            return columns;
        }
        protected validateEntity(row: ClientGoalOutcomesRow, id: number) {
            if (!super.validateEntity(row, id)) return false;
            if (!row.SortOrder) row.SortOrder = this.view.getItems().length + 1;
            if (!row.StatusRule) row.StatusRule = 'Supporting';
            return true;
        }
    }
}
