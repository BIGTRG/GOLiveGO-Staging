namespace GeniusOneAi.ProgramNoteManager {
    export namespace ProgramNotesService {
        export const baseUrl = 'ProgramNoteManager/ProgramNotes';

        export declare function Create(request: Serenity.SaveRequest<ProgramNotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProgramNotesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramNotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramNotesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSignageData(request: Serenity.ServiceRequest, onSuccess?: (response: Modules.Common.CustomClasses.GetSignageResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ProgramNoteManager/ProgramNotes/Create",
            Update = "ProgramNoteManager/ProgramNotes/Update",
            Delete = "ProgramNoteManager/ProgramNotes/Delete",
            Retrieve = "ProgramNoteManager/ProgramNotes/Retrieve",
            List = "ProgramNoteManager/ProgramNotes/List",
            GetSignageData = "ProgramNoteManager/ProgramNotes/GetSignageData"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetSignageData'
        ].forEach(x => {
            (<any>ProgramNotesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

