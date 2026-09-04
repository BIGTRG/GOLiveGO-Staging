
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ClientGoalInterventionsLibraryGrid extends Serenity.EntityGrid<ClientGoalInterventionsLibraryRow, any> {
        protected getColumnsKey() { return ClientGoalInterventionsLibraryColumns.columnsKey; }
        protected getDialogType() { return ClientGoalInterventionsLibraryDialog; }
        protected getIdProperty() { return ClientGoalInterventionsLibraryRow.idProperty; }
        protected getInsertPermission() { return ClientGoalInterventionsLibraryRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalInterventionsLibraryRow.localTextPrefix; }
        protected getService() { return ClientGoalInterventionsLibraryService.baseUrl; }

        constructor(container: JQuery)
        {
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