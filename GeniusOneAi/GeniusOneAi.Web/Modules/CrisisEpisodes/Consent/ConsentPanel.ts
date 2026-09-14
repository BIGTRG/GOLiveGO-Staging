namespace GeniusOneAi.CrisisEpisodes {

    /// Intake consent panel rendered inside the episode dialog: one row per form, status, actions (sign in person, send link, verbal, refused, view).
    export class ConsentPanel {
        private state: ConsentState;
        constructor(private $host: JQuery, private episodeId: number, private onChange?: (s: ConsentState) => void) {
            $(window).on('message.consent' + episodeId, (ev: any) => { var d = ev.originalEvent && ev.originalEvent.data; if (d && d.consentSigned) this.reload(); });
        }
        destroy() { $(window).off('message.consent' + this.episodeId); }
        reload() { ConsentService.State({ EpisodeId: this.episodeId }, s => { this.state = s; this.render(); if (this.onChange) this.onChange(s); }); }

        private static statusLabel(s: string) { return ({ Pending: 'Not signed', Sent: 'Link sent', Signed: 'Signed', Verbal: 'Verbal consent', Refused: 'Declined (documented)' } as any)[s] || s; }
        private render() {
            var s = this.state, enc = Q.htmlEncode, h: string[] = [];
            var tone = s.Complete ? 'ok' : s.Verbal ? 'warn' : 'bad';
            h.push('<div class="cp-head"><b>Intake consent</b><span class="cp-pill ' + tone + '">' + enc(s.Summary) + '</span></div>');
            h.push('<table class="cp-table"><thead><tr><th>Form</th><th>Status</th><th>Signed by</th><th></th></tr></thead><tbody>');
            (s.Items || []).forEach(i => {
                var when = i.SignedAt ? Q.formatDate(Q.parseISODateTime(i.SignedAt), 'MM/dd/yyyy HH:mm') : '';
                var by = i.Status === 'Signed' ? enc(i.SignerName || '') + (i.SignerRelationship && i.SignerRelationship !== 'Self' ? ' (' + enc(i.SignerRelationship) + ')' : '') + ' - ' + when + (i.Channel === 'Email' ? ' - by link' : ' - in person')
                    : i.Status === 'Verbal' ? enc(i.WorkerName || '') + ' - written due ' + (i.WrittenDueAt ? Q.formatDate(Q.parseISODateTime(i.WrittenDueAt), 'MM/dd HH:mm') : '')
                    : i.Status === 'Refused' ? enc(i.RefusalReason || '') + ' - ' + when : (i.Status === 'Sent' && s.Invite ? 'to ' + enc(s.Invite.SentTo) : '');
                var act = '';
                if (i.Status !== 'Signed' && i.Status !== 'Refused' && i.Code !== 'OC-VCD-003') {
                    act += '<a class="btn btn-xs btn-primary cp-sign" href="' + Q.resolveUrl('~/CrisisEpisodes/Consent/Sign/' + i.RequestId) + '" target="_blank"><i class="fa fa-pencil"></i> Sign in person</a> ';
                    if (i.Code !== 'OC-CST-002') act += '<a class="btn btn-xs btn-default cp-refuse" data-id="' + i.RequestId + '" data-code="' + enc(i.Code) + '">Declined</a> ';
                }
                if (i.Status === 'Signed' || i.Status === 'Verbal' || i.Status === 'Refused') act += '<a class="btn btn-xs btn-default" href="' + Q.resolveUrl('~/CrisisEpisodes/Consent/Document/' + i.RequestId) + '" target="_blank"><i class="fa fa-file-text-o"></i> View</a>';
                h.push('<tr><td><b>' + enc(i.Code) + '</b><div class="cp-title">' + enc(i.Title) + '</div></td><td><span class="cp-st ' + enc(i.Status) + '">' + enc(ConsentPanel.statusLabel(i.Status)) + '</span></td><td class="cp-by">' + by + '</td><td class="cp-act">' + act + '</td></tr>');
            });
            h.push('</tbody></table>');
            var open = (s.Items || []).some(i => i.RequiredAtIntake && i.Status !== 'Signed' && i.Status !== 'Refused');
            h.push('<div class="cp-actions">');
            if (open) {
                h.push('<button type="button" class="btn btn-sm btn-default cp-link"><i class="fa fa-envelope-o"></i> Send signing link by email</button> ');
                if (!s.Verbal) h.push('<button type="button" class="btn btn-sm btn-default cp-verbal"><i class="fa fa-phone"></i> Record verbal consent (OC-VCD-003)</button> ');
            }
            if (s.Invite && !s.Invite.UsedAt) h.push('<span class="cp-invite">Link sent to ' + enc(s.Invite.SentTo) + ' ' + Q.formatDate(Q.parseISODateTime(s.Invite.SentAt), 'MM/dd HH:mm') + ', expires ' + Q.formatDate(Q.parseISODateTime(s.Invite.ExpiresAt), 'MM/dd HH:mm') + (s.Invite.LockedAt ? ' - LOCKED after failed identity checks' : '') + '</span>');
            h.push('</div>');
            if (s.Audit && s.Audit.length) h.push('<details class="cp-audit"><summary>Audit trail (' + s.Audit.length + ')</summary><ul>' + s.Audit.map(a => '<li>' + enc(a) + '</li>').join('') + '</ul></details>');
            this.$host.html(h.join(''));
            this.$host.find('.cp-link').click(() => { var d = new SendLinkDialog(); d.state = s; d.onDone = () => this.reload(); d.dialogOpen(); });
            this.$host.find('.cp-verbal').click(() => { var d = new RecordVerbalDialog(); d.state = s; d.onDone = () => this.reload(); d.dialogOpen(); });
            this.$host.find('.cp-refuse').click(ev => {
                var id = $(ev.currentTarget).data('id'), code = $(ev.currentTarget).data('code');
                var d = new RefusalDialog(); d.requestId = id; d.code = code; d.onDone = () => this.reload(); d.dialogOpen();
            });
        }
    }

    @Serenity.Decorators.registerClass()
    export class SendLinkDialog extends Serenity.TemplatedDialog<any> {
        state: ConsentState; onDone: () => void;
        protected getTemplate() {
            return '<div class="start-enc"><div class="se-row"><label>Send the signing link to</label><input type="email" class="form-control" id="~_Email" placeholder="client@example.com"></div>' +
                '<div class="se-sub">The client gets one link that works for 72 hours. They confirm date of birth and the last 4 digits of the phone on file, then review and sign each outstanding form. Every signature stores time, IP and a SHA-256 hash of the document.</div>' +
                '<div class="se-actions"><button type="button" class="btn btn-primary se-send"><i class="fa fa-envelope-o"></i> Send link</button> <button type="button" class="btn btn-default se-cancel">Cancel</button></div></div>';
        }
        protected getDialogOptions() { var o = super.getDialogOptions(); o.title = 'Send consent forms by email'; o.width = 520; return o; }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.byId('Email').val(this.state.ClientEmail || '');
            this.element.find('.se-cancel').click(() => this.dialogClose());
            this.element.find('.se-send').click(() => {
                ConsentService.SendInvite({ EpisodeId: this.state.EpisodeId, Email: this.byId('Email').val() as string }, () => { Q.notifySuccess('Signing link sent'); this.dialogClose(); this.onDone(); });
            });
        }
    }

    @Serenity.Decorators.registerClass()
    export class RefusalDialog extends Serenity.TemplatedDialog<any> {
        requestId: number; code: string; onDone: () => void;
        protected getTemplate() {
            return '<div class="start-enc"><div class="se-sub" id="~_Info"></div><div class="se-row"><label>Reason given by the client (or "no reason given")</label><textarea class="form-control" id="~_Reason" rows="3"></textarea></div>' +
                '<div class="se-actions"><button type="button" class="btn btn-danger se-ok">Document refusal</button> <button type="button" class="btn btn-default se-cancel">Cancel</button></div></div>';
        }
        protected getDialogOptions() { var o = super.getDialogOptions(); o.title = 'Client declined to sign'; o.width = 480; return o; }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.byId('Info').text(this.code === 'OC-NPP-004' ? 'A good-faith attempt to obtain acknowledgment of the Notice of Privacy Practices is sufficient under HIPAA. Record the date, time and reason.' : 'Declining this authorization does not affect treatment. Record the reason; no information will be disclosed under ' + this.code + '.');
            this.element.find('.se-cancel').click(() => this.dialogClose());
            this.element.find('.se-ok').click(() => ConsentService.RecordRefusal({ RequestId: this.requestId, Reason: this.byId('Reason').val() as string }, () => { this.dialogClose(); this.onDone(); }));
        }
    }

    @Serenity.Decorators.registerClass()
    export class RecordVerbalDialog extends Serenity.TemplatedDialog<any> {
        state: ConsentState; onDone: () => void;
        protected getTemplate() {
            var opt = (l: string[]) => l.map(o => '<option>' + Q.htmlEncode(o) + '</option>').join('');
            return '<div class="start-enc cp-verbal-form">' +
                '<div class="se-sub">OC-VCD-003. Use only when written consent cannot be obtained now. Written consent is due within 72 hours; the episode shows the deadline until the forms are signed.</div>' +
                '<div class="se-row"><label>Reason written consent was not obtained</label><select class="form-control" id="~_Reason">' + opt(['Active crisis situation - client unable to sign written documents', 'Telephonic / audio-only service delivery', 'Telehealth video service delivery', 'Client physically unable to sign (medical condition, restraint, transport)', 'Minor - parent/guardian consent obtained by phone', 'Other']) + '</select><input type="text" class="form-control cp-other" id="~_ReasonX" placeholder="describe" style="display:none;margin-top:4px"></div>' +
                '<div class="se-row half"><div><label>ID point 1 (e.g., full legal name)</label><input type="text" class="form-control" id="~_Id1"></div><div><label>ID point 2 (e.g., DOB, SSN last 4, address)</label><input type="text" class="form-control" id="~_Id2"></div></div>' +
                '<div class="se-row half"><div><label>Person giving verbal consent</label><input type="text" class="form-control" id="~_Person"></div><div><label>Relationship to client</label><select class="form-control" id="~_Rel">' + opt(['Self', 'Parent', 'Legal guardian', 'Authorized representative']) + '</select></div></div>' +
                '<div class="se-row half"><div><label>Method</label><select class="form-control" id="~_Method">' + opt(['Phone', 'Video', 'In-person']) + '</select></div><div><label>Date / time of consent</label><input type="datetime-local" class="form-control" id="~_When"></div></div>' +
                '<div class="se-row"><label>Services consented to</label>' + ['Mobile Crisis Management Services', 'Release of PHI for care coordination', 'AI-assisted triage and documentation', 'Telehealth / telephonic service delivery'].map(s => '<label class="cp-chk"><input type="checkbox" class="cp-svc" value="' + Q.htmlEncode(s) + '" checked> ' + Q.htmlEncode(s) + '</label>').join('') + '</div>' +
                '<div class="se-row half"><div><label>Support person contacted (optional)</label><input type="text" class="form-control" id="~_Support"></div><div><label>Referral to (optional)</label><input type="text" class="form-control" id="~_Referral"></div></div>' +
                '<div class="se-row"><label>Consent statement read to the client</label><div class="cp-quote">"My name is [Worker Name], and I am a [credential/title] with OneCare Behavioral Health Services. I am calling regarding crisis services. With your permission, I would like to proceed with a crisis assessment and provide you with support. You have the right to refuse services at any time. The information you share will be kept confidential in accordance with state and federal law, except in situations involving imminent danger to yourself or others, suspected abuse or neglect, or court order. Do you understand and agree to proceed?"</div><label class="cp-chk"><input type="checkbox" id="~_Read"> I read this statement and the person indicated understanding and agreement</label></div>' +
                '<div class="se-row"><label>Worker attestation signature (leave blank to use your saved eSignature)</label><div class="cp-padwrap"><canvas id="~_Pad" height="120"></canvas></div><a class="cp-clear" href="#">clear</a></div>' +
                '<div class="se-actions"><button type="button" class="btn btn-primary se-ok"><i class="fa fa-check"></i> Record verbal consent</button> <button type="button" class="btn btn-default se-cancel">Cancel</button></div></div>';
        }
        protected getDialogOptions() { var o = super.getDialogOptions(); o.title = 'Record verbal consent (OC-VCD-003)'; o.width = 680; return o; }
        private pad: any;
        protected onDialogOpen() {
            super.onDialogOpen();
            var now = new Date(); var p2 = (n: number) => (n < 10 ? '0' : '') + n;
            (this.byId('When')[0] as HTMLInputElement).value = now.getFullYear() + '-' + p2(now.getMonth() + 1) + '-' + p2(now.getDate()) + 'T' + p2(now.getHours()) + ':' + p2(now.getMinutes());
            this.byId('Person').val(this.state.IsMinor ? '' : this.state.ClientName); if (this.state.IsMinor) this.byId('Rel').val('Parent');
            this.byId('Reason').change(() => this.byId('ReasonX').toggle(this.byId('Reason').val() === 'Other'));
            var canvas = this.byId('Pad')[0] as HTMLCanvasElement; canvas.width = canvas.parentElement.clientWidth || 600;
            var SP = (window as any).SignaturePad; if (SP) { this.pad = new SP(canvas, { backgroundColor: 'rgb(255,255,255)' }); }
            this.element.find('.cp-clear').click(ev => { ev.preventDefault(); if (this.pad) this.pad.clear(); });
            this.element.find('.se-cancel').click(() => this.dialogClose());
            this.element.find('.se-ok').click(() => {
                if (!(this.byId('Read')[0] as HTMLInputElement).checked) { Q.notifyWarning('Confirm the consent statement was read.'); return; }
                var svc: string[] = []; this.element.find('.cp-svc:checked').each((_, e) => { svc.push((e as HTMLInputElement).value); });
                var reasonMap: any = { 'Active crisis situation - client unable to sign written documents': 'crisis', 'Telephonic / audio-only service delivery': 'audio', 'Telehealth video service delivery': 'video', 'Client physically unable to sign (medical condition, restraint, transport)': 'physical', 'Minor - parent/guardian consent obtained by phone': 'minor', 'Other': 'other' };
                var fd = {
                    reason: { v: reasonMap[this.byId('Reason').val() as string], x: this.byId('ReasonX').val() },
                    identity: { id1: this.byId('Id1').val(), id2: this.byId('Id2').val() },
                    details: { person: this.byId('Person').val(), relationship: this.byId('Rel').val(), method: this.byId('Method').val(), when: this.byId('When').val(), services: svc, support: this.byId('Support').val(), referral: this.byId('Referral').val() },
                    statementRead: true
                };
                ConsentService.RecordVerbal({ EpisodeId: this.state.EpisodeId, FieldData: JSON.stringify(fd), WorkerSignatureImage: this.pad && !this.pad.isEmpty() ? this.pad.toDataURL('image/png') : null }, () => { Q.notifySuccess('Verbal consent recorded - written consent due in 72 hours'); this.dialogClose(); this.onDone(); });
            });
        }
    }
}
