import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Button from '@material-ui/core/Button';

import { landingStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>, WithNamespaces {


}

import { IRootState } from '../../reduxs';
import i18n from "../../i18n";

class LandingLayout extends React.Component<IProps,{}>{

    handleSwitchToEn = () => {
        i18n.changeLanguage('en');
    }

    handleSwitchToZh = () => {
        i18n.changeLanguage('zh');
    }


    render(){

        const { t } = this.props;

        return (
            <div className={cx(
                'landingContainer'
            )}>
                Landing layout works ~
                <span>{t('Welcome React TS')}</span>
                <Button variant="outlined" color="primary" onClick={this.handleSwitchToEn} >Eng</Button>
                <Button variant="outlined" color="secondary" onClick={this.handleSwitchToZh} >Zhn</Button>
            </div>
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
        withNamespaces()(LandingLayout)
    )
);

