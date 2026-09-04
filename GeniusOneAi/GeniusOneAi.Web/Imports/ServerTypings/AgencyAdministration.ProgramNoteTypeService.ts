namespace GeniusOneAi.AgencyAdministration {
    export namespace ProgramNoteTypeService {
        export const baseUrl = 'AgencyAdministration/ProgramNoteType';

        export declare function Create(request: Serenity.SaveRequest<ProgramNoteTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProgramNoteTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramNoteTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramNoteTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "AgencyAdministration/ProgramNoteType/Create",
            Update = "AgencyAdministration/ProgramNoteType/Update",
            Delete = "AgencyAdministration/ProgramNoteType/Delete",
            Retrieve = "AgencyAdministration/ProgramNoteType/Retrieve",
            List = "AgencyAdministration/ProgramNoteType/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProgramNoteTypeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
