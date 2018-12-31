import * as React from 'react';
import cx from 'classnames';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import { docMenuItemCompStyle as style } from '../../../assets/jss/openfin-react-doc';
import {
    IDocRouteCompItems,IRouteCompItem,RouteItem,
} from "../../../routes";

interface IProps extends WithStyles<typeof style>{
    docRouteCompItem:IDocRouteCompItems,
}

interface IState{
    open:boolean,
}

class DocMenuItemComp extends React.Component<IProps, IState>{

    state={
        open:false,
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    renderParentAndChild = () => {
        const {
            classes, docRouteCompItem,
        } = this.props;

        const { open } = this.state;

        return (
            <React.Fragment>
                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary={docRouteCompItem.name} />
                    {open ? <ExpandLessIcon color="inherit" /> : <ExpandMoreIcon color="inherit" />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {
                            docRouteCompItem.routeItems.map((routeItem:RouteItem,index,arr) =>{

                                const one:IRouteCompItem  = routeItem as IRouteCompItem;

                                return(<ListItem key={index} button className={classes.nested}>
                                    <ListItemText primary={one.name} />
                                </ListItem>)
                            })
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        );

    }

    render(){

        const {
            docRouteCompItem,
        } = this.props;

        if (docRouteCompItem.routeItems && docRouteCompItem.routeItems.length){
            return this.renderParentAndChild();
        }else{
            return null;
        }
    }
}

export default withStyles(style)(DocMenuItemComp);