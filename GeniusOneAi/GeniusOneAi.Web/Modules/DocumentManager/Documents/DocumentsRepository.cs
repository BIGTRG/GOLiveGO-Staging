
namespace GeniusOneAi.DocumentManager.Repositories
{
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Hosting.Internal;
    using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Localization;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Diagnostics;
    using System.IO;
    using MyRow = Entities.DocumentsRow;

    public class DocumentsRepository: BaseRepository
    {
        protected IWebHostEnvironment HostEnvironment { get; }
        public DocumentsRepository(IRequestContext context)
            : base(context)
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
        public SaveResponse UnFinal(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //request.Entity.FileName = "temporary/" + request.Entity.FileName;
            request.Entity.FileName = request.Entity.FileName;
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.OriginalUploadDate = DateTime.Now;
                }

                if (!IsCreate)
                {

                }

            }
            protected override void AfterSave()
            {
                base.AfterSave();
                string fullSourcePath;
                string fullDestinationPath;
                
                string docPath = (string)AppDomain.CurrentDomain.GetData("ContentRootPath");
                var fileName = Row.FileName;
                if (Row.IsFinalized == 0)
                {
                    fullSourcePath = $"{docPath}\\App_Data\\DocumentRepository\\{fileName}";
                    if (!System.IO.File.Exists(fullSourcePath)) return;
                    try
                    {
                        fullDestinationPath = $"{docPath}\\App_Data\\DocumentRepository\\temporary\\{fileName}";
                        System.IO.File.Move(fullSourcePath, fullDestinationPath);
                        new SqlUpdate("Documents")
                            .Set("FileName", "temporary/"+fileName)
                            .Where(new Criteria("DocumentId") == (int)Row.DocumentId)
                            .Execute(UnitOfWork.Connection, ExpectedRows.ZeroOrOne);
                       
                    }
                    catch (System.IO.IOException e)
                    {
                        return;
                    }

                }
                //fileName = fileName.Substring(10);
                fullSourcePath = $"{docPath}\\App_Data\\DocumentRepository\\{fileName}";
                fullDestinationPath = $"{docPath}\\App_Data\\DocumentRepository\\{fileName}";
                //System.IO.File.Move(fullSourcePath, fullDestinationPath);
                //if (System.IO.File.Exists($"{docPath}\\App_Data\\DocumentRepository\\temporary\\{fileName}.meta"))
                //{
                //    try
                //    {
                //        System.IO.File.Delete($"{docPath}\\App_Data\\DocumentRepository\\temporary\\{fileName}.meta");
                //    }
                //    catch (System.IO.IOException e)
                //    {
                //    }
                //}

                new SqlUpdate("Documents")
                    .Set("FileName", fileName)
                    .Where(new Criteria("DocumentId") == (int)Row.DocumentId)
                    .Execute(UnitOfWork.Connection, ExpectedRows.ZeroOrOne);

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
                    row.FileName = row.FileName.StartsWith("temporary") ? row.FileName.Substring(10) : row.FileName;
                }
            }
        }
    }
}