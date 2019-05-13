[redux-openfin] - FLUX & promise wrapper of openfin js api
-------------------------------------------------------

> Sometime, application developer needs to utilize openfin js api. One of the dependencies of [react-openfin-mat-impl] is 
> [redux-openfin]. And [redux-openfin] provides two sets of apis, FLUX and promise based apis, to utilize openfin js api
> in more elegant way.  

### Common API communication pattern

- There are basically two communication pattern provided by redux-openfin: Promise apis and Flux actions.
- Redux-openfin split the apis into Applcation, Event, InterApplicationBus Notification System and Window packages.
- In each package, there will usually be three sub packages: actions, asyncs and types.
- Async subpackage contains the promise based wrapped openfin js apis.
- Action subpackage contains creators of the flux actions.
- Type subpackage contains the types used by the promise apis and flux actions.

#### Promise apis

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
We can call openfin js api via putting a redux action and take its response any place you want.
The benefits of calling openfin js api via flux actions are the producer and consumer part could be seperated.
And, the drawbacks are also obvious, you have to utilize some your own logic to tell the response apart
if there are more than one producers.

*Example 2: same as example but with types*
```typescript
import {System} from "redux-openfin";
import * as types from "redux-openfin/system/types";

function * someSagaGenerator(){
    
        // flux api sample
        yield put.resolve(System.actions.getMonitorInfo({}));
        const monitorInfoAction:Action<types.GetMonitorInfoResPayload> = 
            yield take(System.actions.GET_MONITOR_INFO_RES);
        const payload:types.GetMonitorInfoResPayload = monitorInfoAction.payload;
}
```
The reason we want to keep same type response of both promise and flux api is that,
meanwhile developing, it should the developer to decide which type of api will be more appropriate to utilize,
keeping the reposes of the same type could make switching between them as seamlessly as possible.

#### Exception handling of promise apis and flux apis
> The openfin api beneath the hood might fail, and the err handling methodology of these two sets of apis are slightly different.

##### For promise apis:
    In generate or async function, an exception will be thrown. The err obj will contain the reason of the failure.
    
    In promise chain handler, the err handler will be triggered. The err obj will also contain the reason of the failure.

##### For FLUX apis:
    The exception will be eaten by the redux-openfin, and in the response action,
    the error field will be set and it will the exactly the same obj thrown in the promise api.

#### Will response action still be dispatched into redux even only the promise api called?

The short answer is by default yes.

But you can disable it by setting the ignoreStore to true in the IConfig object when you create the middleware.
                
        
### Redux Openfin supported apis

> Todo: populate this doc in next release 

- #### Application
    - new
    - restart
    - close
- #### Event
    - etc....
- ### InterApplicationBus
    - publish
    - subscribe
- #### Notification
    - createNotification
- #### System
    - getMachineId
    - getDeviceUserId
    - getMonitorInfo
    - getVersion
    - getHostSpecs
    - getEnvironmentVariable
    - clearCache
- #### Window
    - getCurrent
    - wrap
    - addEventListener
    - bringToFront
    - newWindow
    - close
    - disableFrame
    - enableFrame
    - focus
    - getGroup
    - getBounds
    - getState
    - getOptions
    - hide
    - joinGroup
    - leaveGroup
    - maximize
    - mergeGroups
    - minimize
    - moveBy
    - moveTo
    - restore
    - show
    - setAsForeground
    - setBounds
    - updateOptions



[redux-openfin]:https://www.npmjs.com/package/redux-openfin
[react-openfin-mat-impl]:https://www.npmjs.com/package/react-openfin-mat-impl