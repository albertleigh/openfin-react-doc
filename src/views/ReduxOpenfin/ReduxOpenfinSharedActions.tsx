import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { reduxOpenfinSharedActionsViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

import configureStoreCode from '!raw-loader!./samples/configureStore_ts';

import reduxOpenfinDeployDiagram from '../../assets/svg/openfin-react-doc/redux-openfin-deploy.svg';

import { Code } from '../../components';

const useStyles = makeStyles(style);

const receiverTagCode =
`function* someGeneratorFun(action){

    if (window.name === process.env.REACT_APP_FIN_UUID){
        // main window receives this shared action    
    }else if (window.name === 'some-other-window-name'){
        // some other window receives this shared action    
    }
}

yield takeEvery('SOME_SHARED_ACTION_NAME',someGeneratorFun);
`;

const senderTagCode =
`import { SHARED_ACTION_ORIGIN_TAG } from 'redux-openfin/channel';

function* someGeneratorFun(action){

    const ORIGIN_TAG = action.payload[SHARED_ACTION_ORIGIN_TAG];

    if ( ORIGIN_TAG === process.env.REACT_APP_FIN_UUID){
        // main window sends this shared action    
    }else if ( ORIGIN_TAG === 'some-other-window-name'){
        // some other sends catches this shared action    
    }
}

yield takeEvery('SOME_SHARED_ACTION_NAME',someGeneratorFun);
`;

const ReduxOpenfinSharedActionsView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

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

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Big Pic: Deploy diagram
            </Typography>
            <Paper className={classes.imgPaper}>
                <img src = {reduxOpenfinDeployDiagram}/>
            </Paper>

            <Typography variant='body1' gutterBottom>
                Redux openfin implement the interface to connect to the event bus(Openfin channel) transparent to developers.
                All developers need to do is to tell redux-openfin the list of action names to share.
                And the redux openfin will be responsible to send or receive the actions whose name match any one of the action name list provided.
            </Typography>


            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Specify the actions in the configuration
            </Typography>
            <Code withMargin text={configureStoreCode} />
            <Typography variant='body1' gutterBottom>
                Just like the previous example, to create the middleware, need to specify the actions name array when we create them.
            </Typography>




            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Identify sender or receiver
            </Typography>
            <Typography variant='body1' gutterBottom>
                Openfin Rvm wll inject appUUID as window.name in the main window,
                and the window name specified in the creating config in the other children window.
            </Typography>
            <Typography variant='body1' gutterBottom>
                Therefore, we can identify where we receive it on the same code base like
            </Typography>
            <Code withMargin text={receiverTagCode} />
            <Typography variant='body1' gutterBottom>
                Similarly, we can identify who sends it on the same code base like
            </Typography>
            <Code withMargin text={senderTagCode} />


        </React.Fragment>
    )
}

export default ReduxOpenfinSharedActionsView;

