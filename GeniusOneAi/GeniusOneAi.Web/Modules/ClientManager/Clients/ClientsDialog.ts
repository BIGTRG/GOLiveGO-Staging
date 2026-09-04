
namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerClass()
    export class ClientsDialog extends Serenity.EntityDialog<ClientsRow, any> {
        protected getFormKey() { return ClientsForm.formKey; }
        protected getIdProperty() { return ClientsRow.idProperty; }
        protected getLocalTextPrefix() { return ClientsRow.localTextPrefix; }
        protected getNameProperty() { return ClientsRow.nameProperty; }
        protected getService() { return ClientsService.baseUrl; }

        private authorizationsGrid = ClientManager.ClientAuthorizationsGrid;
        private goalsGrid = ClientManager.ClientGoalsGrid;
        private documentsGrid = ClientManager.ClientDocumentsGrid;
        private teamAssignmentGrid = ClientManager.TeamAssignmentsGrid;

        private duplicateRecordNumber = false;
        private lastCheckedRecordNumber: string;
        private recordNumberCheckSequence = 0;

        protected form = new ClientsForm(this.idPrefix);
        constructor() {
            super();

            this.form.RecordNumber.element
                .on('input', () => {
                    // Any previous lookup result is obsolete after the value changes.
                    this.duplicateRecordNumber = false;
                    this.lastCheckedRecordNumber = null;
                    this.recordNumberCheckSequence++;
                })
                .on('change', () => {
                    this.checkRecordNumber();
                });

            this.authorizationsGrid =
                ((new ClientManager.ClientAuthorizationsGrid(this.byId('ClientAuthorizationsGrid')) as any));

            this.goalsGrid =
                ((new ClientManager.ClientGoalsGrid(this.byId('ClientGoalsGrid')) as any));

            this.documentsGrid =
                ((new ClientManager.ClientDocumentsGrid(this.byId('ClientDocumentsGrid')) as any));

            this.teamAssignmentGrid =
                ((new ClientManager.TeamAssignmentsGrid(this.byId('ClientTeamGrid')) as any));

        }

        private checkRecordNumber(): void {
            var recordNumber = (this.form.RecordNumber.value || '').trim();

            if (!recordNumber) {
                return;
            }

            // Do not repeat the lookup when the worker tabs back through
            // an unchanged record number.
            if (recordNumber === this.lastCheckedRecordNumber) {
                return;
            }

            var valueBeingChecked = recordNumber;
            var requestSequence = ++this.recordNumberCheckSequence;

            Q.serviceRequest(
                ClientsService.baseUrl + '/CheckRecordNumber',
                {
                    RecordNumber: recordNumber,
                    ClientId: this.isNew() ? null : this.entityId
                },
                (response: any) => {
                    // Ignore an old AJAX response if the worker changed the value
                    // while the lookup was still running.
                    if (requestSequence !== this.recordNumberCheckSequence) {
                        return;
                    }

                    var currentValue =
                        (this.form.RecordNumber.value || '').trim();

                    if (currentValue !== valueBeingChecked) {
                        return;
                    }

                    this.lastCheckedRecordNumber = valueBeingChecked;
                    this.duplicateRecordNumber =
                        response && response.Exists === true;

                    if (!this.duplicateRecordNumber) {
                        return;
                    }

                    Swal.fire({
                        title: 'Duplicate Record Number',
                        text: 'It appears that a patient is already in the system ' +
                              'with this record number.',
                        icon: 'warning',
                        confirmButtonText: 'Review Record Number',
                        allowOutsideClick: false
                    }).then(() => {
                        this.form.RecordNumber.element.focus();
                        this.form.RecordNumber.element.select();
                    });
                });
        }

        protected validateBeforeSave(): boolean {
            if (!super.validateBeforeSave()) {
                return false;
            }

            if (this.duplicateRecordNumber) {
                Q.alert(
                    'It appears that a patient is already in the system ' +
                    'with this record number.'
                );

                this.form.RecordNumber.element.focus();
                this.form.RecordNumber.element.select();
                return false;
            }

            return true;
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass === "delete-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass === "apply-changes-button"), 1);
            buttons.push({
                title: "Eligibility Check",
                cssClass: "import-button",
                onClick: e =>
                {
                    if (!this.form.FirstName.value ||
                        !this.form.LastName.value ||
                        !this.form.PrimaryInsuranceTypeId.value ||
                        !this.form.OriginalServiceDate.value ||
                        !this.form.SiteTypeId.value

                    )
                    {
                        Q.alert("In order to lookup patient, First Name, Last Name, Primary Insurance, Original Service Date and Provider");
                        return;
                    }
                    ClientManager.ClientsService.CheckPatientEligibility({
                        FirstName: this.form.FirstName.value,
                        LastName: this.form.LastName.value,
                        InsuranceId: this.form.PrimaryInsuranceTypeId.value,
                        ServiceDate: this.form.OriginalServiceDate.value,
                        SiteTypeId: this.form.SiteTypeId.value
                    },
                        response => {
                            //Q.alert(response.Response);
                            Swal.fire({
                                title: 'Eligibility Response',
                                html: response.Response,
                                icon: 'information',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Use this information'
                            }).then((result) => {
                                if (result.isConfirmed)
                                {
                                    this.form.PrimaryInsuranceNumber.value = response.PolicyNumber;
                                    this.form.PrimaryInsuranceGroup.value = response.GroupNumber;
                                    this.form.BirthDate.value = response.insDob;
                                    this.form.Gender.value = response.insGender;
                                    this.form.Address1.value = response.insAddress1;
                                    this.form.City.value = response.insCity;
                                    this.form.State.value = response.insState;
                                    this.form.Zipcode.value = response.insZipcode;
                                    Swal.fire('Record Updated', 'Patient Record Updated!  Be sure to verify and save the patient record.', 'success');
                                    
                                }
                            });

                        }, { async: false });
                    
                }
                });
            
            return buttons;
        }

    
        protected updateTitle(): void {
            if (this.isNew()) {
                this.dialogTitle = 'New Patient Enrollment';
                return;
            }
            this.dialogTitle = 'Patient (' + this.getEntityNameFieldValue() + ')';
        }
        protected updateForm(): void {
         
        }

        protected updateInterface(): void {

            super.updateInterface();
            //Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            //this.element.find('sup').hide();
        }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 800;
            opt.height = 800;
            return opt;
        }
        loadEntity(entity: ClientsRow) {
            super.loadEntity(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'ClientAuthorizations', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'ClientGoals', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'ClientDocuments', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'ClientTeam', this.isNewOrDeleted());

            this.authorizationsGrid.clientID = entity.ClientId;
            this.goalsGrid.clientID = entity.ClientId;
            this.documentsGrid.clientID = entity.ClientId;
            this.teamAssignmentGrid.clientID = entity.ClientId;
        }
    }
}