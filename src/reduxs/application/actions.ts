import { createAction, ActionFunctionAny, Action } from 'redux-actions';

export const APPLICATION_STARTED:string = 'APPLICATION_STARTED';
export const APPLICATION_READY:string = 'APPLICATION_READY';

export const applicationStarted:ActionFunctionAny<Action<void>> = createAction(APPLICATION_STARTED);
export const applicationReady:ActionFunctionAny<Action<void>> = createAction(APPLICATION_READY);
