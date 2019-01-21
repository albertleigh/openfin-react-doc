import { createAction, ActionFunctionAny, Action } from 'redux-actions';
import {MuiTheme} from "./types";

export const APPLICATION_STARTED:string = 'APPLICATION_STARTED';
export const APPLICATION_READY:string = 'APPLICATION_READY';

export const applicationStarted:ActionFunctionAny<Action<void>> = createAction(APPLICATION_STARTED);
export const applicationReady:ActionFunctionAny<Action<void>> = createAction(APPLICATION_READY);


export const APPLICATION_TOGGLE_DRAWER:string = 'APPLICATION_TOGGLE_DRAWER';
export const applicationToggleDrawer:ActionFunctionAny<Action<void>> = createAction(APPLICATION_TOGGLE_DRAWER);


export const APPLICATION_TOGGLE_THEME:string = 'APPLICATION_TOGGLE_THEME';
export const applicationToggleTheme:ActionFunctionAny<Action<{theme:MuiTheme}>>
    = createAction<{theme:MuiTheme},MuiTheme>(APPLICATION_TOGGLE_THEME,(theme:MuiTheme)=>({theme}));


export const APPLICATION_TOGGLE_DIRECTION:string = 'APPLICATION_TOGGLE_DIRECTION';
export const applicationToggleDirection:ActionFunctionAny<Action<void>> = createAction(APPLICATION_TOGGLE_DIRECTION);