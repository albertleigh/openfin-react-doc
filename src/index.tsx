import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/css/animate.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './utils/configureStore';
import {applicationStarted} from "./reduxs";

declare const window:any;

const store = configureStore();
window.store=store;
store.dispatch(applicationStarted());


ReactDOM.render(<Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
