namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey() { return Administration.UserColumns.columnsKey; }
        protected getDialogType() { return UserDialog; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getService() { return UserService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [UserRow.Fields.Username];
        }

        //protected getColumns() {
        //    var columns = super.getColumns();

        //    var impersonate = Q.tryFirst(columns, x => x.field == "ImpersonationToken");
        //    if (impersonate != null) {
        //        impersonate.format = ctx => {
        //            if (!ctx.value)
        //                return "";

        //            return `<a target="_blank" href="${Q.resolveUrl('~/Account/ImpersonateAs?token=')}${ctx.value}">`
        //                + `<i class="fa fa-user-secret text-blue"></i></a>`;
        //        };
        //    }

        //    return columns;
        //}
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit User',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit User"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getInitialTitle() {
            return "User Manager";
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
                    slf.editItem(item.UserId);
                }


            }

        }
    }
}