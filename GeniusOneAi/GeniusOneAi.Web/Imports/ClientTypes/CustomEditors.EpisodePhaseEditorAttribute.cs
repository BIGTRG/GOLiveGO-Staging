using Serenity.ComponentModel;

namespace GeniusOneAi.CustomEditors
{
    public partial class EpisodePhaseEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GeniusOneAi.CustomEditors.EpisodePhaseEditor";

        public EpisodePhaseEditorAttribute()
            : base(Key)
        {
        }
    }
}
