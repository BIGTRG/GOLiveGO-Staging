
using System.Collections.Generic;
using System.Threading.Tasks;
using GeniusOneAi.Modules.Common.CustomClasses;
using GeniusOneAi.WorkerPortal.Entities;

namespace GeniusOneAi.ClientManager.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Net.Http;
    using static MVC.Views.ExternalPortal;
    using MyRow = Entities.ClientsRow;

    public class ClientsRepository : BaseRepository

    {
        private ISqlConnections sqlConnections;
        public ClientsRepository(IRequestContext context) : base(context)
        {
        
        }
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        public async Task<EligibilityResponse> CheckPatientEligibility(EligibilityRequest patient)
        {
            var getEligibility = ExternalAPIs.CheckPatientEligibility(patient);
            var result = await getEligibility;
            var resp = ExternalAPIs.FormatPatientData(result);

            var data = new EligibilityResponse
            {
                Response = resp.Response,
                isError = resp.isError,
                PolicyNumber = resp.PolicyNumber,
                GroupNumber = resp.GroupNumber,
                PlanNumber = resp.PlanNumber,
                insDob = resp.insDob,
                insGender = resp.insGender,
                insAddress1 = resp.insAddress1,
                insCity = resp.insCity,
                insState = resp.insState,
                insZipcode = resp.insZipcode
            };

            return data;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                var recordNumber = Row.RecordNumber?.Trim();

                if (string.IsNullOrWhiteSpace(recordNumber))
                {
                    return;
                }

                // Save the normalized value so leading or trailing spaces
                // cannot be used to bypass the duplicate check.
                Row.RecordNumber = recordNumber;

                var rowFields = MyRow.Fields;

                var duplicate = Connection.TryFirst<MyRow>(query =>
                {
                    query
                        .Select(rowFields.ClientId)
                        .Where(rowFields.RecordNumber == recordNumber);

                    // When editing, do not compare the patient against itself.
                    if (!IsCreate && Row.ClientId != null)
                    {
                        query.Where(rowFields.ClientId != Row.ClientId.Value);
                    }
                });

                if (duplicate != null)
                {
                    throw new ValidationError(
                        "DuplicateRecordNumber",
                        "RecordNumber",
                        "It appears that a patient is already in the system " +
                        "with this record number."
                    );
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void OnReturn()
            {
                base.OnReturn();

                foreach (var row in Response.Entities)
                {
                    if (int.TryParse(row.State, out var stateId))
                    {
                        row.State = GeniusOneBase.GetState(stateId);
                    }
                }
            }
        }
    }
}