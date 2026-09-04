namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class PerformerTypeEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Staff", "Staff");
            this.addOption("Patient", "Patient");
        }
    }
}