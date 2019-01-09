import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { browserAdaptorUsecasesViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

import sampleTestCaseUsingBA from '!raw-loader!./samples/sampleTestCaseUsingBA_ts';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class BrowserAdaptorUsecasesView extends React.Component<IProps,{}>{
    render(){
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
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

    )(
    withStyles(style)(BrowserAdaptorUsecasesView)
);

