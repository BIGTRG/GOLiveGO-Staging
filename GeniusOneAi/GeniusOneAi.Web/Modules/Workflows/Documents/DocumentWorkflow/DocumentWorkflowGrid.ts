
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class DocumentWorkflowGrid extends Serenity.EntityGrid<DocumentWorkflowRow, any> {
        protected getColumnsKey() { return DocumentWorkflowColumns.columnsKey; }
        protected getDialogType() { return DocumentWorkflowDialog; }
        protected getIdProperty() { return DocumentWorkflowRow.idProperty; }
        protected getInsertPermission() { return DocumentWorkflowRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentWorkflowRow.localTextPrefix; }
        protected getService() { return DocumentWorkflowService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Document Workflow Manager";
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();
          
            columns.splice(0, 0, {
                field: 'Edit Workflow',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Workflow"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'Workflow Status',
                name: '',
                format: ctx => '<span class="inline-action red-button" title="Stopped"><i class="fa fa-square text-red"></i></span>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(2, 0, {
                field: 'Workflow Status',
                name: '',
                format: ctx => '<span class="inline-action yellow-button" title="Running"><i class="fa fa-square text-yellow"></i></span>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(3, 0, {
                field: 'Workflow Status',
                name: '',
                format: ctx => '<span class="inline-action green-button" title="Completed"><i class="fa fa-square text-green"></i></span>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
           
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
            buttons.push({
                title: 'Initiate Workflow',
                cssClass: 'add-button',
                onClick: async () => {
                    var dlg = new DocumentWorkflowCreationDialog();
                    this.initDialog(dlg);
                    dlg.loadNewAndOpenDialog();
                },
                separator: true
            });
            return buttons;
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
                if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.WorkflowId);
                }
                if (target.hasClass('delete-row')) {

                    Q.confirm(
                        "Would you like to cancel this workflow?",
                        () => {
                            Workflows.DocumentWorkflowService.Delete({ EntityId: item.WorkflowId },
                                response => {
                                    Q.notifySuccess("Workflow Cancelled!",
                                        "Workflow Cancelled Alert",
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
        protected getItemCssClass(item: Workflows.DocumentWorkflowRow, index: number): string {
            let klass: string = "";

            if (item.Status === "Completed") {
                klass += " workflow-disabled-yellow";
                klass += " workflow-disabled-green";
                return Q.trimToNull(klass);
            }
            if (item.Status === "Enabled") {
                klass += " workflow-disabled-red";
                klass += " workflow-disabled-green";
                return Q.trimToNull(klass);
            }
           
            klass += " workflow-disabled-yellow";
            klass += " workflow-disabled-green";

            return Q.trimToNull(klass);
        }
    }
}