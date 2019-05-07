import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import {useTranslation} from "react-i18next";

import { MarkdownElement } from '../../../components'

import { Language } from '../../../GlobalTypes';

import _enUs from '../../../markdowns/en-US/startBase/features.md';
import _zhCn from '../../../markdowns/zh-CN/startBase/features.md';

const enUs = _enUs.replace('PUBLIC_URL',process.env.PUBLIC_URL);
const zhCn = _zhCn.replace('PUBLIC_URL',process.env.PUBLIC_URL);

const StartBaseFeaturesView:React.FunctionComponent<{}> = (
{}
) => {

    const { t, i18n } = useTranslation('startBase', { useSuspense: false });

    switch (i18n.language) {
        case Language.en_US:
            return(
            <React.Fragment>
                <MarkdownElement text={ enUs }/>
            </React.Fragment>
            );
        case Language.zh_CN:
            return(
            <React.Fragment>
                <MarkdownElement text={ zhCn }/>
            </React.Fragment>
            );
        default:
            return(
                <React.Fragment>
                    <MarkdownElement text={ enUs }/>
                </React.Fragment>
            );
    }

}

export default StartBaseFeaturesView;