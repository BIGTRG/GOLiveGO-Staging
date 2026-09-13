namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerEditor('GeniusOneAi.AgencyAdministration.OutcomeQuestionsEditor')
    export class OutcomeQuestionsEditor extends Serenity.Extensions.GridEditorBase<OutcomeQuestionsRow> {
        protected getColumnsKey() { return OutcomeQuestionsColumns.columnsKey; }
        protected getDialogType() { return OutcomeQuestionsDialog; }
        protected getLocalTextPrefix() { return OutcomeQuestionsRow.localTextPrefix; }
        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getAddButtonCaption(): string { return "Add Question"; }

        protected getColumns() {
            var columns = super.getColumns();
            var t = columns.filter(c => c.field === 'AnswerType')[0];
            if (t) t.format = ctx => Q.htmlEncode(CustomEditors.AnswerTypeEditor.label(ctx.value));
            return columns;
        }
        protected validateEntity(row: OutcomeQuestionsRow, id: number) {
            if (!super.validateEntity(row, id)) return false;
            if (!row.SortOrder) row.SortOrder = this.view.getItems().length + 1;
            return true;
        }
    }
}
