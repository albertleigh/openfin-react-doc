import {CSSProperties, StyleRules} from "@material-ui/core/styles/withStyles";


export default (itemCount:number, circleSize:number, itemSize:number):CSSProperties=>{
    const base:CSSProperties = {
        position:'relative',
        width:circleSize,
        height:circleSize,
        padding:0,
        borderRadius:'50%',
        listStyle: "none",
    };
    const allChildren:CSSProperties = {
        display:"block",
        position: "absolute",
        top: '50%',
        left: '50%',
        width: itemSize,
        height: itemSize,
        margin: -itemSize/2,
    };

    base['& >*'] = allChildren;

    const angle = 2* Math.PI / itemCount;
    const radix = circleSize/2;
    let rot = 0;
    for (let i =1; i <= itemCount; i++){
        base[`& >:nth-child(${i})`]={
            transform:`translate(${Math.sin(rot)*radix}px,${Math.cos(rot)*radix}px)`
        };
        rot+=angle;
    }
    return base;
}