
namespace GeniusOneAi.Reports {

    @Serenity.Decorators.registerClass()
    export class ReportsGrid extends Serenity.EntityGrid<ReportsRow, any> {
        protected getColumnsKey() { return ReportsColumns.columnsKey; }
        protected getDialogType() { return ReportsDialog; }
        protected getIdProperty() { return ReportsRow.idProperty; }
        protected getInsertPermission() { return ReportsRow.insertPermission; }
        protected getLocalTextPrefix() { return ReportsRow.localTextPrefix; }
        protected getService() { return ReportsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Reports";
        }
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, {
                field: 'View Report',
                name: '',
                format: ctx => '<a class="inline-action view-report" title="View/edit Report"><i class="fa fa-search text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'Edit Report Medadata',
                name: '',
                format: ctx => '<a class="inline-action edit-meta" title="Edit Report Metadata"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
                     
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
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
                if (target.hasClass('view-report')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    location.replace("/Reports/Viewer/" + item.ReportFileName);
                }
                if (target.hasClass('edit-meta')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.ReportId);
                }
               
            }

        }
        protected getItemCssClass(item: ReportsRow, index: number): string {
            let klass: string = "";
            if (item.TenantId === -1) {
                klass += " edit-report-disabled"; 
                return Q.trimToNull(klass);
            }
            return Q.trimToNull(klass);
        }
      
    }
}