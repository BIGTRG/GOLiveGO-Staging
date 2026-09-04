namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class MaritalStatusEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Single", "Single");
            this.addOption("Married", "Married");
            this.addOption("Separated", "Separated");
            this.addOption("Divorced", "Divorced");
            this.addOption("Widowed", "Widowed");
            this.addOption("Engaged", "Engaged");
            this.addOption("Cohabitating (or Living Together)", "Cohabitating (or Living Together)");
            this.addOption("Domestic Partnership", "Domestic Partnership");
            this.addOption("Annulled", "Annulled");
        }
    }
}