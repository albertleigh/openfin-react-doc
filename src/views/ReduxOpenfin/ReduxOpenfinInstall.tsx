import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { Code } from '../../components';

import { reduxOpenfinInstallViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

import configureStoreCode from '!raw-loader!./samples/configureStore_ts';

const initReduxOpenfin =
`import { BrowserAdapter } from 'openfin-browser-adapter';

if(!window.fin){
    window.fin = new BrowserAdapter({
        finUuid:process.env.REACT_APP_FIN_UUID,
        silentMode:false,
    });
}
`

class ReduxOpenfinInstallView extends React.Component<IProps,{}>{
    render(){

        const  { classes } = this.props;

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

                <Code withMargin language='bash' text='yarn add redux-openfin'/>
                <Typography variant='body1' gutterBottom>
                    or
                </Typography>
                <Code withMargin language='bash' text=' npm i redux-openfin'/>

                <Typography variant='h5' gutterBottom>
                    Initialization
                </Typography>
                <Typography variant='caption' gutterBottom>
                    Creating redux-openfin middleware sample:
                </Typography>
                <Code withMargin text={configureStoreCode} />

                <Typography variant='caption' gutterBottom>
                    redux-openfin/createOpenfinMiddleware parameters:
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Parameter</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">fin</TableCell>
                                <TableCell align="right">Any (not controlled)</TableCell>
                                <TableCell align="right">openfin js api handler</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">config</TableCell>
                                <TableCell align="right">redux-openfin/IConfig</TableCell>
                                <TableCell align="right">The configuration object of redux-openfin</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>


                <Typography className={classes.hasMargin} variant='caption' gutterBottom>
                    redux-openfin/IConfig configuration object schema:
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Field</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">finUuid</TableCell>
                                <TableCell align="right">String</TableCell>
                                <TableCell align="right">openfin app UUID, which could be siezed via process.env at compile time</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">sharedActions</TableCell>
                                <TableCell align="right">String[]</TableCell>
                                <TableCell align="right">Actions names of shared action</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">ignoreStore</TableCell>
                                <TableCell align="right">Boolean[Optional]</TableCell>
                                <TableCell align="right">Optional flag to ignore redux store to dispatch response when set</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">autoDocking</TableCell>
                                <TableCell align="right">Boolean[Optional]</TableCell>
                                <TableCell align="right">Optional flag to enable or disable current window docking when set or not</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">dockingOptions</TableCell>
                                <TableCell align="right">redux-openfin/IDockingOptions [Optional]</TableCell>
                                <TableCell align="right">
                                    Optional configuration object to fine tune windows docking,
                                    please refer Redux-Openfin Snap&Dock section for more info.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>


                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    More
                </Typography>


                <Typography variant='body1' gutterBottom>
                    In the following section,
                    topics of
                </Typography>

                    <Typography className={classes.coveredTopicItem} variant='subtitle1' gutterBottom>
                        common communication pattern utilized by the redux openfin,
                    </Typography>
                    <Typography className={classes.coveredTopicItem} variant='subtitle1' gutterBottom>
                        a breif list of apis supported of the version,
                    </Typography>
                    <Typography className={classes.coveredTopicItem} variant='subtitle1' gutterBottom>
                        cross windows communication via shared actions,
                    </Typography>
                    <Typography className={classes.coveredTopicItem} variant='subtitle1' gutterBottom>
                        snap&dock feature and its configuration,
                    </Typography>

                <Typography variant='body1' gutterBottom>
                    will be covered one by one.
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
    withStyles(style)(ReduxOpenfinInstallView)
);

