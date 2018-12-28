import * as React from 'react';
import cx from 'classnames';

import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingGenConfSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';
import AniDashedLine from '../AniDashedLine/AniDashedLine';

import AbstractLandingSection from "./AbstractLandingSection";

import databaseGearsSvg from '../../../assets/svg/developer/database-gears.svg';
import settingSvg from '../../../assets/svg/other/settings.svg';

interface IProps extends WithStyles<typeof style>, WithNamespaces {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class GenConfSectionComp extends AbstractLandingSection<IProps, IState>{

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
            <div
                className={classes.container}
                ref = {el => this.element = el}
            >
                <Typography variant="h4" color="inherit" gutterBottom>
                    {t('genConf.title')}
                </Typography>

                <div className={classes.centerContainer}>
                    <img className={classes.centerDbImgContainer}
                         src={databaseGearsSvg}/>

                    <div className={classes.centerDashedLinesContainer} >
                        <AniDashedLine
                            viewBox='0 0 10 1'
                            pathD='M0 0 l10,0'
                        />

                        <AniDashedLine
                            viewBox='0 0 10 1'
                            pathD='M0 0 l10,0'
                        />
                    </div>

                    <div className={classes.centerMockWinContainer}>
                        <PaperMockWin>
                            <Typography variant="h4" color="inherit" gutterBottom>
                                {t('genConf.application')}
                            </Typography>
                        </PaperMockWin>
                        <img className={classes.centerMockWinGears}
                            src={settingSvg}/>
                    </div>

                </div>

                <Typography variant="body1" color="inherit" gutterBottom>
                    {t('genConf.desc')}
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(GenConfSectionComp)
);