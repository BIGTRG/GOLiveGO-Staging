/* GeniusOneAi - Worker Tonight dashboard (desktop and tablet). The one client the worker is assigned to, the goals
   for this encounter with target + interventions, Met / Partially met / Not met per goal, follow-up questions,
   the outcome and effectiveness the software writes, and Done = note built and signed.
   Same data and the same goal card (goalcard.js) as the phone, so every device shows one configuration. */
(function () {
    'use strict';
    var GC = window.GoalCard, enc = GC.enc, PHASE = GC.PHASE, STATUS = GC.STATUS;
    var root = document.getElementById('tonight');
    var S = { t: null, resources: null, busy: false, saveTimer: null };

    function cookie(n) { var m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)')); return m ? decodeURIComponent(m[1]) : ''; }
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function fmtDT(s) { if (!s) return ''; var d = new Date(s); if (isNaN(d)) return String(s); var h = d.getHours(), ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12; return pad(d.getMonth() + 1) + '/' + pad(d.getDate()) + ' ' + h + ':' + pad(d.getMinutes()) + ' ' + ap; }
    function toast(msg, bad) { var t = document.createElement('div'); t.id = 'tonight-toast'; t.className = bad ? 'bad' : ''; t.textContent = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, bad ? 6000 : 2500); }
    function api(url, body) {
        return fetch(url, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': cookie('CSRF-TOKEN') }, body: JSON.stringify(body || {}) })
            .then(function (r) { if (r.status === 401 || r.status === 403) { location.href = '/Account/Login?returnUrl=' + encodeURIComponent(location.pathname); throw new Error('Please sign in again.'); } return r.json(); })
            .then(function (j) { if (j && j.Error) throw new Error(j.Error.Message || 'Request failed'); return j; });
    }
    function busy(p) { S.busy = true; return p.then(function (r) { S.busy = false; return r; }, function (e) { S.busy = false; toast(e.message || String(e), true); throw e; }); }
    function btn(label, act, cls, arg, disabled) { return '<button type="button" class="btn ' + (cls || '') + '" data-act="' + act + '"' + (arg != null ? ' data-arg="' + enc(arg) + '"' : '') + (disabled ? ' disabled' : '') + '>' + label + '</button>'; }
    function modal(title, text, buttons) {
        var m = document.createElement('div'); m.className = 'tn-modal-bg'; m.innerHTML = '<div class="tn-modal"><div class="q">' + enc(title) + '</div><div class="txt">' + text + '</div><div class="acts">' + buttons.join('') + '</div></div>';
        m.addEventListener('click', function (e) { if (e.target === m || e.target.closest('[data-act=modal-close]')) m.remove(); });
        root.appendChild(m); return m;
    }

    // ------------------------------------------------------------------ load
    function load() {
        var loads = [api('/Services/Field/Tonight')];
        if (!S.resources) loads.push(api('/Services/AgencyAdministration/ResourceDirectory/List', { Take: 500 }).catch(function () { return { Entities: [] }; }));
        return Promise.all(loads).then(function (rs) {
            S.t = rs[0];
            if (rs[1]) { S.resources = {}; (rs[1].Entities || []).forEach(function (x) { (S.resources[x.ResourceType || 'Other'] = S.resources[x.ResourceType || 'Other'] || []).push(x); }); }
            render();
        }).catch(function (e) { root.innerHTML = '<div class="empty">' + enc(e.message) + '</div>'; });
    }

    // ------------------------------------------------------------------ render
    function render() {
        var t = S.t, e = t.Assignment, h = [];
        if (!e) {
            h.push('<div class="hero"><div><div class="kicker">Tonight</div><h2>No client assigned to you right now</h2><div class="m">When a clinician signs a crisis assessment and assigns you, the goals appear here instantly. You can also take an open episode from the list below.</div></div></div>');
            h.push(queue(t.Queue));
            root.innerHTML = h.join(''); return;
        }
        var d = t.Note, goals = d ? (d.Goals || []) : (t.Goals || []), phaseLabel = d ? (d.PhaseLabel || PHASE[d.Phase]) : (PHASE[e.Phase] || e.Phase);
        var done = goals.filter(function (g) { return g.Status && g.Status !== 'Carried'; }).length, met = goals.filter(function (g) { return g.Status === 'Met'; }).length;
        var inters = goals.reduce(function (n, g) { return n + (g.Interventions || []).length; }, 0);
        h.push('<div class="hero"><div><div class="kicker">Your client tonight</div><h2>' + enc(e.ClientName) + ' - ' + enc(phaseLabel) + (d && d.FollowUpDay ? ' - Day ' + d.FollowUpDay : '') + '</h2>' +
            '<div class="m">' + (e.AssessmentSignedAt ? 'Assessment signed ' + fmtDT(e.AssessmentSignedAt) + (e.ClinicianName ? ' by ' + enc(e.ClinicianName) : '') + ' &middot; ' : '') + (e.ConsentOk ? 'Consent on file' : '<span style="color:var(--bad);font-weight:700">Consent needed</span>') + (e.Needs ? ' &middot; Needs: ' + enc(e.Needs) : '') + '</div>' +
            (e.PresentingTrigger ? '<div class="m">' + enc(e.PresentingTrigger) + '</div>' : '') +
            '<div class="m" style="margin-top:8px"><a href="/ClientManager/Clients?ClientId=' + e.ClientId + '">Open the client record</a>' + (e.EpisodeId ? ' &middot; Episode #' + e.EpisodeId : '') + '</div></div>' +
            '<div class="kpi"><div><b>' + goals.length + '</b><small>goal' + (goals.length === 1 ? '' : 's') + ' tonight</small></div><div><b>' + inters + '</b><small>interventions</small></div><div><b>' + met + ' / ' + goals.length + '</b><small>targets met</small></div></div></div>');
        if (!e.ConsentOk && !e.Closed) h.push('<div class="banner bad">Consent is not on file for this episode. Encounter 1 cannot be signed until consent is recorded. <a href="/Field#/consent/' + e.EpisodeId + '">Record consent</a> (in person, emailed link or verbal).</div>');
        if (d) {
            if (d.Locked) h.push('<div class="banner ok">This note is signed (' + enc(d.NoteStatus || '') + ') and waiting on the team lead. The next encounter opens after approval.</div>');
            goals.forEach(function (g, gi) { h.push(GC.render(g, gi, { resources: S.resources, phaseLabel: phaseLabel, locked: !!d.Locked })); });
            if (!goals.length) h.push('<div class="empty">No goals on this note. Add goals from the library on the client record (Episodes tab).</div>');
            h.push(safety(d));
            var gate = d.Gate || {};
            if (!d.Locked) h.push('<div class="foot">' + (gate.Ready ? '<span class="sub" style="color:var(--ok);font-weight:700">Every goal is marked and answered. The note is written - sign to finish.</span>' : '<span class="sub">' + (gate.Missing || []).length + ' item(s) still to answer before Done: ' + enc((gate.Missing || []).slice(0, 3).join('; ')) + ((gate.Missing || []).length > 3 ? '...' : '') + '</span>') +
                btn('Save and continue later', 'save', '') + btn('Preview the note', 'preview', '') + btn('Done - sign the note', 'sign', 'primary big', null, !gate.Ready) + '</div>');
            else h.push('<div class="foot">' + btn('Read the note', 'preview', '') + '</div>');
        } else {
            if (e.WaitingApproval) h.push('<div class="banner warn">The last note is submitted and waiting on the team lead. ' + enc(e.NextAction || '') + '</div>');
            else if (goals.length) {
                h.push('<div class="banner ok">' + goals.length + ' goal' + (goals.length === 1 ? '' : 's') + ' ready for ' + enc(phaseLabel) + '. Press Start when you are with the client - the interventions and outcome questions become live.</div>');
                goals.forEach(function (g) { h.push(GC.preview(g, phaseLabel)); });
                h.push('<div class="foot">' + (e.Phase === 'FU' && e.NextFollowUpId ? btn('Start Day ' + e.NextFollowUpDay + ' call', 'start', 'primary big', e.NextFollowUpId) : btn('Start ' + enc(phaseLabel.split(' - ')[0]), 'start', 'primary big')) + '</div>');
            } else h.push('<div class="empty">No goals for this encounter yet. ' + enc(e.NextAction || '') + '</div>');
        }
        h.push(queue(t.Queue));
        root.innerHTML = h.join('');
    }
    function safety(d) {
        var sc = d.SafetyConcern, lock = d.Locked;
        return '<div class="safety"><div class="lbl" style="margin-top:0">Safety and contact</div><div style="font-weight:700">Any safety concern at the end of this contact?</div>' +
            '<div class="yn" style="max-width:320px"><button type="button" class="btn yes' + (sc === true ? ' on' : '') + '"' + (lock ? ' disabled' : ' data-act="safety" data-arg="Yes"') + '>Yes</button><button type="button" class="btn no' + (sc === false ? ' on' : '') + '"' + (lock ? ' disabled' : ' data-act="safety" data-arg="No"') + '>No</button></div>' +
            (sc === true ? '<div class="field" style="margin-top:10px"><label>Describe the concern and what was done *</label><textarea class="inp" id="safety-text"' + (lock ? ' readonly' : '') + '>' + enc(d.SafetyText || '') + '</textarea></div>' : '') +
            '<div class="lbl">Contact</div><div class="chips">' + ['Face to Face', 'Phone', 'Video'].map(function (x) { return '<button type="button" class="chip' + ((d.ContactMethod || 'Face to Face') === x ? ' on' : '') + '"' + (lock ? ' disabled' : ' data-act="contact" data-arg="' + x + '"') + '>' + x + '</button>'; }).join('') + '</div>' +
            (d.Phase === 'E5' ? '<div class="lbl">Admitted to a long-term service at discharge?</div><div class="sub">Yes = Day 7 / 14 / 21 follow-up calls are not required.</div><div class="yn" style="max-width:320px"><button type="button" class="btn yes' + (d.LongTermAdmission === true ? ' on' : '') + '" data-act="lta" data-arg="Yes">Yes</button><button type="button" class="btn no' + (d.LongTermAdmission === false ? ' on' : '') + '" data-act="lta" data-arg="No">No</button></div>' : '') +
            (d.CrisisPlan && d.CrisisPlan.length ? '<div class="lbl">Crisis plan so far (written from your answers)</div><div class="sec">' + d.CrisisPlan.map(function (p) { return '[' + enc(p.EntryType) + '] ' + enc(p.EntryText); }).join('\n') + '</div>' : '') + '</div>';
    }
    function queue(q) {
        q = q || [];
        if (!q.length) return '';
        return '<div class="queue"><div class="lbl">Other open episodes (' + q.length + ')</div>' + q.map(function (e) {
            return '<div class="qrow"><div><div class="n">' + enc(e.ClientName) + ' <span class="m">' + enc(e.RecordNumber || '') + '</span></div><div class="m">' + enc(PHASE[e.Phase] || e.Phase) + ' &middot; ' + (e.AssignedWorkerName ? 'assigned to ' + enc(e.AssignedWorkerName) : 'unassigned') + (e.WaitingApproval ? ' &middot; awaiting team lead' : e.OpenActivityId ? ' &middot; note open' : '') + '</div></div>' +
                (e.ConsentOk ? '<span class="tag ok">Consent</span>' : '<span class="tag bad">No consent</span>') + btn(e.AssignedWorkerName ? 'Take over' : 'Take this client', 'take', 'small', e.EpisodeId) + '</div>';
        }).join('') + '</div>';
    }
    function preview(d) {
        modal('The note as it will read - ' + (d.PhaseLabel || ''), '<div class="sections"><div class="sec"><b>Section 1 - Presenting problem and purpose</b>\n' + enc(d.Field01 || '') + '</div><div class="sec"><b>Section 2 - Goals and interventions</b>\n' + enc(d.Field02 || '') + '</div><div class="sec"><b>Section 3 - Outcome and effectiveness</b>\n' + enc(d.Field03 || '') + '</div><div class="sec"><b>Section 4 - Plan</b>\n' + enc(d.Field04 || '') + '</div></div>' + (d.Summary ? '<div class="sec"><b>Summary</b>\n' + enc(d.Summary) + '</div>' : '') + (d.DischargeSummary ? '<div class="sec"><b>Pre-discharge summary</b>\n' + enc(d.DischargeSummary) + '</div>' : ''), [btn('Close', 'modal-close', '')]);
    }

    // ------------------------------------------------------------------ actions
    function save() { var d = S.t.Note; return api('/Services/CrisisEpisodes/EncounterNotes/SaveNoteData', GC.collect(d, root)).then(function (nd) { S.t.Note = nd; return nd; }); }
    function saveRender() { return busy(save()).then(function () { render(); }).catch(function () { }); }
    function start(followUpId) {
        var e = S.t.Assignment, now = new Date();
        busy(api('/Services/CrisisEpisodes/EncounterNotes/StartEncounter', { EpisodeId: e.EpisodeId, FollowUpId: followUpId || null, ServiceDate: now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()), FromTime: pad(now.getHours()) + ':' + pad(now.getMinutes()), Location: followUpId ? 'Phone' : 'Community', ContactMethod: followUpId ? 'Phone' : 'Face to Face', IsBillable: true }))
            .then(function () { toast('Encounter started - the goals are live'); return load(); }).catch(function () { });
    }
    function sign() {
        var d = S.t.Note;
        var m = modal('Sign and submit this note?', 'Legal notification: you are about to authorize an electronic signature. Based on the integrity and validity of electronic specifications, you are responsible for keeping your signature information confidential. The note goes to the team lead for approval.', [btn('Cancel', 'modal-close', ''), btn('Sign', 'sign-confirm', 'primary')]);
        m.querySelector('[data-act=sign-confirm]').addEventListener('click', function () {
            m.remove();
            busy(save().then(function (d2) {
                if (!d2.Gate || !d2.Gate.Ready) throw new Error('The note is not ready: ' + (d2.Gate && d2.Gate.Missing || []).join('; '));
                return api('/Services/ProgramNoteManager/ProgramNotes/GetSignageData', {}).then(function (sig) {
                    var guid = sig.signatureGuid || sig.SignatureGuid, img = sig.signatureImage || sig.SignatureImage, txt = sig.signatureText || sig.SignatureText, ok = sig.signatureVerified != null ? sig.signatureVerified : sig.SignatureVerified;
                    if (!guid || !img || !txt || !ok) throw new Error('No verified e-signature on your account. Create and verify one under My Profile > eSignature, then sign.');
                    return api('/Services/ProgramNoteManager/ProgramNotes/Update', { EntityId: d2.ProgramNoteId, Entity: { ProgramNoteId: d2.ProgramNoteId, Field00: d2.PhaseLabel, Field01: d2.Field01, Field02: d2.Field02, Field03: d2.Field03, Field04: d2.Field04, SignatureGuid: guid, SignatureImage: img, ESignaturePlainText: txt, NoteUpdateStatus: 'SignAction' } });
                });
            })).then(function () { toast('Note signed and submitted to the team lead'); return load(); }).catch(function () { });
        });
    }

    root.addEventListener('click', function (ev) {
        var el = ev.target.closest('[data-act]'); if (!el || el.disabled) return;
        var act = el.getAttribute('data-act'), arg = el.getAttribute('data-arg'), d = S.t && S.t.Note;
        switch (act) {
            case 'inter': case 'ans': case 'gstatus':
                if (!d) break;
                var res = GC.handle(act, arg, ev, d.Goals || [], root);
                if (res === 'save') saveRender();
                else if (res === 'render') { GC.collect(d, root); render(); if (act === 'inter') { var inp = root.querySelector('[data-act-input=inter-detail][data-arg="' + arg + '"]'); if (inp) inp.focus(); } scheduleSave(); }
                break;
            case 'safety': GC.collect(d, root); d.SafetyConcern = arg === 'Yes'; render(); scheduleSave(); break;
            case 'contact': GC.collect(d, root); d.ContactMethod = arg; render(); scheduleSave(); break;
            case 'lta': GC.collect(d, root); d.LongTermAdmission = arg === 'Yes'; render(); scheduleSave(); break;
            case 'save': saveRender().then(function () { toast('Saved'); }); break;
            case 'preview': if (d) busy(save()).then(function (nd) { render(); preview(nd); }).catch(function () { }); break;
            case 'sign': sign(); break;
            case 'start': start(arg ? +arg : null); break;
            case 'take': busy(api('/Services/Field/Assign', { EpisodeId: +arg })).then(function (t) { S.t = t; toast('Assigned to you'); render(); }).catch(function () { }); break;
        }
    });
    function scheduleSave() { clearTimeout(S.saveTimer); S.saveTimer = setTimeout(function () { if (S.t && S.t.Note && !S.t.Note.Locked) save().then(render).catch(function () { }); }, 900); }
    root.addEventListener('change', function (ev) { var el = ev.target.closest('[data-act-input]'); if (el && S.t && S.t.Note) { GC.applyInput(el, S.t.Note.Goals || []); scheduleSave(); } });
    root.addEventListener('input', function (ev) { if (ev.target.id === 'safety-text' && S.t && S.t.Note) { S.t.Note.SafetyText = ev.target.value; scheduleSave(); } });

    root.innerHTML = '<div class="empty">Loading your client...</div>';
    load();
    // Tonight is live: a signed assessment or a new assignment shows up without a reload.
    setInterval(function () { if (!S.busy && S.t && !(S.t.Note && !S.t.Note.Locked)) load(); }, 30000);
})();
