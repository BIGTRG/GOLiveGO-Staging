namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class CustomBaseEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
        }
    }
}