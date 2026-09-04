namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class RaceEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("American Indian", "American Indian");
            this.addOption("Asian", "Asian");
            this.addOption("Black (AA)", "Black (AA)");
            this.addOption("Hispanic/Latino", "Hispanic/Latino");
            this.addOption("Other", "Other");
            this.addOption("White", "White");
        }
    }
}