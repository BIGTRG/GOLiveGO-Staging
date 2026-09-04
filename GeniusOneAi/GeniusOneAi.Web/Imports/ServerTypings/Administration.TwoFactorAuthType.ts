namespace GeniusOneAi.Administration {
    export enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
    Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'GeniusOneAi.Administration.TwoFactorAuthType');
}
