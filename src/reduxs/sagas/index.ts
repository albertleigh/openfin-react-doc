import { all } from 'redux-saga/effects';

import applicationSaga from './application';

export default function* rootSaga(){

    const sagas = [applicationSaga()];

    yield all(sagas);

}
