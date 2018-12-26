import * as React from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingSnapDockSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

import AbstractLandingSection from './AbstractLandingSection';

interface IProps extends WithStyles<typeof style>, WithNamespaces {
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

        const { classes, t } = this.props;
        const { visiblePct, windowsShown, rightWindowDocked } = this.state;

        return(
            <div
                className = {classes.container}
                ref = {el => this.element = el}
            >
                <Typography variant="h4" color="inherit" gutterBottom>
                    {t('snapDockSec.title')}
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
                            <Typography variant="h2" color="inherit" gutterBottom>
                                {t('snapDockSec.win1')}
                            </Typography>
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
                            <Typography variant="h2" color="inherit" gutterBottom>
                                {t('snapDockSec.win2')}
                            </Typography>
                        </PaperMockWin>
                    </div>
                </div>
                <Typography variant="body1" color="inherit" gutterBottom>
                    {t('snapDockSec.desc')}
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(SnapDockSectionComp)
);