import * as React from 'react';
import { useRef, useState } from 'react';
import cx from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { landingScaffoldingToolSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import Code from '../Code/Code';

import useLandingSectionIntersectionListener from './useLandingSectionIntersectionListener';

import newCompCode from '!raw-loader!./samples/NewComp_tsx';

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,

}

const useStyles = makeStyles(style);

interface IState{
    animated:boolean,
}

const ScaffoldingToolSectionComp:React.FunctionComponent<IProps> = (
    {
        onIntersectionChanged
    }
)=>{

    const element = useRef(null);
    const classes = useStyles();
    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const [state, setState]  = useState<IState>({
        animated:false,
    });
    const { visiblePct } = useLandingSectionIntersectionListener({
        element:element.current,
        onIntersectionChanged:(intersectionObserverEntry:IntersectionObserverEntry)=>{

            if (onIntersectionChanged){
                onIntersectionChanged(intersectionObserverEntry);
            }

            if (intersectionObserverEntry.intersectionRatio >0.95){
                setState({animated: true});
            }else{
                setState({animated: false,});
            }
        }
    })

    const { animated } = state;

    return(
        <div
            className={classes.container}
            ref = {element}
        >

            <Typography variant="h4" color="inherit" gutterBottom>
                {t('scaffoldingSec.title')}
            </Typography>

            <div className={classes.sampleCodeContainer}>
                <div className={
                    cx(
                        'animated', 'infinite', 'fadeIn', 'slower',
                    )
                }>
                    <Code withMargin text={newCompCode} />
                </div>
            </div>

            <div
                className={cx(
                    classes.cmdInputContainer,
                    {
                        [classes.hidden]:!animated
                    }
                )}
            >
                <Typography
                    className={
                        classes.green
                    }
                    variant="h5" gutterBottom
                >
                    $:&nbsp;\>
                </Typography>
                <Typography
                    className={cx(
                        {[classes.typewriter]:animated}
                    )}
                    variant="h5" color="inherit" gutterBottom
                >
                    ali-cli comp New
                </Typography>
            </div>

            <Typography variant="body1" color="inherit" gutterBottom>
                {t('scaffoldingSec.desc')}
            </Typography>
        </div>
    )
}

export default ScaffoldingToolSectionComp;