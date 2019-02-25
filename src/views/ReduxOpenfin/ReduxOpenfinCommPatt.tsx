import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { reduxOpenfinCommPattViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';


const asyncSample1 =
`import {System} from "redux-openfin";

function * someSagaGenerator(){
       
        // promise api sample
        monitorInfoAction = yield call(System.asyncs.getMonitorInfo,System.actions.getMonitorInfo({}));
        
}
`;

const asyncSample2 =
`import {System} from "redux-openfin";
import * as types from "redux-openfin/system/types";

function * someSagaGenerator(){
       
        // promise api sample
        const monitorInfoAction:Action<types.GetMonitorInfoResPayload> = 
            yield call(System.asyncs.getMonitorInfo,System.actions.getMonitorInfo({}));
        const payload:types.GetMonitorInfoResPayload = monitorInfoAction.payload;
        
}
`;

const fluxSample1 =
`import {System} from "redux-openfin";

function * someSagaGenerator(){
    
        // flux api sample
        yield put.resolve(System.actions.getMonitorInfo({}));
        monitorInfoAction = yield take(System.actions.GET_MONITOR_INFO_RES);
        
}
`;

const fluxSample2 =
`import {System} from "redux-openfin";
import * as types from "redux-openfin/system/types";

function * someSagaGenerator(){
    
        // flux api sample
        yield put.resolve(System.actions.getMonitorInfo({}));
        const monitorInfoAction:Action<types.GetMonitorInfoResPayload> = 
            yield take(System.actions.GET_MONITOR_INFO_RES);
        const payload:types.GetMonitorInfoResPayload = monitorInfoAction.payload;
}
`;

const getMonitorInfo=
'export declare function getMonitorInfo(action: Action<types.GetMonitorInfoPayload>): Promise<Action<types.GetMonitorInfoResPayload>>;';

class ReduxOpenfinCommPattView extends React.Component<IProps,{}>{
    render(){
        const {classes} = this.props;

        return (

            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Common API communication pattern
                </Typography>

                <Typography variant='body1' gutterBottom>
                    There are basically two communication pattern provided by redux-openfin: Promise apis and Flux actions.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Redux-openfin split the apis into Applcation, Event, InterApplicationBus Notification System and Window packages.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    In each package, there will usually be three sub packages: actions, asyncs and types.
                </Typography>

                <Typography variant='body1' gutterBottom>
                    Async subpackage contains the promise based wrapped openfin js apis.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Action subpackage contains creators of the flux actions.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Type subpackage contains the types used by the promise apis and flux actions.
                </Typography>




                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Promise apis
                </Typography>

                <Typography variant='body1' gutterBottom>
                    over here, let's use redux-saga as our asynchronous effect handler throughout the samples,
                    and let's assume we need to seize the monitor info of the client running the app.
                </Typography>

                <Typography variant='caption' gutterBottom>
                    Example 1
                </Typography>
                <Code withMargin language='typescript' text={asyncSample1} />
                <Typography variant='body1' gutterBottom>
                    We can check the return type via the definition of the System.asyncs.getMonitorInfo.
                    In most correctly configured IDE, all need to do to check one's ts definition is via clicking.
                </Typography>

                <Typography variant='caption' gutterBottom>
                    System.asyncs.getMonitorInfo definition
                </Typography>
                <Code withMargin language='typescript' text={getMonitorInfo} />
                <Typography variant='body1' gutterBottom>
                    The api's return type tells you,
                    the api will return a promise containing the redux action whose payloud will be the type of GetMonitorInfoResPayload.
                    In the same way, you can also check the definition of GetMonitorInfoResPayload.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    In another word, you can seize the monitor info in the payload field of the response.
                </Typography>

                <Typography variant='caption' gutterBottom>
                    Example 2: same as example but with types
                </Typography>
                <Code withMargin language='typescript' text={asyncSample2} />

                <Typography variant='body1' gutterBottom>
                    Types come with side effects, even in typescript, developers do not have to code in strictly types.
                    Make wise decision in your codes, try to benefits from the types intead of let the types utilizing you.
                </Typography>




                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Flux actions
                </Typography>
                <Typography variant='body1' gutterBottom>
                    You might notice, the response of the promise api is actually a redux action.
                    So, could with communicate in purely actions way? The answer is positive.
                </Typography>
                <Typography variant='caption' gutterBottom>
                    Example 1
                </Typography>
                <Code withMargin language='typescript' text={fluxSample1} />
                <Typography variant='body1' gutterBottom>
                    We can call openfin js api via putting a redux action and take its response any place you want.
                    The benefits of calling openfin js api via flux actions are the producer and consumer part could be seperated.
                    And, the drawbacks are also obvious, you have to utilize some your own logic to tell the response apart
                    if there are more than one producers.
                </Typography>
                <Typography variant='caption' gutterBottom>
                    Example 2: same as example but with types
                </Typography>
                <Code withMargin language='typescript' text={fluxSample2} />


                <Typography variant='body1' gutterBottom>
                    The reason we want to keep same type response of both promise and flux api is that,
                    meanwhile developing, it should the developer to decide which type of api will be more appropriate to utilize,
                    keeping the reposes of the same type could make switching between them as seamlessly as possible.
                </Typography>


                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Exception handling of promise apis and flux apis
                </Typography>

                <Typography variant='body1' gutterBottom>
                    The openfin api beneath the hood might fail, and the err handling methodology of these two sets of apis are slightly different.
                </Typography>

                <Typography variant='h6' gutterBottom>
                    For promise apis:
                </Typography>
                <Typography variant='body1' gutterBottom>
                    In generate or async function, an exception will be thrown. The err obj will contain the reason of the failure.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    In promise chain handler, the err handler will be triggered. The err obj will also contain the reason of the failure.
                </Typography>


                <Typography className={classes.hasMargin} variant='h6' gutterBottom>
                    For flux apis:
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The exception will be eaten by the redux-openfin, and in the response action,
                    the error field will be set and it will the exactly the same obj thrown in the promise api.
                </Typography>


                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Will response action still be dispatched into redux even only the promise api called?
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The answer is by default yes.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    But you can disable it by setting the ignoreStore to true in the IConfig object when you create the middleware.
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
    withStyles(style)(ReduxOpenfinCommPattView)
);

