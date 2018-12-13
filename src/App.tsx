import * as React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import logo from './logo.svg';
import { IRootState }from './reduxs';
import './App.css';

interface IProps extends WithNamespaces{
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

    const { loading, t } = this.props;

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
              {t('Welcome React TS')}
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

)(withNamespaces()(App));
