import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { startFaqViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

const useStyles = makeStyles(style);

const StartFaqView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('start', { useSuspense: false });

    return (
        <React.Fragment>
            <Typography variant='h3' gutterBottom>
                {t('faq.title')}
            </Typography>
            <Typography variant='h5' gutterBottom>
                {t('faq.whyTs')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('faq.whyTsAns1')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('faq.whyTsAns2')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('faq.whyTsAns3')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('faq.whyTsAns4')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('faq.whyTsAns5')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {t('faq.whyTsAns6')}
            </Typography>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                {t('faq.willResActionEmitted')}
            </Typography>

            <Typography variant='body1' gutterBottom>
                {t('faq.willResActionEmittedAns1')}
            </Typography>
            <Typography variant='body1' gutterBottom>
                {t('faq.willResActionEmittedAns2')}
            </Typography>
        </React.Fragment>
    )
}

export default StartFaqView;

