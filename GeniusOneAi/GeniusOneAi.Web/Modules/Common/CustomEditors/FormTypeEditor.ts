namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class FormTypeEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("Text", "Text");
            this.addOption("Goals(Readonly)", "Goals(Readonly)");
            this.addOption("Interventions(Readonly)", "Interventions(Readonly)");
            this.addOption("Date", "Date");
            this.addOption("Dropdown", "Dropdown");
        }
    }
}