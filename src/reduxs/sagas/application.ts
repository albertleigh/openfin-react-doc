import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    APPLICATION_STARTED,
    applicationReady,
} from '..';

export function* handleApplicationLoading() {

    yield all([
        // you can add more sagas overhere
        call(delay,5000),
    ]);

    yield put.resolve(applicationReady());

}

export default function* () {
    yield takeLatest(APPLICATION_STARTED,handleApplicationLoading);
}