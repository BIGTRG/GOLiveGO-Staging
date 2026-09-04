namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey() { return Administration.RoleColumns.columnsKey; }
        protected getDialogType() { return RoleDialog; }
        protected getIdProperty() { return RoleRow.idProperty; }
        protected getLocalTextPrefix() { return RoleRow.localTextPrefix; }
        protected getService() { return RoleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [RoleRow.Fields.RoleName];
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Role',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Role"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getInitialTitle() {
            return "Role Manager";
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
                if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.RoleId);
                }


            }

        }
    }
}