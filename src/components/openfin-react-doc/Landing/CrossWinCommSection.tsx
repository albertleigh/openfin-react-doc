import * as React from 'react';
import cx from 'classnames';
import { useRef } from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { landingCrossWinCommSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';
import AniDashedLine from '../AniDashedLine/AniDashedLine';

import useLandingSectionIntersectionListener from './useLandingSectionIntersectionListener';

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

const useStyles = makeStyles(style);

const CrossWinCommSectionComp:React.FunctionComponent<IProps> = (
    {
        onIntersectionChanged
    }
)=>{

    const element = useRef(null);

    const classes = useStyles();
    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const { visiblePct } = useLandingSectionIntersectionListener({element:element.current,onIntersectionChanged})

    return(
        <div
            className={classes.container}
            ref = {element}
        >
            <Typography className={classes.title} variant="h4" color="inherit" gutterBottom>
                {t('crossWin.title')}
            </Typography>

            <div className={classes.commWinsContainer}>

                <div className={classes.commWin}>
                    <PaperMockWin>
                        <Typography variant="h4" color="inherit" gutterBottom>
                            {t('crossWin.win')} C
                        </Typography>
                    </PaperMockWin>
                </div>

                <div className={classes.dashedLine2}>
                    <AniDashedLine
                        viewBox='0 0 20 4'
                        pathD='M0 0 c 3 5.1, 17 5.1, 20 0'
                    />
                </div>

                <div className={classes.commWin}>
                    <PaperMockWin>
                        <Typography variant="h4" color="inherit" gutterBottom>
                            {t('crossWin.win')} B
                        </Typography>
                    </PaperMockWin>
                </div>

                <div className={classes.dashedLine4}>
                    <AniDashedLine
                        viewBox='0 0 20 4'
                        pathD='M0 0 c 3 5.1, 17 5.1, 20 0'
                    />
                </div>

                <div className={classes.commWin}>
                    <PaperMockWin>
                        <Typography variant="h4" color="inherit" gutterBottom>
                            {t('crossWin.win')} A
                        </Typography>
                    </PaperMockWin>
                </div>

                <div className={classes.dashedLine6}>
                    <AniDashedLine
                        viewBox='0 0 20 6'
                        pathD='M0 0 c 4 6.9, 16 6.9, 20 0'
                    />
                </div>
            </div>
            <Typography variant="body1" color="inherit" gutterBottom>
                {t('crossWin.desc')}
            </Typography>
        </div>
    )

}

export default CrossWinCommSectionComp;