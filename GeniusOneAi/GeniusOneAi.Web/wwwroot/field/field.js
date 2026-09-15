/* GeniusOneAi Field mode - phone-first flow for mobile crisis workers (Direction A, Clinical Clean).
   Plain ES2017, no build step. Talks to the existing Serenity services with the same login cookie.
   Routes (hash): #/login  #/home  #/search  #/client/{id}  #/assess/{clientId}/{step}  #/consent/{episodeId}
                  #/start/{episodeId}[/{followUpId}]  #/note/{activityId}/{step}  #/done/{kind}/{id} */
(function () {
    'use strict';
    var O = window.FIELD_OPTIONS, BOOT = window.FIELD_BOOT || {};
    var app = document.getElementById('app');
    var S = { user: BOOT.user, home: null, client: null, assess: null, note: null, resources: null, busy: false };
    var PHASE = { E1: 'Encounter 1 - First Responder', E2: 'Encounter 2 - Needs Assessment', E3: 'Encounter 3 - Act on Needs', E4: 'Encounter 4 - Confirm and Link', E5: 'Encounter 5 - Pre-Discharge', FU: 'Post-Discharge Follow-up', Closed: 'Closed' };
    var STATUS = { Met: ['Met', 'met'], PartiallyMet: ['Partially met', 'partial'], NotMet: ['Not met', 'notmet'], Carried: ['Carried forward', 'blue'] };

    // ------------------------------------------------------------------ utilities
    function enc(s) { return s == null ? '' : String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    function cookie(n) { var m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)')); return m ? decodeURIComponent(m[1]) : ''; }
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function today() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
    function nowTime() { var d = new Date(); return pad(d.getHours()) + ':' + pad(d.getMinutes()); }
    function fmtDate(s) { if (!s) return ''; var d = new Date(s); if (isNaN(d)) return String(s).slice(0, 10); return pad(d.getMonth() + 1) + '/' + pad(d.getDate()) + '/' + d.getFullYear(); }
    function age(dob) { if (!dob) return ''; var b = new Date(dob), n = new Date(); var a = n.getFullYear() - b.getFullYear(); if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) a--; return a + ' yrs'; }
    function split(v) { return v ? String(v).split('|').filter(Boolean) : []; }
    function toast(msg, bad) { var t = document.createElement('div'); t.className = 'toast' + (bad ? ' bad' : ''); t.textContent = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, bad ? 5000 : 2500); }
    function go(hash) { location.hash = hash; }

    function api(url, body) {
        return fetch(url, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': cookie('CSRF-TOKEN') }, body: JSON.stringify(body || {}) })
            .then(function (r) { return r.text().then(function (t) { var j = null; try { j = t ? JSON.parse(t) : {}; } catch (e) { j = { Error: { Message: r.status === 401 || r.status === 403 ? 'NotLoggedIn' : 'Server returned ' + r.status } }; } if (r.status === 401 || r.status === 403) j = { Error: { Code: 'NotLoggedIn', Message: 'Please sign in again.' } }; return j; }); })
            .then(function (j) {
                if (j && j.Error) {
                    if (j.Error.Code === 'NotLoggedIn' || /not logged in|NotLoggedIn/i.test(j.Error.Message || '')) { S.user = null; go('#/login'); }
                    var e = new Error(j.Error.Message || 'Request failed'); e.code = j.Error.Code; throw e;
                }
                return j;
            });
    }
    function busy(p) { S.busy = true; render(); return p.then(function (r) { S.busy = false; return r; }, function (e) { S.busy = false; toast(e.message || String(e), true); render(); throw e; }); }

    // ------------------------------------------------------------------ layout
    function top(kicker, title, prog, back) {
        var bars = prog ? '<div class="prog">' + prog.map(function (on) { return '<i class="' + (on ? 'on' : '') + '"></i>'; }).join('') + '</div>' : '';
        return '<div class="fd-top"><div class="bar"><span>' + (back ? '<a href="' + enc(back) + '">&#8249; Back</a>' : 'GeniusOneAi Field') + '</span><span>' + (S.user ? enc(S.user.name) + ' &middot; <a href="#/home">Home</a>' : '') + '</span></div>' +
            (kicker ? '<div class="kicker">' + enc(kicker) + '</div>' : '') + (title ? '<div class="title">' + title + '</div>' : '') + bars + '</div>';
    }
    function foot(buttons) { return '<div class="fd-foot">' + buttons.join('') + '</div>'; }
    function btn(label, act, cls, data, disabled) { return '<button type="button" class="btn ' + (cls || '') + '" data-act="' + act + '"' + (data ? ' data-arg="' + enc(data) + '"' : '') + (disabled ? ' disabled' : '') + '>' + label + '</button>'; }
    function page(html) { app.innerHTML = html + (S.busy ? '<div class="toast">Working...</div>' : ''); window.scrollTo(0, 0); }
    function modal(title, text, buttons) {
        var m = document.createElement('div'); m.className = 'modal-bg'; m.innerHTML = '<div class="modal"><div class="q">' + enc(title) + '</div><div class="txt">' + text + '</div><div class="acts">' + buttons.join('') + '</div></div>';
        m.addEventListener('click', function (e) { if (e.target === m) m.remove(); });
        document.body.appendChild(m); return m;
    }

    // ------------------------------------------------------------------ router
    function route() {
        var h = location.hash.replace(/^#\/?/, ''), p = h.split('/');
        if (!S.user && p[0] !== 'login') { go('#/login'); return; }
        switch (p[0]) {
            case 'login': return renderLogin();
            case 'search': return renderSearch();
            case 'client': return loadClient(+p[1]);
            case 'assess': return renderAssess(+p[1], p[2] || '0', p[3]);
            case 'consent': return loadConsent(+p[1]);
            case 'start': return renderStart(+p[1], p[2] ? +p[2] : null);
            case 'note': return renderNote(+p[1], p[2] || '0');
            case 'done': return renderDone(p[1], p[2]);
            default: return loadHome();
        }
    }
    window.addEventListener('hashchange', route);
    function render() { route(); }

    // ------------------------------------------------------------------ login
    function renderLogin(err) {
        page('<div class="fd-body login"><div class="brand"><div class="n">GeniusOneAi Field</div><div class="m">Mobile crisis - sign in with your GeniusOne account</div></div>' +
            '<div class="field" style="margin-top:28px"><label>Username</label><input class="inp" id="u" autocomplete="username" autocapitalize="none"></div>' +
            '<div class="field"><label>Password</label><input class="inp" id="p" type="password" autocomplete="current-password"></div>' +
            (err ? '<div class="err">' + enc(err) + '</div>' : '') +
            '<div class="spacer"></div>' + btn('Sign in', 'login', 'primary') + '<div class="sub center" style="margin-top:18px">Team leads and administrators: <a href="/">open the desktop</a></div></div>');
    }
    function doLogin() {
        var u = document.getElementById('u').value.trim(), p = document.getElementById('p').value;
        if (!u || !p) { renderLogin('Enter your username and password.'); return; }
        fetch('/Account/Login', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': cookie('CSRF-TOKEN') }, body: JSON.stringify({ Username: u, Password: p }) })
            .then(function (r) { return r.json().catch(function () { return r.ok ? {} : { Error: { Message: 'Sign-in failed (' + r.status + '). Reload the page and try again.' } }; }); })
            .then(function (j) { if (j && j.Error) { renderLogin(j.Error.Message || 'Sign-in failed.'); return; } location.replace('/Field#/home'); location.reload(); })
            .catch(function (e) { renderLogin(e.message || 'Network error.'); });
    }

    // ------------------------------------------------------------------ home
    function loadHome() {
        page(top('', 'Tonight'));
        api('/Services/Field/Home').then(function (r) { S.home = r; renderHome(); }).catch(function () { });
    }
    function episodeCard(e) {
        var action = '', tag = '';
        if (e.Closed) tag = '<span class="tag">Closed</span>';
        else if (e.OpenActivityId) { action = btn('Continue the note', 'go', 'primary small', '#/note/' + e.OpenActivityId + '/0'); tag = '<span class="tag blue">Note open</span>'; }
        else if (e.WaitingApproval) tag = '<span class="tag warn">Awaiting team lead</span>';
        else if (e.Phase === 'FU' && e.NextFollowUpId) action = btn('Start Day ' + e.NextFollowUpDay + ' call', 'go', 'primary small', '#/start/' + e.EpisodeId + '/' + e.NextFollowUpId);
        else if (e.Phase !== 'FU') action = btn('Start ' + (PHASE[e.Phase] || e.Phase).split(' - ')[0], 'go', 'primary small', '#/start/' + e.EpisodeId);
        var consent = e.Closed ? '' : (e.ConsentOk ? '<span class="tag ok">Consent on file</span>' : '<span class="tag bad">Consent needed</span>');
        return '<div class="card"><div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start"><div><div class="h"><a href="#/client/' + e.ClientId + '" style="color:inherit;text-decoration:none">' + enc(e.ClientName) + '</a></div><div class="m">' + enc(e.RecordNumber || '') + ' &middot; Episode #' + e.EpisodeId + ' &middot; ' + e.EncounterCount + ' signed</div></div><div>' + tag + '</div></div>' +
            '<div class="sub" style="margin-top:8px">' + enc(PHASE[e.Phase] || e.Phase) + '<br>' + enc(e.NextAction || '') + '</div>' +
            '<div style="display:flex;gap:8px;margin-top:10px;align-items:center;flex-wrap:wrap">' + consent + (!e.Closed && !e.ConsentOk ? btn('Consent', 'go', 'small', '#/consent/' + e.EpisodeId) : '') + action + '</div></div>';
    }
    function renderHome() {
        var r = S.home, open = r.Episodes.filter(function (e) { return !e.Closed; });
        page(top('', 'Tonight - ' + open.length + ' open episode' + (open.length === 1 ? '' : 's')) +
            '<div class="fd-body">' +
            '<div class="search"><input class="inp" id="q" placeholder="Find a client by name or record #" autocomplete="off"><button class="btn small" data-act="search">Search</button></div>' +
            (open.length ? open.map(episodeCard).join('') : '<div class="card"><div class="h">No open episodes</div><div class="m">Find a client and start a crisis assessment.</div></div>') +
            (r.Recent.length ? '<div class="lbl">Recent clients</div>' + r.Recent.map(clientRow).join('') : '') +
            '</div>' + foot([btn('New crisis assessment', 'go', 'primary', '#/search')]));
    }
    function clientRow(c) {
        return '<div class="list-item" data-act="go" data-arg="#/client/' + c.ClientId + '"><div><div class="t">' + enc(c.FirstName + ' ' + c.LastName) + '</div><div class="s">' + enc(c.RecordNumber || '') + (c.BirthDate ? ' &middot; DOB ' + fmtDate(c.BirthDate) + ' (' + age(c.BirthDate) + ')' : '') + (c.Phone ? ' &middot; ' + enc(c.Phone) : '') + '</div></div><span class="muted">&#8250;</span></div>';
    }

    // ------------------------------------------------------------------ search
    function renderSearch(results, text) {
        page(top('New assessment', 'Who is the client?', null, '#/home') + '<div class="fd-body">' +
            '<div class="search"><input class="inp" id="q" placeholder="Name or record #" value="' + enc(text || '') + '" autocomplete="off" autofocus><button class="btn small" data-act="search">Search</button></div>' +
            (results ? (results.length ? results.map(clientRow).join('') : '<div class="card"><div class="h">No match</div><div class="m">Add the client in Patient Manager on the desktop, then search again. (Field intake for brand-new clients is a later phase.)</div></div>') : '<div class="sub" style="margin-top:14px">Type at least two letters.</div>') + '</div>');
        var q = document.getElementById('q'); if (q && !results) q.focus();
    }
    function doSearch() {
        var t = (document.getElementById('q') || {}).value || '';
        api('/Services/Field/Search', { Text: t }).then(function (r) { renderSearch(r.Clients, t); }).catch(function () { });
    }

    // ------------------------------------------------------------------ client card
    function loadClient(id) {
        page(top('', 'Client', null, '#/home'));
        api('/Services/Field/Client', { ClientId: id }).then(function (r) { S.client = r; renderClient(); }).catch(function () { });
    }
    function renderClient() {
        var r = S.client, c = r.Client, e = r.OpenEpisode, t = r.Timeline, h = [];
        h.push('<div class="hero"><div class="n">' + enc(c.FirstName + ' ' + c.LastName) + '</div><div class="m">' + enc(c.RecordNumber || 'no record #') + (c.BirthDate ? ' &middot; DOB ' + fmtDate(c.BirthDate) + ' (' + age(c.BirthDate) + ')' : '') + (c.Phone ? '<br>' + enc(c.Phone) : '') + (c.City || c.County ? '<br>' + enc([c.City, c.County ? c.County + ' County' : '', c.Zip].filter(Boolean).join(', ')) : '') + '</div>' +
            '<div class="actions">' + (c.Phone ? '<a class="btn" href="tel:' + enc(c.Phone) + '">Call</a>' : '') + btn('New assessment', 'go', 'solid', '#/assess/' + c.ClientId + '/0') + (e ? btn('Consent', 'go', '', '#/consent/' + e.EpisodeId) : '') + '</div></div>');
        if (e) {
            h.push('<div class="lbl">Open episode #' + e.EpisodeId + ' - ' + enc(PHASE[e.Phase] || e.Phase) + '</div>');
            h.push('<div class="card">' + (e.ConsentOk ? '<span class="tag ok">Consent on file</span>' : '<span class="tag bad">Consent needed</span> <span class="sub">' + enc(e.ConsentSummary || '') + '</span>') +
                '<div class="sub" style="margin-top:8px">' + enc(e.NextAction || '') + '</div>' +
                '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">' +
                (e.OpenActivityId ? btn('Continue the note', 'go', 'primary small', '#/note/' + e.OpenActivityId + '/0') : e.WaitingApproval ? '' : e.Phase === 'FU' && e.NextFollowUpId ? btn('Start Day ' + e.NextFollowUpDay + ' call', 'go', 'primary small', '#/start/' + e.EpisodeId + '/' + e.NextFollowUpId) : e.Phase !== 'FU' ? btn('Start ' + (PHASE[e.Phase] || e.Phase).split(' - ')[0], 'go', 'primary small', '#/start/' + e.EpisodeId) : '') +
                '</div></div>');
            if (t) {
                h.push('<div class="tl">');
                t.Encounters.forEach(function (x) { var signed = ['Submitted', 'Re-Submitted', 'Approved'].indexOf(x.Status || '') >= 0; h.push('<div class="e ' + (signed ? 'done' : 'open') + '"><div class="h">' + enc(x.PhaseLabel || PHASE[x.Phase] || '') + (x.FollowUpDay ? ' - Day ' + x.FollowUpDay : '') + '</div><div class="m">' + fmtDate(x.ServiceDate) + ' &middot; ' + enc(x.Status || 'Open') + (signed ? '' : ' &middot; <a href="#/note/' + x.ActivityId + '/0">open</a>') + '</div></div>'); });
                t.FollowUps.forEach(function (f) { h.push('<div class="e' + (f.Status === 'Completed' ? ' done' : '') + '"><div class="h">Day ' + f.Day + ' follow-up</div><div class="m">due ' + fmtDate(f.DueDate) + ' &middot; ' + enc(f.Status || 'Scheduled') + '</div></div>'); });
                h.push('</div>');
                var byPhase = {}; t.Goals.forEach(function (g) { (byPhase[g.Phase] = byPhase[g.Phase] || []).push(g); });
                if (t.Goals.length) h.push('<div class="lbl">Goals on this episode</div>');
                Object.keys(PHASE).forEach(function (ph) { if (!byPhase[ph]) return; h.push('<div class="card"><div class="h">' + enc(PHASE[ph]) + ' <span class="muted">(' + byPhase[ph].length + ')</span></div>' + byPhase[ph].map(function (g) { return '<div class="sub"><span class="goal-code">' + enc(g.Code) + '</span> ' + enc(g.Description) + (g.Status && g.Status !== 'Open' ? ' <span class="tag ' + (g.Status === 'Completed' ? 'met' : 'blue') + '">' + enc(g.Status) + '</span>' : '') + '</div>'; }).join('') + '</div>'); });
            }
        }
        if (r.Assessments.length) {
            h.push('<div class="lbl">Assessments</div>');
            r.Assessments.forEach(function (a) { h.push('<div class="list-item"><div><div class="t">' + enc(a.FormType || '') + ' assessment - ' + fmtDate(a.ServiceDate) + '</div><div class="s">' + enc(a.Status || '') + (a.Score != null ? ' &middot; score ' + a.Score : '') + (a.HighRisk ? ' &middot; HIGH RISK' : '') + (a.EpisodeId ? ' &middot; episode #' + a.EpisodeId : '') + '</div></div>' + (a.Status === 'Draft' ? btn('Resume', 'go', 'small', '#/assess/' + c.ClientId + '/0/' + a.AssessmentId) : '<a class="btn small" href="/CrisisAssessments/Document/' + a.AssessmentId + '" target="_blank">View</a>') + '</div>'); });
        }
        if (r.PastEpisodes.length) { h.push('<div class="lbl">Past episodes</div>'); r.PastEpisodes.forEach(function (pe) { h.push('<div class="list-item"><div><div class="t">Episode #' + pe.EpisodeId + '</div><div class="s">' + fmtDate(pe.OpenedAt) + ' &middot; ' + enc(pe.NextAction || '') + '</div></div></div>'); }); }
        page(top('', enc(c.FirstName + ' ' + c.LastName), null, '#/home') + '<div class="fd-body">' + h.join('') + '</div>');
    }

    // ------------------------------------------------------------------ assessment wizard
    function assessSteps(kind) {
        var k = O[kind], steps = [{ id: 'encounter' }, { id: 'risk' }, { id: 'demo' }];
        k.q.forEach(function (q, i) { steps.push({ id: 'q', n: i + 1 }); });
        k.s.forEach(function (q, i) { steps.push({ id: 's', n: i + 1 }); });
        steps.push({ id: 'referral' }, { id: 'review' });
        return steps;
    }
    function kindOf(e) { return (e.FormType || 'Adult') === 'Child' ? 'child' : 'adult'; }
    function forms(list, kind) { return list.filter(function (o) { return !o.forms || o.forms === 'both' || o.forms === kind; }); }

    function renderAssess(clientId, step, resumeId) {
        var A = S.assess;
        if (!A || A.clientId !== clientId || (resumeId && A.id !== +resumeId)) {
            S.assess = A = { clientId: clientId, id: resumeId ? +resumeId : null, e: { ClientId: clientId, FormType: 'Adult', ServiceDate: today(), StartTime: nowTime(), Status: 'Draft' }, eval: null, client: null, needsOff: {}, goalsOff: {}, completed: null };
            page(top('Crisis assessment', 'Loading...'));
            var loads = [api('/Services/Field/Client', { ClientId: clientId })];
            if (resumeId) loads.push(api('/Services/CrisisAssessments/CrisisAssessments/Retrieve', { EntityId: +resumeId }));
            Promise.all(loads).then(function (rs) {
                A.client = rs[0].Client; A.clientName = A.client.FirstName + ' ' + A.client.LastName;
                if (!A.e.County && A.client.County) A.e.County = A.client.County;
                if (!A.e.Zip && A.client.Zip) A.e.Zip = A.client.Zip;
                if (A.client.BirthDate && !resumeId) { var a = parseInt(age(A.client.BirthDate)); if (!isNaN(a) && a < 18) A.e.FormType = 'Child'; }
                if (rs[1]) { A.e = rs[1].Entity; if (A.e.ServiceDate) A.e.ServiceDate = String(A.e.ServiceDate).slice(0, 10); if (A.e.ProjectedDischarge) A.e.ProjectedDischarge = String(A.e.ProjectedDischarge).slice(0, 10); }
                renderAssess(clientId, step, resumeId); evaluate();
            }).catch(function () { });
            return;
        }
        if (!A.client) return;
        var e = A.e, kind = kindOf(e), steps = assessSteps(kind), i = Math.max(0, Math.min(steps.length - 1, parseInt(step) || 0)), st = steps[i];
        A.i = i;
        var prog = steps.map(function (s, j) { return j <= i; });
        var kicker = (e.FormType || 'Adult') + ' assessment - ' + A.clientName;
        var back = i === 0 ? '#/client/' + clientId : '#/assess/' + clientId + '/' + (i - 1) + (A.id ? '/' + A.id : '');
        var body, title, nextLabel = 'Next';
        switch (st.id) {
            case 'encounter': title = 'Encounter'; body = stepEncounter(e, kind); break;
            case 'risk': title = 'Risk categories'; body = stepRisk(e, kind); break;
            case 'demo': title = 'Demographics'; body = stepDemo(e, kind); break;
            case 'q': title = 'Question ' + st.n + ' of ' + O[kind].q.length; body = stepQ(e, kind, st.n); break;
            case 's': title = (kind === 'child' ? 'Suicide screen (ASQ) ' : 'Columbia protocol ') + st.n + ' of ' + O[kind].s.length; body = stepS(e, kind, st.n); break;
            case 'referral': title = 'Referrals and plan'; body = stepReferral(e, kind); break;
            case 'review': title = 'Review - needs and goals for tonight'; body = stepReview(A); nextLabel = null; break;
        }
        var footBtns;
        if (st.id === 'review') {
            var done = e.Status === 'Completed' || e.Status === 'Signed';
            footBtns = [btn('Back', 'assess-back', ''), done ? (e.Status === 'Signed' ? btn('Signed - continue', 'go', 'primary', '#/done/assess/' + A.id) : btn('Sign as clinician', 'assess-sign', 'primary')) : btn('Complete and recommend goals', 'assess-complete', 'primary')];
        } else footBtns = [btn('Back', 'assess-back', ''), btn(nextLabel, 'assess-next', 'primary')];
        page(top(kicker, title, prog, back) + '<div class="fd-body">' + body + (st.id !== 'review' ? evalStrip(A.eval, kind) : '') + '</div>' + foot(footBtns));
    }
    function evalStrip(r, kind) {
        if (!r) return '<div class="strip">Live evaluation starts after the first answers.</div>';
        var h = '';
        if (r.HardStops && r.HardStops.length) h += '<div class="strip hard"><b>' + enc(r.HardStops[0].Title) + '</b> - ' + enc(r.HardStops[0].Instruction) + '</div>';
        h += '<div class="strip"><b>Live: ' + r.Score + ' of ' + r.QuestionCount + ' ' + (kind === 'child' ? 'at 3 or 4' : 'at 4 or 5') + '</b> (' + r.Answered + ' answered' + (r.ScoreReached ? ', referral threshold reached' : '') + ') - ' + (r.Needs || []).length + ' need' + ((r.Needs || []).length === 1 ? '' : 's') + ' found so far - ' + (r.TonightGoals || []).length + ' goal' + ((r.TonightGoals || []).length === 1 ? '' : 's') + ' queued for Encounter 1</div>';
        return h;
    }
    function single(name, list, val, kind) { return '<div class="opts">' + forms(list, kind).map(function (o) { return '<button type="button" class="opt' + (val === o.key ? ' on' : '') + '" data-act="set" data-name="' + name + '" data-arg="' + enc(o.key) + '"><span class="t">' + enc(o.label) + '</span><span class="n">' + (val === o.key ? '&#10003;' : '') + '</span></button>'; }).join('') + '</div>'; }
    function multi(name, list, val, kind) { var on = split(val); return '<div class="opts">' + forms(list, kind).map(function (o) { var s = on.indexOf(o.key) >= 0; return '<button type="button" class="opt multi compact' + (s ? ' on' : '') + '" data-act="toggle" data-name="' + name + '" data-arg="' + enc(o.key) + '"><span class="t">' + enc(o.label) + '</span><span class="n">' + (s ? '&#10003;' : '') + '</span></button>'; }).join('') + '</div>'; }
    function chips(name, list, val) { return '<div class="chips">' + list.map(function (o) { return '<button type="button" class="chip' + (val === o.key ? ' on' : '') + '" data-act="set" data-name="' + name + '" data-arg="' + enc(o.key) + '">' + enc(o.label) + '</button>'; }).join('') + '</div>'; }
    function input(name, val, type, ph) { return '<input class="inp" data-name="' + name + '" type="' + (type || 'text') + '" value="' + enc(val || '') + '"' + (ph ? ' placeholder="' + enc(ph) + '"' : '') + '>'; }
    var YN = [{ key: 'Yes', label: 'Yes' }, { key: 'No', label: 'No' }];

    function stepEncounter(e, kind) {
        return '<div class="q small">Which form?</div>' + chips('FormType', [{ key: 'Adult', label: 'Adult' }, { key: 'Child', label: 'Child / adolescent' }], e.FormType || 'Adult') +
            '<div class="row2"><div class="field"><label>Date of service</label>' + input('ServiceDate', e.ServiceDate, 'date') + '</div><div class="field"><label>Start time</label>' + input('StartTime', e.StartTime, 'time') + '</div></div>' +
            '<div class="row2"><div class="field"><label>County</label>' + input('County', e.County) + '</div><div class="field"><label>ZIP</label>' + input('Zip', e.Zip, 'text') + '</div></div>' +
            (kind === 'child' ? '<div class="field"><label>Parent / legal guardian present</label>' + chips('ParentPresent', YN, e.ParentPresent) + '</div><div class="row2"><div class="field"><label>Parent name</label>' + input('ParentName', e.ParentName) + '</div><div class="field"><label>Parent phone</label>' + input('ParentPhone', e.ParentPhone, 'tel') + '</div></div><div class="field"><label>Grade level</label>' + input('GradeLevel', e.GradeLevel) + '</div>' : '') +
            '<div class="lbl">Location of service</div>' + single('Location', O.locations, e.Location, kind);
    }
    function stepRisk(e, kind) {
        return '<div class="q small">Risk categories - tap all that apply</div>' + multi('RiskCategories', O.risks, e.RiskCategories, kind) +
            '<div class="lbl">Primary risk category</div>' + chips('PrimaryRisk', O.primaryRisk, e.PrimaryRisk) +
            (e.PrimaryRisk === 'SubstanceAbuse' ? '<div class="field"><label>Substance</label>' + input('SubstanceType', e.SubstanceType) + '</div><div class="row2"><div class="field"><label>Amount</label>' + input('SubstanceAmount', e.SubstanceAmount) + '</div><div class="field"><label>Frequency</label><select class="inp" data-name="SubstanceFrequency"><option value="">--</option>' + O.substanceFreq.map(function (o) { return '<option value="' + o.key + '"' + (e.SubstanceFrequency === o.key ? ' selected' : '') + '>' + enc(o.label) + '</option>'; }).join('') + '</select></div></div>' : '') +
            '<div class="field"><label>Current diagnoses (optional)</label>' + input('Diagnoses', e.Diagnoses) + '</div>' +
            '<div class="field"><label>Children in the home</label>' + chips('ChildrenInHome', YN, e.ChildrenInHome === true ? 'Yes' : e.ChildrenInHome === false ? 'No' : null) + '</div>';
    }
    function stepDemo(e, kind) {
        return '<div class="q small">Age</div>' + chips('AgeBand', forms(O.ageBands, kind), e.AgeBand) +
            '<div class="lbl">Gender</div>' + chips('Gender', O.genders, e.Gender) +
            '<div class="lbl">Primary language</div>' + chips('Language', O.languages, e.Language) +
            '<div class="lbl">Race / ethnicity - all that apply</div>' + multi('RaceEthnicity', O.races, e.RaceEthnicity, kind) +
            '<div class="lbl">Disability or access need - all that apply</div>' + multi('Disabilities', O.disabilities, e.Disabilities, kind) +
            '<div class="lbl">Immigrated to the US in the past 5 years</div>' + chips('Immigrated', YN, e.Immigrated);
    }
    function stepQ(e, kind, n) {
        var k = O[kind], val = e['Q' + n] != null ? String(e['Q' + n]) : null;
        return '<div class="sub">' + (kind === 'child' ? 'Past month. 0 not at all - 4 very much.' : 'Past month. 1 not at all - 5 very.') + '</div><div class="q" style="margin-top:8px">' + enc(k.q[n - 1]) + '</div>' +
            '<div class="opts">' + k.scale.map(function (o) { var on = val === o.key; return '<button type="button" class="opt' + (on ? ' on' : '') + '" data-act="setnum" data-name="Q' + n + '" data-arg="' + o.key + '"><span class="t">' + enc(o.label) + '</span><span class="n">' + o.key + '</span></button>'; }).join('') + '</div>';
    }
    function stepS(e, kind, n) {
        var k = O[kind], val = e['S' + n];
        return '<div class="sub">' + enc(k.sLegend) + '</div><div class="q" style="margin-top:8px">' + enc(k.s[n - 1]) + '</div>' + single('S' + n, YN, val, kind) +
            (kind === 'adult' && n === 6 && val === 'Yes' ? '<div class="lbl">' + enc(k.s6b) + '</div>' + chips('S6b', YN, e.S6b) : '');
    }
    function stepReferral(e, kind) {
        return '<div class="q small">Referrals - tap all that apply</div>' + multi('Referrals', O.referrals, e.Referrals, kind) +
            (kind === 'child' ? '<div class="lbl">Referral accepted - child</div>' + chips('ReferralAcceptedChild', YN, e.ReferralAcceptedChild) + '<div class="lbl">Referral accepted - parent</div>' + chips('ReferralAcceptedParent', YN, e.ReferralAcceptedParent) : '<div class="lbl">Referral accepted</div>' + chips('ReferralAccepted', YN, e.ReferralAccepted)) +
            '<div class="field"><label>Projected discharge</label>' + input('ProjectedDischarge', e.ProjectedDischarge, 'date') + '</div>' +
            '<div class="field"><label>Presenting problem / narrative (short)</label><textarea class="inp" data-name="Narrative" placeholder="What happened tonight, in the client\'s words">' + enc(e.Narrative || '') + '</textarea></div>';
    }
    function stepReview(A) {
        var r = A.eval, e = A.e, h = [];
        if (!r) return '<div class="strip">Evaluating...</div>';
        var done = e.Status === 'Completed' || e.Status === 'Signed';
        if (r.HardStops && r.HardStops.length) r.HardStops.forEach(function (hs) { h.push('<div class="banner bad">' + enc(hs.Title) + ' - ' + enc(hs.Instruction) + '</div>'); });
        h.push('<div class="card"><div class="h">Score ' + r.Score + ' of ' + r.QuestionCount + (r.ScoreReached ? ' - at or above ' + r.ScoreCutoff + ': discuss referral' : ' - referral threshold ' + r.ScoreCutoff) + '</div><div class="m">' + r.Answered + ' of ' + r.QuestionCount + ' questions answered' + (r.HighRisk ? ' &middot; <b style="color:var(--bad)">HIGH RISK</b>' : '') + (r.RepeatEpisode ? ' &middot; repeat episode' : '') + '</div></div>');
        h.push('<div class="lbl">Needs found (' + r.Needs.length + ') - tap to remove one</div>');
        r.Needs.forEach(function (n) { var off = !!A.needsOff[n.NeedKey]; h.push('<button type="button" class="opt multi compact' + (off ? '' : ' on') + '" data-act="need" data-arg="' + enc(n.NeedKey) + '"' + (done ? ' disabled' : '') + ' style="margin-top:8px"><span class="t">' + enc(n.Label) + ' <span class="muted">- ' + enc(n.CategoryLabel || n.Category || '') + ' &middot; ' + enc(n.Priority || '') + '</span></span><span class="n">' + (off ? '' : '&#10003;') + '</span></button>'); });
        if (!r.Needs.length) h.push('<div class="sub">No needs triggered by the answers.</div>');
        h.push('<div class="lbl">Goals for tonight - Encounter 1 (' + r.TonightGoals.length + ')</div>');
        r.TonightGoals.forEach(function (g) { var on = g.Locked || (g.Preselected ? !A.goalsOff[g.LibraryGoalId] : !!A.goalsOff[g.LibraryGoalId]); h.push('<button type="button" class="opt multi compact' + (on ? ' on' : '') + '" data-act="goal" data-arg="' + g.LibraryGoalId + '"' + (g.Locked || done ? ' disabled' : '') + ' style="margin-top:8px"><span class="t"><span class="goal-code">' + enc(g.Code) + (g.Locked ? ' - protocol' : '') + '</span><br>' + enc(g.Description) + '</span><span class="n">' + (on ? '&#10003;' : '') + '</span></button>'); });
        h.push('<div class="strip">Later encounters: ' + r.E2ProtocolGoals + ' needs-assessment goals, ' + (r.Needs.reduce(function (a, n) { return a + (n.E3E4Goals || 0); }, 0)) + ' act/confirm goals, ' + r.E5ProtocolGoals + ' pre-discharge, ' + r.FollowUpGoals + ' follow-up - copied to the episode automatically when you complete.</div>');
        if (done) h.push('<div class="banner ok">' + (e.Status === 'Signed' ? 'Signed by ' + enc(e.SignedName || '') + '. ' : 'Completed. ') + 'Goals are on episode #' + (e.EpisodeId || (A.completed && A.completed.EpisodeId) || '') + '.</div>');
        return h.join('');
    }
    function saveAssess() {
        var A = S.assess, e = Object.assign({}, A.e);
        if (e.Status === 'Completed' || e.Status === 'Signed') return Promise.resolve();
        ['ServiceDate', 'ProjectedDischarge'].forEach(function (k) { if (!e[k]) delete e[k]; });
        var p = A.id ? api('/Services/CrisisAssessments/CrisisAssessments/Update', { EntityId: A.id, Entity: Object.assign(e, { AssessmentId: A.id }) }) : api('/Services/CrisisAssessments/CrisisAssessments/Create', { Entity: e });
        return p.then(function (r) { if (!A.id && r.EntityId) { A.id = r.EntityId; A.e.AssessmentId = r.EntityId; } });
    }
    var evalTimer;
    function evaluate() {
        var A = S.assess; if (!A) return;
        clearTimeout(evalTimer);
        evalTimer = setTimeout(function () {
            api('/Services/CrisisAssessments/CrisisAssessments/Evaluate', { Entity: A.e }).then(function (r) { A.eval = r; var s = document.querySelector('.strip'); if (S.assess === A && location.hash.indexOf('#/assess/') === 0) renderAssess(A.clientId, String(A.i), A.id); }).catch(function () { });
        }, 250);
    }
    function collectInputs() {
        var A = S.assess; if (!A) return;
        app.querySelectorAll('.inp[data-name]').forEach(function (el) { A.e[el.getAttribute('data-name')] = el.value === '' ? null : el.value; });
    }
    function assessNext() {
        var A = S.assess; collectInputs();
        var kind = kindOf(A.e), steps = assessSteps(kind), st = steps[A.i];
        if (st.id === 'encounter' && !A.e.Location) { toast('Pick the location of service.', true); return; }
        busy(saveAssess()).then(function () { go('#/assess/' + A.clientId + '/' + (A.i + 1) + '/' + A.id); evaluate(); }).catch(function () { });
    }
    function assessBack() { var A = S.assess; collectInputs(); if (A.i === 0) { go('#/client/' + A.clientId); return; } saveAssess().catch(function () { }); go('#/assess/' + A.clientId + '/' + (A.i - 1) + (A.id ? '/' + A.id : '')); }
    function assessComplete() {
        var A = S.assess, r = A.eval;
        var needs = r.Needs.filter(function (n) { return !A.needsOff[n.NeedKey]; }).map(function (n) { return n.NeedKey; });
        var goals = r.TonightGoals.filter(function (g) { return g.Locked || (g.Preselected ? !A.goalsOff[g.LibraryGoalId] : !!A.goalsOff[g.LibraryGoalId]); }).map(function (g) { return g.LibraryGoalId; });
        var declined = r.TonightGoals.filter(function (g) { return goals.indexOf(g.LibraryGoalId) < 0 && g.Preselected; }).map(function (g) { return { LibraryGoalId: g.LibraryGoalId, Reason: 'Removed by worker in Field mode' }; });
        busy(saveAssess().then(function () { return api('/Services/CrisisAssessments/CrisisAssessments/Complete', { AssessmentId: A.id, NeedKeys: needs, GoalIds: goals, Declined: declined }); }))
            .then(function (c) { A.completed = c; A.e.Status = 'Completed'; A.e.EpisodeId = c.EpisodeId; toast('Completed - goals copied to episode #' + c.EpisodeId); renderAssess(A.clientId, String(A.i), A.id); }).catch(function () { });
    }
    function assessSign() {
        var A = S.assess;
        var m = modal('Sign this assessment?', 'You are signing as the licensed clinician. The assessment is locked after signing; the episode and goals stay editable through the encounter notes.', [btn('Cancel', 'modal-close', ''), btn('Sign', 'assess-sign-confirm', 'primary')]);
        m.querySelector('[data-act=assess-sign-confirm]').addEventListener('click', function () {
            m.remove();
            busy(api('/Services/CrisisAssessments/CrisisAssessments/Sign', { EntityId: A.id })).then(function () { A.e.Status = 'Signed'; A.e.SignedName = S.user.name; go('#/done/assess/' + A.id); }).catch(function () { });
        });
    }
    function renderDone(kind, id) {
        if (kind === 'assess') {
            var A = S.assess, ep = A && (A.e.EpisodeId || (A.completed && A.completed.EpisodeId)), gb = A && A.completed && A.completed.GoalsByPhase;
            var counts = gb ? Object.keys(gb).map(function (k) { var c = Array.isArray(gb[k]) ? gb[k].length : gb[k]; return enc((PHASE[k] || k).split(' - ')[0]) + ': ' + c + ' goal' + (c === 1 ? '' : 's'); }).join('<br>') : '';
            page(top('Assessment signed', A ? enc(A.clientName) : '') + '<div class="fd-body"><div class="banner ok">Assessment signed. Episode #' + ep + ' is open and every encounter has its goals.</div>' + (counts ? '<div class="strip">' + counts + '</div>' : '') +
                '<div class="card"><div class="h">Next: consent, then Encounter 1</div><div class="m">Encounter 1 cannot be signed until the intake consent set is on file (in person, by emailed link, or verbal consent recorded).</div></div></div>' +
                foot([btn('Consent', 'go', '', '#/consent/' + ep), btn('Start Encounter 1', 'go', 'primary', '#/start/' + ep)]));
            return;
        }
        if (kind === 'note') {
            page(top('Note signed', '') + '<div class="fd-body"><div class="banner ok">The encounter note is signed and submitted to the team lead for approval. The next encounter opens after approval.</div></div>' + foot([btn('Back to tonight', 'go', 'primary', '#/home')]));
        }
    }

    // ------------------------------------------------------------------ consent
    function loadConsent(ep) {
        page(top('Consent', 'Loading...'));
        api('/Services/CrisisEpisodes/Consent/State', { EpisodeId: ep }).then(function (st) { renderConsent(st); }).catch(function () { });
    }
    function renderConsent(st) {
        S.consentState = st;
        var h = [], ret = encodeURIComponent('/Field#/consent/' + st.EpisodeId);
        h.push('<div class="banner ' + (st.GateOk ? 'ok' : 'warn') + '">' + enc(st.Summary) + '</div>');
        st.Items.forEach(function (it) {
            var signed = it.Status === 'Signed', tagc = signed ? 'ok' : it.Status === 'Refused' ? 'bad' : it.Status === 'Verbal' ? 'warn' : '';
            h.push('<div class="card"><div style="display:flex;justify-content:space-between;gap:8px"><div><div class="h">' + enc(it.Title) + '</div><div class="m">' + enc(it.Code) + (it.RequiredAtIntake ? ' &middot; required at intake' : '') + '</div></div><span class="tag ' + tagc + '">' + enc(it.Status || 'Pending') + '</span></div>' +
                '<div class="sub" style="margin-top:6px">' + enc(it.Summary || '') + (signed ? '<br>Signed ' + fmtDate(it.SignedAt) + ' by ' + enc(it.SignerName || '') + (it.SignerRelationship ? ' (' + enc(it.SignerRelationship) + ')' : '') + ' via ' + enc(it.Channel || '') : '') + '</div>' +
                (!signed && it.Status !== 'Refused' ? '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><a class="btn small primary" href="/CrisisEpisodes/Consent/Sign/' + it.RequestId + '?returnUrl=' + ret + '">Sign in person</a>' + btn('Refused', 'consent-refuse', 'small danger', String(it.RequestId)) + '</div>' : '') +
                (signed ? '<div style="margin-top:8px"><a class="btn small" href="/CrisisEpisodes/Consent/Document/' + it.RequestId + '" target="_blank">View signed form</a></div>' : '') + '</div>');
        });
        h.push('<div class="lbl">Other ways to get consent</div>');
        h.push('<div class="card"><div class="h">Email a signing link</div><div class="m">The client verifies with date of birth and last 4 of their phone, then signs on their own device.</div><div class="search" style="margin-top:10px"><input class="inp" id="consent-email" type="email" placeholder="client email" value="' + enc(st.ClientEmail || '') + '">' + btn('Send', 'consent-invite', 'small', String(st.EpisodeId)) + '</div>' + (st.Invite ? '<div class="sub">Last link sent ' + fmtDate(st.Invite.SentAt) + ' to ' + enc(st.Invite.SentTo || '') + (st.Invite.UsedAt ? ' - used' : '') + '</div>' : '') + '</div>');
        if (!st.GateOk) h.push('<div class="card"><div class="h">Verbal consent (OC-VCD-003)</div><div class="m">Use when the client cannot sign tonight. Written consent is due within the window on the form; the gate opens for Encounter 1.</div><div style="margin-top:10px">' + btn('Record verbal consent', 'consent-verbal', 'small', String(st.EpisodeId)) + '</div></div>');
        if (st.Audit && st.Audit.length) h.push('<div class="lbl">Audit</div><div class="sec">' + st.Audit.map(enc).join('\n') + '</div>');
        page(top('Consent - episode #' + st.EpisodeId, enc(st.ClientName) + (st.IsMinor ? ' <span class="tag warn">minor</span>' : ''), null, '#/client/' + st.ClientId) + '<div class="fd-body">' + h.join('') + '</div>' + foot([btn('Back to client', 'go', '', '#/client/' + st.ClientId), btn(st.GateOk ? 'Continue' : 'Later', 'go', 'primary', '#/client/' + st.ClientId)]));
    }

    // ------------------------------------------------------------------ start encounter
    function renderStart(ep, followUpId) {
        page(top('Start encounter', 'Episode #' + ep, null, '#/home') + '<div class="fd-body">' +
            '<div class="row2"><div class="field"><label>Date of service</label><input class="inp" id="se-date" type="date" value="' + today() + '"></div><div class="field"><label>Start time</label><input class="inp" id="se-from" type="time" value="' + nowTime() + '"></div></div>' +
            '<div class="field"><label>End time (can stay blank)</label><input class="inp" id="se-to" type="time"></div>' +
            '<div class="lbl">Place of service</div>' + chips('se-loc', ['Community', 'Home', 'Provider site', 'Hospital / ED', 'Shelter', 'Phone', 'Telehealth', 'Other'].map(function (x) { return { key: x, label: x }; }), followUpId ? 'Phone' : 'Home') +
            '<div class="lbl">Contact</div>' + chips('se-contact', ['Face to Face', 'Phone', 'Video'].map(function (x) { return { key: x, label: x }; }), followUpId ? 'Phone' : 'Face to Face') +
            '<div class="lbl">Billable</div>' + chips('se-bill', YN, 'Yes') +
            '<div class="strip">The note opens pre-loaded with this encounter\'s goals, every library intervention as a tap box, and the outcome questions.</div></div>' +
            foot([btn('Cancel', 'go', '', '#/home'), btn('Start and open the note', 'start-go', 'primary', ep + '|' + (followUpId || ''))]));
        S.start = { 'se-loc': followUpId ? 'Phone' : 'Home', 'se-contact': followUpId ? 'Phone' : 'Face to Face', 'se-bill': 'Yes' };
    }
    function startGo(arg) {
        var p = arg.split('|'), ep = +p[0], fu = p[1] ? +p[1] : null, v = S.start || {};
        busy(api('/Services/CrisisEpisodes/EncounterNotes/StartEncounter', { EpisodeId: ep, FollowUpId: fu, ServiceDate: document.getElementById('se-date').value, FromTime: document.getElementById('se-from').value, ToTime: document.getElementById('se-to').value || null, Location: v['se-loc'], ContactMethod: v['se-contact'], IsBillable: v['se-bill'] !== 'No' }))
            .then(function (r) { S.note = null; go('#/note/' + r.ActivityId + '/0'); }).catch(function () { });
    }

    // ------------------------------------------------------------------ encounter note
    function renderNote(activityId, step) {
        var N = S.note;
        if (!N || N.activityId !== activityId) {
            S.note = N = { activityId: activityId, d: null, i: 0 };
            page(top('Encounter', 'Loading the note...'));
            var loads = [api('/Services/CrisisEpisodes/EncounterNotes/GetNoteData', { ActivityId: activityId })];
            if (!S.resources) loads.push(api('/Services/AgencyAdministration/ResourceDirectory/List', { Take: 500 }).catch(function () { return { Entities: [] }; }));
            Promise.all(loads).then(function (rs) { N.d = rs[0]; if (rs[1]) { S.resources = {}; (rs[1].Entities || []).forEach(function (x) { (S.resources[x.ResourceType || 'Other'] = S.resources[x.ResourceType || 'Other'] || []).push(x); }); } renderNote(activityId, step); }).catch(function () { });
            return;
        }
        if (!N.d) return;
        var d = N.d, goals = d.Goals || [], n = goals.length, total = n + 2, i = Math.max(0, Math.min(total - 1, parseInt(step) || 0));
        N.i = i;
        var prog = []; for (var k = 0; k < total; k++) prog.push(k <= i);
        var kicker = (d.PhaseLabel || PHASE[d.Phase] || 'Encounter') + (d.FollowUpDay ? ' - Day ' + d.FollowUpDay : '') + ' - ' + d.ClientName;
        var back = i === 0 ? '#/client/' + d.ClientId : '#/note/' + activityId + '/' + (i - 1);
        var body, title, footBtns;
        if (d.Locked) { title = 'Signed note'; body = noteReview(d); footBtns = [btn('Back to client', 'go', 'primary', '#/client/' + d.ClientId)]; }
        else if (i < n) { title = 'Goal ' + (i + 1) + ' of ' + n; body = noteGoal(d, goals[i], i); footBtns = [btn('Back', 'go', '', back), btn(i === n - 1 ? 'Safety check' : 'Next goal', 'note-next', 'primary')]; }
        else if (i === n) { title = 'Safety and contact'; body = noteSafety(d); footBtns = [btn('Back', 'go', '', back), btn('Review', 'note-next', 'primary')]; }
        else { title = 'Review and sign'; body = noteReview(d); footBtns = [btn('Back', 'go', '', back), btn('Sign and submit note', 'note-sign', 'primary', null, !(d.Gate && d.Gate.Ready))]; }
        page(top(kicker, title, prog, back) + '<div class="fd-body">' + body + '</div>' + foot(footBtns));
    }
    function noteGoal(d, g, gi) {
        var h = [];
        h.push('<div class="goal-code">' + enc(g.Code) + (g.NeedKey ? ' - ' + enc(g.NeedKey.replace(/_/g, ' ')) : '') + (g.IsProtocol ? ' - protocol' : '') + (g.IsCarried ? ' - carried from the last encounter' : '') + '</div>');
        h.push('<div class="q small" style="margin-top:4px">' + enc(g.Description) + '</div>');
        if (g.EffectivenessMeasure) h.push('<div class="sub">Effectiveness: ' + enc(g.EffectivenessMeasure) + '</div>');
        h.push('<div class="lbl">What did you do? tap all that apply</div><div style="display:grid;gap:8px">');
        (g.Interventions || []).forEach(function (it, ii) {
            h.push('<div class="inter' + (it.Provided ? ' on' : '') + '" data-act="inter" data-arg="' + gi + '|' + ii + '"><div class="cb">' + (it.Provided ? '&#10003;' : '') + '</div><div class="t">' + enc(it.Desc) + (it.Provided ? '<div class="detail"><input class="inp" data-act-input="inter-detail" data-arg="' + gi + '|' + ii + '" placeholder="who / where / amount / reference" value="' + enc(it.Detail || '') + '"></div>' : '') + '</div></div>');
        });
        if (!(g.Interventions || []).length) h.push('<div class="sub">No library interventions for this goal.</div>');
        h.push('</div>');
        h.push('<div class="lbl">Projected outcome' + ((g.Outcomes || []).length === 1 ? '' : 's') + ' - did it happen?</div>');
        (g.Outcomes || []).forEach(function (o, oi) {
            var qs = (o.Questions || []).slice().sort(function (a, b) { return a.SortOrder - b.SortOrder; }), q1 = qs[0], a1 = q1 ? q1.Answer : null;
            h.push('<div class="outcome"><div class="ot">' + enc(o.Text) + (o.StatusRule === 'Required' ? '' : ' <small>(supporting)</small>') + '</div>');
            if (q1) h.push('<div class="yn"><button type="button" class="btn yes' + (a1 === 'Yes' ? ' on' : '') + '" data-act="ans" data-arg="' + gi + '|' + oi + '|' + q1.QuestionId + '|Yes">Yes</button><button type="button" class="btn no' + (a1 === 'No' ? ' on' : '') + '" data-act="ans" data-arg="' + gi + '|' + oi + '|' + q1.QuestionId + '|No">No</button></div>');
            if (a1 != null) qs.slice(1).forEach(function (q) { if (!visible(q, a1)) return; h.push(noteQuestion(q, gi, oi)); });
            h.push('</div>');
        });
        if (!(g.Outcomes || []).length) h.push('<div class="sub">No projected outcomes in the library for this goal - set the status below.</div>');
        h.push('<div class="lbl">Result for this goal <span class="muted" style="text-transform:none;letter-spacing:0">(written from the answers)</span></div>');
        h.push('<div class="gen">' + (g.Status ? '<b>' + STATUS[g.Status][0] + (g.StatusOverride ? ' (set by worker)' : '') + '.</b> ' + enc(g.OutcomeText || '') + (g.EffectivenessText ? '<br>' + enc(g.EffectivenessText) : '') : '<i>Answer the outcome question(s) above; the status, outcome and effectiveness sentences write themselves when you tap Next.</i>') + '</div>');
        h.push('<div class="field"><label>Status override (only if the automatic one is wrong)</label><select class="inp" data-act-input="status" data-arg="' + gi + '"><option value="">automatic</option>' + Object.keys(STATUS).map(function (k) { return '<option value="' + k + '"' + (g.StatusOverride && g.Status === k ? ' selected' : '') + '>' + STATUS[k][0] + '</option>'; }).join('') + '</select></div>');
        h.push('<div class="field"><label>One line to add (optional)</label><input class="inp" data-act-input="worker-note" data-arg="' + gi + '" value="' + enc(g.WorkerNote || '') + '"></div>');
        return h.join('');
    }
    function visible(q, a1) { if (!q.ShowWhen) return true; var p = q.ShowWhen.split('='); return p.length === 2 && (p[1] || '').toLowerCase() === (a1 || '').toLowerCase(); }
    function noteQuestion(q, gi, oi) {
        var key = gi + '|' + oi + '|' + q.QuestionId, h = '<div class="qq"><label>' + enc(q.Prompt) + (q.IsRequired ? ' *' : '') + (q.SendsToCrisisPlan ? '<span class="plan">to Crisis Plan</span>' : '') + '</label>';
        switch (q.AnswerType) {
            case 'YesNo': h += '<div class="yn"><button type="button" class="btn yes' + (q.Answer === 'Yes' ? ' on' : '') + '" data-act="ans" data-arg="' + key + '|Yes">Yes</button><button type="button" class="btn no' + (q.Answer === 'No' ? ' on' : '') + '" data-act="ans" data-arg="' + key + '|No">No</button></div>'; break;
            case 'Pick': h += '<div class="chips">' + (q.Options || []).map(function (o) { return '<button type="button" class="chip' + (q.Answer === o ? ' on' : '') + '" data-act="ans" data-arg="' + key + '|' + enc(o) + '">' + enc(o) + '</button>'; }).join('') + '</div><input class="inp" style="margin-top:8px" data-act-input="ans" data-arg="' + key + '" placeholder="other..." value="' + ((q.Options || []).indexOf(q.Answer) < 0 ? enc(q.Answer || '') : '') + '">'; break;
            case 'Date': h += '<input class="inp" type="date" data-act-input="ans" data-arg="' + key + '" value="' + enc(q.Answer || '') + '">'; break;
            case 'Time': h += '<input class="inp" type="time" data-act-input="ans" data-arg="' + key + '" value="' + enc(q.Answer || '') + '">'; break;
            case 'Resource':
                var list = (S.resources || {})[q.ResourceType] || [];
                h += '<select class="inp" data-act-input="ans" data-arg="' + key + '"><option value="">-- pick from the directory (' + enc(q.ResourceType || 'resource') + ') --</option>' + list.map(function (r) { return '<option value="' + enc(r.Name) + '"' + (q.Answer === r.Name ? ' selected' : '') + '>' + enc(r.Name) + (r.Phone ? ' - ' + enc(r.Phone) : '') + '</option>'; }).join('') + '</select>' +
                    '<input class="inp" style="margin-top:8px" data-act-input="ans" data-arg="' + key + '" placeholder="or type the name / address" value="' + (list.some(function (r) { return r.Name === q.Answer; }) ? '' : enc(q.Answer || '')) + '">'; break;
            default: h += '<input class="inp" data-act-input="ans" data-arg="' + key + '" value="' + enc(q.Answer || '') + '">';
        }
        return h + '</div>';
    }
    function noteSafety(d) {
        var sc = d.SafetyConcern;
        return '<div class="q small">Any safety concern at the end of this contact?</div>' +
            '<div class="yn"><button type="button" class="btn yes' + (sc === true ? ' on' : '') + '" data-act="safety" data-arg="Yes">Yes</button><button type="button" class="btn no' + (sc === false ? ' on' : '') + '" data-act="safety" data-arg="No">No</button></div>' +
            (sc === true ? '<div class="field"><label>Describe the concern and what was done *</label><textarea class="inp" id="safety-text">' + enc(d.SafetyText || '') + '</textarea></div>' : '') +
            '<div class="lbl">Contact</div>' + chips('contact', ['Face to Face', 'Phone', 'Video'].map(function (x) { return { key: x, label: x }; }), d.ContactMethod || 'Face to Face') +
            (d.Phase === 'E5' ? '<div class="lbl">Admitted to a long-term service at discharge?</div><div class="sub">Yes = Day 7 / 14 / 21 follow-up calls are not required.</div><div class="yn"><button type="button" class="btn yes' + (d.LongTermAdmission === true ? ' on' : '') + '" data-act="lta" data-arg="Yes">Yes</button><button type="button" class="btn no' + (d.LongTermAdmission === false ? ' on' : '') + '" data-act="lta" data-arg="No">No</button></div>' : '') +
            (d.CrisisPlan && d.CrisisPlan.length ? '<div class="lbl">Crisis plan so far</div><div class="sec">' + d.CrisisPlan.map(function (p) { return '[' + enc(p.EntryType) + '] ' + enc(p.EntryText); }).join('\n') + '</div>' : '');
    }
    function noteReview(d) {
        var h = [], g = d.Gate || {};
        if (d.Locked) h.push('<div class="banner ok">Signed - ' + enc(d.NoteStatus || '') + '. Read only.</div>');
        else if (g.Ready) h.push('<div class="banner ok">All ' + (d.Goals || []).length + ' goals answered. Sections 1-4 written. Ready to sign.</div>');
        else h.push('<div class="banner warn">Sign is locked - ' + (g.Missing || []).length + ' item(s) to answer<ul>' + (g.Missing || []).map(function (m) { return '<li>' + enc(m) + '</li>'; }).join('') + '</ul></div>');
        if (d.ConsentGateMessage) h.push('<div class="banner bad">' + enc(d.ConsentGateMessage) + '<div style="margin-top:8px">' + btn('Open consent', 'go', 'small', '#/consent/' + d.EpisodeId) + '</div></div>');
        (d.Goals || []).forEach(function (x, i) { var s = x.Status ? STATUS[x.Status] : null; h.push('<div class="list-item" data-act="go" data-arg="#/note/' + d.ActivityId + '/' + i + '"><div class="t"><span class="goal-code">' + enc(x.Code) + '</span><br>' + enc(x.Description) + '</div>' + (s ? '<span class="tag ' + s[1] + '">' + s[0].toUpperCase() + '</span>' : '<span class="tag">PENDING</span>') + '</div>'); });
        h.push('<div class="lbl">The note as it will read</div>');
        h.push('<div class="sec"><b>Section 1 - Presenting problem and purpose</b>\n' + enc(d.Field01 || '') + '</div>');
        h.push('<div class="sec"><b>Section 2 - Goals and interventions</b>\n' + enc(d.Field02 || '') + '</div>');
        h.push('<div class="sec"><b>Section 3 - Outcome and effectiveness</b>\n' + enc(d.Field03 || '') + '</div>');
        h.push('<div class="sec"><b>Section 4 - Plan</b>\n' + enc(d.Field04 || '') + '</div>');
        if (d.Summary) h.push('<div class="sec"><b>Summary</b>\n' + enc(d.Summary) + '</div>');
        if (d.DischargeSummary) h.push('<div class="sec"><b>Pre-discharge summary</b>\n' + enc(d.DischargeSummary) + '</div>');
        return h.join('');
    }
    function collectNote() {
        var d = S.note.d, req = { ActivityId: d.ActivityId, Goals: [], SafetyConcern: d.SafetyConcern, SafetyText: d.SafetyText, ContactMethod: d.ContactMethod, LongTermAdmission: d.LongTermAdmission };
        var st = document.getElementById('safety-text'); if (st) req.SafetyText = d.SafetyText = st.value;
        // pull typed inputs from the current screen into the model first
        app.querySelectorAll('[data-act-input]').forEach(function (el) { applyInput(el); });
        (d.Goals || []).forEach(function (g) {
            var sg = { ClientGoalId: g.ClientGoalId, Interventions: [], Answers: [], StatusOverride: !!g.StatusOverride, Status: g.StatusOverride ? g.Status : null, WorkerNote: g.WorkerNote };
            (g.Interventions || []).forEach(function (it) { sg.Interventions.push({ ClientGoalInterventionId: it.ClientGoalInterventionId, Provided: !!it.Provided, Detail: it.Detail || null }); });
            (g.Outcomes || []).forEach(function (o) {
                var qs = (o.Questions || []).slice().sort(function (a, b) { return a.SortOrder - b.SortOrder; }), q1 = qs[0], a1 = q1 ? q1.Answer : null;
                if (q1 && a1) sg.Answers.push({ OutcomeId: o.OutcomeId, QuestionId: q1.QuestionId, Answer: a1 });
                if (a1 != null) qs.slice(1).forEach(function (q) { if (visible(q, a1) && q.Answer) sg.Answers.push({ OutcomeId: o.OutcomeId, QuestionId: q.QuestionId, Answer: String(q.Answer) }); });
            });
            req.Goals.push(sg);
        });
        return req;
    }
    function applyInput(el) {
        var N = S.note; if (!N || !N.d) return;
        var kind = el.getAttribute('data-act-input'), arg = el.getAttribute('data-arg').split('|'), g = N.d.Goals[+arg[0]];
        if (kind === 'inter-detail') g.Interventions[+arg[1]].Detail = el.value;
        else if (kind === 'status') { g.StatusOverride = !!el.value; if (el.value) g.Status = el.value; }
        else if (kind === 'worker-note') g.WorkerNote = el.value;
        else if (kind === 'ans') { var q = findQ(g, +arg[1], +arg[2]); if (q && (el.value || el.tagName !== 'INPUT' || !q.Options)) q.Answer = el.value || (el.tagName === 'SELECT' ? q.Answer : null); }
    }
    function findQ(g, oi, qid) { var o = g.Outcomes[oi]; if (!o) return null; for (var i = 0; i < o.Questions.length; i++) if (o.Questions[i].QuestionId === qid) return o.Questions[i]; return null; }
    function saveNote() {
        var N = S.note;
        return api('/Services/CrisisEpisodes/EncounterNotes/SaveNoteData', collectNote()).then(function (d) { N.d = d; return d; });
    }
    function noteNext() { var N = S.note; busy(saveNote()).then(function () { go('#/note/' + N.activityId + '/' + (N.i + 1)); }).catch(function () { }); }
    function noteSign() {
        var N = S.note, d = N.d;
        var m = modal('Sign and submit this note?', 'Legal notification: you are about to authorize an electronic signature. Based on the integrity and validity of electronic specifications, you are responsible for keeping your signature information confidential. The note goes to the team lead for approval.', [btn('Cancel', 'modal-close', ''), btn('Sign', 'note-sign-confirm', 'primary')]);
        m.querySelector('[data-act=note-sign-confirm]').addEventListener('click', function () {
            m.remove();
            busy(saveNote().then(function (d2) {
                if (!d2.Gate || !d2.Gate.Ready) throw new Error('The note is not ready: ' + (d2.Gate && d2.Gate.Missing || []).join('; '));
                return api('/Services/ProgramNoteManager/ProgramNotes/GetSignageData', {}).then(function (sig) {
                    var guid = sig.signatureGuid || sig.SignatureGuid, img = sig.signatureImage || sig.SignatureImage, txt = sig.signatureText || sig.SignatureText, ok = sig.signatureVerified != null ? sig.signatureVerified : sig.SignatureVerified;
                    if (!guid || !img || !txt || !ok) throw new Error('No verified e-signature on your account. Create and verify one on the desktop (My Profile > eSignature), then sign here.');
                    return api('/Services/ProgramNoteManager/ProgramNotes/Update', { EntityId: d2.ProgramNoteId, Entity: { ProgramNoteId: d2.ProgramNoteId, Field00: d2.PhaseLabel, Field01: d2.Field01, Field02: d2.Field02, Field03: d2.Field03, Field04: d2.Field04, SignatureGuid: guid, SignatureImage: img, ESignaturePlainText: txt, NoteUpdateStatus: 'SignAction' } });
                });
            })).then(function () { S.note = null; go('#/done/note/' + d.ActivityId); }).catch(function () { });
        });
    }

    // ------------------------------------------------------------------ verbal consent (OC-VCD-003) - same field schema as the desktop dialog
    var VERBAL_REASONS = [['crisis', 'Active crisis - client unable to sign written documents'], ['audio', 'Telephonic / audio-only service'], ['video', 'Telehealth video service'], ['physical', 'Client physically unable to sign'], ['minor', 'Minor - parent/guardian consent by phone'], ['other', 'Other']];
    function verbalConsent(episodeId) {
        var st = S.consentState || {}, isMinor = !!st.IsMinor;
        var m = modal('Record verbal consent (OC-VCD-003)',
            '<div class="sub">Use only when written consent cannot be obtained now. Written consent is due within 72 hours.</div>' +
            '<div class="field"><label>Reason written consent was not obtained</label><select class="inp" id="vc-reason">' + VERBAL_REASONS.map(function (r) { return '<option value="' + r[0] + '">' + enc(r[1]) + '</option>'; }).join('') + '</select><input class="inp" id="vc-reasonx" placeholder="describe" style="display:none;margin-top:6px"></div>' +
            '<div class="row2"><div class="field"><label>ID point 1 (full legal name)</label><input class="inp" id="vc-id1" value="' + enc(st.ClientName || '') + '"></div><div class="field"><label>ID point 2 (DOB, last 4, address)</label><input class="inp" id="vc-id2"></div></div>' +
            '<div class="row2"><div class="field"><label>Person giving consent</label><input class="inp" id="vc-person" value="' + (isMinor ? '' : enc(st.ClientName || '')) + '"></div><div class="field"><label>Relationship</label><select class="inp" id="vc-rel">' + ['Self', 'Parent', 'Legal guardian', 'Authorized representative'].map(function (r) { return '<option' + ((isMinor ? 'Parent' : 'Self') === r ? ' selected' : '') + '>' + r + '</option>'; }).join('') + '</select></div></div>' +
            '<div class="field"><label>Method</label>' + chips('vc-method', ['In-person', 'Phone', 'Video'].map(function (x) { return { key: x, label: x }; }), 'In-person') + '</div>' +
            '<div class="field"><label class="inter" id="vc-read-row" style="cursor:pointer"><span class="cb" id="vc-read-cb"></span><span class="t">I read the OneCare consent statement and the person indicated understanding and agreement</span></label></div>' +
            '<div class="sub">Your saved e-signature is attached as the attesting worker.</div>',
            [btn('Cancel', 'modal-close', ''), btn('Record', 'consent-verbal-go', 'primary')]);
        var method = 'In-person', read = false;
        m.querySelector('#vc-reason').addEventListener('change', function (e) { m.querySelector('#vc-reasonx').style.display = e.target.value === 'other' ? '' : 'none'; });
        m.querySelectorAll('.chip[data-name=vc-method]').forEach(function (c) { c.addEventListener('click', function (e) { e.stopPropagation(); method = c.getAttribute('data-arg'); m.querySelectorAll('.chip[data-name=vc-method]').forEach(function (x) { x.classList.toggle('on', x === c); }); }); });
        m.querySelector('#vc-read-row').addEventListener('click', function () { read = !read; m.querySelector('#vc-read-row').classList.toggle('on', read); m.querySelector('#vc-read-cb').innerHTML = read ? '&#10003;' : ''; });
        m.querySelector('[data-act=consent-verbal-go]').addEventListener('click', function () {
            var person = m.querySelector('#vc-person').value.trim();
            if (!person) { toast('Name of the person giving consent is required.', true); return; }
            if (!read) { toast('Confirm the consent statement was read.', true); return; }
            var fd = { reason: { v: m.querySelector('#vc-reason').value, x: m.querySelector('#vc-reasonx').value }, identity: { id1: m.querySelector('#vc-id1').value, id2: m.querySelector('#vc-id2').value },
                details: { person: person, relationship: m.querySelector('#vc-rel').value, method: method, when: new Date().toISOString().slice(0, 16), services: ['Mobile Crisis Management Services', 'Release of PHI for care coordination', 'AI-assisted triage and documentation'], support: '', referral: '' }, statementRead: true, channel: 'field' };
            m.remove();
            busy(api('/Services/CrisisEpisodes/Consent/RecordVerbal', { EpisodeId: episodeId, FieldData: JSON.stringify(fd) })).then(function (st2) { toast('Verbal consent recorded - written consent due in 72 hours'); renderConsent(st2); }).catch(function () { });
        });
    }

    // ------------------------------------------------------------------ events
    app.addEventListener('click', function (ev) {
        var el = ev.target.closest('[data-act]'); if (!el || el.disabled) return;
        var act = el.getAttribute('data-act'), arg = el.getAttribute('data-arg'), name = el.getAttribute('data-name');
        var A = S.assess, N = S.note;
        switch (act) {
            case 'go': go(arg); break;
            case 'login': doLogin(); break;
            case 'search': doSearch(); break;
            case 'set': if (name && name.indexOf('vc-') === 0) break; if (name && name.indexOf('se-') === 0) { S.start[name] = arg; el.parentNode.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('on', c === el); }); break; }
                if (name === 'contact') { N.d.ContactMethod = arg; el.parentNode.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('on', c === el); }); break; }
                collectInputs(); if (name === 'ChildrenInHome') A.e.ChildrenInHome = arg === 'Yes'; else A.e[name] = A.e[name] === arg && name !== 'FormType' ? null : arg;
                if (name === 'FormType') { A.e.Location = null; A.e.AgeBand = null; }
                renderAssess(A.clientId, String(A.i), A.id); evaluate(); break;
            case 'setnum': collectInputs(); A.e[name] = +arg; renderAssess(A.clientId, String(A.i), A.id); evaluate();
                setTimeout(function () { assessNext(); }, 220); break;
            case 'toggle': collectInputs(); var cur = split(A.e[name]), ix = cur.indexOf(arg); if (ix >= 0) cur.splice(ix, 1); else cur.push(arg); A.e[name] = cur.join('|') || null; renderAssess(A.clientId, String(A.i), A.id); evaluate(); break;
            case 'need': A.needsOff[arg] = !A.needsOff[arg]; renderAssess(A.clientId, String(A.i), A.id); break;
            case 'goal': A.goalsOff[+arg] = !A.goalsOff[+arg]; renderAssess(A.clientId, String(A.i), A.id); break;
            case 'assess-next': assessNext(); break;
            case 'assess-back': assessBack(); break;
            case 'assess-complete': assessComplete(); break;
            case 'assess-sign': assessSign(); break;
            case 'consent-invite': var em = document.getElementById('consent-email').value.trim(); if (!em) { toast('Enter the client email.', true); break; }
                busy(api('/Services/CrisisEpisodes/Consent/SendInvite', { EpisodeId: +arg, Email: em })).then(function (st) { toast('Link sent to ' + em); renderConsent(st); }).catch(function () { }); break;
            case 'consent-verbal': verbalConsent(+arg); break;
            case 'consent-refuse': var mr = modal('Client refused this form', '<input class="inp" id="refuse-reason" placeholder="reason, in the client\'s words">', [btn('Cancel', 'modal-close', ''), btn('Record refusal', 'consent-refuse-go', 'danger')]);
                mr.querySelector('[data-act=consent-refuse-go]').addEventListener('click', function () { var reason = document.getElementById('refuse-reason').value.trim(); if (!reason) { toast('A reason is required.', true); return; } mr.remove(); busy(api('/Services/CrisisEpisodes/Consent/RecordRefusal', { RequestId: +arg, Reason: reason })).then(function (st) { renderConsent(st); }).catch(function () { }); }); break;
            case 'start-go': startGo(arg); break;
            case 'inter': var p = arg.split('|'), it = N.d.Goals[+p[0]].Interventions[+p[1]]; if (ev.target.closest('input')) break; it.Provided = !it.Provided; renderNote(N.activityId, String(N.i)); if (it.Provided) { var inp = app.querySelector('[data-act-input=inter-detail][data-arg="' + arg + '"]'); if (inp) inp.focus(); } break;
            case 'ans': var q = arg.split('|'), g = N.d.Goals[+q[0]], qq = findQ(g, +q[1], +q[2]); if (qq) { app.querySelectorAll('[data-act-input]').forEach(applyInput); qq.Answer = qq.Answer === q.slice(3).join('|') && qq.AnswerType === 'Pick' ? null : q.slice(3).join('|'); renderNote(N.activityId, String(N.i)); } break;
            case 'safety': N.d.SafetyConcern = arg === 'Yes'; var stx = document.getElementById('safety-text'); if (stx) N.d.SafetyText = stx.value; renderNote(N.activityId, String(N.i)); break;
            case 'lta': N.d.LongTermAdmission = arg === 'Yes'; renderNote(N.activityId, String(N.i)); break;
            case 'note-next': noteNext(); break;
            case 'note-sign': noteSign(); break;
        }
    });
    document.body.addEventListener('click', function (ev) { var el = ev.target.closest('[data-act=modal-close]'); if (el) { var m = el.closest('.modal-bg'); if (m) m.remove(); } });
    app.addEventListener('change', function (ev) { var el = ev.target.closest('[data-act-input]'); if (el) applyInput(el); });
    app.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && ev.target.id === 'q') doSearch(); if (ev.key === 'Enter' && ev.target.id === 'p') doLogin(); });

    if (!location.hash) location.hash = S.user ? '#/home' : '#/login';
    route();
})();
