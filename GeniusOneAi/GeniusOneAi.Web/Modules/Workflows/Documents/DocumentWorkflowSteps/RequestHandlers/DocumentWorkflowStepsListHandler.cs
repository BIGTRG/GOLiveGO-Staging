using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<GeniusOneAi.Workflows.DocumentWorkflowStepsRow>;
using MyRow = GeniusOneAi.Workflows.DocumentWorkflowStepsRow;

namespace GeniusOneAi.Workflows
{
    public interface IDocumentWorkflowStepsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DocumentWorkflowStepsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDocumentWorkflowStepsListHandler
    {
        public DocumentWorkflowStepsListHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void OnReturn()
        {
            base.OnReturn();
            foreach (var row in Response.Entities)
            {
                if (row.StepPerformerType == "Staff")   { row.PerformerName = row.StepPerformerStaffFullName;   }
                if (row.StepPerformerType == "Patient") { row.PerformerName = row.StepPerformerPatientFullName; }
            }



        }
    }
}