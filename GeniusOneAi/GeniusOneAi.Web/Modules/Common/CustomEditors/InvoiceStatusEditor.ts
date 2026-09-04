namespace GeniusOneAi.CustomEditors {

    @Serenity.Decorators.registerEditor()
    export class InvoiceStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Open", "Open");
            this.addOption("Paid In Full", "Paid In Full");
            this.addOption("Paid Partial", "Paid Partial");
            this.addOption("Voided", "Voided");
        }
    }
}