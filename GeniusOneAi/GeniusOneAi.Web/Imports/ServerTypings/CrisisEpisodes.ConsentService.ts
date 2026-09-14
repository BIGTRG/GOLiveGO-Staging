namespace GeniusOneAi.CrisisEpisodes {
    export interface ConsentItem { RequestId?: number; TemplateId?: number; Code?: string; Title?: string; Summary?: string; SignerRoles?: string; RequiredAtIntake?: boolean; Status?: string; Channel?: string; SignedAt?: string; SignerName?: string; SignerRelationship?: string; WorkerName?: string; WrittenDueAt?: string; RefusalReason?: string; DocumentHash?: string; ClientDocumentId?: number; }
    export interface ConsentInviteInfo { InviteId?: number; SentTo?: string; SentAt?: string; ExpiresAt?: string; UsedAt?: string; RevokedAt?: string; Attempts?: number; LockedAt?: string; }
    export interface ConsentState extends Serenity.ServiceResponse { EpisodeId?: number; ClientId?: number; ClientName?: string; ClientEmail?: string; IsMinor?: boolean; Complete?: boolean; Verbal?: boolean; GateOk?: boolean; Summary?: string; Items?: ConsentItem[]; Invite?: ConsentInviteInfo; Audit?: string[]; }
    export interface ConsentEpisodeRequest extends Serenity.ServiceRequest { EpisodeId?: number; }
    export interface ConsentSignRequest extends Serenity.ServiceRequest { RequestId?: number; SignerName?: string; SignerRelationship?: string; SignatureImage?: string; WorkerSignatureImage?: string; FieldData?: string; }
    export interface ConsentInviteRequest extends Serenity.ServiceRequest { EpisodeId?: number; Email?: string; }
    export interface ConsentVerbalRequest extends Serenity.ServiceRequest { EpisodeId?: number; FieldData?: string; WorkerSignatureImage?: string; }
    export interface ConsentRefuseRequest extends Serenity.ServiceRequest { RequestId?: number; Reason?: string; }

    export namespace ConsentService {
        export const baseUrl = 'CrisisEpisodes/Consent';
        export declare function State(request: ConsentEpisodeRequest, onSuccess?: (response: ConsentState) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SignInPerson(request: ConsentSignRequest, onSuccess?: (response: ConsentItem) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendInvite(request: ConsentInviteRequest, onSuccess?: (response: ConsentState) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RecordVerbal(request: ConsentVerbalRequest, onSuccess?: (response: ConsentState) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RecordRefusal(request: ConsentRefuseRequest, onSuccess?: (response: ConsentState) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        ['State', 'SignInPerson', 'SendInvite', 'RecordVerbal', 'RecordRefusal'].forEach(x => {
            (<any>ConsentService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
        });
    }
}
