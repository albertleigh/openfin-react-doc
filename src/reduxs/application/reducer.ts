import { handleActions, Action } from 'redux-actions';

import {
    MuiTheme,MuiDirection,
    IApplicationState,
} from './types';

import {
    APPLICATION_READY,
    APPLICATION_TOGGLE_DRAWER,
    APPLICATION_TOGGLE_THEME,
    APPLICATION_TOGGLE_DIRECTION,
} from './actions';

const defaultState:Partial<IApplicationState>={
    loading:true,
    drawerOpen:false,
    theme: MuiTheme.DARK,
    direction:MuiDirection.LTR,
};

export default handleActions({
    [APPLICATION_READY]:(state,action)=>({
        ...state,
        loading:false,
    }),
    [APPLICATION_TOGGLE_DRAWER]:(state,action)=>({
        ...state,
        drawerOpen:!state.drawerOpen,
    }),
    [APPLICATION_TOGGLE_THEME]:(state,action)=>({
        ...state,
        theme: action.payload.theme,
    }),
    [APPLICATION_TOGGLE_DIRECTION]:(state,action)=>({
        ...state,
        direction: state.direction === MuiDirection.LTR?MuiDirection.RTL:MuiDirection.LTR
    }),

},defaultState);