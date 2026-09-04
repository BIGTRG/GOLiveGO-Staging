namespace GeniusOneAi.CustomEditors {

    @Serenity.Decorators.registerEditor()
    export class TimesheetStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Submitted", "Submitted");
            this.addOption("Re-Submitted", "Re-Submitted");
            this.addOption("Saved", "Saved");
            this.addOption("Rejected", "Rejected");
            this.addOption("Approved", "Approved");
            this.addOption("Processed", "Processed");
        }
    }


    @Serenity.Decorators.registerEditor()
    export class TimesheetStatusWorkflowEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Submitted", "Submitted");
            this.addOption("Re-Submitted", "Re-Submitted");
            this.addOption("Rejected", "Rejected");
            this.addOption("Approved", "Approved");
        }
    }

}