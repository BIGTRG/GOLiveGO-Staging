namespace GeniusOneAi.CustomEditors {
    export interface ListOpt { key: string; label: string; forms?: string; }

    /** Checkbox / radio option list stored as a pipe-delimited string. Options can be limited to the adult or child form. */
    export class OptionListEditor extends Serenity.Widget<any> implements Serenity.IStringValue, Serenity.IReadOnly {
        protected opts: ListOpt[] = [];
        protected multi = false;
        protected formKind: string = null;
        private ro = false;
        private pending: string = null;
        constructor(container: JQuery) { super(container); this.element.addClass('opt-list'); }
        static labelOf(opts: ListOpt[], key: string): string { var m = opts.filter(x => x.key === key)[0]; return m ? m.label : (key || ''); }
        protected buildOptions(opts: ListOpt[], multi: boolean) { this.opts = opts; this.multi = multi; this.renderList(); }
        protected renderList() {
            var v = this.pending != null ? this.pending : this.get_value();
            this.element.empty();
            var name = this.uniqueName + '_opt';
            this.opts.forEach(o => {
                var hide = this.formKind && o.forms && o.forms !== 'both' && o.forms !== this.formKind;
                var lbl = $('<label class="opt-item"/>').toggleClass('opt-hidden', !!hide).appendTo(this.element);
                $('<input/>').attr({ type: this.multi ? 'checkbox' : 'radio', name: name, value: o.key }).prop('disabled', this.ro).appendTo(lbl);
                $('<span/>').text(o.label).appendTo(lbl);
            });
            if (!this.multi) {
                var clr = $('<a class="opt-clear" href="javascript:;" title="Clear">clear</a>').appendTo(this.element);
                clr.on('click', () => { if (!this.ro) { this.set_value(''); this.element.trigger('change'); } });
            }
            this.pending = null;
            this.set_value(v);
        }
        setFormKind(k: string) { if (this.formKind !== k) { this.formKind = k; this.renderList(); } }
        get_value(): string { var v: string[] = []; this.element.find('input:checked').each((i, e) => { v.push($(e).val() as string); }); return v.join('|'); }
        set_value(v: string) {
            var set = (v || '').split('|');
            this.element.find('input').each((i, e) => { (e as HTMLInputElement).checked = set.indexOf($(e).val() as string) >= 0; });
        }
        get value(): string { return this.get_value(); }
        set value(v: string) { this.set_value(v); }
        get_readOnly() { return this.ro; }
        set_readOnly(v: boolean) { this.ro = v; this.element.find('input').prop('disabled', v); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class FormTypeRadioEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "Adult", "label": "Adult (18+)"}, {"key": "Child", "label": "Child / adolescent (0-17)"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "Adult", "label": "Adult (18+)"}, {"key": "Child", "label": "Child / adolescent (0-17)"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class LocationEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "school", "label": "School and childcare (all ages through college)", "forms": "child"}, {"key": "community_center", "label": "Community center (e.g. recreation club)", "forms": "both"}, {"key": "provider_site", "label": "Provider site / mental health agency", "forms": "both"}, {"key": "workplace", "label": "Workplace", "forms": "both"}, {"key": "disaster_recovery_center", "label": "Disaster recovery center (FEMA, American Red Cross)", "forms": "both"}, {"key": "place_of_worship", "label": "Place of worship", "forms": "both"}, {"key": "retail", "label": "Retail site (restaurant, mall, store)", "forms": "both"}, {"key": "public_place", "label": "Public place / event (street, sidewalk, fair, sports)", "forms": "both"}, {"key": "medical_center", "label": "Medical center (doctor, dentist, hospital, MH or SUD treatment office)", "forms": "both"}, {"key": "temporary_home", "label": "Temporary home (friend or family home, group home, shelter, trailer)", "forms": "both"}, {"key": "permanent_home", "label": "Permanent home", "forms": "both"}, {"key": "phone_counseling", "label": "Phone counseling (outbound, 15 minutes or longer)", "forms": "both"}, {"key": "hotline", "label": "Hotline, helpline or crisis line (inbound, 15 minutes or longer)", "forms": "both"}, {"key": "virtual", "label": "Virtual (text line, online chat, Zoom)", "forms": "both"}, {"key": "other", "label": "Other (specify in narrative)", "forms": "both"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "school", "label": "School and childcare (all ages through college)", "forms": "child"}, {"key": "community_center", "label": "Community center (e.g. recreation club)", "forms": "both"}, {"key": "provider_site", "label": "Provider site / mental health agency", "forms": "both"}, {"key": "workplace", "label": "Workplace", "forms": "both"}, {"key": "disaster_recovery_center", "label": "Disaster recovery center (FEMA, American Red Cross)", "forms": "both"}, {"key": "place_of_worship", "label": "Place of worship", "forms": "both"}, {"key": "retail", "label": "Retail site (restaurant, mall, store)", "forms": "both"}, {"key": "public_place", "label": "Public place / event (street, sidewalk, fair, sports)", "forms": "both"}, {"key": "medical_center", "label": "Medical center (doctor, dentist, hospital, MH or SUD treatment office)", "forms": "both"}, {"key": "temporary_home", "label": "Temporary home (friend or family home, group home, shelter, trailer)", "forms": "both"}, {"key": "permanent_home", "label": "Permanent home", "forms": "both"}, {"key": "phone_counseling", "label": "Phone counseling (outbound, 15 minutes or longer)", "forms": "both"}, {"key": "hotline", "label": "Hotline, helpline or crisis line (inbound, 15 minutes or longer)", "forms": "both"}, {"key": "virtual", "label": "Virtual (text line, online chat, Zoom)", "forms": "both"}, {"key": "other", "label": "Other (specify in narrative)", "forms": "both"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class RiskCategoriesEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "family_friend_dead", "label": "Family or friend missing / dead", "forms": "adult"}, {"key": "family_dead", "label": "Family missing / dead", "forms": "child"}, {"key": "friend_dead", "label": "Friend missing / dead", "forms": "child"}, {"key": "pet_dead", "label": "Pet missing / dead", "forms": "both"}, {"key": "home_damaged", "label": "Home damaged or destroyed", "forms": "both"}, {"key": "transport_property_loss", "label": "Reduced or no access to reliable transportation and/or major property loss", "forms": "adult"}, {"key": "vehicle_property_loss", "label": "Vehicle or major property loss", "forms": "child"}, {"key": "transport", "label": "Reduced or no access to reliable transportation", "forms": "child"}, {"key": "underemployment", "label": "Underemployment or lack of employment (self or household)", "forms": "both"}, {"key": "unemployed", "label": "Unemployed (self or household)", "forms": "both"}, {"key": "isolation", "label": "Prolonged separation from social network / family, physical isolation", "forms": "both"}, {"key": "info_communication", "label": "Reduced or no access to reliable information / communication", "forms": "both"}, {"key": "illness_harm", "label": "Illness, injury or physical harm (self or household)", "forms": "both"}, {"key": "life_threatened", "label": "Life was threatened (self or household)", "forms": "both"}, {"key": "witnessed_death", "label": "Witnessed death / injury (self or household)", "forms": "both"}, {"key": "rescue_recovery", "label": "Assisted with rescue / recovery (self or household)", "forms": "both"}, {"key": "changed_schools", "label": "Changed schools or learning format", "forms": "both"}, {"key": "evacuated", "label": "Evacuated quickly with no time to prepare", "forms": "both"}, {"key": "displaced", "label": "Displaced from home", "forms": "both"}, {"key": "eviction", "label": "Eviction due to unpaid rent", "forms": "both"}, {"key": "utility_disconnection", "label": "Utility disconnection", "forms": "both"}, {"key": "sheltered_danger", "label": "Sheltered in place or sought shelter due to immediate threat of danger (disaster or domestic abuse)", "forms": "both"}, {"key": "past_mh_su", "label": "Past substance use / mental health problems", "forms": "both"}, {"key": "physical_disability", "label": "Pre-existing physical disability", "forms": "both"}, {"key": "past_trauma", "label": "Past trauma (list in narrative)", "forms": "both"}, {"key": "natural_disaster", "label": "Natural disaster", "forms": "child"}, {"key": "food_insecurity", "label": "Food insecurity", "forms": "both"}], true); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "family_friend_dead", "label": "Family or friend missing / dead", "forms": "adult"}, {"key": "family_dead", "label": "Family missing / dead", "forms": "child"}, {"key": "friend_dead", "label": "Friend missing / dead", "forms": "child"}, {"key": "pet_dead", "label": "Pet missing / dead", "forms": "both"}, {"key": "home_damaged", "label": "Home damaged or destroyed", "forms": "both"}, {"key": "transport_property_loss", "label": "Reduced or no access to reliable transportation and/or major property loss", "forms": "adult"}, {"key": "vehicle_property_loss", "label": "Vehicle or major property loss", "forms": "child"}, {"key": "transport", "label": "Reduced or no access to reliable transportation", "forms": "child"}, {"key": "underemployment", "label": "Underemployment or lack of employment (self or household)", "forms": "both"}, {"key": "unemployed", "label": "Unemployed (self or household)", "forms": "both"}, {"key": "isolation", "label": "Prolonged separation from social network / family, physical isolation", "forms": "both"}, {"key": "info_communication", "label": "Reduced or no access to reliable information / communication", "forms": "both"}, {"key": "illness_harm", "label": "Illness, injury or physical harm (self or household)", "forms": "both"}, {"key": "life_threatened", "label": "Life was threatened (self or household)", "forms": "both"}, {"key": "witnessed_death", "label": "Witnessed death / injury (self or household)", "forms": "both"}, {"key": "rescue_recovery", "label": "Assisted with rescue / recovery (self or household)", "forms": "both"}, {"key": "changed_schools", "label": "Changed schools or learning format", "forms": "both"}, {"key": "evacuated", "label": "Evacuated quickly with no time to prepare", "forms": "both"}, {"key": "displaced", "label": "Displaced from home", "forms": "both"}, {"key": "eviction", "label": "Eviction due to unpaid rent", "forms": "both"}, {"key": "utility_disconnection", "label": "Utility disconnection", "forms": "both"}, {"key": "sheltered_danger", "label": "Sheltered in place or sought shelter due to immediate threat of danger (disaster or domestic abuse)", "forms": "both"}, {"key": "past_mh_su", "label": "Past substance use / mental health problems", "forms": "both"}, {"key": "physical_disability", "label": "Pre-existing physical disability", "forms": "both"}, {"key": "past_trauma", "label": "Past trauma (list in narrative)", "forms": "both"}, {"key": "natural_disaster", "label": "Natural disaster", "forms": "child"}, {"key": "food_insecurity", "label": "Food insecurity", "forms": "both"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class PrimaryRiskEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "MentalHealth", "label": "Mental health"}, {"key": "SubstanceAbuse", "label": "Substance abuse"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "MentalHealth", "label": "Mental health"}, {"key": "SubstanceAbuse", "label": "Substance abuse"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class SubstanceFrequencyEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "Daily", "label": "Daily"}, {"key": "SeveralWeekly", "label": "Several times a week"}, {"key": "Weekly", "label": "Weekly"}, {"key": "Occasional", "label": "Occasionally"}, {"key": "None", "label": "Not currently using"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "Daily", "label": "Daily"}, {"key": "SeveralWeekly", "label": "Several times a week"}, {"key": "Weekly", "label": "Weekly"}, {"key": "Occasional", "label": "Occasionally"}, {"key": "None", "label": "Not currently using"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class AgeBandEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "Adult18_39", "label": "Young adult (18-39)", "forms": "adult"}, {"key": "Adult40_64", "label": "Adult (40-64)", "forms": "adult"}, {"key": "Older65", "label": "Older adult (65 or older)", "forms": "adult"}, {"key": "Preschool0_5", "label": "Preschool (0-5)", "forms": "child"}, {"key": "Child6_11", "label": "Child (6-11)", "forms": "child"}, {"key": "Adolescent12_17", "label": "Adolescent (12-17)", "forms": "child"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "Adult18_39", "label": "Young adult (18-39)", "forms": "adult"}, {"key": "Adult40_64", "label": "Adult (40-64)", "forms": "adult"}, {"key": "Older65", "label": "Older adult (65 or older)", "forms": "adult"}, {"key": "Preschool0_5", "label": "Preschool (0-5)", "forms": "child"}, {"key": "Child6_11", "label": "Child (6-11)", "forms": "child"}, {"key": "Adolescent12_17", "label": "Adolescent (12-17)", "forms": "child"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class DisabilitiesEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "Physical", "label": "Physical (mobility, visual, hearing, medical)"}, {"key": "Cognitive", "label": "Intellectual / cognitive"}, {"key": "MHSU", "label": "Mental health / substance use"}], true); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "Physical", "label": "Physical (mobility, visual, hearing, medical)"}, {"key": "Cognitive", "label": "Intellectual / cognitive"}, {"key": "MHSU", "label": "Mental health / substance use"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class GenderRadioEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "Male", "label": "Male"}, {"key": "Female", "label": "Female"}, {"key": "Transgender", "label": "Transgender"}, {"key": "None", "label": "None of these"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "Male", "label": "Male"}, {"key": "Female", "label": "Female"}, {"key": "Transgender", "label": "Transgender"}, {"key": "None", "label": "None of these"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class LanguageRadioEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "English", "label": "English"}, {"key": "Spanish", "label": "Spanish"}, {"key": "Other", "label": "Other"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "English", "label": "English"}, {"key": "Spanish", "label": "Spanish"}, {"key": "Other", "label": "Other"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class RaceEthnicityEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "AIAN", "label": "American Indian / Alaska Native"}, {"key": "Asian", "label": "Asian"}, {"key": "Black", "label": "Black / African American"}, {"key": "NHPI", "label": "Native Hawaiian / Other Pacific Islander"}, {"key": "White", "label": "White"}, {"key": "Hispanic", "label": "Hispanic / Latino"}], true); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "AIAN", "label": "American Indian / Alaska Native"}, {"key": "Asian", "label": "Asian"}, {"key": "Black", "label": "Black / African American"}, {"key": "NHPI", "label": "Native Hawaiian / Other Pacific Islander"}, {"key": "White", "label": "White"}, {"key": "Hispanic", "label": "Hispanic / Latino"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class YesNoRadioEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "Yes", "label": "Yes"}, {"key": "No", "label": "No"}], false); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "Yes", "label": "Yes"}, {"key": "No", "label": "No"}], key); }
    }

    @Serenity.Decorators.registerEditor([Serenity.IStringValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class ReferralsEditor extends OptionListEditor {
        constructor(c: JQuery) { super(c); this.buildOptions([{"key": "crisis_counseling", "label": "Crisis counseling program services (group counseling, team leader, follow-up visit)"}, {"key": "mental_health", "label": "Mental health services (professional, longer-term counseling, behavioral or psychiatric)"}, {"key": "substance_use", "label": "Substance use services (treatment or self-help groups such as AA / NA)"}, {"key": "community", "label": "Community services (FEMA, loans, housing, employment, social services)"}, {"key": "disability", "label": "Resources for disabilities or other access and functional needs"}, {"key": "other", "label": "Other (specify in narrative)"}], true); }
        static label(key: string): string { return OptionListEditor.labelOf([{"key": "crisis_counseling", "label": "Crisis counseling program services (group counseling, team leader, follow-up visit)"}, {"key": "mental_health", "label": "Mental health services (professional, longer-term counseling, behavioral or psychiatric)"}, {"key": "substance_use", "label": "Substance use services (treatment or self-help groups such as AA / NA)"}, {"key": "community", "label": "Community services (FEMA, loans, housing, employment, social services)"}, {"key": "disability", "label": "Resources for disabilities or other access and functional needs"}, {"key": "other", "label": "Other (specify in narrative)"}], key); }
    }

    /** 1-5 (adult) or 0-4 (child) response card as a row of pills. */
    @Serenity.Decorators.registerEditor([Serenity.IDoubleValue, Serenity.IReadOnly])
    @Serenity.Decorators.element("<div/>")
    export class ScaleEditor extends Serenity.Widget<any> implements Serenity.IDoubleValue, Serenity.IReadOnly {
        static adult: [number, string][] = [[1, "Not at all"], [2, "A little bit"], [3, "Somewhat"], [4, "Quite a bit"], [5, "Very"]];
        static child: [number, string][] = [[0, "Not at all"], [1, "A little bit"], [2, "Somewhat"], [3, "Quite a bit"], [4, "Very much"]];
        private items: [number, string][] = ScaleEditor.adult;
        private ro = false;
        constructor(c: JQuery) { super(c); this.element.addClass('scale-list'); this.renderList(); }
        private renderList() {
            var v = this.get_value();
            this.element.empty();
            var name = this.uniqueName + '_sc';
            this.items.forEach(it => {
                var lbl = $('<label class="scale-item"/>').appendTo(this.element);
                $('<input/>').attr({ type: 'radio', name: name, value: it[0] }).prop('disabled', this.ro).appendTo(lbl);
                $('<span class="scale-num"/>').text(it[0]).appendTo(lbl);
                $('<span class="scale-txt"/>').text(it[1]).appendTo(lbl);
            });
            this.set_value(v);
        }
        setScale(kind: string) {
            var items = kind === 'child' ? ScaleEditor.child : ScaleEditor.adult;
            if (items !== this.items) { this.items = items; this.renderList(); }
        }
        get_value(): number { var c = this.element.find('input:checked'); return c.length ? parseInt(c.val() as string, 10) : null; }
        set_value(v: number) { this.element.find('input').each((i, e) => { (e as HTMLInputElement).checked = v != null && parseInt($(e).val() as string, 10) === v; }); }
        get value(): number { return this.get_value(); }
        set value(v: number) { this.set_value(v); }
        get_readOnly() { return this.ro; }
        set_readOnly(v: boolean) { this.ro = v; this.element.find('input').prop('disabled', v); }
    }
}
