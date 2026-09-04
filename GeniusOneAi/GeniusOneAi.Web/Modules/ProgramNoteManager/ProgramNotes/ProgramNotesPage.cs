
using System;

namespace GeniusOneAi.ProgramNoteManager.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProgramNotesRow))]
    public class ProgramNotesController : Controller
    {
        
    }
}