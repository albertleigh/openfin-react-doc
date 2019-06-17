Multi-win support Redux state structure
---------
*The pattern to adopt comm and support among multi-windows is slightly different
 and it requires certain clarifications.*

### Limitation of the direct function binding

> Using direct function binding between windows turns out sometimes very unmaintainable,
> unexpected exceptions being thrown everywhere.
                
> Maintaining primitive objects via sharing redux actions doesn't sound that forthright,
> however, it has been proved to be practical and efficient.
> Just split the state into separated reusable sections, consume shared actions if needed based on the windows id
> and it turns out to be super simple to maintain and avoid overheads.

### State Initialization

Before consuming redux actions, the child state initialization of different windows would be slightly different.
When it creates store, instead of using static default state, child window spa should inherit based on the parent state.

                
*./client/reducer.ts For instance, the client state with only one number field count.*
```typescript
import { handleActions, Action } from 'redux-actions';

import { IClientState,  } from './types';

import {CLIENT_SET_VALUE} from './actions';

export const defaultState:Partial<IClientState>={
    count:0,
};


export default (parentWindowState?:Partial<IClientState>)=>{
    let initState:Partial<IClientState>;

    if (parentWindowState){
        initState={
            ...parentWindowState,
        }
    }else{
        initState = defaultState;
    }

    return handleActions({
        [CLIENT_SET_VALUE]:(state,action)=>{
            return {
                ...state,
                ...action.payload,
            }
        }
    },initState);

}
```
Instead of returning state, the reducer module should return a function through which create the state based on the parent state.

*../reduxs/index.ts*
```typescript
import {combineReducers} from 'redux';
import {IClientState} from './client/types';

import client from './client/reducer';
import { defaultState as clientDefaultState } from './client/reducer';

export * from './client/actions';
export * from './client/types';

export interface IRootState {
    client:IClientState,
}

export const rootDefaultState = {
    client:clientDefaultState,
}

export default (parentWindowState?:IRootState)=>{
    if (parentWindowState){
        return combineReducers({
            client:client(parentWindowState.client),
        });

    }else{
        return combineReducers({
            client:client(),
        });
    }
}
```

Therefore, when creating store, compare window.name with main window UUID to decide whether it is parent state or not.
If not, pass the parent state in and create based one it.

> ### Tips
> While populating child state based on parent state, try to avoid binding functions
> or inherit instances containing cb functions like Interval handlers or WebWorker intances.