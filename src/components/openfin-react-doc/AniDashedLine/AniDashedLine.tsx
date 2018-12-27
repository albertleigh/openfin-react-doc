import * as React from 'react';
import cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { aniDashedLineCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{
    viewBox:string,
    pathD:string,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class AniDashedLineComp extends React.Component<IProps, IState>{
    render(){

        const {classes, viewBox, pathD} = this.props;

        return(
            <div className={classes.container}>
                <svg viewBox={viewBox} preserveAspectRatio="none">
                    <path d={pathD} />
                </svg>
            </div>
        )
    }
}

export default withStyles(style)(AniDashedLineComp);