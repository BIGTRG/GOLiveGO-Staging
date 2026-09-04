namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class BillRateUnitEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("15 min", "15 min");
            this.addOption("30 min", "30 min");
            this.addOption("annual", "annual");
            this.addOption("event", "event");
            this.addOption("invoice", "invoice");
            this.addOption("day", "day");
            this.addOption("hour", "hour");
            this.addOption("lifetime", "lifetime");
            this.addOption("month", "month");
            this.addOption("time limit", "time limit");
            this.addOption("unit", "unit");
            this.addOption("week", "week");
            this.addOption("yearly", "yearly");
            //this.addOption("Hour", "Hour");
            //this.addOption("Unit", "Unit");
        }
    }
}