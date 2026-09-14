namespace GeniusOneAi.CrisisEpisodes {

    /**
     * Worker view of an encounter note. Lives on the existing Progress Note page above the four MCM
     * sections. The worker only checks interventions and answers outcome questions; the server writes
     * Sections 1-4, the goal statuses and the effectiveness text, and the panel mirrors them into the
     * note fields. Sign stays locked until the gate (every goal answered + safety question) is complete.
     */
    export namespace EncounterNotePanel {
        var enc = Q.htmlEncode;
        var data: NoteData;
        var activityId: number;
        var $root: JQuery;
        var saveTimer: any;
        var seq = 0, inflight = false;
        var resources: { [type: string]: AgencyAdministration.ResourceDirectoryRow[] } = {};
        var STATUS = { Met: 'Met', PartiallyMet: 'Partially met', NotMet: 'Not met', Carried: 'In progress - carried' };
        var origSign: Function;

        export function init(actId: number, noteId: number) {
            activityId = actId;
            $root = $('#encounterPanel');
            $root.html('<div class="enp-loading">Loading the encounter...</div>');
            // Sections 1-4 are written by the engine; the worker does not type them.
            $('#ctr-field01, #ctr-field02, #ctr-field03, #ctr-field04').prop('readonly', true).addClass('enp-mirrored');
            $('#ctr-field00').prop('disabled', true);
            origSign = (<any>window).signSubmit;
            (<any>window).signSubmit = function () {
                if (!data || !data.Gate || !data.Gate.Ready) {
                    Q.alert('<b>The note cannot be signed yet:</b><ul><li>' + ((data && data.Gate && data.Gate.Missing) || ['loading']).map(enc).join('</li><li>') + '</li></ul>', { title: 'Note not ready', htmlEncode: false });
                    return;
                }
                origSign();
            };
            AgencyAdministration.ResourceDirectoryService.List({ Take: 500 }, r => {
                (r.Entities || []).forEach(x => { (resources[x.ResourceType || 'Other'] = resources[x.ResourceType || 'Other'] || []).push(x); });
            });
            EncounterNotesService.GetNoteData({ ActivityId: activityId }, d => { data = d; render(); mirror(); });
        }

        function visible(q: NoteQuestion, q1Answer: string): boolean {
            if (!q.ShowWhen) return true;
            var p = q.ShowWhen.split('='); return p.length === 2 && (p[1] || '').toLowerCase() === (q1Answer || '').toLowerCase();
        }

        function render() {
            var d = data, h: string[] = [], locked = d.Locked;
            h.push('<div class="enp-head' + (locked ? ' locked' : '') + '">');
            h.push('<div class="enp-title"><span class="enp-kicker">Crisis episode #' + d.EpisodeId + '</span><h3>' + enc(d.PhaseLabel) + '</h3>' +
                '<div class="enp-sub">' + enc(d.ClientName) + ' - ' + Q.formatDate(Q.parseISODateTime(d.ServiceDate), 'MM/dd/yyyy') + (d.ContactMethod ? ' - ' + enc(d.ContactMethod) : '') +
                (locked ? ' - <b>' + enc(d.NoteStatus) + '</b> (read only)' : '') + '</div></div>');
            h.push('<div class="enp-gate" id="enp-gate"></div></div>');
            h.push('<div class="enp-hint">Check what you did, answer what happened. The note writes itself below: Section 1 (purpose and goals), Section 2 (interventions), Section 3 (outcome and effectiveness per goal) and Section 4 (safety).</div>');
            if (d.Phase === 'FU') h.push('<div class="enp-block"><label>Contact method</label> ' + pick('enp-contact', ['Phone', 'Video', 'Face to Face', 'Text / no answer'], d.ContactMethod) + '</div>');
            var n = 1;
            (d.Goals || []).forEach(g => h.push(goalCard(g, n++, locked)));
            if (!d.Goals || !d.Goals.length) h.push('<div class="enp-empty">No open goals on this encounter. Add goals to the episode from the client record.</div>');
            // safety
            h.push('<div class="enp-card enp-safety"><div class="enp-card-head"><span class="enp-goal-no">Safety</span><b>Were there any immediate safety concerns identified or reported?</b></div>' +
                '<div class="enp-card-body">' + yesno('enp-safety', d.SafetyConcern) +
                '<input type="text" class="form-control enp-safety-text" placeholder="If YES: what was the concern, what was done, and which supervisor was notified. If NO you may add a one-line risk statement." value="' + enc(d.SafetyText || '') + '"></div></div>');
            if (d.Phase === 'E5') {
                h.push('<div class="enp-card enp-discharge"><div class="enp-card-head"><span class="enp-goal-no">Pre-discharge</span><b>Review every goal of the episode and the Crisis Plan with the client</b></div><div class="enp-card-body">');
                h.push('<table class="enp-table"><thead><tr><th>Goal</th><th>Encounter</th><th>Status</th><th>Last outcome</th></tr></thead><tbody>');
                (d.EpisodeGoals || []).forEach(eg => h.push('<tr><td><b>' + enc(eg.Code) + '</b> ' + enc(eg.Description) + '</td><td>' + enc(eg.Phase) + '</td><td class="' + (eg.Status === 'Completed' ? 'ok' : 'open') + '">' + (eg.Status === 'Completed' ? 'Met' : 'Open') + '</td><td>' + enc(eg.LastOutcome || '') + '</td></tr>'));
                h.push('</tbody></table>');
                h.push('<div class="enp-plan"><b>Crisis Plan entries (auto-filled from the answers):</b>' + (d.CrisisPlan && d.CrisisPlan.length ? '<ul>' + d.CrisisPlan.map(p => '<li><span class="enp-tag">' + enc(p.EntryType) + '</span> ' + enc(p.EntryText) + '</li>').join('') + '</ul>' : ' <i>none yet</i>') + '</div>');
                h.push('<div class="enp-q"><label>Was the client admitted to a long-term service at discharge? <small>(Yes skips the Day 7 / 14 / 21 calls)</small></label>' + yesno('enp-lta', d.LongTermAdmission) + '</div>');
                h.push('</div></div>');
            } else if (d.CrisisPlan && d.CrisisPlan.length) {
                h.push('<div class="enp-plan enp-card"><div class="enp-card-head"><span class="enp-goal-no">Crisis Plan</span><b>Entries written so far from the answers</b></div><div class="enp-card-body"><ul>' + d.CrisisPlan.map(p => '<li><span class="enp-tag">' + enc(p.EntryType) + '</span> ' + enc(p.EntryText) + '</li>').join('') + '</ul></div></div>');
            }
            h.push('<div class="enp-foot"><span class="enp-savestate" id="enp-savestate">' + (locked ? 'Signed note - read only.' : 'Changes save automatically.') + '</span>' +
                (locked ? '' : '<button type="button" class="btn btn-primary enp-save-now"><i class="fa fa-magic"></i> Write the note now</button>') + '</div>');
            $root.html(h.join(''));
            renderGate();
            if (locked) { $root.find('input, select, button.enp-chip, textarea').prop('disabled', true); return; }
            bind();
        }

        function goalCard(g: NoteGoal, n: number, locked: boolean): string {
            var h: string[] = [];
            var st = g.Status ? '<span class="enp-status s-' + g.Status + '">' + STATUS[g.Status] + (g.StatusOverride ? ' (set by worker)' : '') + '</span>' : '<span class="enp-status s-open">Outcome pending</span>';
            h.push('<div class="enp-card enp-goal" data-goal="' + g.ClientGoalId + '">');
            h.push('<div class="enp-card-head"><span class="enp-goal-no">Goal ' + n + '</span><span class="enp-code">' + enc(g.Code) + '</span>' + (g.IsProtocol ? '<span class="enp-tag protocol"><i class="fa fa-lock"></i> protocol</span>' : '') + (g.IsCarried ? '<span class="enp-tag carried">carried from ' + enc(g.Phase) + '</span>' : '') + st + '</div>');
            h.push('<div class="enp-card-body"><div class="enp-goal-desc">' + enc(g.Description) + '</div>' + (g.EffectivenessMeasure ? '<div class="enp-measure">Measured by: ' + enc(g.EffectivenessMeasure) + '</div>' : ''));
            h.push('<div class="enp-section"><div class="enp-section-title">Interventions provided <small>check only what you did</small></div>');
            (g.Interventions || []).forEach(i => h.push('<label class="enp-inter"><input type="checkbox" class="enp-inter-cb" data-iid="' + i.ClientGoalInterventionId + '"' + (i.Provided ? ' checked' : '') + '> <span>' + enc(i.Desc) + '</span>' +
                '<input type="text" class="form-control enp-inter-detail" placeholder="detail (who / where / amount / reference)" value="' + enc(i.Detail || '') + '"' + (i.Provided ? '' : ' style="display:none"') + '></label>'));
            if (!g.Interventions || !g.Interventions.length) h.push('<div class="enp-empty">No library interventions on this goal.</div>');
            h.push('</div>');
            h.push('<div class="enp-section"><div class="enp-section-title">Projected outcomes <small>did it happen? the questions that follow write the outcome</small></div>');
            (g.Outcomes || []).forEach(o => {
                var qs = (o.Questions || []).slice().sort((a, b) => a.SortOrder - b.SortOrder), q1 = qs[0];
                h.push('<div class="enp-outcome" data-oid="' + o.OutcomeId + '"><div class="enp-outcome-row"><span class="enp-outcome-text">' + enc(o.Text) + (o.StatusRule === 'Required' ? '' : ' <small>(supporting)</small>') + '</span>');
                if (q1) h.push(yesno('enp-q1', q1.Answer == null ? null : q1.Answer === 'Yes', q1.QuestionId));
                h.push('</div><div class="enp-questions">');
                qs.slice(1).forEach(q => h.push(question(q, q1 ? q1.Answer : null)));
                h.push('</div></div>');
            });
            if (!g.Outcomes || !g.Outcomes.length) h.push('<div class="enp-empty">No projected outcomes in the library for this goal - set the status by hand.</div>');
            h.push('</div>');
            h.push('<div class="enp-section enp-result"><div class="enp-section-title">Section 3 for this goal <small>written from the answers</small></div>' +
                '<div class="enp-gen">' + (g.Status ? '<b>Goal ' + n + ' - ' + STATUS[g.Status] + '.</b> Outcome: ' + enc(g.OutcomeText || '') + '<br>' + enc(g.EffectivenessText || '') : '<i>Answer the outcome question(s) above.</i>') + '</div>' +
                '<div class="enp-override"><label>Status</label> <select class="form-control enp-status-sel"><option value="">automatic</option>' + Object.keys(STATUS).map(k => '<option value="' + k + '"' + (g.StatusOverride && g.Status === k ? ' selected' : '') + '>' + STATUS[k] + '</option>').join('') + '</select>' +
                '<input type="text" class="form-control enp-worker-note" placeholder="optional one line added to the outcome" value="' + enc(g.WorkerNote || '') + '"></div></div>');
            h.push('</div></div>');
            return h.join('');
        }

        function question(q: NoteQuestion, q1Answer: string): string {
            var show = visible(q, q1Answer) && q1Answer != null;
            var h = '<div class="enp-q' + (q.IsRequired ? ' required' : '') + '" data-qid="' + q.QuestionId + '" data-show="' + enc(q.ShowWhen || '') + '"' + (show ? '' : ' style="display:none"') + '><label>' + enc(q.Prompt) + (q.SendsToCrisisPlan ? ' <span class="enp-tag plan">to Crisis Plan</span>' : '') + '</label>';
            switch (q.AnswerType) {
                case 'YesNo': h += yesno('enp-ans', q.Answer == null ? null : q.Answer === 'Yes'); break;
                case 'Pick': h += (q.Options || []).map(o => '<button type="button" class="enp-chip enp-ans' + (q.Answer === o ? ' on' : '') + '" data-v="' + enc(o) + '">' + enc(o) + '</button>').join('') + '<input type="text" class="form-control enp-other enp-ans-text" placeholder="other..." value="' + ((q.Options || []).indexOf(q.Answer) < 0 ? enc(q.Answer || '') : '') + '">'; break;
                case 'Date': h += '<input type="date" class="form-control enp-ans-input" value="' + enc(q.Answer || '') + '">'; break;
                case 'Time': h += '<input type="time" class="form-control enp-ans-input" value="' + enc(q.Answer || '') + '">'; break;
                case 'Resource':
                    var list = resources[q.ResourceType] || [];
                    h += '<select class="form-control enp-ans-select"><option value="">-- pick from the directory (' + enc(q.ResourceType || 'resource') + ') --</option>' + list.map(r => '<option value="' + enc(r.Name) + '"' + (q.Answer === r.Name ? ' selected' : '') + '>' + enc(r.Name) + (r.Phone ? ' - ' + enc(r.Phone) : '') + '</option>').join('') + '</select>' +
                        '<input type="text" class="form-control enp-other enp-ans-text" placeholder="or type the name / address" value="' + (list.some(r => r.Name === q.Answer) ? '' : enc(q.Answer || '')) + '">';
                    break;
                default: h += '<input type="text" class="form-control enp-ans-input" value="' + enc(q.Answer || '') + '">';
            }
            return h + '</div>';
        }

        function yesno(cls: string, val: boolean, qid?: number): string {
            var q = qid != null ? ' data-qid="' + qid + '"' : '';
            return '<span class="enp-yn ' + cls + '"' + q + '><button type="button" class="enp-chip yes' + (val === true ? ' on' : '') + '" data-v="Yes">Yes</button><button type="button" class="enp-chip no' + (val === false ? ' on' : '') + '" data-v="No">No</button></span>';
        }
        function pick(cls: string, opts: string[], val: string): string {
            return '<span class="' + cls + '">' + opts.map(o => '<button type="button" class="enp-chip' + (val === o ? ' on' : '') + '" data-v="' + enc(o) + '">' + enc(o) + '</button>').join('') + '</span>';
        }

        function renderGate() {
            var g = data.Gate || { Ready: false, Missing: [] }, $g = $('#enp-gate');
            if (data.Locked) { $g.html('<div class="enp-gate-ok"><i class="fa fa-check-circle"></i> Signed ' + enc(data.NoteStatus) + '</div>'); return; }
            if (g.Ready) $g.html('<div class="enp-gate-ok"><i class="fa fa-check-circle"></i> All questions answered. Sections 1-4 are written; the note can be signed.</div>');
            else $g.html('<div class="enp-gate-warn"><i class="fa fa-lock"></i> Sign is locked - ' + g.Missing.length + ' item(s) to answer<ul>' + g.Missing.map(m => '<li>' + enc(m) + '</li>').join('') + '</ul></div>');
        }

        function mirror() {
            var d = data;
            $('#ctr-field01').val(d.Field01 || ''); $('#ctr-field02').val(d.Field02 || ''); $('#ctr-field03').val(d.Field03 || ''); $('#ctr-field04').val(d.Field04 || '');
            var $f0 = $('#ctr-field00');
            if (!$f0.find('option').filter((i, e) => $(e).text() === d.PhaseLabel).length) $f0.append($('<option></option>').text(d.PhaseLabel));
            $f0.val(d.PhaseLabel);
        }

        function bind() {
            $root.off('.enp');
            $root.on('click.enp', '.enp-chip', function (ev) {
                ev.preventDefault();
                var $b = $(this), $grp = $b.parent();
                $grp.find('.enp-chip').removeClass('on'); $b.addClass('on');
                if ($grp.hasClass('enp-q1')) {
                    // Q1 decides which follow-up questions show
                    var v = $b.data('v'), $out = $b.closest('.enp-outcome');
                    $out.find('.enp-q').each((i, e) => { var $e = $(e), sw = $e.data('show'); $e.toggle(!sw || (sw.split('=')[1] || '').toLowerCase() === String(v).toLowerCase()); });
                }
                if ($b.closest('.enp-q').length) $b.closest('.enp-q').find('.enp-other').val('');
                schedule();
            });
            $root.on('change.enp', '.enp-inter-cb', function () { $(this).closest('.enp-inter').find('.enp-inter-detail').toggle(this.checked); schedule(); });
            $root.on('change.enp', '.enp-ans-select', function () { $(this).closest('.enp-q').find('.enp-other').val(''); schedule(); });
            $root.on('input.enp change.enp', '.enp-ans-input, .enp-ans-text, .enp-inter-detail, .enp-worker-note, .enp-safety-text, .enp-status-sel', function () {
                if ($(this).hasClass('enp-ans-text') && $(this).val()) $(this).closest('.enp-q').find('.enp-chip').removeClass('on').end().find('.enp-ans-select').val('');
                schedule(1200);
            });
            $root.on('click.enp', '.enp-save-now', () => save());
        }

        function schedule(ms?: number) {
            seq++;
            $('#enp-savestate').text('Saving...');
            clearTimeout(saveTimer); saveTimer = setTimeout(() => save(), ms || 500);
        }

        function collect(): SaveNoteDataRequest {
            var req: SaveNoteDataRequest = { ActivityId: activityId, Goals: [] };
            $root.find('.enp-goal').each((i, e) => {
                var $g = $(e), sg: SaveGoal = { ClientGoalId: $g.data('goal'), Interventions: [], Answers: [] };
                $g.find('.enp-inter-cb').each((j, cb) => { var $cb = $(cb); sg.Interventions.push({ ClientGoalInterventionId: $cb.data('iid'), Provided: (<HTMLInputElement>cb).checked, Detail: $cb.closest('.enp-inter').find('.enp-inter-detail').val() as string }); });
                $g.find('.enp-outcome').each((j, oe) => {
                    var $o = $(oe), oid = $o.data('oid'), $q1 = $o.find('.enp-q1'), v1 = $q1.find('.enp-chip.on').data('v');
                    if ($q1.length && v1) sg.Answers.push({ OutcomeId: oid, QuestionId: $q1.data('qid'), Answer: v1 });
                    $o.find('.enp-q:visible').each((k, qe) => {
                        var $q = $(qe), v: string = $q.find('.enp-chip.on').data('v') || ($q.find('.enp-ans-select').val() as string) || ($q.find('.enp-ans-input').val() as string) || ($q.find('.enp-ans-text').val() as string);
                        if (v) sg.Answers.push({ OutcomeId: oid, QuestionId: $q.data('qid'), Answer: String(v) });
                    });
                });
                var ov = $g.find('.enp-status-sel').val() as string;
                sg.StatusOverride = !!ov; sg.Status = ov || null; sg.WorkerNote = $g.find('.enp-worker-note').val() as string;
                req.Goals.push(sg);
            });
            var sv = $root.find('.enp-safety .enp-chip.on').data('v');
            req.SafetyConcern = sv == null ? null : sv === 'Yes'; req.SafetyText = $root.find('.enp-safety-text').val() as string;
            var lta = $root.find('.enp-lta .enp-chip.on').data('v'); req.LongTermAdmission = lta == null ? null : lta === 'Yes';
            var cm = $root.find('.enp-contact .enp-chip.on').data('v'); if (cm) req.ContactMethod = cm;
            return req;
        }

        function save() {
            clearTimeout(saveTimer);
            if (inflight) { saveTimer = setTimeout(() => save(), 400); return; }
            var mySeq = seq; inflight = true;
            var focused = document.activeElement as HTMLElement, focusSel = focused && $(focused).closest('.enp-q, .enp-inter, .enp-override, .enp-safety').length ? pathOf(focused) : null;
            EncounterNotesService.SaveNoteData(collect(), d => {
                inflight = false;
                if (mySeq !== seq) { save(); return; }   // the worker changed something while this save was in flight - save again, do not clobber the screen
                data = d; render(); mirror();
                $('#enp-savestate').text('Saved ' + Q.formatDate(new Date(), 'HH:mm:ss') + ' - note sections updated.');
                if (focusSel) { var el = $root.find(focusSel)[0] as HTMLInputElement; if (el) { el.focus(); if (el.setSelectionRange && el.type === 'text') el.setSelectionRange(el.value.length, el.value.length); } }
            }, { onError: r => { inflight = false; $('#enp-savestate').text('Save failed'); Q.notifyError((r.Error && r.Error.Message) || 'Save failed'); } });
        }
        function pathOf(el: HTMLElement): string {
            var $e = $(el), cls = ($e.attr('class') || '').split(' ').filter(c => c.indexOf('enp-') === 0 && c !== 'form-control')[0];
            var $q = $e.closest('[data-qid]'), $g = $e.closest('.enp-goal'), $i = $e.closest('.enp-inter');
            var sel = ($g.length ? '.enp-goal[data-goal="' + $g.data('goal') + '"] ' : '') + ($q.length ? '[data-qid="' + $q.data('qid') + '"] ' : '') + ($i.length ? '.enp-inter:has(.enp-inter-cb[data-iid="' + $i.find('.enp-inter-cb').data('iid') + '"]) ' : '') + '.' + cls;
            return sel;
        }
    }
}
