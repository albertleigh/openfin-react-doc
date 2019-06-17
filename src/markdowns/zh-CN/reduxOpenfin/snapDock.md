Snap & Dock
--------------

### Configuration

Out of box snap&dock cross-windows feature is provided, which could be enabled or disabled via
IConfig Object.

*Sample to create redux-openfin middleware*

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
            // flag to enable auto docking or not
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

In the sample to create openfin middleware,
the autoDocking set to be based on REACT_APP_ENABLE_AUTO_DOCKING is set or not.
When autoDocking is set, the out of box snap&dock will be provided.

### Ctrl+Shift+U / Command+Shift+U to undock all

Another thing which might be help is be default, the ctrl+shift+u shortcut is listened to undock all.
If needed, user can directly use this shortcut to undock all windows already docked no matter what.