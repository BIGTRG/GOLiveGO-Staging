using Serenity.ComponentModel;
using System;

namespace GeniusOneAi.CustomEditors
{
    public partial class AnswerTypeEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.CustomEditors.AnswerTypeEditor"; public AnswerTypeEditorAttribute() : base(Key) { } }
    public partial class ResourceTypeEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.CustomEditors.ResourceTypeEditor"; public ResourceTypeEditorAttribute() : base(Key) { } }
    public partial class GoalOriginEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.CustomEditors.GoalOriginEditor"; public GoalOriginEditorAttribute() : base(Key) { } }
    public partial class StatusRuleEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.CustomEditors.StatusRuleEditor"; public StatusRuleEditorAttribute() : base(Key) { } }
    public partial class NeedCategoryEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.CustomEditors.NeedCategoryEditor"; public NeedCategoryEditorAttribute() : base(Key) { } }
    public partial class GoalStatusEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.CustomEditors.GoalStatusEditor"; public GoalStatusEditorAttribute() : base(Key) { } }
    public partial class LibraryGoalOutcomesEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.AgencyAdministration.LibraryGoalOutcomesEditor"; public LibraryGoalOutcomesEditorAttribute() : base(Key) { } }
    public partial class OutcomeQuestionsEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.AgencyAdministration.OutcomeQuestionsEditor"; public OutcomeQuestionsEditorAttribute() : base(Key) { } }
    public partial class ClientGoalOutcomesEditorAttribute : CustomEditorAttribute { public const string Key = "GeniusOneAi.ClientManager.ClientGoalOutcomesEditor"; public ClientGoalOutcomesEditorAttribute() : base(Key) { } }
}
