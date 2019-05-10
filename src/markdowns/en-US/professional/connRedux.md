Connect to Redux 
----------------
> To achieve certain few advanced features, [react-openfin] requires redux to cooperate with. We will start to 
> introduce a proper state pattern to work with [react-openfin], then we will continue to introduce what kind of 
> advance features we can benefit out of it.  

### Check `react-app-pro` via [openfin-js-cli]

For better understanding, please generate an pro template from [openfin-js-cli] for reference. 

Alternative, we can checkout [openfin-react-starter] directly, [openfin-js-cli] actually generates a pro template 
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
Meanwhile we also need a side effect helper to help manager event chains, for here we choice [redux-saga] as the example.

#### Purpose and usage of `ReactOpenfinMiddleware`

A redux action could be a ideal instance representing a user event. Moreover, via FLUX apis, [react-openfin] can effectively
communicate with client redux store in a decoupled way.

For instance, if app wann show a snack bar msg maintained by [react-openfin]. 
```typescript
import { appli} from 'react-openfin/reduxs'
```

[redux-saga]:https://www.npmjs.com/package/redux-saga

[react-openfin]:https://www.npmjs.com/package/react-openfin
[openfin-js-cli]: https://www.npmjs.com/package/openfin-js-cli
[openfin-react-starter]:https://github.com/openfin-js-app/openfin-react-starter
