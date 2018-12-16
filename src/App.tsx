import * as React from 'react';
import cx from 'classnames';

import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import indexRoutes from './routes/index';

import hist from './utils/history';


import { connect } from 'react-redux';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import logo from './logo.svg';
import { IRootState }from './reduxs';
import './App.css';

import i18n from './i18n';

const theme = createMuiTheme({
    typography:{
        useNextVariants:true,
        fontSize: 8,
        htmlFontSize: 10,
    },
});

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

    handleSwitchToEn = () => {
        i18n.changeLanguage('en');
    }

    handleSwitchToZh = () => {
        i18n.changeLanguage('zh');
    }


    render() {

    const { loading, t } = this.props;

    return (<React.Fragment>
        <CssBaseline/>
        <Router history={hist}>
            <MuiThemeProvider theme={theme}>
                <Switch>
                    {
                        indexRoutes.map((prop:any,key)=>{
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key}/>;
                            return <Route path={prop.path} component={prop.component} key={key}/>;

                        })
                    }
                </Switch>
            </MuiThemeProvider>
        </Router>

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

        <Button variant="outlined" color="primary" onClick={this.handleSwitchToEn} >Eng</Button>
        <Button variant="outlined" color="secondary" onClick={this.handleSwitchToZh} >Zhn</Button>
    </React.Fragment>);
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
