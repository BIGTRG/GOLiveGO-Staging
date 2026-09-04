
namespace GeniusOneAi.Archives
{

    @Serenity.Decorators.registerClass()
    import fld = ProgressNotesArchiveRow.Fields;
    export class ProgressNotesArchiveGrid extends Serenity.EntityGrid<ProgressNotesArchiveRow, any> {
        protected getColumnsKey() { return 'Archives.ProgressNotesArchive'; } 
        protected getIdProperty() { return ProgressNotesArchiveRow.idProperty; }
        protected getInsertPermission() { return ProgressNotesArchiveRow.insertPermission; }
        protected getLocalTextPrefix() { return ProgressNotesArchiveRow.localTextPrefix; }
        protected getService() { return ProgressNotesArchiveService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Progress Notes Archive";
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.rowHeight = 44;
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, {
                field: 'View Activity Notes',
                name: '',
                format: ctx => '<a class="inline-action view-row" title="View Activity Notes"><i class="fa fa-search text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
           columns.splice(1, 0, {
                field: 'Reviewer Comments',
                name: '',
                format: ctx => '<a class="inline-action view-comments-row" title="Reviewer Comments"><i class="fa fa-list text-orange"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

           var submissionColumn = Q.tryFirst(columns, x => x.field === 'Submission');
           if (submissionColumn) {
               submissionColumn.format = ctx => this.formatSubmission(ctx.value);
           }
        
           return columns;
        }
        private formatSubmission(value: string): string {
            if (!value) {
                return '';
            }

            var parts = value.split(/\r?\n/);
            var submitted = Q.htmlEncode(parts[0] || '');
            var status = parts.length > 1 ? (parts[1] || '').trim() : '';
            var statusClass = status === 'Late' ? 'text-red' : 'text-green';

            if (!status) {
                return '<div style="line-height:18px; padding-top:2px;">' +
                    submitted + '</div>';
            }

            // SlickGrid cells inherit a tall line-height. Without overriding it,
            // the second line is rendered below the visible part of the row.
            return '<div style="line-height:18px; padding-top:2px;">' +
                submitted + '<br />' +
                '<span class="' + statusClass + '" style="font-weight:600;">' +
                Q.htmlEncode(status) + '</span></div>';
        }

        protected getButtons() {

            var buttons = super.getButtons();
            buttons = buttons.filter(button => button.cssClass !== "add-button");
            buttons = buttons.filter(button => button.cssClass !== "column-picker-button");
            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: ProgressNotesArchiveService.baseUrl + "/ListExcel", 
                onViewSubmit: () => this.onViewSubmit(), 
                title: "Export to Excel"
            }));
         
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
            if (target.hasClass('view-comments-row')) {

                if (!this.onViewSubmit()) {
                    return;
                }
                var dlg = new GeniusOneAi.Workflows.ActivitiesLogCommentsDialog(item.ActivityId);
                dlg.dialogOpen();
                }
                if (target.hasClass('view-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.ActivityId);
                }
          }

        }
     
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[]
        {
            let filters = super.getQuickFilters();

            let filter = Q.first(filters, x => x.field == fld.WorkerFullName);
            filter.title = "Worker";
            filter.handler = h =>
            {
                if (h.active)
                {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.UserId], '=', h.value]);
                }
            };
            filter = Q.first(filters, x => x.field == fld.ClientFullName);
            filter.title = "Patient";
            filter.handler = h =>
            {
                if (h.active)
                {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ClientId], '=', h.value]);
                }
            };

            return filters;
        }
      
    }
}