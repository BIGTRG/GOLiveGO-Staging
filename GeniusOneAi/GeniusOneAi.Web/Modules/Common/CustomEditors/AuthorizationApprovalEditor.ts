namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class AuthorizationApprovalEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Not Approved", "Not Approved");
            this.addOption("Approved", "Approved");
            this.addOption("Pending", "Pending");
           
        }
    }
}