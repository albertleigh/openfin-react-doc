import * as React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { docMenuCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import DocMenuItem from './DocMenuItem';

import {IDocRouteCompItems} from "../../../routes";
import {publicPathname} from "../../../routes/utils";
import { docRouteItems } from '../../../routes/document';

const useStyles = makeStyles(style);

const DocMenuComp:React.FunctionComponent<{}> = (
    {}
)=>{
    const classes = useStyles();

    const { t, i18n } = useTranslation('docMenu', { useSuspense: false });

    return(
        <div className={classes.container}>
            <div className={classes.toolbar}>
                <Link className={classes.link} to={publicPathname}>
                    <Typography variant="subtitle1" color='inherit' >
                        {t('openfinReactStarter')}
                    </Typography>
                </Link>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/albertleigh/openfin-react-starter/releases"
                >
                    <Typography variant="caption" className={classes.headerLink}>
                        {process.env.REACT_APP_VERSION}
                    </Typography>
                </a>
            </div>
            <Divider />
            <div className={classes.menuListOuterContainer}>
                <List
                    component="nav"
                    className={classes.menuListContainer}
                >
                    {
                        docRouteItems.map((docRouteItem:IDocRouteCompItems,index,arr)=>(
                            <DocMenuItem
                                key={index}
                                docRouteCompItem={docRouteItem}
                            />
                        ))
                    }
                </List>
            </div>
        </div>
    )
}

export default DocMenuComp;