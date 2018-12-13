import { testSaga } from 'redux-saga-test-plan';
import {all, put, select, take, takeLatest,} from 'redux-saga/effects';

import applicationSaga from '../sagas/application';

import rootSaga from '../sagas';

describe('Root saga',()=> {

    it('Default watchAll',()=>{

        const watchAll = rootSaga() as any;
        const effect = watchAll.next().value;

        expect(effect).toEqual(
            all([
                applicationSaga(),
            ])
        );
    });


});