import * as React from 'react';
import { useState, useEffect } from 'react';

interface IProps {
    element:any,
    onIntersectionChanged:(intersectionObserverEntry:IntersectionObserverEntry)=>void,
}

interface IReturnState {
    visiblePct:number,
}

const disconnectObserverIfNeeded = (observer:IntersectionObserver)=>{
    if (observer){
        observer.disconnect();
    }
}

const useLandingSectionIntersectionListener:(props:IProps)=>IReturnState = (
    {
        element,
        onIntersectionChanged,
    }
)=>{

    const [observer, setObserver] = useState<IntersectionObserver>(void 0);
    const [visiblePct, setVisiblePct] = useState<number>(0);

    useEffect(()=>{

        const newObserver = new IntersectionObserver(
            entries => {
                entries.forEach((entry)=>{
                    if (entry.target === element){
                        if (onIntersectionChanged){
                            onIntersectionChanged(entry);
                        }
                        setVisiblePct(Math.floor(entry.intersectionRatio*100)/100);
                    }
                })
            },
            {
                root: document.querySelector(".landingContainer"),
                rootMargin:'0px 0px 0px 0px',
                threshold:[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
            }
        )
        disconnectObserverIfNeeded(observer);
        setObserver(newObserver);

        return ()=>{
            disconnectObserverIfNeeded(observer);
        }

    },[element,onIntersectionChanged])


    return {visiblePct};
}

export default useLandingSectionIntersectionListener;