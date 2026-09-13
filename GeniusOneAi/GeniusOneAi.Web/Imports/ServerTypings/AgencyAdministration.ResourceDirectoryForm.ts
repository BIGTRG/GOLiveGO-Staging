namespace GeniusOneAi.AgencyAdministration {
    export interface ResourceDirectoryForm {
        ResourceType: CustomEditors.ResourceTypeEditor;
        County: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Hours: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        Notes: Serenity.TextAreaEditor;
    }

    export class ResourceDirectoryForm extends Serenity.PrefixedContext {
        static formKey = 'AgencyAdministration.ResourceDirectory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResourceDirectoryForm.init)  {
                ResourceDirectoryForm.init = true;

                Q.initFormType(ResourceDirectoryForm, [
                    'ResourceType', CustomEditors.ResourceTypeEditor,
                    'County', Serenity.StringEditor,
                    'Name', Serenity.StringEditor,
                    'Phone', Serenity.StringEditor,
                    'Hours', Serenity.StringEditor,
                    'Website', Serenity.StringEditor,
                    'Address', Serenity.StringEditor,
                    'City', Serenity.StringEditor,
                    'IsActive', Serenity.BooleanEditor,
                    'Notes', Serenity.TextAreaEditor
                ]);
            }
        }
    }
}
