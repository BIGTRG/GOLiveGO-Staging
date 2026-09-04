namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class NumberOrderEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("1", "1");
            this.addOption("2", "2");
            this.addOption("3", "3");
            this.addOption("4", "4");
            this.addOption("5", "5");
            this.addOption("6", "6");
            this.addOption("7", "7");
            this.addOption("8", "8");
            this.addOption("9", "9");
            this.addOption("10", "10");
        }
    }
}