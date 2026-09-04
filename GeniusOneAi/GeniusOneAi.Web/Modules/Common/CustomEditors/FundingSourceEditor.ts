namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class FundingSourceEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("State", "State");
            this.addOption("Medicaid", "Medicaid");
            this.addOption("Other", "Other");
            
        }
    }
}