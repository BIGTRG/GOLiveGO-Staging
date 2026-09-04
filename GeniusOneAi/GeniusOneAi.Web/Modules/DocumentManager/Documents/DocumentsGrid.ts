/// <reference path="../../../wwwroot/lib/baselib/coredoc.min.js" />

namespace GeniusOneAi.DocumentManager {

    @Serenity.Decorators.registerClass()
    export class DocumentsGrid extends Serenity.EntityGrid<DocumentsRow, any> {
        protected getColumnsKey() { return 'DocumentManager.Documents'; }
        protected getDialogType() { return DocumentsDialog; }
        protected getIdProperty() { return DocumentsRow.idProperty; }
        protected getInsertPermission() { return DocumentsRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentsRow.localTextPrefix; }
        protected getService() { return DocumentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
        }
        protected createQuickSearchInput() { }
        protected getInitialTitle() {
            return "Documents";
        }
        protected getAddButtonCaption(): string { return "Add Document"; }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            return opt;
        }
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, {
                field: 'Edit Document',
                name: '',
                format: ctx => '<a class="inline-action edit-row" title="Edit Document Metadata"><i class="fa fa-pencil text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Document',
                name: '',
                format: ctx => '<a class="inline-action edit-document-row" title="View Document"><i class="fa fa-file-text-o text-green"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "column-pick-button"), 1);
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
                if (target.hasClass('edit-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    slf.editItem(item.DocumentId);
                }
                if (target.hasClass('edit-document-row')) {

                    if (!this.onViewSubmit()) {
                        return;
                    }
                    loadDocFinalizer(item.FileName);
                  }
            }



        }
        protected getItemCssClass(item: DocumentManager.DocumentsRow, index: number): string {
            let klass: string = "";

            if (item.IsFinalized) {
                klass += " document-finalized";
                return Q.trimToNull(klass);
            }

            return Q.trimToNull(klass);
        }
    }
}