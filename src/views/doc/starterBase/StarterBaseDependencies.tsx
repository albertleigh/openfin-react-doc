import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import {useTranslation} from "react-i18next";

import { MarkdownElement } from '../../../components'

import { Language } from '../../../GlobalTypes';

import enUs from '../../../markdowns/en-US/starterBase/dependencies.md';
import zhCn from '../../../markdowns/zh-CN/starterBase/dependencies.md';

const StarterBaseDependenciesView:React.FunctionComponent<{}> = (
{}
) => {

    const { t, i18n } = useTranslation('starterBase', { useSuspense: false });

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

export default StarterBaseDependenciesView;