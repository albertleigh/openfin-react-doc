import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { reduxOpenfinSharedActionsViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class ReduxOpenfinSharedActionsView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Sharing actions
                </Typography>
                <Typography variant='subheading' gutterBottom>
                    Cross-window communication via redux action
                </Typography>

                <Typography className={classes.hasMargin} variant='body1' gutterBottom>
                    React.js usually is utilized to build SPA(single page application) webpages / stack of views mobile app.
                    However desktop app usually calls for multi-windows features, even more usually,
                    these windows need communicate with each other, which make developing Desktop app via SPA tricky.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Therefore, redux-openfin provides a out-of-box solution to allow different windows belonging to the same SPA application
                    share certain Redux Actions if needed. Since the lib is called redux-openfin, there ought not to much complains to directly use
                    Redux actions as cross windows meta object.
                </Typography>


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
    withStyles(style)(ReduxOpenfinSharedActionsView)
);

