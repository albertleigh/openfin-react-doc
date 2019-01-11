import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { reduxOpenfinSnapDockViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

import configureStoreCode from '!raw-loader!./samples/configureStore_ts';

import { Code } from '../../components';

class ReduxOpenfinSnapDockView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Snap & Dock
                </Typography>



                <Typography variant='h5' gutterBottom>
                    Configuration
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Out of box snap&dock cross-windows feature is provided, which could be enabled or disabled via
                    IConfig Object.
                </Typography>

                <Typography variant='caption' gutterBottom>
                    Sample to create redux-openfin middleware
                </Typography>
                <Code withMargin text={configureStoreCode} />
                <Typography variant='body1' gutterBottom>
                    In the sample to create openfin middleware,
                    the autoDocking set to be based on REACT_APP_ENABLE_AUTO_DOCKING is set or not.
                    When autoDocking is set, the out of box snap&dock will be provided.
                </Typography>





                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Ctrl+Shift+U / Command+Shift+U to undock all
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Another thing which might be help is be default, the ctrl+shift+u shortcut is listened to undock all.
                    If needed, user can directly use this shortcut to undock all windows already docked no matter what.
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
    withStyles(style)(ReduxOpenfinSnapDockView)
);

