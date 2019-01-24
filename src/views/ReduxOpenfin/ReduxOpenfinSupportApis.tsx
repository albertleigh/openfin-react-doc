import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { reduxOpenfinSupportApisViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class ReduxOpenfinSupportApisView extends React.Component<IProps,{}>{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.outmostContainer}>
                <Typography variant='h3' gutterBottom>
                    Apis supported
                </Typography>
                <Typography variant='caption' gutterBottom>
                    Todo: populate all api doc in next release
                </Typography>

                <Typography variant='h4' gutterBottom>
                    Application
                </Typography>
                    <Typography variant='h5' gutterBottom>
                        new
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        restart
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        close
                    </Typography>



                <Typography variant='h4' gutterBottom>
                    Event
                </Typography>



                <Typography variant='h4' gutterBottom>
                    InterApplicationBus
                </Typography>
                    <Typography variant='h5' gutterBottom>
                        publish
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        subscribe
                    </Typography>


                <Typography variant='h4' gutterBottom>
                    Notification
                </Typography>
                    <Typography variant='h5' gutterBottom>
                        createNotification
                    </Typography>




                <Typography variant='h4' gutterBottom>
                    System
                </Typography>
                    <Typography variant='h5' gutterBottom>
                        getMachineId
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getDeviceUserId
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getMonitorInfo
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getVersion
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getHostSpecs
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getEnvironmentVariable
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        clearCache
                    </Typography>




                <Typography variant='h4' gutterBottom>
                    Window
                </Typography>
                    <Typography variant='h5' gutterBottom>
                        getCurrent
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        wrap
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        addEventListener
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        bringToFront
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        newWindow
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        close
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        disableFrame
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        enableFrame
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        focus
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getGroup
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getBounds
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getState
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        getOptions
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        hide
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        joinGroup
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        leaveGroup
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        maximize
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        mergeGroups
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        minimize
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        moveBy
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        moveTo
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        restore
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        show
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        setAsForeground
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        setBounds
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        updateOptions
                    </Typography>

            </div>
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
    withStyles(style)(ReduxOpenfinSupportApisView)
);

