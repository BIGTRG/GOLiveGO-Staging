namespace GeniusOneAi.Archives {
    export namespace ProgressNotesArchiveService {
        export const baseUrl = 'Archive/ProgressNotes';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgressNotesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgressNotesArchiveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Archive/ProgressNotes/Retrieve",
            List = "Archive/ProgressNotes/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProgressNotesArchiveService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
