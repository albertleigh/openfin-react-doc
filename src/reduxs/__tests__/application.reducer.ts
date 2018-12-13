import * as Actions from '../application/actions';
import reducer from '../application/reducer';

describe('Application reducer',()=>{

    it('APPLICATION_READY reduced correctly',()=>{
        const action:any = Actions.applicationReady();
        expect(reducer(undefined,action)).toMatchSnapshot();
    });

});