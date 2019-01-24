import * as React from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingAllCustomizableSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

import AbstractLandingSection from "./AbstractLandingSection";

import ReactSvg from '../../../assets/svg/developer/react.svg';

interface IProps extends WithStyles<typeof style>, WithNamespaces {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class AllCustomizableSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
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
        }

    }

    render(){

        const { classes, t } = this.props;

        return(
            <div
                className={classes.container}
                ref = {el => this.element = el}
            >
                <Typography variant="h4" color="inherit" gutterBottom>
                    {t('allCust.title')}
                </Typography>

                <div>
                    <PaperMockWin>
                        <img className={classes.mockAppImg} src={ReactSvg}/>
                    </PaperMockWin>
                </div>

                <Typography variant="body1" color="inherit" gutterBottom>
                    {t('allCust.desc')}
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(AllCustomizableSectionComp)
);