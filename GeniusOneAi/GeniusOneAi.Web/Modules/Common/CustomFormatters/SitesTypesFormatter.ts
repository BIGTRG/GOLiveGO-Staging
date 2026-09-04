
namespace GeniusOneAi.ClientManager
{

    @Serenity.Decorators.registerEditor()
    export class SitesTypesFormatter extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, MiscEntities.SitesTypesRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }
        protected getLookupKey()
        {
            return MiscEntities.SitesTypesRow.lookupKey;
        }
        protected getItems(lookup: Q.Lookup<MiscEntities.SitesTypesRow>)
        {
            return super.getItems(lookup)
        }

        protected getItemText(item: MiscEntities.SitesTypesRow, lookup: Q.Lookup<MiscEntities.SitesTypesRow>)
        {

            return "[" + item.Npi + "] " + item.Name;
        }
        
    }
}