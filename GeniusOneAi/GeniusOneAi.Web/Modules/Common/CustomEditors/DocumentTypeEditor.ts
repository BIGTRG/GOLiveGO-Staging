namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class DocumentTypeEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Form", "Form");
            this.addOption("Document", "Document");
            this.addOption("Misc", "Misc");
            this.addOption("Presentations", "Presentations");
            this.addOption("Templates", "Templates");
        }
    }
}