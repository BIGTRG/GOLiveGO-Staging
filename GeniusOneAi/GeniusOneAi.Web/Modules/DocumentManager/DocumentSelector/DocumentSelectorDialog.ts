
namespace GeniusOneAi.DocumentManager {

    @Serenity.Decorators.registerClass()

    export class DocumentSelectorDialog extends Serenity.TemplatedDialog<any> {

        private documentsGrid = DocumentSelectorGrid
        clientID: number;
        constructor() {
            super();
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            return buttons;
        }

        protected getTemplate()
        {
            return "<div id='~_Grid'></div>";
        }

        protected onDialogOpen()
        {
            super.onDialogOpen();
            this.documentsGrid = ((new DocumentSelectorGrid(this.byId('Grid')) as any));
            this.documentsGrid.clientID = this.clientID;
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Document Repository';
            opt.width = 800;
            opt.height = 700;
            return opt;
        }

    }
}