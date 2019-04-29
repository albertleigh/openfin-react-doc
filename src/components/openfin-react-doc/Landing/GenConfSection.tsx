import * as React from 'react';
import { useRef } from 'react';
import cx from 'classnames';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { landingGenConfSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';
import AniDashedLine from '../AniDashedLine/AniDashedLine';

import useLandingSectionIntersectionListener from './useLandingSectionIntersectionListener';

import databaseGearsSvg from '../../../assets/svg/developer/database-gears.svg';
import settingSvg from '../../../assets/svg/other/settings.svg';

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

const useStyles = makeStyles(style);

const GenConfSectionComp:React.FunctionComponent<IProps> = (
    {
        onIntersectionChanged
    }
)=>{

    const element:any = useRef(null);

    const classes = useStyles();
    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const { visiblePct } = useLandingSectionIntersectionListener({element,onIntersectionChanged})


    return(
        <div
            className={classes.container}
            ref = {element}
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

export default GenConfSectionComp;