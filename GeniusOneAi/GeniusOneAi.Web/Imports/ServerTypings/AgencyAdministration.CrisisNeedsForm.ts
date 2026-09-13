namespace GeniusOneAi.AgencyAdministration {
    export interface CrisisNeedsForm {
        NeedKey: Serenity.StringEditor;
        Label: Serenity.StringEditor;
        Category: CustomEditors.NeedCategoryEditor;
        CategoryLabel: Serenity.StringEditor;
        SortOrder: Serenity.IntegerEditor;
        IsActive: Serenity.BooleanEditor;
    }

    export class CrisisNeedsForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.CrisisNeeds';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CrisisNeedsForm.init)  {
                CrisisNeedsForm.init = true;

                Q.initFormType(CrisisNeedsForm, [
                    'NeedKey', Serenity.StringEditor,
                    'Label', Serenity.StringEditor,
                    'Category', CustomEditors.NeedCategoryEditor,
                    'CategoryLabel', Serenity.StringEditor,
                    'SortOrder', Serenity.IntegerEditor,
                    'IsActive', Serenity.BooleanEditor
                ]);
            }
        }
    }
}
