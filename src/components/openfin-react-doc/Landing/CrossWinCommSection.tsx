import * as React from 'react';
import cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingCrossWinCommSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import AbstractLandingSection from './AbstractLandingSection';

interface IProps extends WithStyles<typeof style>, WithNamespaces {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class CrossWinCommSectionComp extends AbstractLandingSection<IProps, IState>{

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
                CrossWinCommSection component works ~
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(CrossWinCommSectionComp)
);