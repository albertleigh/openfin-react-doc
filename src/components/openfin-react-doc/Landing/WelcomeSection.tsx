import * as React from 'react';
import { useRef, useState } from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

import useLandingSectionIntersectionListener from './useLandingSectionIntersectionListener';

import { landingWelcomeSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

const useStyles = makeStyles(style);

const WelcomeSectionComp:React.FunctionComponent<IProps>=(
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
            ref = {element}
            className={classes.container}
        >
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

export default WelcomeSectionComp;