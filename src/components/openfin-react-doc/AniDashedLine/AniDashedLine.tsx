import * as React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { aniDashedLineCompStyle as style } from '../../../assets/jss/openfin-react-doc';

const useStyles = makeStyles(style);

interface IProps {
    viewBox:string,
    pathD:string,
}

const AniDashedLineComp:React.FunctionComponent<IProps> = (
    { viewBox, pathD }
)=>{

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <svg viewBox={viewBox} preserveAspectRatio="none">
                <path d={pathD} />
            </svg>
        </div>
    )
}

export default AniDashedLineComp;