import * as React from 'react';
import * as cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { landingSnapDockSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{

}

interface IState{
    visiblePct:number,
    // [key:number]:any,
    // [key:string]:any,
}

class SnapDockSectionComp extends React.Component<IProps, IState>{

    element:any;
    observer:IntersectionObserver;

    state={
        visiblePct: 0,
    }

    componentDidMount(): void {
        this.observer = new IntersectionObserver(
            entries => {
                console.log('SnapDockSectionComp::componentDidMount 1#',entries, this.element);
                entries.forEach((entry)=>{
                    console.log('SnapDockSectionComp::componentDidMount 2#',entry, this.element);
                    if (entry.target === this.element){
                        console.log('SnapDockSectionComp::componentDidMount 3#',entry.intersectionRatio);
                        this.setState({
                            visiblePct:Math.floor(entry.intersectionRatio*100)/100
                        })
                    }
                })


            },
            {
                root: document.querySelector(".landingContainer"),
                rootMargin:'0px 0px 0px 0px',
                threshold:[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
            }
        )
        this.observer.observe(this.element);
    }

    componentWillUnmount(): void {
        if (this.observer){
            this.observer.disconnect();
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