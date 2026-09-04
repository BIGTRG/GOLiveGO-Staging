namespace GeniusOneAi.Administration {
    export namespace BillingService {
        export const baseUrl = 'Administration/Billing';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "Administration/Billing/Retrieve",
            List = "Administration/Billing/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>BillingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
