namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class EmploymentStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Employed", "Employed");
            this.addOption("Self-Employed", "Self-Employed");
            this.addOption("Unemployed", "Unemployed");
           
        }
    }
}