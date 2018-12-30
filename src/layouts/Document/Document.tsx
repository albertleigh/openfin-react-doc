import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { documentStyle as style } from '../../assets/jss/openfin-react-doc';

import {
    DocHeader,
} from '../../components';

import {
    // actions
    applicationToggleTheme,
    applicationToggleDirection,

    // types
    IRootState,
} from '../../reduxs';
import i18n from "../../i18n";

import documentRoutes from '../../routes/document';

interface IProps extends WithStyles<typeof style>, WithNamespaces {
    actions:{
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
            actions:{
                onToggleTheme,onToggleDirection,
            }
        } = this.props;

        return (
            <React.Fragment>
                <div>
                    <DocHeader
                        navbarName={'navbarName from Doc'}
                        onSwitchLanguage={this.handleSwitchLanguage}
                        onToggleTheme = {onToggleTheme}
                    />

                    Documents layout works ~
                    <div>
                        {switchRoutes}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{
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

