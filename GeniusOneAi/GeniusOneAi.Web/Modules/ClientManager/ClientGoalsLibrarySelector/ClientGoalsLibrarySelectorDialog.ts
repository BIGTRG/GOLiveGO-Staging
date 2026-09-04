
namespace GeniusOneAi.ClientManager
{

    @Serenity.Decorators.registerClass()

    export class ClientGoalsLibrarySelectorDialog extends Serenity.TemplatedDialog<any> {
        private goalsGrid = ClientGoalsLibrarySelectorGrid
        clientID: number;
        constructor()
        {
            super();
        }

        getToolbarButtons()
        {
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
            this.goalsGrid = ((new ClientGoalsLibrarySelectorGrid(this.byId('Grid')) as any));
            this.goalsGrid.clientID = this.clientID;
        }

        protected getDialogOptions()
        {
            var opt = super.getDialogOptions();
            opt.title = 'Goal Library';
            opt.width = 800;
            opt.height = 600;
            return opt;
        }

    }
}

