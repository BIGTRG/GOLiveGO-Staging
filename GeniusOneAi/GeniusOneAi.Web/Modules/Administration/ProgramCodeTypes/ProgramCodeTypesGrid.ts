
namespace GeniusOneAi.Administration
{

    @Serenity.Decorators.registerClass()
    export class ProgramCodeTypesGrid extends Serenity.EntityGrid<ProgramCodeTypesRow, any> {
        protected getColumnsKey() { return 'Administration.ProgramCodeTypes'; }
        protected getDialogType() { return ProgramCodeTypesDialog; }
        protected getIdProperty() { return ProgramCodeTypesRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramCodeTypesRow.localTextPrefix; }
        protected getService() { return ProgramCodeTypesService.baseUrl; }

        constructor(container: JQuery)
        {
            super(container);
        }
        protected getButtons()
        {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            var q = Q.parseQueryString();
            if (q["InsuranceType"])
            {
                buttons.push({
                    title: 'Return to Insurance Types',
                    cssClass: 'send-button',
                    onClick: () =>
                    {
                        window.location.href = '/Administration/InsuranceTypes/Index/Administration/InsuranceTypes'

                    }
                });
            }
            return buttons;
        }
        protected getColumns()
        {
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
        protected getInitialTitle() { return "Program Code Type Codelist"; }
        protected createQuickSearchInput() { }
        protected onClick(e: JQueryEventObject, row: number, cell: number)
        {
            var slf = this;
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();
            if (target.hasClass('inline-action'))
            {
                e.preventDefault();
                if (target.hasClass('edit-row'))
                {

                    if (!this.onViewSubmit())
                    {
                        return;
                    }
                    slf.editItem(item.ProgramCodeTypeId);
                }
                if (target.hasClass('delete-row'))
                {

                    Q.confirm(
                        "Would you like to delete this record?",
                        () =>
                        {
                            ProgramCodeTypesService.Delete({ EntityId: item.ProgramCodeTypeId },
                                response =>
                                {
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
                            onNo: () =>
                            {
                                Q.notifyError("Operation cancelled!");
                            },
                            onCancel: () =>
                            {

                            }
                        });


                }
            }
        }
        protected getQuickFilters()
        {

            let filters = super.getQuickFilters();
            var q = Q.parseQueryString();
            let fld = ProgramCodeTypesRow.Fields;
            let filter = Q.first(filters, x => x.field === fld.BillCode);
            filter.title = "Bill Code";
            filter.type = Serenity.StringEditor;
            filter.handler = h =>
            {
                if (h.active)
                {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.BillCode], 'like', h.value + '%']);
                }
            };
            filter = Q.first(filters, x => x.field === fld.Description);
            filter.title = "Description";
            filter.type = Serenity.StringEditor;
            filter.handler = h =>
            {
                if (h.active)
                {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.Description], 'like', h.value + '%']);
                }
            };
            if (q["ProgramType"])
            {
                var ProgramType = Q.tryFirst(flt, x => x.field == fld.InsuranceId);
                //
                ProgramType.init = e => { this.findQuickFilter(GeniusOneAi.CustomEditors.TimesheetStatusWorkflowEditor, fld.Status).value = q["NoteStatus"]; };


                ProgramType.handler = h =>
                {
                    if (h.active)
                    {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.ProgramTypeId], 'like', '%' + q["ProgramType"] + '%']);
                    }
                };

                return filters;
            }












        }
    }
}