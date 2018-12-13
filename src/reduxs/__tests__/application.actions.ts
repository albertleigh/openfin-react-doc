import configureStore from 'redux-mock-store';
import * as Actions from '../application/actions';

const mockStore = configureStore();
const initialState = {};

const store = mockStore(initialState);

describe('Application actions',()=>{

    beforeEach(()=>{
        store.clearActions();
    });

    it('applicationStarted created and dispatched correctly',()=>{
        store.dispatch(Actions.applicationStarted());
        expect(store.getActions()).toMatchSnapshot();
    });

    it('applicationReady created and dispatched correctly',()=>{
        store.dispatch(Actions.applicationReady());
        expect(store.getActions()).toMatchSnapshot();
    });

});
