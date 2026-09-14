namespace GeniusOneAi.CrisisEpisodes {
    export interface NoteQuestion { QuestionId?: number; SortOrder?: number; Prompt?: string; AnswerType?: string; Options?: string[]; SentenceTemplate?: string; ResourceType?: string; SendsToCrisisPlan?: boolean; IsRequired?: boolean; ShowWhen?: string; Answer?: string; }
    export interface NoteOutcome { OutcomeId?: number; LibraryOutcomeId?: number; Text?: string; StatusRule?: string; EffectivenessTemplate?: string; IsMet?: boolean; Questions?: NoteQuestion[]; }
    export interface NoteIntervention { ClientGoalInterventionId?: number; Number?: number; Desc?: string; Provided?: boolean; Detail?: string; }
    export interface NoteGoal { ClientGoalId?: number; Code?: string; Description?: string; Phase?: string; IsProtocol?: boolean; IsCarried?: boolean; NeedKey?: string; EffectivenessMeasure?: string; Status?: string; StatusOverride?: boolean; OutcomeText?: string; EffectivenessText?: string; WorkerNote?: string; Interventions?: NoteIntervention[]; Outcomes?: NoteOutcome[]; }
    export interface GateState { Ready?: boolean; Missing?: string[]; }
    export interface PlanEntry { EntryId?: number; EntryType?: string; EntryText?: string; SourceGoalId?: number; SourceNoteId?: number; }
    export interface EpisodeGoalSummary { ClientGoalId?: number; Code?: string; Description?: string; Phase?: string; Status?: string; LastOutcome?: string; LastEncounter?: number; }
    export interface NoteData extends Serenity.ServiceResponse {
        ActivityId?: number; ProgramNoteId?: number; EpisodeId?: number; EncounterNo?: number; Phase?: string; PhaseLabel?: string; ClientId?: number; ClientName?: string; ServiceDate?: string;
        NoteStatus?: string; Locked?: boolean; FollowUpDay?: number; ContactMethod?: string; SafetyConcern?: boolean; SafetyText?: string; LongTermAdmission?: boolean; Summary?: string; DischargeSummary?: string;
        Goals?: NoteGoal[]; Gate?: GateState; CrisisPlan?: PlanEntry[]; EpisodeGoals?: EpisodeGoalSummary[]; Field01?: string; Field02?: string; Field03?: string; Field04?: string;
    }
    export interface SaveAnswer { OutcomeId?: number; QuestionId?: number; Answer?: string; }
    export interface SaveGoal { ClientGoalId?: number; Status?: string; StatusOverride?: boolean; WorkerNote?: string; Interventions?: NoteIntervention[]; Answers?: SaveAnswer[]; }
    export interface SaveNoteDataRequest extends Serenity.ServiceRequest { ActivityId?: number; Goals?: SaveGoal[]; SafetyConcern?: boolean; SafetyText?: string; ContactMethod?: string; LongTermAdmission?: boolean; }
    export interface StartEncounterRequest extends Serenity.ServiceRequest { EpisodeId?: number; ServiceDate?: string; FromTime?: string; ToTime?: string; Location?: string; IsBillable?: boolean; FollowUpId?: number; ContactMethod?: string; }
    export interface StartEncounterResponse extends Serenity.ServiceResponse { ActivityId?: number; ProgramNoteId?: number; Resumed?: boolean; }
    export interface ActivityRequest extends Serenity.ServiceRequest { ActivityId?: number; }
    export interface EpisodeRequest extends Serenity.ServiceRequest { EpisodeId?: number; }
    export interface TimelineEncounter { ActivityId?: number; ProgramNoteId?: number; EncounterNo?: number; Phase?: string; PhaseLabel?: string; ServiceDate?: string; Status?: string; FollowUpDay?: number; Summary?: string; }
    export interface TimelineFollowUp { FollowUpId?: number; Day?: number; DueDate?: string; Status?: string; ActivityId?: number; Result?: string; }
    export interface EpisodeTimeline extends Serenity.ServiceResponse { EpisodeId?: number; Phase?: string; PhaseLabel?: string; Closed?: boolean; Disposition?: string; NextAction?: string; OpenActivityId?: number; Encounters?: TimelineEncounter[]; FollowUps?: TimelineFollowUp[]; Goals?: EpisodeGoalSummary[]; }

    export namespace EncounterNotesService {
        export const baseUrl = 'CrisisEpisodes/EncounterNotes';
        export declare function GetNoteData(request: ActivityRequest, onSuccess?: (response: NoteData) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SaveNoteData(request: SaveNoteDataRequest, onSuccess?: (response: NoteData) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function StartEncounter(request: StartEncounterRequest, onSuccess?: (response: StartEncounterResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Timeline(request: EpisodeRequest, onSuccess?: (response: EpisodeTimeline) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        ['GetNoteData', 'SaveNoteData', 'StartEncounter', 'Timeline'].forEach(x => {
            (<any>EncounterNotesService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
        });
    }
}
