namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class InsuranceEntityTypeEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Local Management Entity (LME)", "Local Management Entity (LME)");
            this.addOption("Managed Care Organizations (MCO)", "Managed Care Organizations (MCO)");
            this.addOption("Private", "Private");
            this.addOption("Local Governmental Units (LGU)", "Local Governmental Units (LGU)");
            this.addOption("Other", "Other");         
        }
    }
}