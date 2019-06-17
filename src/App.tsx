import * as React from 'react';
import cx from 'classnames';

import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

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

const App:React.FunctionComponent<IProps> = (
    {
        loading, theme, direction,
    }
)=> {

    const muiTheme = createMuiTheme({
        direction,
        palette:{
            type: theme,
            primary: {
                main:'#504cff',
            },
            secondary: red
        },
        typography:{
            useNextVariants:true,
            fontSize: 8,
            htmlFontSize: 10,
        },
        overrides:{
            MuiTypography:{
                body1:{
                    maxWidth:'100%',
                }
            }
        }
    });


    return (<React.Fragment>
        <CssBaseline/>
        <Router history={hist}>
            <MuiThemeProvider theme={muiTheme}>
                <ThemeProvider theme={muiTheme}>
                    <Switch>
                        {
                            indexRoutes.map((prop:any,key)=>{
                                if (prop.redirect)
                                    return <Redirect from={prop.path} to={prop.to} key={key}/>;
                                return <Route path={prop.path} component={prop.component} key={key}/>;

                            })
                        }
                    </Switch>
                </ThemeProvider>
            </MuiThemeProvider>
        </Router>
    </React.Fragment>);

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
