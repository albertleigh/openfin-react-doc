import * as React from 'react';
import cx from 'classnames';

import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import indexRoutes from './routes/index';

import hist from './utils/history';


import { connect } from 'react-redux';
import { IRootState }from './reduxs';

const theme = createMuiTheme({
    typography:{
        useNextVariants:true,
        fontSize: 8,
        htmlFontSize: 10,
    },
});

interface IProps{
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

)(App);
