namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class TimesheetInOutEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("In Office", "In Office");
            this.addOption("Out Office", "Out Office");
            this.addOption("Community", "Community");
            this.addOption("Residence", "Residence");
        }
    }
}