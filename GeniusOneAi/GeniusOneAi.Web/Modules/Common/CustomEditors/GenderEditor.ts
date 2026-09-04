namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class GenderEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("M", "Male");
            this.addOption("F", "Female");
            this.addOption("O", "Other");
        }
    }
}