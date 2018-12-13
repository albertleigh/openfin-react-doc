import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reduxs';
import rootSaga from '../reduxs/sagas';

declare const window:any;

export default ()=>{

    const sagaMiddleware = createSagaMiddleware();
    const devtools = window.devToolsExtension?window.devToolsExtension():(f:any):any => (f);

    const middleware = compose(
        applyMiddleware(
            sagaMiddleware,
        ),
        devtools
    );

    const store = createStore(
        rootReducer,
        middleware,
    );

    sagaMiddleware.run(rootSaga as any);

    return store;

}
