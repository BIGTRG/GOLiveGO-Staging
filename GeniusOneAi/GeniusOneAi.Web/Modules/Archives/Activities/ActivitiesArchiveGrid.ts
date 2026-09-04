
namespace GeniusOneAi.Archives {
    @Serenity.Decorators.registerClass()
    export class ActivitiesArchiveGrid extends Serenity.EntityGrid<ActivitiesArchiveRow, any> {
        protected getColumnsKey() { return 'Archives.ActivitiesArchive'; } 
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
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
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
                
           return columns;
        }
        protected getButtons() {
            var buttons = [];
         
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
     

      
    }
}