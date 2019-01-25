import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { startFaqViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>, WithNamespaces {


}

import { IRootState } from '../../reduxs';

class StartFaqView extends React.Component<IProps,{}>{
    render(){
        const { classes, t } = this.props;
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
        withNamespaces('start')(StartFaqView)
    )
);

