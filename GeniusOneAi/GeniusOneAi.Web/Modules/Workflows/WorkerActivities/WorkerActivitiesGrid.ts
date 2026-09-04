namespace GeniusOneAi.Workflows {
    import fld = WorkerActivitiesRow.Fields;
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class WorkerActivitiesGrid extends Serenity.EntityGrid<WorkerActivitiesRow, any> {
        protected getColumnsKey() { return 'Workflows.WorkerActivities'; }
        protected getIdProperty() { return WorkerActivitiesRow.idProperty; }
        protected getInsertPermission() { return WorkerActivitiesRow.insertPermission; }
        protected getLocalTextPrefix() { return WorkerActivitiesRow.localTextPrefix; }
        protected getService() { return WorkerActivitiesService.baseUrl; }


        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Activity Workflow Manager";
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
                field: 'View Progress Notes',
                name: '',
                format: ctx => '<a class="inline-action view-note-row" title="View Progress Notes"><i class="fa fa-file-text-o text-green"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(2, 0, {
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
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
            var q = Q.parseQueryString();
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
                if (target.hasClass('view-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.ActivityId);
                }
                if (target.hasClass('view-note-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    location.replace("/Workflow/WorkerViewProgressNote/" + item.ActivityId);
                }
                if (target.hasClass('view-comments-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var dlg = new GeniusOneAi.WorkerPortal.WorkerActivitiesLogCommentsDialog(item.ActivityId);
                    dlg.dialogOpen();
                }
            }

        }
        protected getItemCssClass(item: ActivitiesRow, index: number): string {
            let klass: string = "";

            if (item.Activity !== "Patient") {
                klass += " program-note-disabled";
                return Q.trimToNull(klass);
            }
            return Q.trimToNull(klass);
        }
        protected createSlickGrid(): Slick.Grid {
            var grid = super.createSlickGrid();
            return grid;
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.selectedCellCssClass = "slick-row-selected";
            opt.rowHeight = 44;
            return opt;
        }
        protected getQuickFilters() {
            var flt = super.getQuickFilters();
            return flt
        }
    }
}