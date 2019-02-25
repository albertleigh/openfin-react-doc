import { compose } from 'redux';

import configureStore from '../configureStore';

declare const window:any;


describe('ConfigStore util', ()=>{

    it('default generator works with devToolsExtension',()=>{

        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__= compose;

        const store = configureStore();
        expect(store).toBeTruthy();
    });

    it('default generator works without devToolsExtension',()=>{

        delete window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

        const store = configureStore();
        expect(store).toBeTruthy();
    });

});