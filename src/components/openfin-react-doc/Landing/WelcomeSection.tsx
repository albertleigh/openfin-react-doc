import * as React from 'react';
import * as cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { landingWelcomeSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{

}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class WelcomeSectionComp extends React.Component<IProps, IState>{
    render(){
        return(
            <React.Fragment>
                WelcomeSection component works ~
            </React.Fragment>
        )
    }
}

export default withStyles(style)(WelcomeSectionComp);