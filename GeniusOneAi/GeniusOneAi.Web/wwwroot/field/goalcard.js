/* GeniusOneAi - shared goal card. One configuration for the phone (Field mode), the tablet and the desktop
   Worker Tonight dashboard: goal, target, interventions to tap, Met / Partially met / Not met, the follow-up
   questions keyed to that status, and the outcome + effectiveness the software writes from the answers.
   Plain ES2017, no build step. Hosts call GoalCard.render(...) and route clicks through GoalCard.handle(...). */
(function () {
    'use strict';
    var STATUS = { Met: ['Met', 'met'], PartiallyMet: ['Partially met', 'partial'], NotMet: ['Not met', 'notmet'], Carried: ['Carried forward', 'blue'] };
    var PHASE = { E1: 'Encounter 1 - First Responder', E2: 'Encounter 2 - Needs Assessment', E3: 'Encounter 3 - Act on Needs', E4: 'Encounter 4 - Confirm and Link', E5: 'Encounter 5 - Pre-Discharge', FU: 'Post-Discharge Follow-up', Closed: 'Closed' };

    function enc(s) { return s == null ? '' : String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    function need(k) { return k ? k.replace(/_/g, ' ') : ''; }
    function sortedQ(o) { return (o.Questions || []).slice().sort(function (a, b) { return a.SortOrder - b.SortOrder; }); }
    function visible(q, a1) { if (!q.ShowWhen) return true; var p = q.ShowWhen.split('='); return p.length === 2 && (p[1] || '').toLowerCase() === (a1 || '').toLowerCase(); }
    function findQ(g, oi, qid) { var o = g.Outcomes[oi]; if (!o) return null; for (var i = 0; i < o.Questions.length; i++) if (o.Questions[i].QuestionId === qid) return o.Questions[i]; return null; }

    /* The worker's explicit call on the goal. Met = every projected outcome happened; Not met = none did;
       Partially met = the worker says which. Status is stored as an override so the note keeps exactly what was tapped. */
    function setStatus(g, status) {
        g.StatusOverride = true; g.Status = status;
        (g.Outcomes || []).forEach(function (o) {
            var q1 = sortedQ(o)[0]; if (!q1) return;
            if (status === 'Met') q1.Answer = 'Yes';
            else if (status === 'NotMet') q1.Answer = 'No';
            else if (status === 'PartiallyMet' && q1.Answer == null) q1.Answer = null;
        });
    }

    function question(q, key, ctx) {
        var h = '<div class="qq"><label>' + enc(q.Prompt) + (q.IsRequired ? ' *' : '') + (q.SendsToCrisisPlan ? '<span class="plan">to Crisis Plan</span>' : '') + '</label>';
        switch (q.AnswerType) {
            case 'YesNo': h += '<div class="yn"><button type="button" class="btn yes' + (q.Answer === 'Yes' ? ' on' : '') + '" data-act="ans" data-arg="' + key + '|Yes">Yes</button><button type="button" class="btn no' + (q.Answer === 'No' ? ' on' : '') + '" data-act="ans" data-arg="' + key + '|No">No</button></div>'; break;
            case 'Pick': h += '<div class="chips">' + (q.Options || []).map(function (o) { return '<button type="button" class="chip' + (q.Answer === o ? ' on' : '') + '" data-act="ans" data-arg="' + key + '|' + enc(o) + '">' + enc(o) + '</button>'; }).join('') + '</div><input class="inp" style="margin-top:8px" data-act-input="ans" data-arg="' + key + '" placeholder="other..." value="' + ((q.Options || []).indexOf(q.Answer) < 0 ? enc(q.Answer || '') : '') + '">'; break;
            case 'Date': h += '<input class="inp" type="date" data-act-input="ans" data-arg="' + key + '" value="' + enc(q.Answer || '') + '">'; break;
            case 'Time': h += '<input class="inp" type="time" data-act-input="ans" data-arg="' + key + '" value="' + enc(q.Answer || '') + '">'; break;
            case 'Resource':
                var list = ((ctx && ctx.resources) || {})[q.ResourceType] || [];
                h += '<select class="inp" data-act-input="ans" data-arg="' + key + '"><option value="">-- pick from the directory (' + enc(q.ResourceType || 'resource') + ') --</option>' + list.map(function (r) { return '<option value="' + enc(r.Name) + '"' + (q.Answer === r.Name ? ' selected' : '') + '>' + enc(r.Name) + (r.Phone ? ' - ' + enc(r.Phone) : '') + '</option>'; }).join('') + '</select>' +
                    '<input class="inp" style="margin-top:8px" data-act-input="ans" data-arg="' + key + '" placeholder="or type the name / address" value="' + (list.some(function (r) { return r.Name === q.Answer; }) ? '' : enc(q.Answer || '')) + '">'; break;
            default: h += '<input class="inp" data-act-input="ans" data-arg="' + key + '" value="' + enc(q.Answer || '') + '">';
        }
        return h + '</div>';
    }

    /* Editable card for a goal on an open note. g = NoteData.Goals[gi]. ctx = { resources, phaseLabel, locked } */
    function render(g, gi, ctx) {
        ctx = ctx || {};
        var h = [], st = g.StatusOverride ? g.Status : (g.Status || null), locked = !!ctx.locked;
        h.push('<div class="gc' + (st ? ' st-' + STATUS[st][1] : '') + '" data-goal="' + gi + '">');
        h.push('<div class="gc-head"><span class="goal-code">' + enc(g.Code) + '</span>' + (g.NeedKey ? '<span class="gc-need">' + enc(need(g.NeedKey)) + '</span>' : '') + (g.IsProtocol ? '<span class="tag">PROTOCOL</span>' : '') + (g.IsCarried ? '<span class="tag blue">CARRIED</span>' : '') + (ctx.phaseLabel ? '<span class="gc-phase">' + enc(ctx.phaseLabel) + '</span>' : '') + '</div>');
        h.push('<div class="gc-goal">' + enc(g.Description) + '</div>');
        if (g.EffectivenessMeasure) h.push('<div class="gc-target"><b>Target</b> ' + enc(g.EffectivenessMeasure) + '</div>');
        h.push('<div class="gc-cols"><div class="gc-col">');
        h.push('<div class="lbl">Interventions used - tap all that apply</div><div class="gc-inters">');
        (g.Interventions || []).forEach(function (it, ii) {
            h.push('<div class="inter' + (it.Provided ? ' on' : '') + '"' + (locked ? '' : ' data-act="inter" data-arg="' + gi + '|' + ii + '"') + '><div class="cb">' + (it.Provided ? '&#10003;' : '') + '</div><div class="t">' + enc(it.Desc) + (it.Provided && !locked ? '<div class="detail"><input class="inp" data-act-input="inter-detail" data-arg="' + gi + '|' + ii + '" placeholder="who / where / amount / reference" value="' + enc(it.Detail || '') + '"></div>' : it.Detail ? '<div class="detail sub">' + enc(it.Detail) + '</div>' : '') + '</div></div>');
        });
        if (!(g.Interventions || []).length) h.push('<div class="sub">No library interventions for this goal.</div>');
        h.push('</div></div><div class="gc-col">');
        h.push('<div class="lbl">Was the target reached?</div>');
        h.push('<div class="gc-chips">' + ['Met', 'PartiallyMet', 'NotMet'].map(function (k) { return '<button type="button" class="schip ' + STATUS[k][1] + (st === k ? ' on' : '') + '"' + (locked ? ' disabled' : ' data-act="gstatus" data-arg="' + gi + '|' + k + '"') + '>' + STATUS[k][0] + '</button>'; }).join('') + '</div>');
        if (st === 'Met' || st === 'NotMet' || st === 'PartiallyMet') {
            (g.Outcomes || []).forEach(function (o, oi) {
                var qs = sortedQ(o), q1 = qs[0], a1 = q1 ? q1.Answer : null;
                var fu = a1 == null ? [] : qs.slice(1).filter(function (q) { return visible(q, a1); });
                if (st !== 'PartiallyMet' && fu.length === 0) return;
                h.push('<div class="outcome"><div class="ot">' + enc(o.Text) + (o.StatusRule === 'Required' ? '' : ' <small>(supporting)</small>') + '</div>');
                if (st === 'PartiallyMet' && q1) h.push('<div class="yn"><button type="button" class="btn yes' + (a1 === 'Yes' ? ' on' : '') + '"' + (locked ? ' disabled' : ' data-act="ans" data-arg="' + gi + '|' + oi + '|' + q1.QuestionId + '|Yes"') + '>Happened</button><button type="button" class="btn no' + (a1 === 'No' ? ' on' : '') + '"' + (locked ? ' disabled' : ' data-act="ans" data-arg="' + gi + '|' + oi + '|' + q1.QuestionId + '|No"') + '>Did not</button></div>');
                fu.forEach(function (q) { h.push(locked ? '<div class="qq"><label>' + enc(q.Prompt) + '</label><div class="sub">' + enc(q.Answer || '-') + '</div></div>' : question(q, gi + '|' + oi + '|' + q.QuestionId, ctx)); });
                h.push('</div>');
            });
        } else if (!locked) h.push('<div class="gc-hint">Tap Met, Partially met or Not met. The follow-up questions for that answer appear here; the outcome and effectiveness write themselves.</div>');
        h.push('<div class="gc-result">' + (g.Status ? '<div><b>Outcome</b><br>' + enc(g.OutcomeText || STATUS[g.Status][0] + '.') + '</div>' + (g.EffectivenessText ? '<div><b>Effectiveness toward the acute problem</b><br>' + enc(g.EffectivenessText.replace(/^Effectiveness toward the acute problem:\s*/i, '')) + '</div>' : '') : '<i>Outcome and effectiveness appear here once the goal is marked and the follow-up questions are answered.</i>') + '</div>');
        if (!locked) h.push('<div class="field"><label>One line to add (optional)</label><input class="inp" data-act-input="worker-note" data-arg="' + gi + '" value="' + enc(g.WorkerNote || '') + '"></div>');
        h.push('</div></div></div>');
        return h.join('');
    }

    /* Read-only preview of a goal before the encounter starts (TonightGoal from Services/Field/Tonight). */
    function preview(tg, phaseLabel) {
        return '<div class="gc preview"><div class="gc-head"><span class="goal-code">' + enc(tg.Code) + '</span>' + (tg.NeedKey ? '<span class="gc-need">' + enc(need(tg.NeedKey)) + '</span>' : '') + (tg.IsProtocol ? '<span class="tag">PROTOCOL</span>' : '') + (phaseLabel ? '<span class="gc-phase">' + enc(phaseLabel) + '</span>' : '') + '</div>' +
            '<div class="gc-goal">' + enc(tg.Description) + '</div>' + (tg.Target ? '<div class="gc-target"><b>Target</b> ' + enc(tg.Target) + '</div>' : '') +
            '<div class="gc-cols"><div class="gc-col"><div class="lbl">Interventions to reach it</div><div class="gc-inters">' + (tg.Interventions || []).map(function (t) { return '<div class="inter"><div class="cb"></div><div class="t">' + enc(t) + '</div></div>'; }).join('') + '</div></div>' +
            '<div class="gc-col"><div class="lbl">Projected outcome' + ((tg.Outcomes || []).length === 1 ? '' : 's') + '</div>' + (tg.Outcomes || []).map(function (t) { return '<div class="outcome"><div class="ot">' + enc(t) + '</div></div>'; }).join('') + '</div></div></div>';
    }

    /* Pull typed inputs on screen into the model. */
    function applyInput(el, goals) {
        var kind = el.getAttribute('data-act-input'), arg = (el.getAttribute('data-arg') || '').split('|'), g = goals[+arg[0]];
        if (!g) return;
        if (kind === 'inter-detail') g.Interventions[+arg[1]].Detail = el.value;
        else if (kind === 'status') { g.StatusOverride = !!el.value; if (el.value) g.Status = el.value; }
        else if (kind === 'worker-note') g.WorkerNote = el.value;
        else if (kind === 'ans') { var q = findQ(g, +arg[1], +arg[2]); if (q && (el.value || el.tagName !== 'INPUT' || !q.Options)) q.Answer = el.value || (el.tagName === 'SELECT' ? q.Answer : null); }
    }

    /* SaveNoteData request from a NoteData model. Always sends every goal with every answer (the server replaces answers per goal). */
    function collect(d, root) {
        var req = { ActivityId: d.ActivityId, Goals: [], SafetyConcern: d.SafetyConcern, SafetyText: d.SafetyText, ContactMethod: d.ContactMethod, LongTermAdmission: d.LongTermAdmission };
        if (root) { var st = root.querySelector('#safety-text'); if (st) req.SafetyText = d.SafetyText = st.value; root.querySelectorAll('[data-act-input]').forEach(function (el) { applyInput(el, d.Goals || []); }); }
        (d.Goals || []).forEach(function (g) {
            var sg = { ClientGoalId: g.ClientGoalId, Interventions: [], Answers: [], StatusOverride: !!g.StatusOverride, Status: g.StatusOverride ? g.Status : null, WorkerNote: g.WorkerNote };
            (g.Interventions || []).forEach(function (it) { sg.Interventions.push({ ClientGoalInterventionId: it.ClientGoalInterventionId, Provided: !!it.Provided, Detail: it.Detail || null }); });
            (g.Outcomes || []).forEach(function (o) {
                var qs = sortedQ(o), q1 = qs[0], a1 = q1 ? q1.Answer : null;
                if (q1 && a1) sg.Answers.push({ OutcomeId: o.OutcomeId, QuestionId: q1.QuestionId, Answer: a1 });
                if (a1 != null) qs.slice(1).forEach(function (q) { if (visible(q, a1) && q.Answer) sg.Answers.push({ OutcomeId: o.OutcomeId, QuestionId: q.QuestionId, Answer: String(q.Answer) }); });
            });
            req.Goals.push(sg);
        });
        return req;
    }

    /* Click handling shared by hosts. Returns 'render' | 'save' | null. 'save' = the host should persist (status/answer changed) then re-render. */
    function handle(act, arg, ev, goals, root) {
        var p = (arg || '').split('|'), g = goals[+p[0]];
        if (!g) return null;
        if (root) root.querySelectorAll('[data-act-input]').forEach(function (el) { applyInput(el, goals); });
        if (act === 'inter') { if (ev && ev.target.closest('input')) return null; var it = g.Interventions[+p[1]]; it.Provided = !it.Provided; return 'render'; }
        if (act === 'gstatus') { setStatus(g, p[1]); return 'save'; }
        if (act === 'ans') { var q = findQ(g, +p[1], +p[2]); if (!q) return null; var v = p.slice(3).join('|'); q.Answer = q.Answer === v && q.AnswerType === 'Pick' ? null : v; return 'save'; }
        return null;
    }

    window.GoalCard = { STATUS: STATUS, PHASE: PHASE, render: render, preview: preview, question: question, visible: visible, findQ: findQ, setStatus: setStatus, applyInput: applyInput, collect: collect, handle: handle, enc: enc };
})();
