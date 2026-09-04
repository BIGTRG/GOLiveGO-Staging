namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class TimesheetLocationEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("1", "Face to Face");
            this.addOption("2", "Telehealth");
            this.addOption("3", "Face to Face/COVID");
            this.addOption("4", "Non Face to Face");
        }
    }
}