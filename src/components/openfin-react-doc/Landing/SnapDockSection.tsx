import * as React from 'react';
import * as cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { landingSnapDockSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{

}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class SnapDockSectionComp extends React.Component<IProps, IState>{
    render(){
        return(
            <React.Fragment>
                LandingSnapDockSection component works ~
            </React.Fragment>
        )
    }
}

export default withStyles(style)(SnapDockSectionComp);