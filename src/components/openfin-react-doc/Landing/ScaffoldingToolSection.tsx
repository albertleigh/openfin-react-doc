import * as React from 'react';
import cx from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingScaffoldingToolSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import Code from '../Code/Code';

import AbstractLandingSection from './AbstractLandingSection';

import newCompCode from '!raw-loader!./samples/NewComp_tsx';

interface IProps extends WithStyles<typeof style>,WithNamespaces {
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,

}

interface IState{
    visiblePct:number,
    animated:boolean,
}

class ScaffoldingToolSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
        animated:false,
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

        if (intersectionObserverEntry.intersectionRatio >0.95){
            this.setState({animated: true});
        }else{
            this.setState({
                animated: false,
            })
        }
    }

    render(){

        const { classes, t } = this.props;
        const {
            visiblePct, animated,
        } = this.state;

        return(
            <div
                className={classes.container}
                ref = {el => this.element = el}
            >

                <Typography variant="h4" color="inherit" gutterBottom>
                    {t('scaffoldingSec.title')}
                </Typography>

                <div className={
                    cx(
                        classes.sampleCodeContainer,
                        'animated', 'infinite', 'fadeIn', 'slow',
                    )
                }>
                    <Code withMargin text={newCompCode} />
                </div>

                <div
                    className={cx(
                        classes.cmdInputContainer,
                        {
                            [classes.hidden]:!animated
                        }
                    )}
                >
                    <Typography
                        className={
                            classes.green
                        }
                        variant="h5" gutterBottom
                    >
                        $:&nbsp;\>
                    </Typography>
                    <Typography
                        className={cx(
                            {[classes.typewriter]:animated}
                        )}
                        variant="h5" color="inherit" gutterBottom
                    >
                        ali-cli comp New
                    </Typography>
                </div>

                <Typography variant="body1" color="inherit" gutterBottom>
                    {t('scaffoldingSec.desc')}
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(ScaffoldingToolSectionComp)
);