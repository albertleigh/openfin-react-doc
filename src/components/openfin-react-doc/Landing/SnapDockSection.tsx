import * as React from 'react';
import { useRef, useState } from 'react';

import cx from 'classnames';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { landingSnapDockSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

import useLandingSectionIntersectionListener from './useLandingSectionIntersectionListener';

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    windowsShown:boolean,
    rightWindowDocked:boolean,
    // [key:number]:any,
    // [key:string]:any,
}

const useStyles = makeStyles(style);

const SnapDockSectionComp:React.FunctionComponent<IProps>=(
    {
        onIntersectionChanged
    }
)=>{

    const element:any = useRef(null);
    const classes = useStyles();
    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const [state, setState]  = useState<IState>({
        windowsShown: false,
        rightWindowDocked: true,
    });

    const { visiblePct } = useLandingSectionIntersectionListener({
        element,
        onIntersectionChanged:(intersectionObserverEntry:IntersectionObserverEntry)=>{

            if (onIntersectionChanged){
                onIntersectionChanged(intersectionObserverEntry);
            }

            if (intersectionObserverEntry.intersectionRatio >0.75){
                setState({...state, windowsShown: true});
            }else{
                setState({
                    windowsShown: false,
                    rightWindowDocked: true,
                })
            }
        }
    })

    const handleRightWindowUndock = ()=>{
        setState({...state, rightWindowDocked: false,})
    }

    const { windowsShown, rightWindowDocked } =state;

    return(
        <div
            className = {classes.container}
            ref = {element}
        >
            <Typography variant="h4" color="inherit" gutterBottom>
                {t('snapDockSec.title')}
            </Typography>
            <div
                className = {classes.windowsContainer}
            >
                <div
                    className = {cx(
                        'animated',
                        {
                            [classes.windowHidden]:!windowsShown,
                            'bounceInLeft':windowsShown
                        }
                    )}
                >
                    <PaperMockWin>
                        <Typography variant="h2" color="inherit" gutterBottom>
                            {t('snapDockSec.win1')}
                        </Typography>
                    </PaperMockWin>
                </div>
                <div
                    className = {cx(
                        'animated',
                        {
                            [classes.windowHidden]:!windowsShown && rightWindowDocked,
                            'bounceInRight':windowsShown && rightWindowDocked,
                            'bounceOutDown':windowsShown && !rightWindowDocked,
                        }
                    )}
                >
                    <PaperMockWin
                        docked={true}
                        onUndock={handleRightWindowUndock}
                    >
                        <Typography variant="h2" color="inherit" gutterBottom>
                            {t('snapDockSec.win2')}
                        </Typography>
                    </PaperMockWin>
                </div>
            </div>
            <Typography variant="body1" color="inherit" gutterBottom>
                {t('snapDockSec.desc')}
            </Typography>
        </div>
    )
}

export default SnapDockSectionComp;