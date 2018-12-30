import * as React from 'react';
import cx from 'classnames';

import Divider from '@material-ui/core/Divider';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import { docMenuCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{

}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class DocMenuComp extends React.Component<IProps, IState>{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div className={classes.toolbar} />
                <Divider />
                DocMenu component works ~
            </div>
        )
    }
}

export default withStyles(style)(DocMenuComp);