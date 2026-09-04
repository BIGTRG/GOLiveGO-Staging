namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class AuthorizationTypeEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Units", "Units");
            this.addOption("Contacts", "Contacts");
            this.addOption("Hourly", "Hourly");
          
        }
    }
}