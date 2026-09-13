namespace GeniusOneAi.CustomEditors {
    function fixed(items: [string, string][]) {
        return class extends Serenity.Select2Editor<any, any> {
            static items = items;
            static label(key: string): string { var m = items.filter(x => x[0] === key)[0]; return m ? m[1] : (key || ""); }
            constructor(container: JQuery) {
                super(container, null);
                items.forEach(x => this.addOption(x[0], x[1]));
            }
        };
    }

    @Serenity.Decorators.registerEditor()
    export class AnswerTypeEditor extends fixed([
        ["YesNo", "Yes / No"], ["Pick", "Pick one (options)"], ["Number", "Number"], ["Time", "Time"],
        ["Date", "Date"], ["Resource", "Resource from directory"], ["Text", "Short text"]]) { }

    @Serenity.Decorators.registerEditor()
    export class ResourceTypeEditor extends fixed([
        ["Shelter", "Shelter"], ["Food", "Food"], ["Provider", "Provider"], ["Pharmacy", "Pharmacy"],
        ["Hotel", "Hotel / motel voucher"], ["Program", "Program / agency"], ["Hotline", "Hotline"]]) { }

    @Serenity.Decorators.registerEditor()
    export class GoalOriginEditor extends fixed([
        ["Seed", "Seed (workbook)"], ["Clinician", "Clinician added"], ["AiApproved", "AI draft, clinically approved"]]) { }

    @Serenity.Decorators.registerEditor()
    export class StatusRuleEditor extends fixed([["Required", "Required for Met"], ["Supporting", "Supporting"]]) { }

    @Serenity.Decorators.registerEditor()
    export class NeedCategoryEditor extends fixed([
        ["MentalHealth", "Mental Health"], ["SubstanceUse", "Substance Use"], ["Medical", "Medical"], ["Housing", "Housing"],
        ["Employment", "Employment"], ["Legal", "Legal"], ["Financial", "Financial"], ["Education", "Education"],
        ["FamilySupport", "Family Support"], ["Transportation", "Transportation"], ["FoodSecurity", "Food Security"],
        ["SocialSupport", "Social Support"], ["ChildWelfare", "Child Welfare"], ["DomesticViolence", "Domestic Violence"], ["Other", "Other"]]) { }

    /** Goal status set agreed 9/12 (matches the earlier five-phase design). Legacy values stay selectable so old rows still load. */
    @Serenity.Decorators.registerEditor()
    export class GoalStatusEditor extends fixed([
        ["Active", "Active"], ["Met", "Met"], ["Partially Met", "Partially Met"], ["Not Met", "Not Met"],
        ["Deferred", "Deferred"], ["Cancelled", "Cancelled"],
        ["Not Started", "Not Started (legacy)"], ["Started", "Started (legacy)"], ["Completed", "Completed (legacy)"], ["Incomplete", "Incomplete (legacy)"]]) {
        static css(v: string): string {
            switch (v) { case "Met": case "Completed": return "goal-st-met"; case "Partially Met": return "goal-st-part";
                case "Not Met": case "Incomplete": return "goal-st-notmet"; case "Deferred": case "Cancelled": return "goal-st-off"; default: return "goal-st-active"; }
        }
    }
}
