import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';

interface IProps {
    element:Element,
    onIntersectionChanged:(intersectionObserverEntry:IntersectionObserverEntry)=>void,
}

interface IReturnState {
    visiblePct:number,
}

const useLandingSectionIntersectionListener:(props:IProps)=>IReturnState = (
    {
        element,
        onIntersectionChanged,
    }
)=>{

    const [visiblePct, setVisiblePct] = useState<number>(0);
    const [lastEntries, setLastEntries] = useState<IntersectionObserverEntry[]>([]);

    const checkAndHandleOnIntersect = () =>{
        // console.log('insectLstnr::checkAndHandleOnIntersect 1#');
        lastEntries.forEach((entry)=>{
            // console.log('insectLstnr::checkAndHandleOnIntersect 2#',lastEntries, element);
            if (entry.target === element){
                // console.log('insectLstnr::checkAndHandleOnIntersect 3#',lastEntries, entry.intersectionRatio);
                if (onIntersectionChanged){
                    onIntersectionChanged(entry);
                }
                setVisiblePct(Math.floor(entry.intersectionRatio*100)/100);
            }
        })
    }

    const intersectionObserverCb = (entries: IntersectionObserverEntry[], observer: IntersectionObserver)=>{
        // console.log('insectLstnr::intersectionObserverCb 1#',entries);
        setLastEntries(entries);
    }

    const observer = useMemo(()=> (
        element?
        new IntersectionObserver(
            intersectionObserverCb,
            {
                root: document.querySelector(".landingContainer"),
                rootMargin:'0px 0px 0px 0px',
                threshold:[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],
            }
        ):void 0
    ),[element])

    useEffect(()=>{
        // console.log('insectLstnr::useEffect[1]0#');
        if (observer){
            // console.log('insectLstnr::useEffect[1]1#');
            observer.observe(element)
        }
        return ()=>{
            // console.log('insectLstnr::useEffect[1]2#',observer);
            if (observer){
                // console.log('insectLstnr::useEffect[1]3#');
                observer.disconnect();
            }
        }

    },[observer]);

    useEffect(()=>{
        checkAndHandleOnIntersect();
    },[lastEntries])

    return {visiblePct};
}

export default useLandingSectionIntersectionListener;