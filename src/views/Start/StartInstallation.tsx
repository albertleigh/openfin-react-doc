import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SettingIcon from '@material-ui/icons/Settings';

import cx from "classnames";
import { connect } from 'react-redux';

import { startInstallationViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class StartInstallationView extends React.Component<IProps,{}>{

    handleSampleInstallerClick = ()=>{
        window.open("https://install.openfin.co/download/?config=https%3A%2F%2Fwinslow90.github.io%2Fapp.json&fileName=openfin-react-installer&supportEmail=liwentao90%40yahoo.com",'_blank');
    }

    render(){

        const {classes} = this.props;

        return (
            <React.Fragment>
                <Typography variant='h2' gutterBottom>
                    Installer
                </Typography>
                <Typography variant='h4' gutterBottom>
                    Windows
                </Typography>

                <div className={classes.sampleInstallerContainer}>
                    <Typography variant='h6' gutterBottom>
                        Sample installer
                    </Typography>
                    <IconButton aria-label="SampleInstaller"
                                onClick={this.handleSampleInstallerClick}
                    >
                        <SettingIcon fontSize="small" />
                    </IconButton>
                </div>

                <Typography variant="body1" gutterBottom>
                    Openfin provides an window platform installer generator to generate installer of your application.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <a className={classes.anchor}
                       href='https://install.openfin.co/'>https://install.openfin.co</a>
                </Typography>

                <Typography variant='h4' gutterBottom>
                    Mac & Linux
                </Typography>
                <Typography variant="caption" gutterBottom>
                    Current installers upon mac and linux platform are not supported by Openfin.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    But an alternative standalone solution is provided via al-cli.
                    Plz check scaffolding al-cli section.
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

