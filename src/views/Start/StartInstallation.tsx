import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { startInstallationViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class StartInstallationView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                <Typography variant='h2' gutterBottom>
                    Installation & Setup
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Initially, install the scaffolding tool to generate template.
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
    withStyles(style)(StartInstallationView)
);

