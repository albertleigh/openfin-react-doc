import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SettingIcon from '@material-ui/icons/Settings';

import cx from "classnames";
import { connect } from 'react-redux';

import { startInstallationViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>, WithNamespaces{


}

import { IRootState } from '../../reduxs';

class StartInstallationView extends React.Component<IProps,{}>{

    handleSampleInstallerClick = ()=>{
        window.open("https://install.openfin.co/download/?config=https%3A%2F%2Fwinslow90.github.io%2Fapp.json&fileName=openfin-react-installer&supportEmail=liwentao90%40yahoo.com",'_blank');
    }

    render(){

        const {classes, t} = this.props;

        return (
            <React.Fragment>
                <Typography variant='h2' gutterBottom>
                    {t('start.installer')}
                </Typography>
                <Typography variant='h4' gutterBottom>
                    Windows
                </Typography>

                <div className={classes.sampleInstallerContainer}>
                    <Typography variant='h6' gutterBottom>
                        {t('start.sampleInstaller')}
                    </Typography>
                    <IconButton aria-label="SampleInstaller"
                                onClick={this.handleSampleInstallerClick}
                    >
                        <SettingIcon fontSize="small" />
                    </IconButton>
                </div>

                <Typography variant="body1" gutterBottom>
                    {t('start.winInstallerGenerator')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <a className={classes.anchor}
                       href='https://install.openfin.co/'>https://install.openfin.co</a>
                </Typography>

                <Typography variant='h4' gutterBottom>
                    Mac & Linux
                </Typography>
                <Typography variant="caption" gutterBottom>
                    {t('start.linuxInstallerGenerator')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {t('start.linuxInstallerGeneratorAlternative')}
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
    withStyles(style)(
        withNamespaces('start')(StartInstallationView)
    )
);

