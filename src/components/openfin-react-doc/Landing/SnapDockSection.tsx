import * as React from 'react';
import cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { landingSnapDockSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import AbstractLandingSection from './AbstractLandingSection';

interface IProps extends WithStyles<typeof style>{
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    visiblePct:number,
    // [key:number]:any,
    // [key:string]:any,
}

class SnapDockSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
    }

    componentDidMount(): void {
        super.componentDidMount();
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
    }

    onIntersectionChanged =(intersectionObserverEntry:IntersectionObserverEntry)=>{
        if (this.props.onIntersectionChanged){
            this.props.onIntersectionChanged(intersectionObserverEntry);
        }
    }

    render(){

        const { visiblePct } = this.state;

        return(
            <div ref = {el => this.element = el}>
                LandingSnapDockSection component works ~
                {visiblePct*100 + " %"}
            </div>
        )
    }
}

export default withStyles(style)(SnapDockSectionComp);