import * as React from 'react';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingCrossWinCommSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import PaperMockWin  from '../PaperMockWin/PaperMockWin';

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
                <Typography variant="h4" color="inherit" gutterBottom>
                    title
                </Typography>
                <div className={classes.commWinsContainer}>
                    <div className={classes.commWin}>
                        <PaperMockWin>
                            <Typography variant="h2" color="inherit" gutterBottom>
                                Win A
                            </Typography>
                        </PaperMockWin>
                    </div>
                    <Typography variant='h5' color='inherit' gutterBottom>2</Typography>
                    <div className={classes.commWin}>
                        <PaperMockWin>
                            <Typography variant="h2" color="inherit" gutterBottom>
                                Win B
                            </Typography>
                        </PaperMockWin>
                    </div>
                    <Typography variant='h5' color='inherit' gutterBottom>4</Typography>
                    <div className={classes.commWin}>
                        <PaperMockWin>
                            <Typography variant="h2" color="inherit" gutterBottom>
                                Win C
                            </Typography>
                        </PaperMockWin>
                    </div>
                    <Typography variant='h5' color='inherit' gutterBottom>6</Typography>
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