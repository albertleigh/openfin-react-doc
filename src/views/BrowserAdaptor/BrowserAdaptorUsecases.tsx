import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { browserAdaptorUsecasesViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

import sampleTestCaseUsingBA from '!raw-loader!./samples/sampleTestCaseUsingBA_ts';

import { IRootState } from '../../reduxs';

const useStyles = makeStyles(style);

const BrowserAdaptorUsecasesView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant='h3' gutterBottom>
                BrowserAdaptor use cases
            </Typography>

            <Typography variant='h6' gutterBottom>
                Allow users to utilize chrome dev extenstions tools to help develop.
            </Typography>

            <Typography variant='body1' gutterBottom>
                Plz refer last section as an example.
            </Typography>

            <Typography variant='h6' gutterBottom>
                Provide mockup openfin api in the integration test case.
            </Typography>

            <Typography variant='caption' gutterBottom>
                Eg.
            </Typography>
            <Code withMargin language={'typescript'} text={sampleTestCaseUsingBA} />

        </React.Fragment>
    )
}

export default BrowserAdaptorUsecasesView;

