namespace GeniusOneAi.CustomEditors {
    @Serenity.Decorators.registerEditor()
    export class ReferralSourceEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
            this.addOption("Court-Adult", "Court-Adult");
            this.addOption("DJJ", "DJJ");
            this.addOption("DSS", "DSS");
            this.addOption("Family", "Family");
            this.addOption("General Hospital", "General Hospital");
            this.addOption("LMH", "LMH");
            this.addOption("Private Physician", "Private Physician");
            this.addOption("Residential Treatment", "Residential Treatment");
            this.addOption("School", "School");
            this.addOption("Self", "Self");
            this.addOption("Shelter", "Shelter");
            this.addOption("Other", "Other");
        }
    }
}