namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class SystemStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("1", "Active");
            this.addOption("0", "Inactive");
        }
    }
}