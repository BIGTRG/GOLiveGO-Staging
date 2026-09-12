using Serenity.ComponentModel;

namespace GeniusOneAi.CustomEditors
{
    public partial class EpisodeDispositionEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.CustomEditors.EpisodeDispositionEditor";

        public EpisodeDispositionEditorAttribute()
            : base(Key)
        {
        }
    }
}
