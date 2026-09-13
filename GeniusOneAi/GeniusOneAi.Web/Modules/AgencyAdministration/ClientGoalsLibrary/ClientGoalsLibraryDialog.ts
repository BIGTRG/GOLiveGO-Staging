namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class ClientGoalsLibraryDialog extends Serenity.EntityDialog<ClientGoalsLibraryRow, any> {
        protected getFormKey() { return ClientGoalsLibraryForm.formKey; }
        protected getIdProperty() { return ClientGoalsLibraryRow.idProperty; }
        protected getLocalTextPrefix() { return ClientGoalsLibraryRow.localTextPrefix; }
        protected getNameProperty() { return ClientGoalsLibraryRow.nameProperty; }
        protected getService() { return ClientGoalsLibraryService.baseUrl; }
        protected form = new ClientGoalsLibraryForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 960;
            opt.height = 820;
            return opt;
        }
        protected updateTitle(): void {
            var e = this.entity || {} as ClientGoalsLibraryRow;
            this.dialogTitle = 'Library Goal' + (e.Code ? ' ' + e.Code : '') + (e.Phase ? ' - ' + CustomEditors.EpisodePhaseEditor.label(e.Phase) : '');
        }
        protected getSaveEntity() {
            var e = super.getSaveEntity();
            if (e.IsActive == null) e.IsActive = true;
            if (!e.Origin) e.Origin = 'Clinician';
            if (!e.GoalType) e.GoalType = 'Mobile Crisis';
            return e;
        }
    }
}
