import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import {useTranslation} from "react-i18next";

import { startIntroductionViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { MarkdownElement } from '../../components'

import { Language } from '../../GlobalTypes';

const useStyles = makeStyles(style);

import enUS from '../../markdowns/en-US/start/introduction.md';
import zhCN from '../../markdowns/zh-CN/start/introduction.md';

const StartIntroductionView:React.FunctionComponent<{}> = (
    {}
) => {

    const classes = useStyles();

    const { t, i18n } = useTranslation('start', { useSuspense: false });
    
    switch (i18n.language) {
        case Language.en_US:
            return(
                <React.Fragment>
                    <MarkdownElement text={enUS}/>
                </React.Fragment>
            );
        case Language.zh_CN:
            return(
                <React.Fragment>
                    <MarkdownElement text={zhCN}/>
                </React.Fragment>
            );
        default:
            return(
                <React.Fragment>
                    <MarkdownElement text={enUS}/>
                </React.Fragment>
            );
    }

}

export default StartIntroductionView;