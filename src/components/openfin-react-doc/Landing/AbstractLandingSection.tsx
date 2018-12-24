import * as React from 'react';

interface IState{
    visiblePct:number,
}

export default abstract class AbstractLandingSection<Props, State> extends React.Component<Props, State | IState>{

    abstract state:IState | State;
    abstract element:any;

    observer:IntersectionObserver;

    onIntersectionChanged:(intersectionObserverEntry:IntersectionObserverEntry)=>void;

    componentDidMount(): void {
        this.observer = new IntersectionObserver(
            entries => {
                // console.log('AbstractLandingSection::componentDidMount 1#',entries, this.element);
                entries.forEach((entry)=>{
                    // console.log('AbstractLandingSection::componentDidMount 2#',entry, this.element);
                    if (entry.target === this.element){
                        // console.log('AbstractLandingSection::componentDidMount 3#',entry.intersectionRatio);
                        if (this.onIntersectionChanged){
                            this.onIntersectionChanged(entry);
                        }
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

}