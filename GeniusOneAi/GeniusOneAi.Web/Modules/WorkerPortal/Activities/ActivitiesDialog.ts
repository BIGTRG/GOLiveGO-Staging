
namespace GeniusOneAi.WorkerPortal {
    @Serenity.Decorators.registerClass()
    export class ActivitiesDialog extends Serenity.EntityDialog<ActivitiesRow, any> {
        protected getFormKey() { return ActivitiesForm.formKey; }
        protected getIdProperty() { return ActivitiesRow.idProperty; }
        protected getLocalTextPrefix() { return ActivitiesRow.localTextPrefix; }
        protected getNameProperty() { return ActivitiesRow.nameProperty; }
        protected getService() { return ActivitiesService.baseUrl; }
        protected form = new ActivitiesForm(this.idPrefix);
        constructor() {
            super();
            this.form.Activity.change((e) => this.checkActivityType());
        }
        protected updateInterface(): void {
            super.updateInterface();
            $('.category-links').remove();
            this.checkActivityType();
        }
        getToolbarButtons() {
            var buttons = [];
            buttons.push({
                title: "Submit Activity",
                cssClass: "save-and-close-button",
                onClick: e => { this.save(() => this.dialogClose()); }
            });

            return buttons;
        }
        checkActivityType() {

            var actType = this.form.Activity.value;

            if (actType === "Patient") {

                this.form.ActivityFromTime.value = '';
                this.form.ActivityToTime.value = '';
                $('.ActivityFromTime').hide();
                $('.ActivityToTime').hide();

                this.form.ClientId.element.prop('required', true);
                this.form.ProgressNoteLocation.element.prop('required', true);
                this.form.ProgressNoteInOut.element.prop('required', true);
                this.form.Hours.element.prop('required', true);
                $('.category:contains("Patient Details")').show();
                $('.Hours').show();

            } else {
                this.form.ClientId.value = '';
                this.form.ProgressNoteLocation.value = '';
                this.form.ProgressNoteInOut.value = '';
                //this.form.Hours.value = null;
                this.form.ClientId.element.prop('required', false);
                this.form.ProgressNoteLocation.element.prop('required', false);
                this.form.ProgressNoteInOut.element.prop('required', false);
                this.form.Hours.element.prop('required', false);
                $('.category:contains("Patient Details")').hide();
                $('.Hours').show();
                //$('.ActivityFromTime').show();
                //$('.ActivityToTime').show();

                $('.ActivityFromTime').hide();
                $('.ActivityToTime').hide();

            }


        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Activity Editor';
            opt.width = 650;
            opt.height = 600;
            return opt;
        }

    }
}