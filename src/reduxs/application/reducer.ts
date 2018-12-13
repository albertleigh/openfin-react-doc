import { handleActions, Action } from 'redux-actions';

import {
    IApplicationState,
} from './types';

import { APPLICATION_READY } from './actions';

const defaultState:Partial<IApplicationState>={
    loading:true,
};

export default handleActions({
    [APPLICATION_READY]:(state,action)=>({
        ...state,
        loading:false,
    }),

},defaultState);