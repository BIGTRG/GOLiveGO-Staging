namespace GeniusOneAi.CrisisAssessments {

    @Serenity.Decorators.registerClass()
    export class CrisisAssessmentsGrid extends Serenity.EntityGrid<CrisisAssessmentsRow, any> {
        protected getColumnsKey() { return CrisisAssessmentsColumns.columnsKey; }
        protected getDialogType() { return CrisisAssessmentsDialog; }
        protected getIdProperty() { return CrisisAssessmentsRow.idProperty; }
        protected getInsertPermission() { return CrisisAssessmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return CrisisAssessmentsRow.localTextPrefix; }
        protected getService() { return CrisisAssessmentsService.baseUrl; }
        public onCompleted: () => void;

        constructor(container: JQuery, options?: { clientScoped?: boolean }) { super(container, options); }

        protected getGridCanLoad() { return super.getGridCanLoad() && (this.clientScoped ? !!this._clientID : true); }
        public get clientScoped(): boolean { return !!(this.options && (this.options as any).clientScoped); }
        private _clientID: number;
        get clientID() { return this._clientID; }
        set clientID(value: number) {
            if (this._clientID !== value) { this._clientID = value; this.setEquality('ClientId', value); this.refresh(); }
        }
        protected getAddButtonCaption(): string { return "New Assessment"; }
        protected addButtonClick() {
            var dlg = new CrisisAssessmentsDialog();
            dlg.onCompleted = () => { this.refresh(); if (this.onCompleted) this.onCompleted(); };
            dlg.loadEntityAndOpenDialog(this.clientScoped ? { ClientId: this._clientID, FormType: 'Adult' } : { FormType: 'Adult' });
        }
        protected editItem(id: any) {
            var dlg = new CrisisAssessmentsDialog();
            dlg.onCompleted = () => { this.refresh(); if (this.onCompleted) this.onCompleted(); };
            dlg.loadByIdAndOpenDialog(id);
        }
        protected getDefaultSortBy() { return ['ServiceDate DESC']; }
        protected getInitialTitle() { return "Crisis Assessments (adult / child) - answers drive the needs list and the goals per encounter"; }
        protected getColumns() {
            var columns = super.getColumns();
            var hr = columns.filter(c => c.field === 'HighRisk')[0];
            if (hr) hr.format = ctx => ctx.value ? '<span class="assess-hr">HIGH RISK</span>' : '';
            var st = columns.filter(c => c.field === 'Status')[0];
            if (st) st.format = ctx => '<span class="assess-st assess-st-' + Q.htmlEncode(ctx.value || 'Draft') + '">' + Q.htmlEncode(ctx.value || 'Draft') + '</span>';
            if (this.clientScoped) columns = columns.filter(c => c.field !== 'ClientName');
            return columns;
        }
    }
}
