import * as React from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { landingSnapDockSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

import AbstractLandingSection from './AbstractLandingSection';

interface IProps extends WithStyles<typeof style>{
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    visiblePct:number,
    windowsShown:boolean,
    rightWindowDocked:boolean,
    // [key:number]:any,
    // [key:string]:any,
}

class SnapDockSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
        windowsShown: false,
        rightWindowDocked: true,
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
            if (intersectionObserverEntry.intersectionRatio >0.75){
                this.setState({windowsShown: true});
            }else{
                this.setState({
                    windowsShown: false,
                    rightWindowDocked: true,
                })
            }
        }
    }

    handleRightWindowUndock = ()=>{
        this.setState({rightWindowDocked: false,})
    }

    render(){

        const { classes } = this.props;
        const { visiblePct, windowsShown, rightWindowDocked } = this.state;

        return(
            <div
                className = {classes.container}
                ref = {el => this.element = el}
            >
                <Typography variant="h4" color="inherit" gutterBottom>
                    Out of box snap&dock
                </Typography>
                <div
                    className = {classes.windowsContainer}
                >
                    <div
                        className = {cx(
                            'animated',
                            {
                                [classes.windowHidden]:!windowsShown,
                                'bounceInLeft':windowsShown
                            }
                        )}
                    >
                        <PaperMockWin>
                            <span>Windows 1</span>
                        </PaperMockWin>
                    </div>
                    <div
                        className = {cx(
                            'animated',
                            {
                                [classes.windowHidden]:!windowsShown && rightWindowDocked,
                                'bounceInRight':windowsShown && rightWindowDocked,
                                'bounceOutDown':windowsShown && !rightWindowDocked,
                            }
                        )}
                    >
                        <PaperMockWin
                            docked={true}
                            onUndock={this.handleRightWindowUndock}
                        >
                            <span>Windows 2</span>
                        </PaperMockWin>
                    </div>
                </div>
                <Typography variant="body1" color="inherit" gutterBottom>
                    Openfin Snap & Dock features is provided out of box and it could be transparent to developers.
                    Snapped windows will move together when dragged and will resize themselves when user try to resize one.
                    An undock button will be provided out of box to let user undock out of the groups.
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(SnapDockSectionComp);