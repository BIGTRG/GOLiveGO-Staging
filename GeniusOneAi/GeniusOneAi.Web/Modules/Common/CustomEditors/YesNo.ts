namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class YesNoEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("1", "Yes");
            this.addOption("0", "No");
        }
    }
}