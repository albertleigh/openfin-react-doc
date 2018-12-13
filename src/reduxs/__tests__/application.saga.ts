import { testSaga } from 'redux-saga-test-plan';
import { delay } from 'redux-saga';
import { all, call, put, take, takeLatest, takeEvery, fork, select, actionChannel } from 'redux-saga/effects';

import {
    APPLICATION_STARTED,
    applicationReady,
} from '..';

import {
    // sub sagas
    handleApplicationLoading,
} from '../sagas/application';

import applicationSaga from '../sagas/application';


describe('Application saga',()=>{

    describe('handleApplicationLoading saga',()=>{

        it('default handled correctly',()=>{
            testSaga(handleApplicationLoading)
                .next()
                .all([
                    call(delay,5000),
                ])
                .next()
                .put.resolve(applicationReady())
                .next()
                .isDone();
        })
    });

    it('default function register all event',()=>{
        testSaga(applicationSaga)
            .next()
            .takeLatestEffect(APPLICATION_STARTED,handleApplicationLoading)
            .next()
            .isDone();
    })

});