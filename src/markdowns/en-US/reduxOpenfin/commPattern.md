Common API communication pattern
----
- There are basically two communication pattern provided by redux-openfin: Promise apis and Flux actions.
- Redux-openfin split the apis into Applcation, Event, InterApplicationBus Notification System and Window packages.
- In each package, there will usually be three sub packages: actions, asyncs and types.
- Async subpackage contains the promise based wrapped openfin js apis.
- Action subpackage contains creators of the flux actions.
- Type subpackage contains the types used by the promise apis and flux actions.

### Promise apis

over here, let's use redux-saga as our asynchronous effect handler throughout the samples,
 and let's assume we need to seize the monitor info of the client running the app.
 
 *Example 1*

```typescript
import {System} from "redux-openfin";

function * someSagaGenerator(){
       
        // promise api sample
        monitorInfoAction = yield call(System.asyncs.getMonitorInfo,System.actions.getMonitorInfo({}));
        
}
``` 

We can check the return type via the definition of the System.asyncs.getMonitorInfo.
In most correctly configured IDE, all need to do to check one's ts definition is via clicking.

*System.asyncs.getMonitorInfo definition*
```typescript
export declare function getMonitorInfo(action: Action<types.GetMonitorInfoPayload>): Promise<Action<types.GetMonitorInfoResPayload>>;
```

The api's return type tells you,
the api will return a promise containing the redux action whose payloud will be the type of GetMonitorInfoResPayload.
In the same way, you can also check the definition of GetMonitorInfoResPayload.

In another word, you can seize the monitor info in the payload field of the response.

*Example 2: same as example but with types*

```typescript
import {System} from "redux-openfin";
import * as types from "redux-openfin/system/types";

function * someSagaGenerator(){
       
        // promise api sample
        const monitorInfoAction:Action<types.GetMonitorInfoResPayload> = 
            yield call(System.asyncs.getMonitorInfo,System.actions.getMonitorInfo({}));
        const payload:types.GetMonitorInfoResPayload = monitorInfoAction.payload;
        
}

```
Types come with side effects, even in typescript, developers do not have to code in strictly types.
Make wise decision in your codes, try to benefits from the types intead of let the types utilizing you.


### Flux Req/Res actions

You might notice, the response of the promise api is actually a redux action.
So, could with communicate in purely actions way? The answer is positive.

*Example 1*

```typescript
import {System} from "redux-openfin";

function * someSagaGenerator(){
    
        // flux api sample
        yield put.resolve(System.actions.getMonitorInfo({}));
        monitorInfoAction = yield take(System.actions.GET_MONITOR_INFO_RES);
        
}
```