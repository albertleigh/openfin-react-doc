import * as React from 'react';
import { useRef } from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { landingAllCustomizableSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

import useLandingSectionIntersectionListener from './useLandingSectionIntersectionListener';

import ReactSvg from '../../../assets/svg/developer/react.svg';

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

const useStyles = makeStyles(style);

const AllCustomizableSectionComp:React.FunctionComponent<IProps>= (
    {
        onIntersectionChanged,
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
                {t('allCust.title')}
            </Typography>

            <div>
                <PaperMockWin>
                    <img className={classes.mockAppImg} src={ReactSvg}/>
                </PaperMockWin>
            </div>

            <Typography variant="body1" color="inherit" gutterBottom>
                {t('allCust.desc')}
            </Typography>
        </div>
    )
}

export default AllCustomizableSectionComp;