import * as React from 'react';
import { useState } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { docMenuItemCompStyle as style } from '../../../assets/jss/openfin-react-doc';
import {
    IDocRouteCompItems,IRouteCompItem,RouteItem,
} from "../../../routes";

interface IProps {
    docRouteCompItem:IDocRouteCompItems,
}

interface IState{
    open:boolean,
}

const useStyles = makeStyles(style);

const DocMenuItemComp:React.FunctionComponent<IProps> = (
    {
        docRouteCompItem
    }
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('docMenu', { useSuspense: false });

    const [state, setState] = useState<IState>({
        open:false,
    });

    const handleClick = () => {
        setState(state => ({ open: !state.open }));
    };

    if (docRouteCompItem.routeItems && docRouteCompItem.routeItems.length){
        const { open } = state;
        return (
            <React.Fragment>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={t(docRouteCompItem.name)} />
                    {open ? <ExpandLessIcon color="inherit" /> : <ExpandMoreIcon color="inherit" />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {
                            docRouteCompItem.routeItems.map((routeItem:RouteItem,index,arr) =>{

                                const one:IRouteCompItem  = routeItem as IRouteCompItem;

                                return(
                                    <NavLink
                                        to={one.path} key={index}
                                        className={classes.item}
                                        activeClassName={"active"}
                                    >
                                        <ListItem button className={classes.nested}>
                                            <ListItemText primary={t(one.name)} />
                                        </ListItem>
                                    </NavLink>
                                )
                            })
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        );
    }else{
        return null;
    }

}

export default DocMenuItemComp;