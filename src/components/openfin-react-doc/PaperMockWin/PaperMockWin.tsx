import * as React from 'react';
import cx from 'classnames';

import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import AllOutIcon from '@material-ui/icons/AllOut';
import Remove from '@material-ui/icons/Remove';
import CropDin from '@material-ui/icons/CropDin';
import Clear from '@material-ui/icons/Clear';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import { paperMockWinCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{
    docked?:boolean,
    onUndock?:()=>void,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class PaperMockWinComp extends React.Component<IProps, IState>{

    handleUndockBtnClick = ()=>{
        if (this.props.onUndock){
            this.props.onUndock();
        }
    }


    render(){

        const { classes, docked } = this.props;

        return(
            <Paper className={classes.container}>
                <div className={classes.topHeader}>
                    {
                        docked?
                            <Tooltip title="Undock" placement="top-start">
                                <div className={classes.infoBtn}
                                     onClick={this.handleUndockBtnClick}
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
}

export default withStyles(style)(PaperMockWinComp);