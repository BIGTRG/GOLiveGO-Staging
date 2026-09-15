namespace GeniusOneAi.CrisisAssessments {

    /** Review step: the clinician confirms needs and tonight's goals; the engine then opens/links the episode and copies goals per encounter. */
    @Serenity.Decorators.registerClass()
    export class AssessmentReviewDialog extends Serenity.TemplatedDialog<any> {
        assessmentId: any;
        onConfirmed: (r: CompleteResponse) => void;
        private ev: EvaluationResult;
        constructor() { super(); }
        protected getTemplate() { return "<div id='~_Toolbar'></div><div id='~_Body' class='assess-review'></div>"; }
        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = 'Review and confirm the plan'; opt.width = 980; opt.height = 720;
            return opt;
        }
        protected getToolbarButtons() {
            return [
                { title: 'Confirm and add to episode', cssClass: 'review-confirm-button', icon: 'fa-check', onClick: () => this.confirm() },
                { title: 'Back to the assessment', cssClass: 'review-cancel-button', icon: 'fa-arrow-left', onClick: () => this.dialogClose() }
            ];
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            CrisisAssessmentsService.Recommendations({ EntityId: this.assessmentId }, r => { this.ev = r; this.renderReview(); });
        }
        private renderReview() {
            var r = this.ev, enc = Q.htmlEncode, h: string[] = [];
            if (r.HardStops && r.HardStops.length)
                r.HardStops.forEach(hs => h.push('<div class="rv-hardstop"><b>' + enc(hs.Title) + '</b> - ' + enc(hs.Instruction) + '</div>'));
            if (r.ProtocolResult) h.push('<div class="rv-protocol' + (r.HighRisk ? ' high' : '') + '">' + enc(r.ProtocolResult) + '</div>');
            h.push('<div class="rv-score">Score <b>' + r.Score + '</b> (' + (r.FormType === 'Child' ? '3-4' : '4-5') + ' answers, threshold ' + r.ScoreCutoff + ')' + (r.ScoreReached ? ' - referral threshold reached' : '') + '</div>');
            h.push('<h4>1. Needs identified <small>uncheck any that do not apply; each accepted need creates its Encounter 3 and 4 goals</small></h4>');
            if (!r.Needs.length) h.push('<div class="rv-empty">No needs beyond the crisis plan were identified.</div>');
            r.Needs.forEach(n => {
                var protocol = !n.E3E4Goals;   // crisis plan / follow-up: covered by the protocol goals, always recorded
                var checked = protocol || n.Priority !== 'Low';
                h.push('<label class="rv-row' + (protocol ? ' rv-protocol' : '') + '"><input type="checkbox" class="rv-need" value="' + enc(n.NeedKey) + '"' + (checked ? ' checked' : '') + (protocol ? ' disabled' : '') + '><span class="prio prio-' + enc(n.Priority) + '">' + enc(n.Priority) + '</span><span class="rv-lbl">' + enc(n.Label) + '</span><span class="rv-cat">' + enc(n.CategoryLabel || '') + (protocol ? ' - protocol, no extra goals' : ' - ' + n.E3E4Goals + ' goals for E3/E4') + '</span><div class="rv-src">' + enc(n.Sources) + '</div></label>');
            });
            var pre = r.TonightGoals.filter(g => g.Preselected), opt = r.TonightGoals.filter(g => !g.Preselected);
            h.push('<h4>2. Goals for tonight (Encounter 1) <small>locked goals are protocol and cannot be removed</small></h4>');
            pre.forEach(g => h.push(this.goalRow(g, true)));
            if (opt.length) {
                h.push('<h4>3. Also available from the library for this picture <small>optional</small></h4>');
                opt.forEach(g => h.push(this.goalRow(g, false)));
            }
            h.push('<h4>' + (opt.length ? '4' : '3') + '. Added automatically for the next encounters</h4>');
            h.push('<h4>' + (opt.length ? '5' : '4') + '. Crisis worker who works this episode <small>sees the goals on Tonight the moment you sign</small></h4>');
            h.push('<div class="rv-plan"><select class="rv-worker form-control" style="max-width:420px"><option value="">Loading workers...</option></select></div>');
            h.push('<div class="rv-plan"><div><b>Encounter 2 - Needs Assessment:</b> ' + r.E2ProtocolGoals + ' protocol goals</div><div><b>Encounters 3 and 4:</b> one Act-on-Need and one Confirm-and-Link goal per accepted need (<span class="rv-pair-count">0</span> goals)</div><div><b>Encounter 5 - Pre-Discharge:</b> ' + r.E5ProtocolGoals + ' goals</div><div><b>Follow-up:</b> Day 7, Day 14, Day 21</div><div class="rv-note">Goals arrive Active with their interventions (checkboxes) and projected outcomes; the outcome questions become the note approval gate for each encounter.</div></div>');
            this.byId('Body').html(h.join(''));
            var recount = () => this.byId('Body').find('.rv-pair-count').text(this.byId('Body').find('.rv-need:checked:not(:disabled)').length * 2);
            this.byId('Body').on('change', '.rv-need', recount); recount();
            var syncReasons = () => this.byId('Body').find('.rv-goal').each((i, e) => { var $e = $(e); $e.find('.rv-reason').toggle(!$e.find('.rv-goal-cb').is(':checked')); });
            this.byId('Body').on('change', '.rv-goal-cb', syncReasons); syncReasons();
            this.byId('Body').on('click', '.rv-reason-input', ev => ev.preventDefault());
            var me = (Q.Authorization.userDefinition as any) ? (Q.Authorization.userDefinition as any).UserId : null;
            Q.serviceCall({ service: 'Field/Workers', request: {}, onSuccess: (wr: any) => {
                var sel = this.byId('Body').find('.rv-worker');
                sel.empty().append('<option value="">Assign later</option>');
                (wr.Workers || []).forEach((w: any) => sel.append($('<option>').val(w.UserId).text(w.DisplayName || w.Username)));
                if (me) sel.val(String(me));
            }, onError: () => { this.byId('Body').find('.rv-worker').empty().append('<option value="">Assign later</option>'); } });
        }
        private goalRow(g: EvalGoal, pre: boolean): string {
            var enc = Q.htmlEncode;
            return '<label class="rv-row rv-goal' + (g.Locked ? ' locked' : '') + '"><input type="checkbox" class="rv-goal-cb" value="' + g.LibraryGoalId + '"' + (pre ? ' checked' : '') + (g.Locked ? ' disabled' : '') + '><span class="g-code">' + enc(g.Code) + (g.Locked ? ' <i class="fa fa-lock"></i>' : '') + '</span><span class="rv-lbl">' + enc(g.Description) + '</span><div class="rv-src">' + enc(g.Source) + '</div>' + (g.Locked || !pre ? '' : '<div class="rv-reason"><input type="text" class="rv-reason-input" maxlength="500" placeholder="Reason this suggested goal is not kept (printed on the assessment)"></div>') + '</label>';
        }
        private confirm() {
            var body = this.byId('Body');
            var needs: string[] = []; body.find('.rv-need:checked').each((i, e) => { needs.push($(e).val() as string); });
            var goals: number[] = []; body.find('.rv-goal-cb:checked').each((i, e) => { goals.push(parseInt($(e).val() as string, 10)); });
            var declined: DeclinedGoal[] = [];
            body.find('.rv-goal-cb:not(:checked)').each((i, e) => { var row = $(e).closest('.rv-goal'); declined.push({ LibraryGoalId: parseInt($(e).val() as string, 10), Reason: (row.find('.rv-reason-input').val() as string || '').trim() }); });
            var workerVal = body.find('.rv-worker').val() as string;
            CrisisAssessmentsService.Complete({ AssessmentId: this.assessmentId, NeedKeys: needs, GoalIds: goals, Declined: declined, AssignedWorkerId: workerVal ? parseInt(workerVal, 10) : null }, r => {
                this.dialogClose();
                if (this.onConfirmed) this.onConfirmed(r);
            });
        }
    }
}
