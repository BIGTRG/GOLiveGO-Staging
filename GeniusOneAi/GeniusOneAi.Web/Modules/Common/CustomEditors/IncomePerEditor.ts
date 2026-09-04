namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class IncomePerEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Per week", "Per week");
            this.addOption("Per month", "Per month");
            this.addOption("Per year", "Per year");
           
        }
    }
}