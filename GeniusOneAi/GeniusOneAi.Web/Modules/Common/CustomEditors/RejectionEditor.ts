namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class RejectionEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Time Justification", "Time Justification");
            this.addOption("Non Billable Action", "Non Billable Action");
            this.addOption("Incorrect Location", "Incorrect Location");
            this.addOption("Incorrect Provider Position", "Incorrect Provider Position");
            this.addOption("Notes Canned", "Notes Canned");
            this.addOption("Filler", "Filler");
            this.addOption("Other", "Other");

        }
    }
}