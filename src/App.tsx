import * as React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { IRootState }from './reduxs';
import './App.css';

interface IProps {
  loading:boolean,
  [key:number]:any,
  [key:string]:any,
}

interface IState {
  [key:number]:any,
  [key:string]:any,
}

class App extends React.Component<IProps,IState> {
  render() {

    const { loading } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <p>
              {loading?'openfin-react-doc Loading...':'openfin-react-doc Loaded~'}
          </p>
          <img src={logo} className={cx(
              'animated','slow','infinite', 'App-logo',
              {
                  flash:loading,
                  ["App-logo-spin"]:!loading,
              }
          )} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
    (state:IRootState)=>({
        loading:state.application.loading,
    }),
    dispatch => ({
        actions:{

        }
    })

)(App);
