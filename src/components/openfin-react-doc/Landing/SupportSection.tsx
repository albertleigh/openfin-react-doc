import * as React from 'react';
import { useRef, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { landingSupportSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import appLogo from '../../../logo.svg';
import dbGearsSvg from '../../../assets/svg/developer/database-gears.svg';
import githubSvg from '../../../assets/svg/developer/github-logo.svg';
import githubDarkSvg from '../../../assets/svg/developer/github-logo-dark.svg';
import chinaFlagSvg from '../../../assets/svg/language/china.svg';
import usFlagSvg from '../../../assets/svg/language/united-states.svg';
import settingSvg from '../../../assets/svg/other/settings.svg';

import openfinLogoSvg from '../../../assets/svg/developer/openfin.svg';
import matUiLogoSvg from '../../../assets/svg/developer/material-ui-logo.svg';
import reactSvg from '../../../assets/svg/developer/react.svg';
import useLandingSectionIntersectionListener
    from "src/components/openfin-react-doc/Landing/useLandingSectionIntersectionListener";

interface IProps {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IContributor{
    name:string,
    avatar:string,
    email:string,
}

interface IFlatIconCredit{
    icons:string[],
    authorName:string,
    authorLink:string,
}

interface ISupporter{
    name:string,
    icon:string,
    link:string,
    width:string|number,
    height:string|number,
}

const useStyles = makeStyles(style);

const contributors:IContributor[]=[
    {
        name:'albertleigh',
        avatar:'https://github.com/albertleigh.png',
        email:'liwentao90@yahoo.com',
    }
];

const flatIconCredits:IFlatIconCredit[]=[
    {
        icons:[
            githubSvg,githubDarkSvg,chinaFlagSvg,usFlagSvg,
            ],
        authorName:'Freepik',
        authorLink:'http://www.freepik.com/',
    },
    {
        icons:[
            appLogo,dbGearsSvg,settingSvg,
        ],
        authorName:'Smashicons',
        authorLink:'https://smashicons.com/',
    },
];

const supporters:ISupporter[]=[
    {
        name:'Openfin',
        icon:openfinLogoSvg,
        link:'https://openfin.co/',
        height:'3.626em',
        width:'10em',
    },
    {
        name:'Material UI',
        icon:matUiLogoSvg,
        link:'https://material-ui.com/',
        height:'3.626em',
        width:'auto',
    },
    {
        name:'React',
        icon:reactSvg,
        link:'https://reactjs.org/',
        height:'3.626em',
        width:'auto',
    },
];

const SupportSectionComp:React.FunctionComponent<IProps>=(
    {
        onIntersectionChanged,
    }
)=>{

    const element:any = useRef(null);
    const classes = useStyles();
    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const { visiblePct } = useLandingSectionIntersectionListener({element,onIntersectionChanged})

    const handleEmailBtnClick = (email:string) => ()=>{
        window.location.href=`mailto:mail@${email}`;
    }

    return(
        <div
            className={classes.container}
            ref = {element}
        >
            <div className={classes.oneSubSec}>
                <Typography className={classes.header} variant="h5" gutterBottom>
                    {t('support.contributors')}
                </Typography>
                {
                    contributors.map(((contributor:IContributor,index,arr)=>(
                        <Chip
                            key={index}
                            avatar={<Avatar alt={contributor.name} src={contributor.avatar} />}
                            label={t(`support.contributorNames.${contributor.name}`)}
                            onClick={handleEmailBtnClick(contributor.email)}
                        />
                    )))

                }
            </div>

            <div className={classes.oneSubSec}>
                <Typography className={classes.header} variant="h5" gutterBottom>
                    {t('support.credits')}
                </Typography>
                {
                    flatIconCredits.map((oneFlatIconCredit:IFlatIconCredit, flatIconIndex, flatIconArr)=>(
                        <div className={classes.flatIconCreditContainers} key={flatIconIndex}>
                            {oneFlatIconCredit.icons.map((icon:string, iconIndex, iconArr) => (
                                <Avatar
                                    className = {classes.flatIconCreditAvatar}
                                    key={iconIndex} src={icon} />
                            ))}
                            <Typography variant="body1" gutterBottom>
                                {t('support.flatIconPhase1')}<a href={oneFlatIconCredit.authorLink}>{oneFlatIconCredit.authorName}</a>{t('support.flatIconPhase2')}<a href="http://www.flaticon.com">www.flaticon.com</a>
                            </Typography>
                        </div>
                    ))

                }
            </div>

            <div className={classes.oneSubSec}>
                <Typography className={classes.header} variant="h5" gutterBottom>
                    {t('support.support')}
                </Typography>
                <div>
                    {
                        supporters.map((supporter:ISupporter,index,arr)=>(
                            <a className={classes.supporterAnchor}
                               key={index} href={supporter.link}>
                                <Tooltip title={supporter.name}>
                                    <img alt={supporter.name} src={supporter.icon}
                                         style={{
                                             'width': supporter.width,
                                             'height': supporter.height,
                                         }}
                                    />
                                </Tooltip>
                            </a>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default SupportSectionComp;