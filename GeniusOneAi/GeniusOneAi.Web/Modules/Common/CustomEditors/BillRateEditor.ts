namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class BillRateMetricEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Flat Rate", "Flat Rate");
            this.addOption("Percentage", "Percentage");
        }
    }
}