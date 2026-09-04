namespace GeniusOneAi.CustomEditors {

    @Serenity.Decorators.registerEditor()
    export class BillingStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Rejected", "Rejected");
            this.addOption("Approved", "Approved");
            this.addOption("Processed", "Processed");
        }
    }
}