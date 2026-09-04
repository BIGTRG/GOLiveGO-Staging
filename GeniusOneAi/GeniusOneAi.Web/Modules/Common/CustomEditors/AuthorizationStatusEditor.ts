namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class AuthorizationStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Active", "Active");
            this.addOption("Expired", "Expired");

           
        }
    }
}