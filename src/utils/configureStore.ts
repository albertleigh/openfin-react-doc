import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reduxs';
import rootSaga from '../reduxs/sagas';

declare const window:any;

export default ()=>{

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const sagaMiddleware = createSagaMiddleware();

    const enhancers = composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
        ),
    );

    const store = createStore(
        rootReducer,
        enhancers,
    );

    sagaMiddleware.run(rootSaga as any);

    return store;

}