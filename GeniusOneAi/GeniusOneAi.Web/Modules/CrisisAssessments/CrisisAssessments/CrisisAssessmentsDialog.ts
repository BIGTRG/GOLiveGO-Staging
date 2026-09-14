namespace GeniusOneAi.CrisisAssessments {

    /**
     * Adult / child crisis assessment. The form is the paper MCM assessment; the right rail evaluates
     * live (score, hard stops, needs, goals for tonight) and "Complete and Recommend Goals" opens the
     * review step where the clinician confirms what goes onto the episode.
     */
    @Serenity.Decorators.registerClass()
    export class CrisisAssessmentsDialog extends Serenity.EntityDialog<CrisisAssessmentsRow, any> {
        protected getFormKey() { return CrisisAssessmentsForm.formKey; }
        protected getIdProperty() { return CrisisAssessmentsRow.idProperty; }
        protected getLocalTextPrefix() { return CrisisAssessmentsRow.localTextPrefix; }
        protected getNameProperty() { return CrisisAssessmentsRow.nameProperty; }
        protected getService() { return CrisisAssessmentsService.baseUrl; }
        protected form = new CrisisAssessmentsForm(this.idPrefix);
        private rail: JQuery;
        private evalTimer: number;
        private lastEval: EvaluationResult;
        public onCompleted: () => void;
        static ADULT_Q = ["1. How much have you been bothered by unwanted memories, nightmares, or reminders of your current crisis?", "2. To what extent have you lost enjoyment in things, kept your distance from people, or found it difficult to experience feelings due to your crisis?", "3. How much effort have you made to avoid thinking or talking about what happened or doing things that remind you of your current crisis?", "4. How much have you been bothered by poor sleep, poor concentration, jumpiness, irritability, or feeling watchful?", "5. How down or depressed have you been because of your current crisis?", "6. Has your ability to handle other stressful events or situations been harmed?", "7. Have your reactions interfered with how well you take care of your physical health (eating poorly, not enough rest, smoking more, more alcohol or other substances)?", "8. How distressed or bothered are you about your reactions?", "9. How much have your reactions interfered with your ability to work or carry out your daily activities?", "10. How much have your reactions affected your relationships with family or friends or interfered with social, recreational, or community activities?", "11. How concerned have you been about your ability to overcome problems you may face without further assistance?"];
        static CHILD_Q = ["1. Do you get upset, afraid or sad when something makes you think about the disaster?", "2. Do you have bad dreams or nightmares about what happened?", "3. Do you have upsetting thoughts or pictures that come into your mind about what happened?", "4. Do you try not to think about or talk about what happened?", "5. Do you stay away from places, people, or things that make you remember the disaster?", "6. Do you have difficulty falling asleep or wake up often because of what happened?", "7. Do you feel jumpy or nervous?", "8. Do you find it harder to concentrate or pay attention to things than you usually do?", "9. Do you feel irritable or grouchy?", "10. Do you feel sad, down, or depressed?", "11. Have you had more aches and pains, such as stomach aches or headaches?", "12. If in school: do you find it harder to get your schoolwork done?", "13. Do you worry about something else bad happening to you, your family, or your friends?", "14. Are you having a harder time getting along with family or your friends?", "15. Are you finding it harder to do or enjoy activities that you used to enjoy?", "16. Parent: Has your child been more clingy or worried about separation?", "17. Parent: Has your child been quieter and more withdrawn?", "18. Parent: Has your child talked repeatedly or asked questions about the disaster?", "19. Parent: Has your child's play been about the disaster?", "20. Parent: Have you noticed changes in your child's behavior or development (bed-wetting, baby talk, fighting, risk-taking, decline in school performance)?"];
        static ADULT_S = ["1. Have you wished you were dead or wished you could go to sleep and not wake up?", "2. Have you actually had any thoughts of killing yourself?", "3. Have you been thinking about how you might do this?", "4. Have you had these thoughts and had some intention of acting on them?", "5. Have you started to work out or worked out the details of how to kill yourself?", "6. Have you done anything, started to do anything, or prepared to do anything to end your life?"];
        static CHILD_S = ["21. In the past few weeks, have you wished you were dead?", "22. In the past few weeks, have you felt that you or your family would be better off if you were dead?", "23. In the past week, have you been having thoughts about killing yourself?", "24. Have you ever tried to kill yourself?", "25. Acuity: Are you having thoughts of killing yourself right now?"];

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 1240; opt.height = 780;
            return opt;
        }
        protected updateTitle(): void {
            var e = this.entity || {} as CrisisAssessmentsRow;
            this.dialogTitle = (e.FormType || 'Crisis') + ' Crisis Assessment' + (e.ClientName ? ' - ' + e.ClientName : '') + (e.Status ? ' (' + e.Status + ')' : '');
        }

        protected getToolbarButtons() {
            var b = super.getToolbarButtons();
            b.push({
                title: 'Complete and Recommend Goals', cssClass: 'assess-complete-button', icon: 'fa-check-square-o',
                onClick: () => this.completeClick()
            });
            b.push({ title: 'Re-evaluate', cssClass: 'assess-eval-button', icon: 'fa-refresh', onClick: () => this.evaluate() });
            return b;
        }

        protected onDialogOpen() {
            super.onDialogOpen();
            this.element.addClass('assess-dialog');
            if (!this.rail) {
                this.rail = $('<div class="assess-rail"><div class="assess-rail-inner"></div></div>').appendTo(this.element);
                this.element.on('change', 'input, select, textarea', () => this.scheduleEvaluate());
            }
            this.form.FormType.element.on('change', () => this.applyFormType());
            this.applyFormType();
            this.evaluate();
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            var e = this.entity || {} as CrisisAssessmentsRow;
            var locked = e.Status === 'Completed' || e.Status === 'Signed';
            // client is fixed when the assessment is started from the client record
            var clientFixed = !!(e.ClientId && this.isNew());
            if (this.isNew() && !this.form.ServiceDate.value) this.form.ServiceDate.valueAsDate = new Date();
            this.form.ClientId.element.closest('.field').toggle(!clientFixed);
            this.propertyGrid.element.toggleClass('assess-locked', locked);
            if (this.rail) { this.applyFormType(); this.evaluate(); }
        }

        protected updateInterface() {
            super.updateInterface();
            var e = this.entity || {} as CrisisAssessmentsRow;
            var done = e.Status === 'Completed' || e.Status === 'Signed';
            var btn = this.toolbar.findButton('assess-complete-button');
            btn.toggleClass('disabled', done);
            btn.find('.button-inner').text(done ? 'Completed - goals are on episode #' + e.EpisodeId : 'Complete and Recommend Goals');
            if (done) {
                this.set_readOnly(true);
                this.toolbar.findButton('save-and-close-button').hide();
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('delete-button').hide();
            }
        }

        private kind(): string { return (this.form.FormType.value || 'Adult') === 'Child' ? 'child' : 'adult'; }

        /** Adult and child forms share one record; this swaps labels, scales and which fields show. */
        private applyFormType() {
            var k = this.kind(), child = k === 'child';
            var f = this.form as any;
            var field = (name: string) => this.element.find('.field.' + name);
            var caption = (name: string, text: string) => field(name).find('.caption').first().text(text);
            for (var i = 1; i <= 20; i++) {
                var show = child || i <= 11;
                field('Q' + i).toggle(show);
                if (show) caption('Q' + i, (child ? CrisisAssessmentsDialog.CHILD_Q : CrisisAssessmentsDialog.ADULT_Q)[i - 1]);
                (f['Q' + i] as CustomEditors.ScaleEditor).setScale(k);
            }
            for (var j = 1; j <= 6; j++) {
                var showS = child ? j <= 5 : true;
                field('S' + j).toggle(showS);
                if (showS) caption('S' + j, (child ? CrisisAssessmentsDialog.CHILD_S : CrisisAssessmentsDialog.ADULT_S)[j - 1]);
            }
            field('S6b').toggle(!child);
            ['ParentPresent', 'ParentName', 'ParentPhone', 'GradeLevel', 'ReferralAcceptedChild', 'ReferralAcceptedParent'].forEach(n => field(n).toggle(child));
            field('ReferralAccepted').toggle(!child);
            ['Location', 'RiskCategories', 'AgeBand'].forEach(n => (f[n] as CustomEditors.OptionListEditor).setFormKind(k));
            this.element.find('.assess-scale-legend').remove();
            var legend = child ? '0 not at all, 1 a little bit, 2 somewhat, 3 quite a bit, 4 very much. Score = answers of 3 or 4.'
                               : '1 not at all, 2 a little bit, 3 somewhat, 4 quite a bit, 5 very. Score = answers of 4 or 5.';
            $('<div class="assess-scale-legend"/>').text('Response card (past month): ' + legend).insertBefore(field('Q1'));
            this.element.find('.assess-s-legend').remove();
            $('<div class="assess-s-legend"/>').text(child ? 'ASQ suicide screen - for children over 10 or if concerned about a younger child. Yes to any item: refer for immediate psychiatric intervention.'
                : 'Columbia protocol - in the past month. Yes to 2 or 3: seek behavioral health evaluation. Yes to 4, 5 or 6: HIGH RISK - call 911 or go to the emergency room (IVC protocol); stay with the client.').insertBefore(field('S1'));
        }

        private scheduleEvaluate() {
            if (this.evalTimer) window.clearTimeout(this.evalTimer);
            this.evalTimer = window.setTimeout(() => this.evaluate(), 350);
        }

        private currentEntity(): CrisisAssessmentsRow {
            var e = Q.deepClone(this.entity || {});
            this.propertyGrid.save(e);
            return e;
        }

        evaluate() {
            var e = this.currentEntity();
            CrisisAssessmentsService.Evaluate({ Entity: e }, r => { this.lastEval = r; this.renderRail(r); }, { blockUI: false });
        }

        private renderRail(r: EvaluationResult) {
            var h: string[] = [];
            var enc = Q.htmlEncode;
            h.push('<div class="rail-title">Live evaluation</div>');
            if (r.HardStops && r.HardStops.length) {
                r.HardStops.forEach(hs => h.push('<div class="rail-hardstop"><div class="hs-title">' + enc(hs.Title) + '</div><div class="hs-text">' + enc(hs.Instruction) + '</div><div class="hs-src">From: ' + enc(hs.Source) + '</div></div>'));
            }
            var cls = r.ScoreReached ? 'rail-score reached' : 'rail-score';
            h.push('<div class="' + cls + '"><span class="score-num">' + r.Score + '</span><span class="score-txt">' + (r.FormType === 'Child' ? 'answers of 3 or 4' : 'answers of 4 or 5') + ' (' + r.Answered + ' of ' + r.QuestionCount + ' answered)<br>' + (r.ScoreReached ? 'At or above ' + r.ScoreCutoff + ': discuss referral for services' : 'Referral threshold ' + r.ScoreCutoff) + '</span></div>');
            if (r.RepeatEpisode) h.push('<div class="rail-note">Second episode within 90 days - prevention plan goal added.</div>');
            h.push('<div class="rail-sec">Needs identified <span class="rail-count">' + (r.Needs ? r.Needs.length : 0) + '</span></div>');
            if (!r.Needs || !r.Needs.length) h.push('<div class="rail-empty">Answers so far point to no needs beyond the crisis plan.</div>');
            (r.Needs || []).forEach(n => h.push('<div class="rail-need"><span class="prio prio-' + enc(n.Priority) + '">' + enc(n.Priority) + '</span><span class="need-lbl">' + enc(n.Label) + '</span><div class="need-src">' + enc(n.Sources) + '</div></div>'));
            var pre = (r.TonightGoals || []).filter(g => g.Preselected);
            h.push('<div class="rail-sec">Goals for tonight (Encounter 1) <span class="rail-count">' + pre.length + '</span></div>');
            pre.forEach(g => h.push('<div class="rail-goal' + (g.Locked ? ' locked' : '') + '"><span class="g-code">' + enc(g.Code) + (g.Locked ? ' <i class="fa fa-lock"></i>' : '') + '</span> ' + enc(g.Description) + '</div>'));
            var more = (r.TonightGoals || []).length - pre.length;
            if (more > 0) h.push('<div class="rail-more">+ ' + more + ' more available in the review step</div>');
            h.push('<div class="rail-sec">Then, from the library</div><div class="rail-plan">Encounter 2: ' + r.E2ProtocolGoals + ' protocol goals<br>Encounters 3 and 4: one pair per accepted need (' + ((r.Needs || []).filter(n => n.E3E4Goals > 0).length * 2) + ' goals)<br>Encounter 5: ' + r.E5ProtocolGoals + ' pre-discharge goals<br>Follow-up: Day 7 / 14 / 21</div>');
            this.rail.find('.assess-rail-inner').html(h.join(''));
            this.rail.toggleClass('has-hardstop', !!(r.HardStops && r.HardStops.length));
        }

        private completeClick() {
            var e = this.entity || {} as CrisisAssessmentsRow;
            if (e.Status === 'Completed' || e.Status === 'Signed') { Q.notifyInfo('This assessment is already completed.'); return; }
            var open = () => {
                var dlg = new AssessmentReviewDialog();
                dlg.assessmentId = this.entityId;
                dlg.onConfirmed = (r) => {
                    Q.notifySuccess('Episode #' + r.EpisodeId + (r.EpisodeOpened ? ' opened. ' : ' updated. ') + r.NeedsCreated + ' needs recorded; goals added per encounter.');
                    this.loadById(this.entityId);
                    if (this.onCompleted) this.onCompleted();
                };
                dlg.dialogOpen(false);
            };
            if (this.isNew() || this.propertyGrid.element.hasClass('dirty')) {
                // save first so the review works from the stored answers
                this.save(() => { open(); });
            } else open();
        }

        protected onSaveSuccess(response: Serenity.SaveResponse) {
            super.onSaveSuccess(response);
            if (this.isNew() && response.EntityId) this.loadById(response.EntityId);
        }
    }
}
