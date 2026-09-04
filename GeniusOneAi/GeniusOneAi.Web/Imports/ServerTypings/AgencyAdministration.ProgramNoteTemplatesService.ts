namespace GeniusOneAi.AgencyAdministration {
    export namespace ProgramNoteTemplatesService {
        export const baseUrl = 'AgencyAdministration/ProgramNoteTemplates';

        export declare function Create(request: Serenity.SaveRequest<ProgramNoteTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProgramNoteTemplatesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramNoteTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramNoteTemplatesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/ProgramNoteTemplates/Create",
            Update = "AgencyAdministration/ProgramNoteTemplates/Update",
            Delete = "AgencyAdministration/ProgramNoteTemplates/Delete",
            Retrieve = "AgencyAdministration/ProgramNoteTemplates/Retrieve",
            List = "AgencyAdministration/ProgramNoteTemplates/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProgramNoteTemplatesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

