import * as React from 'react';
import cx from 'classnames';

import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import indexRoutes from './routes/index';

import hist from './utils/history';


import { connect } from 'react-redux';
import {
    IRootState,
    MuiTheme,MuiDirection,
}from './reduxs';

interface IProps{
    loading:boolean,
    theme:MuiTheme,
    direction:MuiDirection,
    [key:number]:any,
    [key:string]:any,
}

interface IState {
    [key:number]:any,
    [key:string]:any,
}

class App extends React.Component<IProps,IState> {

    createMutTheme = () =>{
        const { theme, direction } = this.props;

        return createMuiTheme({
            direction,
            palette:{
                type: theme,
            },
            typography:{
                useNextVariants:true,
                fontSize: 8,
                htmlFontSize: 10,
            },
        })

    }



    render() {
        const { loading } = this.props;

        return (<React.Fragment>
            <CssBaseline/>
            <Router history={hist}>
                <MuiThemeProvider theme={this.createMutTheme()}>
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
        theme:state.application.theme,
        direction:state.application.direction,
    }),
    dispatch => ({
        actions:{

        }
    })

)(App);
