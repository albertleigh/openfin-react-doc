import * as React from 'react';
import cx from "classnames";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

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
    IRootState,
} from '../../reduxs';
import i18n from "../../i18n";

import documentRoutes from '../../routes/document';

interface IProps extends WithStyles<typeof style>, WithNamespaces {
    drawerOpen:boolean,
    actions:{
        onToggleDrawer:()=>void,
        onToggleTheme:()=>void,
        onToggleDirection:()=>void,
    }
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


class DocumentLayout extends React.Component<IProps,{}>{

    handleSwitchLanguage = (languageName:string) => {
        i18n.changeLanguage(languageName);
    }

    render(){

        const {
            classes, t,
            drawerOpen,
            actions:{
                onToggleDrawer,onToggleTheme,onToggleDirection,
            }
        } = this.props;

        return (
            <React.Fragment>
                <DocHeader
                    navbarName={'navbarName from Doc'}
                    onSwitchLanguage={this.handleSwitchLanguage}
                    onToggleDrawer = {onToggleDrawer}
                    onToggleTheme = {onToggleTheme}
                />

                <div className={classes.drawer}>
                    <Hidden mdUp>
                        <Drawer
                            variant='temporary'
                            open={drawerOpen}
                            onClose={onToggleDrawer}
                            onClick={onToggleDrawer}
                        >
                            drawer 1
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
                            drawer 2
                            <DocMenu/>
                        </Drawer>
                    </Hidden>
                </div>

                <div className={classes.content}>
                    Documents layout works ~
                    {switchRoutes}
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    (state:IRootState)=>({
        drawerOpen: state.application.drawerOpen,
    }),
    dispatch => ({
        actions:{
            onToggleDrawer: ()=>{
                dispatch(applicationToggleDrawer());
            },
            onToggleTheme : ()=>{
                dispatch(applicationToggleTheme());
            },
            onToggleDirection : ()=>{
                dispatch(applicationToggleDirection());
            }
        }
    })

)(
    withStyles(style)(
        withNamespaces('landing')(DocumentLayout)
    )
);

