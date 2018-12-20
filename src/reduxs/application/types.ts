export enum MuiTheme{
    LIGHT = 'light',
    DARK = 'dark',
}

export enum MuiDirection{
    LTR = 'ltr',
    RTL = 'rtl',
}

export interface IApplicationState {
    loading:boolean,
    theme:MuiTheme,
    direction:MuiDirection,

}
