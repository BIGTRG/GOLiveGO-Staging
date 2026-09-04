
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientGoalInterventionsGrid extends Serenity.EntityGrid<ClientGoalInterventionsRow, any> {
        protected getColumnsKey() { return ClientGoalInterventionsColumns.columnsKey; }
        protected getDialogType() { return ClientGoalInterventionsDialog; }
        protected getIdProperty() { return ClientGoalInterventionsRow.idProperty; }
        protected getInsertPermission() { return ClientGoalInterventionsRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalInterventionsRow.localTextPrefix; }
        protected getService() { return ClientGoalInterventionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns()
        {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Intervention',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Intervention"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
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
                    slf.editItem(item.ClientGoalInterventionId);
                }


            }

        }
    }
}