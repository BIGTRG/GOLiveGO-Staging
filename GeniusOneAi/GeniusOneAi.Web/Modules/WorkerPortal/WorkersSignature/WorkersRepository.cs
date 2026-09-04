
namespace GeniusOneAi.WorkerPortal.Repositories
{
    using GeniusOneAi.Modules.Common.CustomClasses;
    using GeniusOneAi.Web.Modules.Common.CustomClasses;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.WorkersPortalRow;

    public class WorkersRepository : BaseRepository
    {
        public WorkersRepository(IRequestContext context)
            : base(context)
        {
        }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (Row.IsWorker == true) {
                    var emls = new Email();
                    var usrLst = emls.GetSystemUserAlerts();
                    var recs = emls.GetRecipientsEmail(usrLst);
                    foreach (var rec in recs)
                    {
                        emls.SendEmail(rec, emls.SubmittedSignatureSubject + Row.FirstName + ' ' + Row.LastName, emls.SubmittedSignatureBody);
                    }
                    return;
                };

                if (!Row.ESignatureBase64.IsNullOrEmpty()) Row.SignatureVerified = true;
            }
        }
    }
}