
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientsEligibilityDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey() { return ClientsForm.formKey; }
        protected getIdProperty() { return ClientsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getNameProperty() { return ClientsRow.nameProperty; }
        protected getService() { return ClientsService.baseUrl; }
        protected getDeletePermission() { return ClientsRow.deletePermission; }
        protected getInsertPermission() { return ClientsRow.insertPermission; }
        protected getUpdatePermission() { return ClientsRow.updatePermission; }

      
        protected form = new ClientsForm(this.idPrefix);
        constructor() {
            super();
         }
        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "apply-changes-button"), 1);
            buttons.push({
                title: "Check Eligibility",
                cssClass: "import-button",
                onClick: e => { this.getClientInfo(); }
                });
            
            return buttons;
        }
        protected getClientInfo(): void {
            //if (!this.form.FirstName.value || !this.form.LastName.value || !this.form.State.value || !this.form.InsuranceNumber.value) {
            //    Q.alert("In order to lookup patient, First Name, Last Name, Birthdate, Insurance Number and State are required.");
            //    return;
            //}
            ClientManager.ClientsService.CheckPatientEligibility({
                FirstName: this.form.FirstName.value,
                LastName: this.form.LastName.value,
                MiddleName: this.form.MiddleName.value,
                PayerId: this.form.InsuranceNumber.value,
                ProviderNpi: this.form.InsuranceNumber.value
                },
                response => {
                    //Q.alert(response.Response);
                    Swal.fire({
                        title: 'Patient Found',
                        html: response.Response,
                        icon: 'information',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Use this information'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            
                            Swal.fire('Record Updated', 'Patient Record Updated!', 'success');
                            
                        }
                    });

                }, { async: false });
        }
        protected updateTitle(): void {
                this.dialogTitle = 'Patient Eligibility Check';

        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 750;
            opt.height = 750;
            return opt;
        }
    }
}