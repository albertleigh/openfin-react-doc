import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { landingStyle as style } from '../../assets/jss/openfin-react-doc';

import {
    LandingHeader,
    LandingWelcomeSection,
    LandingSnapDockSection,
} from '../../components';

interface IProps extends WithStyles<typeof style>, WithNamespaces {

    actions:{
        onToggleTheme:()=>void,
        onToggleDirection:()=>void,
    }

}

import {
    // actions
    applicationToggleTheme,
    applicationToggleDirection,

    // types
    IRootState,
} from '../../reduxs';
import i18n from "../../i18n";

class LandingLayout extends React.Component<IProps,{}>{

    handleSwitchLanguage = (languageName:string) => {
        i18n.changeLanguage(languageName);
    }

    handleSwitchToEn = () => {
        i18n.changeLanguage('en');
    }

    handleSwitchToZh = () => {
        i18n.changeLanguage('zh');
    }


    render(){

        const {
            classes, t,
            actions:{
                onToggleTheme,onToggleDirection,
            }
        } = this.props;

        return (
            <div className={cx(
                'landingContainer',
                classes.container,
            )}>
                <LandingHeader
                    onSwitchLanguage={this.handleSwitchLanguage}
                    onToggleTheme = {onToggleTheme}
                />
                <div className={classes.sectionContainer}>
                    <LandingWelcomeSection/>
                </div>
                <div className={classes.sectionContainer}>
                    <LandingSnapDockSection/>
                </div>
                <Paper>
                    <Typography variant='h6' gutterBottom>
                        Landing layout works ~
                    </Typography>
                    <Typography variant='subtitle1' gutterBottom>
                        {t('Welcome React TS')}
                    </Typography>
                </Paper>
                <Button variant="outlined" color="primary" onClick={this.handleSwitchToEn} >Eng</Button>
                <Button variant="outlined" color="secondary" onClick={this.handleSwitchToZh} >Zhn</Button>
                <Button variant="contained" color="primary" onClick={onToggleTheme} >Toggle theme</Button>
                <Button variant="contained" color="secondary" onClick={onToggleDirection} >Toggle Direction</Button>
            </div>
        )
    }
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{
            onToggleTheme : ()=>{
                dispatch(applicationToggleTheme());
            },
            onToggleDirection : ()=>{
                dispatch(applicationToggleDirection());
            }

        }
    })

)(
    withStyles(style)(
        withNamespaces('landing')(LandingLayout)
    )
);

