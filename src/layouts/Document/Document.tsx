import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { documentStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

import documentRoutes from '../../routes/document';

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
    render(){
        return (
            <React.Fragment>
                Documents layout works ~
                <div>
                    {switchRoutes}
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

        }
    })

)(
    withStyles(style)(DocumentLayout)
);

