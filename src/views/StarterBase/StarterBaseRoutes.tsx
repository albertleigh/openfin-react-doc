import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { starterBaseRoutesViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class StarterBaseRoutesView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

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
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

    )(
    withStyles(style)(StarterBaseRoutesView)
);

