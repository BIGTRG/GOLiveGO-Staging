namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class ClientGoalEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Not Started", "Not Started");
            this.addOption("Started", "Started");
            this.addOption("Completed", "Completed");
            this.addOption("Incomplete", "Incomplete");
        }
    }
}