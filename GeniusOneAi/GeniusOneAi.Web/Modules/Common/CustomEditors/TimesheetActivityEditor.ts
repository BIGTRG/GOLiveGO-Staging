namespace GeniusOneAi.CustomEditors {

    @Serenity.Decorators.registerEditor()
    export class TimesheetActivityEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select Activity");
            this.addOption("Administrative", "Administrative");
            this.addOption("Training", "Training");
            this.addOption("Meetings", "Meetings");
            this.addOption("Patient", "Patient");
        }
    }
}