
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class FormTypesGrid extends Serenity.EntityGrid<FormTypesRow, any> {
        protected getColumnsKey() { return 'AgencyAdministration.FormTypes'; }
        protected getDialogType() { return FormTypesDialog; }
        protected getIdProperty() { return FormTypesRow.idProperty; }
        protected getInsertPermission() { return FormTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return FormTypesRow.localTextPrefix; }
        protected getService() { return FormTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Type',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Type"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'Delete Type',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="Delete Type"><i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getAddButtonCaption(): string { return "Add Item"; }
        protected getInitialTitle() { return "Form Type Codelist"; }
        protected createQuickSearchInput() { }
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
                    slf.editItem(item.FormTypeId);
                }
                if (target.hasClass('delete-row')) {

                    Q.confirm(
                        "Would you like to delete this record?",
                        () => {
                            WorkerTypesService.Delete({ EntityId: item.FormTypeId },
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
        protected getQuickFilters() {

            let filters = super.getQuickFilters();
            let fld = FormTypesRow.Fields;
            let filter = Q.first(filters, x => x.field === fld.Name);
            filter.title = "Form Name";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.Name], 'like', h.value + '%']);
                }
            };
            filter = Q.first(filters, x => x.field === fld.Description);
            filter.title = "Description";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.Description], 'like', h.value + '%']);
                }
            };


            return filters;
        }











    }
}