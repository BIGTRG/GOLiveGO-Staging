using Serenity.Services;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class BaseRecRequest : ServiceRequest
    {
        public long Id { get; set; }
    }  
    public class BaseResponse : ServiceResponse
    {
        public string Response { get; set; }
        public string ResponseType { get; set; }
        public bool isError { get; set; }
    }
    public class EligibilityResponse : ServiceResponse
    {
        public string Response { get; set; }
        public bool isError { get; set; }
        public string PolicyNumber { get; set; }
        public string GroupNumber { get; set; }
        public string PlanNumber { get; set; }
        public string insDob { get; set; }
        public string insGender { get; set; }
        public string insAddress1 { get; set; }
        public string insCity { get; set; }
        public string insState { get; set; }
        public string insZipcode { get; set; }
    }
    public class BaseRecsRequest : ServiceRequest
    {
        public string Recs { get; set; }
        public string[] Ids { get; set; }
        public int clientId { get; set; }
        public int workerId { get; set; }
    }
    public class EligibilityRequest: ServiceRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string InsuranceId { get; set; }
        public string ServiceDate { get; set; }
        public string SiteTypeId { get; set; }

    }
    public class DocumentMeta
    {
        public string DocumentName { get; set; }
        public string DocumentFileName { get; set; }

    }

    public class htmlResponse
    {
        public string html { get; set; }
        public bool isError { get; set; }
    }
}
