import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { startDevelopersViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

import defaultDeploySvg from '../../assets/svg/openfin-react-doc/DefaultDeploy.svg'
import standaloneDeploySvg from '../../assets/svg/openfin-react-doc/StandaloneDeploy.svg'

class StartDevelopersView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    For Developers
                </Typography>

                <Typography variant='body1' gutterBottom>
                    Simply speaking, we just provide suite for developers to make building openfin embedded react js app much easier.
                </Typography>

                <Typography variant='h5' gutterBottom>
                    Web based deployment
                </Typography>

                <Paper className={classes.imgPaper}>
                    <img src={defaultDeploySvg}/>
                </Paper>

                <Typography variant='body1' gutterBottom>
                    Be default, the static files should be deployed to a web server and openfin will provide an installer,
                    through which we could install the app we built upon windows platform only.
                </Typography>

                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Standalone deployment
                </Typography>

                <Paper className={classes.imgPaper}>
                    <img src={standaloneDeploySvg}/>
                </Paper>

                <Typography variant='body1' gutterBottom>
                    Alternatively, a standalone package solution is also provided by us,
                    packaged binaries could be deployed into client host. Through the embedded browser, built codes could
                    seize outside api via standard web development methology.
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
    withStyles(style)(StartDevelopersView)
);

