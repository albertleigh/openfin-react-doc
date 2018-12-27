import * as React from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingCrossWinCommSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

import AbstractLandingSection from './AbstractLandingSection';

import AniDashedLine from '../AniDashedLine/AniDashedLine';

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
                <Typography variant="h4" color="inherit" gutterBottom>
                    title
                </Typography>
                <div className={classes.commWinsContainer}>

                    <div className={classes.commWin}>
                        <PaperMockWin>
                            <Typography variant="h2" color="inherit" gutterBottom>
                                Win C
                            </Typography>
                        </PaperMockWin>
                    </div>

                    <div className={classes.dashedLine2}>
                        <AniDashedLine
                            viewBox='0 0 20 4'
                            pathD='M0 0 c 3 5.1, 17 5.1, 20 0'
                        />
                    </div>

                    <div className={classes.commWin}>
                        <PaperMockWin>
                            <Typography variant="h2" color="inherit" gutterBottom>
                                Win B
                            </Typography>
                        </PaperMockWin>
                    </div>

                    <div className={classes.dashedLine4}>
                        <AniDashedLine
                            viewBox='0 0 20 4'
                            pathD='M0 0 c 3 5.1, 17 5.1, 20 0'
                        />
                    </div>

                    <div className={classes.commWin}>
                        <PaperMockWin>
                            <Typography variant="h2" color="inherit" gutterBottom>
                                Win A
                            </Typography>
                        </PaperMockWin>
                    </div>

                    <div className={classes.dashedLine6}>
                        <AniDashedLine
                            viewBox='0 0 20 4'
                            pathD='M0 0 c 3 5.1, 17 5.1, 20 0'
                        />
                    </div>
                </div>
                <Typography variant="body1" color="inherit" gutterBottom>
                    description
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(CrossWinCommSectionComp)
);