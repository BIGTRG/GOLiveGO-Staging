namespace GeniusOneAi.CrisisEpisodes.Pages
{
    /// <summary>Self-contained HTML shell for the signing experience (in-person handoff and emailed-link portal). No Serenity dependency on purpose.</summary>
    public static class ConsentPages
    {
        public static string SignPage(string modelJson, bool inApp)
        {
            return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"robots\" content=\"noindex\"><title>OneCare - Consent</title>" +
                "<style>" + Services.ConsentService.DocCss + LiveCss + "</style></head><body><div id=\"app\"><div class=\"cf-doc cf-center\">Loading...</div></div>" +
                "<script src=\"/Scripts/signature_pad.min.js\"></script><script>window.__consent = " + modelJson.Replace("</", "<\\/") + ";</script><script>" + Js + "</script></body></html>";
        }
        private const string LiveCss = @"
body{background:#eef2f6}.cf-live{background:#fff;box-shadow:0 2px 14px rgba(16,42,67,.08);border-radius:6px;margin:18px auto}.cf-center{background:#fff;box-shadow:0 2px 14px rgba(16,42,67,.08);border-radius:6px;margin:40px auto;max-width:560px;text-align:left}
.cf-summary{background:#f7f9fc;border-left:4px solid #1b5e9e;padding:8px 12px;margin:8px 0 12px;font-size:13px}.cf-progress{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#1b5e9e;margin-top:10px}
.cf-row{margin:10px 0}.cf-row label,.cf-kv-lbl{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#5a6b7d;margin-bottom:3px}.cf-in{width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid #c9d3de;border-radius:4px;font-size:14px;font-family:inherit}
.cf-opt{display:block;margin:4px 0;font-size:13px}.cf-opt input[type=checkbox],.cf-opt input[type=radio]{margin-right:6px;transform:scale(1.2)}.cf-opt .cf-in{width:auto;display:inline-block;margin-left:6px;padding:4px 8px}.cf-other .cf-in{width:60%}.cf-opt-tag{font-size:9px;color:#98a4b3;text-transform:none}
.cf-padwrap{border:1px dashed #98a4b3;border-radius:4px;background:#fff}.cf-padwrap canvas{width:100%;height:160px;display:block;touch-action:none}.cf-padtools{margin-top:4px;font-size:11px;color:#5a6b7d}.cf-hint{font-size:11px;color:#5a6b7d}
.cf-btn{display:inline-block;background:#1b5e9e;color:#fff;border:0;border-radius:4px;padding:11px 20px;font-size:15px;cursor:pointer;text-decoration:none}.cf-btn:disabled{opacity:.6}.cf-btn-lite{background:#eef2f6;color:#1b3a5c}.cf-actions{margin-top:14px}.cf-err{color:#a33;min-height:18px;margin-top:8px;font-size:13px}
.cf-worker{margin-top:16px;padding-top:12px;border-top:1px solid #d5dde6}.cf-check{width:56px;height:56px;border-radius:50%;background:#1f7a4d;color:#fff;font-size:30px;text-align:center;line-height:56px;margin:0 auto 10px}
@media (max-width:640px){.cf-doc{padding:16px}.cf-head{flex-direction:column}.cf-code{text-align:left;margin-top:4px}.cf-client-tbl th,.cf-client-tbl td{display:block;width:auto}}
";
        private const string Js = @"
(function(){
  var M = window.__consent; var app = document.getElementById('app');
  function h(s){ return String(s == null ? '' : s).replace(/[&<>""]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','""':'&quot;'}[c]; }); }
  function csrf(){ var m = document.cookie.match(/(?:^|;\s*)CSRF-TOKEN=([^;]+)/); return m ? decodeURIComponent(m[1]) : ''; }
  function post(url, body){ return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrf() }, body: JSON.stringify(body), credentials: 'same-origin' }).then(function(r){ return r.json(); }); }
  function pad(canvas){ var p = new SignaturePad(canvas, { backgroundColor: 'rgb(255,255,255)', penColor: '#102a43' }); function fit(){ var ratio = Math.max(window.devicePixelRatio || 1, 1); var w = canvas.offsetWidth; canvas.width = w * ratio; canvas.height = 160 * ratio; canvas.getContext('2d').scale(ratio, ratio); p.clear(); } fit(); return p; }

  // ---- field schema renderer (inputs) + collector
  function renderFields(schema, host, prefill){
    schema.forEach(function(f){
      var slot = host.querySelector('[data-slot=""fields-' + f.key + '""]'); if (!slot) return;
      var d = f['default'];
      if (f.type === 'checks') {
        slot.innerHTML = f.options.map(function(o){ return '<label class=""cf-opt""><input type=""checkbox"" data-k=""' + h(f.key) + '"" value=""' + h(o) + '""' + (d && d.indexOf(o) >= 0 ? ' checked' : '') + '> ' + h(o) + '</label>'; }).join('') +
          (f.other ? '<label class=""cf-opt cf-other"">Other: <input type=""text"" class=""cf-in"" data-other=""' + h(f.key) + '"" placeholder=""describe""></label>' : '');
      } else if (f.type === 'radio') {
        slot.innerHTML = f.options.map(function(o){ return '<label class=""cf-opt""><input type=""radio"" name=""r_' + h(f.key) + '"" data-k=""' + h(f.key) + '"" value=""' + h(o.v) + '""' + (d === o.v ? ' checked' : '') + '> ' + h(o.t) + (o.input ? ' <input type=""' + h(o.input) + '"" class=""cf-in cf-radio-x"" data-for=""' + h(o.v) + '"">' : '') + '</label>'; }).join('');
      } else if (f.type === 'orgs') {
        var rows = ''; for (var i = 0; i < (f.rows || 2); i++) { var dv = (d && d[i]) || {}; rows += '<tr><td><input type=""text"" class=""cf-in"" data-org=""' + h(f.key) + '"" data-i=""' + i + '"" data-p=""name"" value=""' + h(dv.name) + '"" placeholder=""Name / organization""></td><td><input type=""text"" class=""cf-in"" data-org=""' + h(f.key) + '"" data-i=""' + i + '"" data-p=""contact"" value=""' + h(dv.contact) + '"" placeholder=""Address / phone / fax""></td></tr>'; }
        slot.innerHTML = '<table class=""cf-tbl""><tr><th>Name / organization</th><th>Address / phone / fax</th></tr>' + rows + '</table>';
      } else if (f.type === 'kv') {
        slot.innerHTML = '<table class=""cf-tbl"">' + f.items.map(function(it){ var inp = it.options ? '<select class=""cf-in"" data-kv=""' + h(f.key) + '"" data-k=""' + h(it.k) + '"">' + it.options.map(function(o){ return '<option>' + h(o) + '</option>'; }).join('') + '</select>' : it.checks ? it.checks.map(function(o){ return '<label class=""cf-opt""><input type=""checkbox"" data-kvc=""' + h(f.key) + '"" data-k=""' + h(it.k) + '"" value=""' + h(o) + '"" checked> ' + h(o) + '</label>'; }).join('') : '<input type=""text"" class=""cf-in"" data-kv=""' + h(f.key) + '"" data-k=""' + h(it.k) + '"">'; return '<tr><th>' + h(it.t) + (it.optional ? ' <span class=""cf-opt-tag"">optional</span>' : '') + '</th><td>' + inp + '</td></tr>'; }).join('') + '</table>';
      } else {
        var pv = f.prefill === 'nextOfKin' ? (prefill.NextOfKin || '') : '';
        slot.innerHTML = '<label class=""cf-kv-lbl"">' + h(f.label) + '</label><input type=""text"" class=""cf-in"" data-text=""' + h(f.key) + '"" value=""' + h(pv) + '"">';
      }
    });
  }
  function collect(schema, host){
    var out = {};
    schema.forEach(function(f){
      if (f.type === 'checks') { var v = []; host.querySelectorAll('input[type=checkbox][data-k=""' + f.key + '""]:checked').forEach(function(i){ v.push(i.value); }); var o = host.querySelector('[data-other=""' + f.key + '""]'); if (o && o.value.trim()) v.push('Other: ' + o.value.trim()); out[f.key] = v; }
      else if (f.type === 'radio') { var r = host.querySelector('input[type=radio][data-k=""' + f.key + '""]:checked'); if (r) { var x = host.querySelector('.cf-radio-x[data-for=""' + r.value + '""]'); out[f.key] = { v: r.value, x: x ? x.value : null }; } else out[f.key] = null; }
      else if (f.type === 'orgs') { var arr = []; host.querySelectorAll('input[data-org=""' + f.key + '""][data-p=""name""]').forEach(function(i){ var c = host.querySelector('input[data-org=""' + f.key + '""][data-i=""' + i.getAttribute('data-i') + '""][data-p=""contact""]'); if (i.value.trim() || (c && c.value.trim())) arr.push({ name: i.value.trim(), contact: c ? c.value.trim() : '' }); }); out[f.key] = arr; }
      else if (f.type === 'kv') { var o2 = {}; host.querySelectorAll('[data-kv=""' + f.key + '""]').forEach(function(i){ o2[i.getAttribute('data-k')] = i.value; }); var ck = {}; host.querySelectorAll('input[data-kvc=""' + f.key + '""]').forEach(function(i){ var k = i.getAttribute('data-k'); ck[k] = ck[k] || []; if (i.checked) ck[k].push(i.value); }); Object.keys(ck).forEach(function(k){ o2[k] = ck[k]; }); out[f.key] = o2; }
      else { var t = host.querySelector('[data-text=""' + f.key + '""]'); out[f.key] = t ? t.value : ''; }
    });
    return out;
  }

  // ---- one form (body + fields + signature) -> calls onSign(payload)
  function renderForm(f, ctx, onSign, onSkip){
    var schema = []; try { schema = JSON.parse(f.FieldSchema || '[]'); } catch (e) {}
    var needsWorker = (f.SignerRoles || ctx.SignerRoles || '').indexOf('Worker') >= 0 && ctx.mode === 'inperson';
    app.innerHTML = '<div class=""cf-doc cf-live"">' +
      '<div class=""cf-head""><div><div class=""cf-org"">OneCare Behavioral Health Services</div><div class=""cf-sub"">Mobile Crisis Management - Licensed by NC DHSR</div></div><div class=""cf-code""><b>' + h(f.Code) + '</b><br>Rev. ' + h(f.Revision) + '</div></div>' +
      (ctx.progress ? '<div class=""cf-progress"">' + h(ctx.progress) + '</div>' : '') +
      '<h1>' + h(f.Title) + '</h1><div class=""cf-cite"">' + h(f.Citation) + '</div>' +
      '<div class=""cf-summary""><b>In plain language:</b> ' + h(f.Summary) + '</div>' +
      '<div class=""cf-body"">' + f.BodyHtml + '</div>' +
      '<section class=""cf-sec cf-sign""><h3>Sign</h3>' +
      '<div class=""cf-row""><label>Printed name of the person signing</label><input type=""text"" id=""signerName"" class=""cf-in"" value=""' + h(ctx.defaultName || '') + '"" autocomplete=""off""></div>' +
      '<div class=""cf-row""><label>Relationship to client</label><select id=""signerRel"" class=""cf-in""><option>Self</option><option>Parent</option><option>Legal guardian</option><option>Authorized representative</option></select>' + (ctx.IsMinor ? '<div class=""cf-hint"">Client is a minor - a parent or legal guardian signs.</div>' : '') + '</div>' +
      '<div class=""cf-row""><label>Signature</label><div class=""cf-padwrap""><canvas id=""sigpad""></canvas></div><div class=""cf-padtools""><button type=""button"" class=""cf-btn cf-btn-lite"" id=""sigClear"">Clear</button> <span class=""cf-hint"">Sign with your finger or stylus. By signing you agree this electronic signature has the same effect as a handwritten one (NC UETA).</span></div></div>' +
      (needsWorker ? '<div class=""cf-row cf-worker""><label>Crisis worker signature</label><div class=""cf-padwrap""><canvas id=""wpad""></canvas></div><div class=""cf-padtools""><button type=""button"" class=""cf-btn cf-btn-lite"" id=""wClear"">Clear</button> <span class=""cf-hint"">Leave blank to use the eSignature saved on your account.</span></div></div>' : '') +
      '<div class=""cf-err"" id=""err""></div>' +
      '<div class=""cf-actions""><button type=""button"" class=""cf-btn"" id=""signBtn"">Sign ' + h(f.Code) + '</button> ' + (onSkip ? '<button type=""button"" class=""cf-btn cf-btn-lite"" id=""skipBtn"">Sign this one later</button>' : '') + '</div>' +
      '</section></div>';
    renderFields(schema, app.querySelector('.cf-body'), ctx);
    if (ctx.IsMinor) document.getElementById('signerRel').value = 'Parent';
    var sp = pad(document.getElementById('sigpad')); document.getElementById('sigClear').onclick = function(){ sp.clear(); };
    var wp = null; if (needsWorker) { wp = pad(document.getElementById('wpad')); document.getElementById('wClear').onclick = function(){ wp.clear(); }; }
    if (onSkip) document.getElementById('skipBtn').onclick = onSkip;
    document.getElementById('signBtn').onclick = function(){
      var err = document.getElementById('err'); err.textContent = '';
      var name = document.getElementById('signerName').value.trim(); if (!name) { err.textContent = 'Type the printed name of the person signing.'; return; }
      if (sp.isEmpty()) { err.textContent = 'Please sign in the box.'; return; }
      var payload = { RequestId: f.RequestId, SignerName: name, SignerRelationship: document.getElementById('signerRel').value, SignatureImage: sp.toDataURL('image/png'), FieldData: JSON.stringify(collect(schema, app.querySelector('.cf-body'))), WorkerSignatureImage: wp && !wp.isEmpty() ? wp.toDataURL('image/png') : null };
      document.getElementById('signBtn').disabled = true;
      onSign(payload, function(msg){ document.getElementById('signBtn').disabled = false; err.textContent = msg; });
    };
    window.scrollTo(0, 0);
  }
  function done(title, text, link, linkText){ app.innerHTML = '<div class=""cf-doc cf-center""><div class=""cf-check"">&#10003;</div><h1>' + h(title) + '</h1><p>' + h(text) + '</p>' + (link ? '<p><a class=""cf-btn"" href=""' + link + '"">' + h(linkText) + '</a></p>' : '') + '</div>'; }

  // ---- in-person (authenticated) mode
  if (M.Mode === 'inperson') {
    if (!M.NeedsClient) { done('Already ' + (M.Status === 'Refused' ? 'documented' : 'signed'), M.Code + ' for ' + M.ClientName + ' is ' + M.Status.toLowerCase() + '.', '/CrisisEpisodes/Consent/Document/' + M.RequestId, 'View the document'); return; }
    renderForm(M, { mode: 'inperson', IsMinor: M.IsMinor, NextOfKin: M.NextOfKin, defaultName: M.IsMinor ? '' : M.ClientName, SignerRoles: M.Code === 'OC-CST-002' ? 'Client,Worker' : 'Client', progress: 'Hand the device to the client. Episode #' + M.EpisodeId + ' - ' + M.ClientName }, function(payload, fail){
      post('/Services/CrisisEpisodes/Consent/SignInPerson', payload).then(function(r){
        if (r && r.Error) { fail(r.Error.Message || 'Could not sign.'); return; }
        done('Signed', M.Code + ' is signed and filed to the client\'s documents. Hand the device back to the worker.', '/CrisisEpisodes/Consent/Document/' + M.RequestId, 'View the signed document');
        setTimeout(function(){ if (window.opener) { try { window.opener.postMessage({ consentSigned: M.RequestId }, '*'); } catch (e) {} } }, 200);
      }).catch(function(){ fail('Network error - try again.'); });
    });
    return;
  }

  // ---- portal (anonymous) mode
  var token = M.Token, vt = null, forms = [];
  function identity(msg){
    app.innerHTML = '<div class=""cf-doc cf-center""><div class=""cf-org"">OneCare Behavioral Health Services</div><div class=""cf-sub"">Consent forms - secure signing</div>' +
      '<h1>Hello' + (M.ClientFirstName ? ', ' + h(M.ClientFirstName) : '') + '</h1><p>Before we show your forms, confirm it is you.</p>' +
      '<div class=""cf-row""><label>Date of birth</label><input type=""date"" id=""dob"" class=""cf-in""></div>' +
      '<div class=""cf-row""><label>Last 4 digits of your phone number</label><input type=""text"" id=""last4"" class=""cf-in"" maxlength=""4"" inputmode=""numeric"" pattern=""[0-9]*""></div>' +
      '<div class=""cf-err"" id=""err"">' + h(msg || '') + '</div><div class=""cf-actions""><button type=""button"" class=""cf-btn"" id=""go"">Continue</button></div>' +
      '<p class=""cf-fine"">This link works once and expires 72 hours after it was sent. Your information is protected under HIPAA.</p></div>';
    document.getElementById('go').onclick = function(){
      var b = document.getElementById('go'); b.disabled = true;
      post('/Consent/' + token + '/verify', { Dob: document.getElementById('dob').value, Last4: document.getElementById('last4').value.trim() }).then(function(r){
        if (!r.Ok) { identity(r.Error); return; }
        vt = r.Vt; forms = r.Forms; next();
      }).catch(function(){ b.disabled = false; document.getElementById('err').textContent = 'Network error - try again.'; });
    };
  }
  function next(skipped){
    skipped = skipped || {};
    var pending = forms.filter(function(f){ return f.NeedsClient && !skipped[f.RequestId]; });
    if (!pending.length) {
      var left = forms.filter(function(f){ return f.NeedsClient; }).length;
      done(left ? 'Thank you' : 'All forms signed', left ? left + ' form(s) were left for later. Your crisis worker can send a new link or bring them in person.' : 'Your consent forms are signed and on file with OneCare Behavioral Health Services. You may close this page.');
      return;
    }
    var f = pending[0]; var idx = forms.filter(function(x){ return !x.NeedsClient; }).length + 1;
    renderForm(f, { mode: 'portal', progress: 'Form ' + idx + ' of ' + forms.length, SignerRoles: 'Client' }, function(payload, fail){
      payload.Vt = vt; post('/Consent/' + token + '/sign', payload).then(function(r){
        if (!r.Ok) { fail(r.Error || 'Could not sign.'); return; }
        forms = r.Forms; next(skipped);
      }).catch(function(){ fail('Network error - try again.'); });
    }, function(){ skipped[f.RequestId] = true; next(skipped); });
  }
  if (!M.Ok) { app.innerHTML = '<div class=""cf-doc cf-center""><div class=""cf-org"">OneCare Behavioral Health Services</div><h1>Link not available</h1><p>' + h(M.Error) + '</p></div>'; return; }
  identity();
})();
";
    }
}
