import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { startDevelopersViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

import defaultDeploySvg from '../../assets/svg/openfin-react-doc/DefaultDeploy.svg'
import standaloneDeploySvg from '../../assets/svg/openfin-react-doc/StandaloneDeploy.svg'

const useStyles = makeStyles(style);

const StartDevelopersView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('start', { useSuspense: false });

    return (
        <React.Fragment>
            <Typography variant='h3' gutterBottom>
                {t('developer.title')}
            </Typography>

            <Typography variant='body1' gutterBottom>
                {t('developer.subTitle')}
            </Typography>

            <Typography variant='h5' gutterBottom>
                {t('developer.webDeployTitle')}
            </Typography>

            <Paper className={classes.imgPaper}>
                <img src={defaultDeploySvg}/>
            </Paper>

            <Typography variant='body1' gutterBottom>
                {t('developer.webDeployDesc')}
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                {t('developer.standaloneDeployTitle')}
            </Typography>

            <Paper className={classes.imgPaper}>
                <img src={standaloneDeploySvg}/>
            </Paper>

            <Typography variant='body1' gutterBottom>
                {t('developer.standaloneDeployDesc')}
            </Typography>


        </React.Fragment>
    )
}

export default StartDevelopersView;

