namespace GeniusOneAi.ClientManager {

    @Serenity.Decorators.registerEditor()
    export class ClientAuthorizationLookup extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ClientAuthorizationsRow> {
        public clientId: number;
        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return ClientAuthorizationsRow.lookupKey;
        }
        protected getItems(lookup: Q.Lookup<ClientAuthorizationsRow>) {
            let items = super.getItems(lookup);
            //this.clientId = 2
            items = items.filter(item =>
            {
                return item.ClientId == this.clientId;
            });
            return items;
        }

        protected getItemText(item: ClientAuthorizationsRow, lookup: Q.Lookup<ClientAuthorizationsRow>) {

            return item.AuthDateRange + " [" + item.BillCode+ "]";
        }
        
     
    }
}