import * as React from 'react';
import cx from "classnames";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { documentStyle as style } from '../../assets/jss/openfin-react-doc';

import {
    DocHeader,
    DocMenu,
} from '../../components';

import {
    // actions
    applicationToggleDrawer,
    applicationToggleTheme,
    applicationToggleDirection,

    // types
    IRootState, MuiTheme,
} from '../../reduxs';

import documentRoutes from '../../routes/document';
import {IRouteCompItem} from "../../routes";

interface IProps {
    drawerOpen:boolean,
    actions:{
        onToggleDrawer:()=>void,
        onToggleTheme:()=>void,
        onToggleDirection:()=>void,
    }
}

const useStyles = makeStyles(style);

const getBrand = ()=>{
    for(let i=0; i < documentRoutes.length; i++){
        const docRoute = documentRoutes[i] as IRouteCompItem;
        if (docRoute.path === location.pathname){
            return docRoute.name;
        }
    }
    return null;
}

const switchRoutes = (
    <Switch>
        {documentRoutes.map((prop:any,key)=>{
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key}/>;
            return <Route path={prop.path} component={prop.component} key={key}/>

        })}
    </Switch>
);


const DocumentLayout:React.FunctionComponent<IProps>=(
    {
        drawerOpen,
        actions:{
            onToggleDrawer,onToggleTheme,onToggleDirection,
        }
    }
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('docMenu', { useSuspense: false });

    const handleSwitchLanguage = (languageName:string) => {
        i18n.changeLanguage(languageName);
    }

    return (
        <React.Fragment>
            <DocHeader
                navbarName={t(getBrand())}
                onSwitchLanguage={handleSwitchLanguage}
                onToggleDrawer = {onToggleDrawer}
                onToggleTheme = {onToggleTheme}
            />

            <div className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant='temporary'
                        open={drawerOpen}
                        onClose={onToggleDrawer}
                    >
                        <DocMenu/>
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation='css'>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant='permanent'
                        open
                    >
                        <DocMenu/>
                    </Drawer>
                </Hidden>
            </div>

            <div className={classes.main}>
                <div className={classes.content}>
                    {switchRoutes}
                </div>
            </div>
        </React.Fragment>
    )
}

export default connect(
    (state:IRootState)=>({
        theme: state.application.theme,
        drawerOpen: state.application.drawerOpen,
    }),
    dispatch => ({
        actions:{
            onToggleDrawer: ()=>{
                dispatch(applicationToggleDrawer());
            },
            _doToggleTheme : (theme:MuiTheme)=>{
                dispatch(applicationToggleTheme(theme));
            },
            onToggleDirection : ()=>{
                dispatch(applicationToggleDirection());
            }
        }
    }),
    (statePros,dispatchProps,ownProps)=>{
        const { theme, drawerOpen } = statePros;
        const {
            onToggleDrawer,_doToggleTheme,onToggleDirection,
        } = dispatchProps.actions;
        return {
            drawerOpen,
            actions:{
                onToggleDrawer,
                onToggleTheme : ()=>{
                    _doToggleTheme(theme === MuiTheme.DARK?MuiTheme.LIGHT:MuiTheme.DARK)
                },
                onToggleDirection,
            }
        }
    }

)(
    DocumentLayout
);

