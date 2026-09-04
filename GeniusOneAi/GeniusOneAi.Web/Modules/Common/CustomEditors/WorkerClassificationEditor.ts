namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class WorkerClassificationEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Employee", "Employee");
            this.addOption("Contractor", "Contractor");
        }
    }
}