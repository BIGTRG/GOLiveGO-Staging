namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class StepTypeEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Complete", "Complete");
            this.addOption("Review", "Review");
            this.addOption("Review & Sign", "Review & Sign");
        }
    }
}