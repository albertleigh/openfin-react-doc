import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { starterBaseRoutesViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

const useStyles = makeStyles(style);

const StarterBaseRoutesView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>

            <Typography variant='h3' gutterBottom>
                Routes pattern of the starter kit templates
            </Typography>

            <Typography variant='subtitle1' gutterBottom>
                The templates follow certain patterns to tell different spa apart when created in child window.
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                {'Path = /dashboard/*'}
            </Typography>
            <Typography variant='body1' gutterBottom>
                Contains all the main window views.
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                {'Path = /childWindow/*'}
            </Typography>
            <Typography variant='body1' gutterBottom>
                Contains all the child window views.
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                {'Path = /notification/*'}
            </Typography>
            <Typography className={classes.hasBottomMargin} variant='body1' gutterBottom>
                Contains all the notification views
            </Typography>

        </React.Fragment>
    )
}

export default StarterBaseRoutesView;

