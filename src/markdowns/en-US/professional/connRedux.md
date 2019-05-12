Connect to Redux 
----------------
> To achieve certain few advanced features, [react-openfin] requires redux to cooperate with. We will start to 
> introduce a proper state pattern to work with [react-openfin], then we will continue to introduce what kind of 
> advance features we can benefit out of it.  

### Generate a `react-app-pro` template via [openfin-js-cli]

For better understanding, suggest to generate an `react-app-pro` template via [openfin-js-cli] for reference. 

Alternative, we can checkout [openfin-react-starter] directly, [openfin-js-cli] actually generates a `react-app-pro` template 
basing on [openfin-react-starter].

### [react-openfin]'s redux middleware

_First of first, we need to create a middleware and add it to the client redux_

#### Sample store creator

[`src/utils/configureStore.ts`](https://github.com/openfin-js-app/openfin-react-starter/blob/master/src/utils/configureStore.ts)
```typescript
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactOpenfinMiddleware } from 'react-openfin';

import rootReducer, {IRootState} from '../reduxs';
import rootSaga from '../reduxs/sagas';

declare const window:any;

export default (
        parentState?:IRootState
)=>{

    const sagaMiddleware = createSagaMiddleware();
    // !!!README!!!
    // use the built-in middleware to communicate with react-openfin for advanced features
    const reactOpenfinMiddleware = createReactOpenfinMiddleware();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
            reactOpenfinMiddleware,
        ),
    );

    const store = createStore(
        rootReducer(parentState),
        enhancers,
    );

    sagaMiddleware.run(rootSaga);

    return store;

}
``` 
Meanwhile we also need a side effect helper to help manager event chains, for here we choice [redux-saga] as a example.

#### Purpose and usage of `ReactOpenfinMiddleware`

A redux action could be an ideal instance representing a user event. Moreover, via FLUX apis, [react-openfin] can effectively
communicate with client redux store in a decoupled way. `ReactOpenfinMiddleware` is the bridge handle the communication between
[react-openfin] and the app built, we call it client app. 

For instance, if app wann show a snack bar msg maintained by [react-openfin].  Instead of triggering via contextApi,
action could be also dispatch from client redux. And `ReactOpenfinMiddleware` will intercept it and dispatch it.
```typescript
import { applicationNewSnackbar } from 'react-openfin/reduxs'

// regular redux
function reduxCb(){
    dispatch(applicationNewSnackbar({
        message:'From redux dispatch',
        variant:'info'
    }))
    // snack bar will be shown.
}

import { put } from 'redux-saga';
// saga
function* sagaHandler(){
    yield put(applicationNewSnackbar({
        message:'From saga',
        variant:'info'
    }))
    // snack bar will be shown.
}
```

Moreover, `ReactOpenfinMiddleware` will also be responsible to dispatch response action back to client redux if needed.

For instance, during application booting, once `onApplicationStart` upon `Application context` triggered from `App.tsx`.
an `APPLICATION_AWAIT` action will be dispatched into client redux via `ReactOpenfinMiddleware` telling client that all
[react-openfin] context are populated correctly and ready to use and also [react-openfin] is expecting client to return
`APPLICATION_READY` with a time limit to response [react-openfin] that all client initialization done, and ready to switch
to the default view or target url specified in `APPLICATION_READY` action. Then after receiving `APPLICATION_READY`, 
[react-openfin] will reply a response action  `APPLICATION_STARTED` and dispatch into client redux also via `ReactOpenfinMiddleware`.

_An example of intercepting app booting in a saga handler and the complete example could be found in 
[src/reduxs/sagas/client.ts](https://github.com/openfin-js-app/openfin-react-starter/blob/master/src/reduxs/sagas/client.ts)_
```typescript
import { delay, putResolve, takeLatest } from 'redux-saga/effects';
// !!!README!!!
// use the redux for advanced features
import {
    APPLICATION_AWAIT,
    applicationReady,
} from 'react-openfin/reduxs';

// !!!README!!!
// trigger client side initialization over here if needed
export function* handleStarting(action){
    console.log('client saga :: handlStarting',action);
    // APPLICATION_AWAIT will be sent once application started
    // client side initialization effects can be triggered over here
    yield delay(3000);
    // once done, client could send applicationReady action to let react-openfin to switch to
    // the targetUrl specified int the payload from loading view before fuse timeout
    yield putResolve(applicationReady({
        // optional sample targetUrl
        // targetUrl:'/login'
    }));
}

export default function *() {
    // !!!README!!!
    // trigger client side initialization over here if needed
    yield takeLatest(APPLICATION_AWAIT, handleStarting);
}
```

One more thing, what might also be found is, if we want, we do not have to trigger onApplicationStart from view via 
context api. Dispatch corresponding applicationStart action will also work. 

```typescript
import { applicationStart } from 'react-openfin/reduxs'

// regular redux
function reduxCb(){
    // the same effect as calling applicationStart via context api
    dispatch(applicationStart())
}

import { put } from 'redux-saga';
// saga
function* sagaHandler(){
    // the same effect as calling applicationStart via context api
    yield put(applicationStart())
}
```



[redux-saga]:https://www.npmjs.com/package/redux-saga

[react-openfin]:https://www.npmjs.com/package/react-openfin
[openfin-js-cli]: https://www.npmjs.com/package/openfin-js-cli
[openfin-react-starter]:https://github.com/openfin-js-app/openfin-react-starter
