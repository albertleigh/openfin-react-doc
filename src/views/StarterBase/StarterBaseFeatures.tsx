import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { starterBaseFeaturesViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

const useStyles = makeStyles(style);

const StarterBaseFeaturesView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant='h3' gutterBottom>
                Starter kit features
            </Typography>

            <Typography variant='h5' gutterBottom>
                Launch bar
            </Typography>

            <Paper className={classes.gifImgPaper}>
                <img className={classes.gifImg}
                     src={`${process.env.PUBLIC_URL}/img/features/launch_bar.gif`}/>
            </Paper>
            <Typography variant='body1' gutterBottom>
                A collapsible launchbar is provided to create child windows.
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Child windows and cross-window comm
            </Typography>
            <Paper className={classes.gifImgPaper}>
                <img className={classes.gifImg}
                     src={`${process.env.PUBLIC_URL}/img/features/action_comm.gif`}/>
            </Paper>
            <Typography variant='body1' gutterBottom>
                Multi-windows feature plus robust cross-window communication mechanism via redux actions.
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Snap & Dock
            </Typography>
            <Paper className={classes.gifImgPaper}>
                <img className={classes.gifImg}
                     src={`${process.env.PUBLIC_URL}/img/features/snap_dock.gif`}/>
            </Paper>
            <Typography variant='body1' gutterBottom>
                Out of box cross-window snap & dock feature
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Notification, Snackbar, Light/dark theme & Multi-lang support
            </Typography>

            <Paper className={classes.gifImgPaper}>
                <img className={classes.gifImg}
                     src={`${process.env.PUBLIC_URL}/img/features/theme_lang.gif`}/>
            </Paper>
            <Typography className={classes.hasBottomMargin} variant='body1' gutterBottom>
                Global notification pop-ups, inner snack bar, light/dark theme switch and multi-lang templates are supported.
            </Typography>

        </React.Fragment>
    )
}

export default StarterBaseFeaturesView;

