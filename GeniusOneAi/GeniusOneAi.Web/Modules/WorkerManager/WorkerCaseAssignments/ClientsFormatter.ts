namespace GeniusOneAi.ClientManager{

    @Serenity.Decorators.registerEditor()
    export class ClientsLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ClientsRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return ClientsRow.lookupKey;
        }
        protected getItems(lookup: Q.Lookup<ClientsRow>) {
            return super.getItems(lookup)
        }

        protected getItemText(item: ClientsRow, lookup: Q.Lookup<ClientsRow>) {

            return item.LastName + " " + item.FirstName + " [" + item.RecordNumber + "]";
        }
        
    }
}