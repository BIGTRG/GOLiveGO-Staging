namespace GeniusOneAi.Administration {

    @Serenity.Decorators.registerClass()
    export class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {

        private permissions: PermissionCheckEditor;

        constructor(opt: UserPermissionDialogOptions) {
            super(opt);

            this.permissions = new PermissionCheckEditor(this.byId('Permissions'), {
                showRevoke: true
            });

            UserPermissionService.List({
                UserID: this.options.userID,
                Module: null,
                Submodule: null
            }, response => {
                this.permissions.value = response.Entities;
            });

            UserPermissionService.ListRolePermissions({
                UserID: this.options.userID,
                Module: null,
                Submodule: null,
            }, response => {
                this.permissions.rolePermissions = response.Entities;
            });

            this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
            this.dialogTitle = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'),
                this.options.username);
        }

        protected getDialogButtons() {
            return [
                {
                    text: Q.text('Dialogs.OkButton'),
                    cssClass: 'btn btn-primary',
                    click: e => {
                        UserPermissionService.Update({
                            UserID: this.options.userID,
                            Permissions: this.permissions.value,
                            Module: null,
                            Submodule: null
                        }, response => {
                            this.dialogClose();
                            window.setTimeout(() => Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')), 0);
                        });
                    }
                }, {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => this.dialogClose()
                }
            ];
        }

        protected getTemplate(): string {
            return '<div id="~_Permissions"></div>';
        }
    }

    export interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}