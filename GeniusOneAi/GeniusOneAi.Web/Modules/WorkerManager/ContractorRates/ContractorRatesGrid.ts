
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
    export class ContractorRatesGrid extends Serenity.EntityGrid<ContractorRatesRow, any> {
        protected getColumnsKey() { return ContractorRatesColumns.columnsKey; }
        protected getDialogType() { return ContractorRatesDialog; }
        protected getIdProperty() { return ContractorRatesRow.idProperty; }
        protected getInsertPermission() { return ContractorRatesRow.insertPermission; }
        protected getLocalTextPrefix() { return ContractorRatesRow.localTextPrefix; }
        protected getService() { return ContractorRatesService.baseUrl; }

        constructor(container: JQuery)
        {
            super(container);
        }
        protected getSlickOptions()
        {
            var opt = super.getSlickOptions();
            opt.frozenColumn = 1;
            return opt;

        }
        protected getButtons()
        {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
            return buttons;
        }
        protected getColumns()
        {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: 'Edit Rate',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Rate"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getAddButtonCaption(): string { return "Add Rate"; }
        protected addButtonClick()
        {
            this.editItem({ UserId: this.userID });
        }
        protected getGridCanLoad()
        {
            return super.getGridCanLoad() && !!this.userID;
        }
        private _userID: string;
        get userID()
        {
            return this._userID;
        }
        set userID(value: string)
        {
            if (this._userID !== value)
            {
                this._userID = value;
                this.setEquality('UserId', value);
                this.refresh();
            }
        }
        protected createQuickSearchInput() { }
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
                    slf.editItem(item.UserContractorId);
                }

            }

        }
    }
}