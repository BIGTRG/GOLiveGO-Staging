using Serenity.Services;

namespace GeniusOneAi.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}