namespace GeniusOneAi.WorkerPortal {
    export namespace WorkersService {
        export const baseUrl = 'WorkerPortal/Workers';

        export declare function Update(request: Serenity.SaveRequest<WorkersPortalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Update = "WorkerPortal/Workers/Update"
        }

        [
            'Update'
        ].forEach(x => {
            (<any>WorkersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
