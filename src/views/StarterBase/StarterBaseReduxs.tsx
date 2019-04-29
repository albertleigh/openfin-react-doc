import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import {Code} from "../../components";


import { starterBaseReduxsViewStyle as style } from '../../assets/jss/openfin-react-doc';

import clientReducerCode from '!raw-loader!./samples/client.reducer_ts';
import indexReducerCode from '!raw-loader!./samples/index.reducer_ts';

import { IRootState } from '../../reduxs';

const createStore =
`import { createStore } from 'redux';
import rootReducer, {IRootState} from '../reduxs';

if(window.name === process.env.REACT_APP_FIN_UUID){
    const store = createStore(
        rootReducer(),
    );
}else{
    const store = createStore(
        rootReducer(window.opener.store.getState()),
    );
}

`;


const useStyles = makeStyles(style);

const StarterBaseReduxsView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant='h3' gutterBottom>
                Multi-win support Reduxs structure
            </Typography>

            <Typography variant='subtitle1' gutterBottom>
                The pattern to adopt comm and support among multi-windows is slightly different
                and it requires certain clarifications.
            </Typography>


            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Limitation of the direct function binding
            </Typography>
            <Typography variant='body1' gutterBottom>
                Using direct function binding between windows turns out sometimes very unmaintainable,
                unexpected exceptions being thrown everywhere.
            </Typography>
            <Typography variant='body1' gutterBottom>
                Maintaining primitive objects via sharing redux actions doesn't sound that forthright,
                however, it has been proved to be practical and efficient.
                Just split the state into separated reusable sections, consume shared actions if needed based on the windows id
                and it turns out to be super simple to maintain and avoid overheads.
            </Typography>


            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                State Initialization
            </Typography>
            <Typography variant='body1' gutterBottom>
                Before consuming redux actions, the child state initialization of different windows would be slightly different.
                When it creates store, instead of using static default state, child window spa should inherit based on the parent state.
            </Typography>

            <Typography variant='caption' gutterBottom>
                ./client/reducer.ts For instance, the client state with only one number field count.
            </Typography>
            <Code withMargin text={clientReducerCode} />
            <Typography variant='body1' gutterBottom>
                Instead of returning state, the reducer module should return a function through which create the state based on the parent state.
            </Typography>
            <Typography variant='caption' gutterBottom>
                ../reduxs/index.ts
            </Typography>
            <Code withMargin text={indexReducerCode} />
            <Typography variant='caption' gutterBottom>
                To create store
            </Typography>
            <Code withMargin text={createStore} />
            <Typography variant='body1' gutterBottom>
                Therefore, when creating store, compare window.name with main window UUID to decide whether it is parent state or not.
                If not, pass the parent state in and create based one it.
            </Typography>



            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Tips
            </Typography>
            <Typography className={classes.hasBottomMargin} variant='body1' gutterBottom>
                While populating child state based on parent state, try to avoid binding functions
                or inherit instances containing cb functions like Interval handlers or WebWorker intances.
            </Typography>


        </React.Fragment>
    )
}

export default StarterBaseReduxsView;

