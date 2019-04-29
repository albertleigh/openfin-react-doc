import { all, call, delay, put, putResolve, takeLatest } from 'redux-saga/effects';

import {setPrismTheme} from '../../utils/prism'

import {
    APPLICATION_STARTED,
    applicationReady,
    APPLICATION_TOGGLE_THEME,
} from '..';

export function* handleApplicationLoading() {

    yield all([
        // you can add more sagas overhere
        delay(5000),
    ]);

    yield putResolve(applicationReady());

}

export function* handleApplicationToggleTheme(action) {
    setPrismTheme(action.payload.theme);
}

export default function* () {
    yield takeLatest(APPLICATION_STARTED,handleApplicationLoading);
    yield takeLatest(APPLICATION_TOGGLE_THEME,handleApplicationToggleTheme);
}