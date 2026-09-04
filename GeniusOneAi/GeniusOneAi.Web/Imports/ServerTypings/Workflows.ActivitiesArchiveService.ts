namespace GeniusOneAi.Workflows {
    export namespace ActivitiesArchiveService {
        export const baseUrl = 'Workflows/ActivitiesArchive';

        export declare function Create(request: Serenity.SaveRequest<ActivitiesArchiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ActivitiesArchiveRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Workflows/ActivitiesArchive/Create",
            Update = "Workflows/ActivitiesArchive/Update",
            Delete = "Workflows/ActivitiesArchive/Delete",
            Retrieve = "Workflows/ActivitiesArchive/Retrieve",
            List = "Workflows/ActivitiesArchive/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ActivitiesArchiveService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
