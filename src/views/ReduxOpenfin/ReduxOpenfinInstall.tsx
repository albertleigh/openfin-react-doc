import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { Code } from '../../components';

import { reduxOpenfinInstallViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

import configureStoreCode from '!raw-loader!./samples/configureStore_ts';

const initReduxOpenfin =
`import { BrowserAdapter } from '@albertli90/openfin-browser-adapter';

if(!window.fin){
    window.fin = new BrowserAdapter({
        finUuid:process.env.REACT_APP_FIN_UUID,
        silentMode:false,
    });
}
`

class ReduxOpenfinInstallView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Redux Openfin
                </Typography>

                <Typography variant='body1' gutterBottom>
                    Redux-openfin is the core part of the whole solution suite.
                    It provides two set of wrappers of openfin js apis making developing with openfin js api much easier.
                    Out of box, a cross-window communicate mechanism and the optional snap-dock feature is also provided.
                </Typography>

                <Typography variant='h5' gutterBottom>
                    Install
                </Typography>

                <Code withMargin language='bash' text='yarn add @albertli90/redux-openfin'/>
                <Typography variant='body1' gutterBottom>
                    or
                </Typography>
                <Code withMargin language='bash' text=' npm i @albertli90/redux-openfin'/>

                <Typography variant='h5' gutterBottom>
                    Initialization
                </Typography>
                <Typography variant='caption' gutterBottom>
                    Creating redux-openfin middleware sample:
                </Typography>
                <Code withMargin text={configureStoreCode} />



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
    withStyles(style)(ReduxOpenfinInstallView)
);

