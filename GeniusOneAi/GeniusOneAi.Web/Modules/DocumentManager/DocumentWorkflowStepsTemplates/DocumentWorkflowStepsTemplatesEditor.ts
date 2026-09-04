namespace GeniusOneAi.DocumentManager  {

    @Serenity.Decorators.registerEditor('GeniusOneAi.DocumentManager.DocumentWorkflowStepsTemplatesEditor')
    export class DocumentWorkflowStepsTemplatesEditor extends Serenity.Extensions.GridEditorBase<DocumentWorkflowStepsTemplatesRow> {
        protected getColumnsKey() { return DocumentWorkflowStepsTemplatesColumns.columnsKey; }
        protected getDialogType() { return DocumentWorkflowStepsTemplatesDialog; }
        protected getLocalTextPrefix() { return DocumentWorkflowStepsTemplatesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getAddButtonCaption(): string { return "Add Step"; }
     
    }
}