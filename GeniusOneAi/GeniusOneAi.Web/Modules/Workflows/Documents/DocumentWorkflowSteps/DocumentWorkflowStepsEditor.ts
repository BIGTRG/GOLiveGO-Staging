namespace GeniusOneAi.Workflows  {

    @Serenity.Decorators.registerEditor('GeniusOneAi.Workflows.DocumentWorkflowStepsEditor')
    export class DocumentWorkflowStepsEditor extends Serenity.Extensions.GridEditorBase<DocumentWorkflowStepsRow> {
        protected getColumnsKey() { return DocumentWorkflowStepsColumns.columnsKey; }
        protected getDialogType() { return DocumentWorkflowStepsDialog; }
        protected getLocalTextPrefix() { return DocumentWorkflowStepsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getAddButtonCaption(): string { return "Add Step"; }
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, {
                field: 'Delete',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="Delete Step"><i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action')) {
                e.preventDefault();
                if (target.hasClass('delete-row')) {
                    Q.confirm(
                        "Would you like to delete this record?",
                        () => {
                            Workflows.DocumentWorkflowStepsService.Delete({ EntityId: item.DocumentStepId },
                                response => {
                                    Q.notifySuccess("Record Deleted!",
                                        "Record Deletion Alert",
                                        {
                                            progressBar: true,
                                            positionClass: "toast-top-center",
                                            showDuration: 1000,
                                            hideDuration: 1000,
                                            timeOut: 5000,
                                            closeButton: true
                                        });
                                }, { async: false });
                            slf.refresh();
                        },
                        {
                            onNo: () => {
                                Q.notifyError("Operation cancelled!");
                            },
                            onCancel: () => {

                            }
                        });


                }
            }

        }
    }
}