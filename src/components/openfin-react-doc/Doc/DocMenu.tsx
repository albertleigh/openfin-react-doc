import * as React from 'react';
import cx from 'classnames';
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
        return(
            <React.Fragment>
                DocMenu component works ~
            </React.Fragment>
        )
    }
}

export default withStyles(style)(DocMenuComp);