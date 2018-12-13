import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import App from './App';


const mockStore = configureStore();

describe('App Entry',()=>{
    it('render while loading',()=>{
        const initialState = {
          application:{
            loading:true,
          }
        };
        const store = mockStore(initialState);
        const wrapper = shallow(<App store={store}/>);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });

    it('render while loaded',()=>{
        const initialState = {
            application:{
                loading:false,
            }
        };
        const store = mockStore(initialState);
        const wrapper = shallow(<App store={store}/>);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
});