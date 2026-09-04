namespace GeniusOneAi.WorkerManager {

    @Serenity.Decorators.registerEditor()
    export class WorkersLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, WorkersRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return WorkersRow.lookupKey;
        }
        protected getItems(lookup: Q.Lookup<WorkersRow>) {
            let items = super.getItems(lookup);

            items = items.filter(item =>
            {
                return item.IsWorker == true;
            });
            return items;
        }

        protected getItemText(item: WorkersRow, lookup: Q.Lookup<WorkersRow>) {

            return item.FirstName + " " + item.LastName + " [" + item.EmployeeId + "]";
        }
        
     
    }
}