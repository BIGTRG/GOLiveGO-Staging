namespace GeniusOneAi.AgencyAdministration {
    @Serenity.Decorators.registerClass()
    export class LibraryGoalOutcomesDialog extends Serenity.Extensions.GridEditorDialog<LibraryGoalOutcomesRow> {
        protected getFormKey() { return LibraryGoalOutcomesForm.formKey; }
        protected getIdProperty() { return LibraryGoalOutcomesRow.idProperty; }
        protected getLocalTextPrefix() { return LibraryGoalOutcomesRow.localTextPrefix; }
        protected getNameProperty() { return LibraryGoalOutcomesRow.nameProperty; }
        protected getService() { return LibraryGoalOutcomesService.baseUrl; }
        protected form = new LibraryGoalOutcomesForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 860;
            opt.height = 720;
            return opt;
        }
        protected updateTitle(): void { this.dialogTitle = 'Outcome'; }

        // Nested detail: questions are loaded on demand for saved outcomes (the goal retrieve only brings the outcome rows).
        protected loadEntity(entity: LibraryGoalOutcomesRow) {
            super.loadEntity(entity);
            var ed = this.form.QuestionsList;
            if (entity && entity.LibraryOutcomeId > 0 && !entity.QuestionsList) {
                OutcomeQuestionsService.List({ EqualityFilter: { LibraryOutcomeId: entity.LibraryOutcomeId }, Sort: ['SortOrder'] }, r => ed.value = r.Entities || []);
            }
        }
        protected updateInterface() {
            super.updateInterface();
            $('.category-links', this.element).remove();
        }
    }
}
