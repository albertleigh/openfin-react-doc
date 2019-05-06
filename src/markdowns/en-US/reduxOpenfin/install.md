Redux Openfin
--------------
> Redux Openfin is not needed by every one. 
> Therefore, this section is regarded a optional and advanced topic.
> Only refer this section if you needed   

*Redux-openfin is the core part of the whole solution suite.
It provides two set of wrappers of openfin js apis making developing with openfin js api much easier.
Out of box, a cross-window communicate mechanism and the optional snap-dock feature is also provided.*

### Install

`yarn add redux-openfin` or `npm i redux-openfin`

### Initialization

Creating redux-openfin middleware sample:

```typescript
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createOpenfinMiddleware } from 'redux-openfin';

import rootReducer from '../reduxs';
import rootSaga from '../reduxs/sagas';

declare const window:any;

export default (
        sharedActions:string[],
)=>{

    const openfinMiddleware = createOpenfinMiddleware(
        window.fin,
        {
            finUuid:process.env.REACT_APP_FIN_UUID,
            sharedActions,
            autoDocking:process.env.REACT_APP_ENABLE_AUTO_DOCKING === 'true',
            dockingOptions:{
            }
        }
    );
    const sagaMiddleware = createSagaMiddleware();

    const middleware = compose(
        applyMiddleware(
            sagaMiddleware,
            openfinMiddleware,
        )
    );

    const store = createStore(
        rootReducer,
        middleware,
    );

    sagaMiddleware.run(rootSaga);

    return store;

}
```

*redux-openfin/createOpenfinMiddleware parameters:*

| Parameter | Type | Description |
| --- | --- | --- |
| fin | Any (not controlled) | openfin js api handler |
| config | redux-openfin/IConfig | The configuration object of redux-openfin |

*redux-openfin/IConfig configuration object schema:*

| Parameter | Type | Description |
| --- | --- | --- |
| finUuid | String | openfin app UUID, which could be siezed via process.env at compile time |
| sharedActions | String[] | Actions names of shared action |
| ignoreStore | Boolean[Optional] | Optional flag to ignore redux store to dispatch response when set |
| autoDocking | Boolean[Optional] | Optional flag to enable or disable current window docking when set or not |
| dockingOptions | redux-openfin/IDockingOptions [Optional] | Optional configuration object to fine tune windows docking, please refer Redux-Openfin Snap&Dock section for more info. |

### More

In the following section, topics of

- common communication pattern utilized by the redux openfin
- a breif list of apis supported of the version
- cross windows communication via shared actions
- snap&dock feature and its configuration

will be covered one by one.