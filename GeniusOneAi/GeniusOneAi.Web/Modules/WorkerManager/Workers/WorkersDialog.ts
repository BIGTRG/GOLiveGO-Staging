
namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerClass()
/*    @Serenity.Decorators.maximizable()*/
    export class WorkersDialog extends Serenity.EntityDialog<WorkersRow, any> {
        protected getFormKey() { return WorkersForm.formKey; }
        protected getIdProperty() { return WorkersRow.idProperty; }
        protected getLocalTextPrefix() { return WorkersRow.localTextPrefix; }
        protected getNameProperty() { return WorkersRow.nameProperty; }
        protected getService() { return WorkersService.baseUrl; }
        private WorkerCaseAssignmentsGrid = WorkerManager.WorkerCaseAssignmentsGrid;
        private WorkerFormsGrid = WorkerManager.WorkerFormsGrid;
        private WorkerCredentialsGrid = WorkerManager.WorkerCredentialsGrid;
        private WorkerDelinquenciesGrid = WorkerManager.WorkerDelinquenciesGrid;
        private ContractorRatesGrid = WorkerManager.ContractorRatesGrid;

        constructor() {
            super();

            this.WorkerCaseAssignmentsGrid = ((new WorkerManager.WorkerCaseAssignmentsGrid(this.byId('WorkerCaseAssignmentsGrid')) as any));
            this.WorkerFormsGrid = ((new WorkerManager.WorkerFormsGrid(this.byId('WorkerFormsGrid')) as any));
            this.WorkerCredentialsGrid = ((new WorkerManager.WorkerCredentialsGrid(this.byId('WorkerCredentialsGrid')) as any));
            this.WorkerDelinquenciesGrid = ((new WorkerManager.WorkerDelinquenciesGrid(this.byId('WorkerDelinquenciesGrid')) as any));
            this.ContractorRatesGrid = ((new WorkerManager.ContractorRatesGrid(this.byId('ContractorBillRatesGrid')) as any));
            this.form.Classification.change((e) => this.checkClassificationType());
        }

        protected form = new WorkersForm(this.idPrefix);
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 800;
            opt.height = 800;
            return opt;
        }
        protected getToolbarButtons(): Serenity.ToolButton[] {
            var buttons = [];
            buttons.push({
                title: "Save",
                cssClass: "save-and-close-button",
                onClick: e => { this.save(() => { Q.notifySuccess("Worker Updated Successfully!"); }); }
            });
            return buttons;
        }
        protected updateInterface(): void {
            super.updateInterface();
            this.checkClassificationType();
        }

        loadEntity(entity: WorkersRow) {
            super.loadEntity(entity);
            this.WorkerCaseAssignmentsGrid.userID= entity.UserId;
            this.WorkerFormsGrid.userID = entity.UserId;
            this.WorkerCredentialsGrid.userID = entity.UserId;
            this.WorkerDelinquenciesGrid.userID = entity.UserId;
            this.ContractorRatesGrid.userID = entity.UserId;
        }
        protected afterLoadEntity()
        {
            super.afterLoadEntity();

            //const imageBase64 = this.form.eSignatureBase64.value;
            const eSignatureBase64 = this.form.ESignatureBase64.value;
            if (eSignatureBase64)
            {
                // Find the text box and replace it with an image
                let targetElement = this.form.SignatureVerified.element;
                const imgElement = '<img src="' + eSignatureBase64 + '" alt="E-Signature" style="max-width:100%;"/>';
                targetElement.after(imgElement);
            }
        }
        checkClassificationType()
        {

            var actType = this.form.Classification.value;

            if (actType === "Employee")
            {
                var elementsToHide = document.querySelectorAll('[aria-controls="GeniusOneAi_WorkerManager_WorkersDialog10_WorkerContractorBillRates"]');
                if (elementsToHide.length > 0)
                {
                    var elementToHide = elementsToHide[0];
                    elementToHide.style.display = 'none';
                }
            }
            else
            {
                
            }


        }
    }
}