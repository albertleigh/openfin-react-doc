import {combineReducers} from 'redux';
import {IApplicationState} from './application/types';

import application from './application/reducer';

export * from './application/actions';
export * from './application/types';

export interface IRootState {
    application:IApplicationState,
}

export default combineReducers({
    application,
});
