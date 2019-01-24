import * as React from 'react';
import cx from 'classnames';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

import AbstractLandingSection from './AbstractLandingSection';

import { landingWelcomeSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>, WithNamespaces{
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class WelcomeSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
    }

    componentDidMount(): void {
        super.componentDidMount();
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
    }

    onIntersectionChanged =(intersectionObserverEntry:IntersectionObserverEntry)=>{
        if (this.props.onIntersectionChanged){
            this.props.onIntersectionChanged(intersectionObserverEntry);
        }
    }

    render(){

        const { classes, t } = this.props;

        return(
            <div ref = {el => this.element = el} className={classes.container}>
                <div
                    className={classes.backgroundContainer}
                />

                <div className={classes.mainIconContainer}>
                    <DesktopWindowsIcon
                        className={classes.mainIcon}
                    />
                </div>

                <Typography
                    className={classes.text}
                    variant='h4' color="inherit" gutterBottom
                >
                    {t('welcomeSec.title')}
                </Typography>


                <Typography
                    className={classes.text}
                    variant='h5' color="inherit" gutterBottom
                >
                    {t('welcomeSec.subtitle')}
                </Typography>

                <Button
                    variant="contained"
                    color='secondary'
                >{t('welcomeSec.startBtn')}</Button>


            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces("landing")(WelcomeSectionComp)
);