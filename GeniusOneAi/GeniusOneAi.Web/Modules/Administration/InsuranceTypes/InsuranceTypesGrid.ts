
namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class InsuranceTypesGrid extends Serenity.EntityGrid<InsuranceTypesRow, any> {
        protected getColumnsKey() { return 'Administration.InsuranceTypes'; }
        protected getDialogType() { return InsuranceTypesDialog; }
        protected getIdProperty() { return InsuranceTypesRow.idProperty; }
        protected getInsertPermission() { return InsuranceTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return InsuranceTypesRow.localTextPrefix; }
        protected getService() { return InsuranceTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getAddButtonCaption(): string { return "Add Insurance"; }
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
            return columns;
        }
        protected getInitialTitle() { return "Insurance Type Codelist"; }
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
                    slf.editItem(item.InsuranceTypeId);
                }
               
            }
        }
        protected getQuickFilters() {

            let filters = super.getQuickFilters();
            let fld = InsuranceTypesRow.Fields;
            let filter = Q.first(filters, x => x.field === fld.Name);
            filter.title = "Insurance Company";
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