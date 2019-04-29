import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SettingIcon from '@material-ui/icons/Settings';

import cx from "classnames";
import { connect } from 'react-redux';

import { startInstallationViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

const useStyles = makeStyles(style);

const StartInstallationView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('start', { useSuspense: false });

    const handleSampleInstallerClick = ()=>{
        window.open("https://install.openfin.co/download/?config=https%3A%2F%2Fwinslow90.github.io%2Fapp.json&fileName=openfin-react-installer&supportEmail=liwentao90%40yahoo.com",'_blank');
    }

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
                            onClick={handleSampleInstallerClick}
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

export default StartInstallationView;

