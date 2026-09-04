
namespace GeniusOneAi.AgencyAdministration {

    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibraryGrid extends Serenity.EntityGrid<ClientGoalsLibraryRow, any> {
        protected getColumnsKey() { return ClientGoalsLibraryColumns.columnsKey; }
        protected getDialogType() { return ClientGoalsLibraryDialog; }
        protected getIdProperty() { return ClientGoalsLibraryRow.idProperty; }
        protected getInsertPermission() { return ClientGoalsLibraryRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientGoalsLibraryRow.localTextPrefix; }
        protected getService() { return ClientGoalsLibraryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns()
        {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Goal',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Goal"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getButtons()
        {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
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
                    slf.editItem(item.ClientGoalId);
                }


            }

        }
        protected addButtonClick()
        {
            this.editItem({});
        }
        protected getAddButtonCaption(): string { return "Add Goal"; }
    }
}