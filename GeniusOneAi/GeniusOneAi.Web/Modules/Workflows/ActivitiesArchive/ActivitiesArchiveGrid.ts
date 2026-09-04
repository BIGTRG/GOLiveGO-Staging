namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class ActivitiesArchiveGrid extends Serenity.EntityGrid<ActivitiesArchiveRow, any> {
        protected getColumnsKey() { return 'Workflows.ActivitiesArchive'; }
        protected getIdProperty() { return ActivitiesArchiveRow.idProperty; }
        protected getInsertPermission() { return ActivitiesArchiveRow.insertPermission; }
        protected getLocalTextPrefix() { return ActivitiesArchiveRow.localTextPrefix; }
        protected getService() { return ActivitiesArchiveService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
       }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Activity Archive";
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
           return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "add-button"), 1);
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
                    location.replace("/Workflow/ViewProgressNote/" + item.ActivityId);
                }
            }

        }
        protected getItemCssClass(item: ActivitiesArchiveRow, index: number): string {
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
            return opt;
        }

    }
}