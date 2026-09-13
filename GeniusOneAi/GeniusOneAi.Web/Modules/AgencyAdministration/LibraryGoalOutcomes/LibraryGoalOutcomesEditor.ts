namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerEditor('GeniusOneAi.AgencyAdministration.LibraryGoalOutcomesEditor')
    export class LibraryGoalOutcomesEditor extends Serenity.Extensions.GridEditorBase<LibraryGoalOutcomesRow> {
        protected getColumnsKey() { return LibraryGoalOutcomesColumns.columnsKey; }
        protected getDialogType() { return LibraryGoalOutcomesDialog; }
        protected getLocalTextPrefix() { return LibraryGoalOutcomesRow.localTextPrefix; }
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
            var c = columns.filter(x => x.field === 'QuestionCount')[0];
            if (c) c.format = ctx => { var q = ctx.item.QuestionsList; return q ? String(q.length) : (ctx.item.QuestionCount != null ? String(ctx.item.QuestionCount) : ''); };
            return columns;
        }
        protected validateEntity(row: LibraryGoalOutcomesRow, id: number) {
            if (!super.validateEntity(row, id)) return false;
            if (!row.SortOrder) row.SortOrder = this.view.getItems().length + 1;
            if (!row.StatusRule) row.StatusRule = this.view.getItems().length === 0 ? 'Required' : 'Supporting';
            return true;
        }
    }
}
