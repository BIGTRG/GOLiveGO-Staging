using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<GeniusOneAi.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = GeniusOneAi.Administration.LanguageRow;


namespace GeniusOneAi.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}