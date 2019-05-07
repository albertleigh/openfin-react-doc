import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import {useTranslation} from "react-i18next";

import { MarkdownElement } from '../../../components'

import { Language } from '../../../GlobalTypes';

import enUs from '../../../markdowns/en-US/reduxOpenfin/install.md';
import zhCn from '../../../markdowns/zh-CN/reduxOpenfin/install.md';

const ReduxOpenfinInstallView:React.FunctionComponent<{}> = (
{}
) => {

    const { t, i18n } = useTranslation('reduxOpenfin', { useSuspense: false });

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

export default ReduxOpenfinInstallView;