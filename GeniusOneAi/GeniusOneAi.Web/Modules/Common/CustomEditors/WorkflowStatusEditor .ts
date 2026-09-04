namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class WorkflowStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Enabled", "Enabled");
            this.addOption("Stopped", "Stopped");
        }
    }
}