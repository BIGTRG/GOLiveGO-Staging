namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class LivingArrangmentsEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("With others", "With others");
            this.addOption("Alone", "Alone");
           
        }
    }
}