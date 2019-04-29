import * as React from 'react';
import cx from 'classnames';

import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import AllOutIcon from '@material-ui/icons/AllOut';
import Remove from '@material-ui/icons/Remove';
import CropDin from '@material-ui/icons/CropDin';
import Clear from '@material-ui/icons/Clear';

import { makeStyles } from '@material-ui/styles';

import { paperMockWinCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps {
    docked?:boolean,
    onUndock?:()=>void,
}

const useStyles = makeStyles(style);

const PaperMockWinComp:React.FunctionComponent<IProps> = (
    {
        docked,onUndock
    }
)=>{

    const classes = useStyles();

    const handleUndockBtnClick = ()=>{
        if (onUndock){
            onUndock();
        }
    }

    return(
        <Paper className={classes.container}>
            <div className={classes.topHeader}>
                {
                    docked?
                        <Tooltip title="Undock" placement="top-start">
                            <div className={classes.infoBtn}
                                 onClick={handleUndockBtnClick}
                            ><AllOutIcon/></div>
                        </Tooltip>
                        :null
                }
                <div className={classes.greenBtn}><Remove/></div>
                <div className={classes.yellowBtn}><CropDin/></div>
                <div className={classes.redBtn}><Clear/></div>
            </div>
            <div>
                {this.props.children}
            </div>
        </Paper>
    )
}

export default PaperMockWinComp;