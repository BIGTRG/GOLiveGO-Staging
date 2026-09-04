
namespace GeniusOneAi.Workflows {

    @Serenity.Decorators.registerClass()
    export class BillingActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey() { return 'Workflows.BillingActivities'; }
        protected getIdProperty() { return BillingActivitiesRow.idProperty; }
        protected getInsertPermission() { return BillingActivitiesRow.insertPermission; }
        protected getLocalTextPrefix() { return BillingActivitiesRow.localTextPrefix; }
        protected getService() { return BillingActivitiesService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Billing Activity Workflow Manager";
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        
        }
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, {
                field: 'Payment Status',
                name: '',
                format: ctx => '<span class="inline-action red-button" title="Not Submitted"><i class="fa fa-square text-red"></i></span>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'Payment Status',
                name: '',
                format: ctx => '<span class="inline-action yellow-button" title="Submitted - Pending Payment"><i class="fa fa-square text-yellow"></i></span>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(2, 0, {
                field: 'Payment Status',
                name: '',
                format: ctx => '<span class="inline-action green-button" title="Paid"><i class="fa fa-square text-green"></i></span>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(3, 0, {
                field: 'Reviewer Comments',
                name: '',
                format: ctx => '<a class="inline-action view-comments-row" title="Reviewer Comments"><i class="fa fa-list text-orange"></i></a>',
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
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getItemCssClass(item: ActivitiesRow, index: number): string {
            let klass: string = "";
            
            if (item.Status === "Billing Submitted") {
                klass += " billing-disabled-yellow";
                klass += " billing-disabled-green";
                return Q.trimToNull(klass);
            }
            if (item.Status === "Processing") {
                klass += " billing-disabled-red";
                klass += " billing-disabled-green";
                return Q.trimToNull(klass);
            }
            if (item.Status === "Paid") {
                klass += " billing-disabled-red";
                klass += " billing-disabled-yellow";
                return Q.trimToNull(klass);
            }

                klass += " billing-disabled-yellow";
                klass += " billing-disabled-green";
            return Q.trimToNull(klass);
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
                if (target.hasClass('red-button')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var dlg = new GeniusOneAi.Workflows.BillingLogDialog(item.ActivityId);
                    dlg.dialogOpen();
                }
                if (target.hasClass('yellow-button')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var dlg = new GeniusOneAi.Workflows.BillingLogDialog(item.ActivityId);
                    dlg.dialogOpen();
                }
                if (target.hasClass('green-button')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var dlg = new GeniusOneAi.Workflows.BillingLogDialog(item.ActivityId);
                    dlg.dialogOpen();
                }
                if (target.hasClass('view-comments-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var dlg = new GeniusOneAi.Workflows.ActivitiesLogCommentsDialog(item.ActivityId);
                    dlg.dialogOpen();
                }
            }

        }
    }
}