import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingStyle as style } from '../../assets/jss/openfin-react-doc';

import {
    LandingHeader,
    LandingWelcomeSection,
    LandingScaffoldingToolSection,
    LandingSnapDockSection,
    LandingCrossWinCommSection,
    LandingGenConfSection,
    LandingAllCustomizableSection,
    LandingSupportSection,
} from '../../components';

import {
    // actions
    applicationToggleTheme,
    applicationToggleDirection,

    // types
    IRootState,
} from '../../reduxs';
import i18n from "../../i18n";
import { scrollTo } from '../../utils/scrollIng';

interface IProps extends WithStyles<typeof style>, WithNamespaces {

    actions:{
        onToggleTheme:()=>void,
        onToggleDirection:()=>void,
    }

}

interface IState {
    activeChildSectionIndex:number,
}

class LandingLayout extends React.Component<IProps,IState>{

    state = {
        activeChildSectionIndex: 0,
    }

    childSectionNames=['welcome','scaffolding','snapDock', 'crossWin', 'genConf', 'allCust', 'support', ];
    childSectionRefs = {
        welcome: null,
        scaffolding: null,
        snapDock: null,
        crossWin: null,
        genConf: null,
        allCust: null,
        support: null,
    };
    childIntersectionRatios:number[]=[0,0,0,0,0,0,0,];

    handleSwitchLanguage = (languageName:string) => {
        i18n.changeLanguage(languageName);
    }

    handleIntersectionChanged = (index:number)=> (intersectionObserverEntry:IntersectionObserverEntry) => {
        this.childIntersectionRatios[index] = intersectionObserverEntry.intersectionRatio;

        let maxIndex:number = 0;
        let max = this.childIntersectionRatios[0];
        for (let i= 0; i < this.childIntersectionRatios.length; i++){
            if (this.childIntersectionRatios[i]> max){
                max = this.childIntersectionRatios[i];
                maxIndex = i;
            }
        }
        this.setState({activeChildSectionIndex:maxIndex});
    }

    handleActiveChildSectionChanged = (activeChildSectionName:string)=>{
        // console.log('LandingLayout::handleActiveChildSectionChanged',
        //     activeChildSectionName,
        //     this.childSectionRefs[activeChildSectionName].offsetTop,
        //     this.childSectionRefs[activeChildSectionName],
        // );
        scrollTo(
            document.querySelector('.landingContainer'),
            this.childSectionRefs[activeChildSectionName].offsetTop,
            600,
        )
    }

    handleSwitchToEn = () => {
        i18n.changeLanguage('en');
    }

    handleSwitchToZh = () => {
        i18n.changeLanguage('zh');
    }


    render(){

        const {
            classes, t,
            actions:{
                onToggleTheme,onToggleDirection,
            }
        } = this.props;

        const {activeChildSectionIndex} = this.state;

        return (
            <div className={cx(
                'landingContainer',
                classes.container,
            )}>
                <LandingHeader
                    activeChildSectionIndex={activeChildSectionIndex}
                    childrenSectionNames={this.childSectionNames}
                    onSwitchLanguage={this.handleSwitchLanguage}
                    onActiveChildSectionChange={this.handleActiveChildSectionChanged}
                    onToggleTheme = {onToggleTheme}
                />
                <div className={classes.sectionContainer} ref={el => this.childSectionRefs.welcome = el}>
                    <LandingWelcomeSection
                        onIntersectionChanged = {this.handleIntersectionChanged(0)}
                    />
                </div>
                <div
                    className={cx(
                        classes.sectionContainer, classes.sectionPaddingContainer,
                        classes.scaffoldingSectionContainer,
                    )}
                    ref={el => this.childSectionRefs.scaffolding = el}
                >
                    <LandingScaffoldingToolSection
                        onIntersectionChanged = {this.handleIntersectionChanged(1)}
                    />
                </div>
                <div
                    className={cx(
                        classes.sectionContainer, classes.sectionPaddingContainer,
                        classes.snapDockSectionContainer,
                    )}
                    ref={el => this.childSectionRefs.snapDock = el}
                >
                    <LandingSnapDockSection
                        onIntersectionChanged = {this.handleIntersectionChanged(2)}
                    />
                </div>
                <div
                    className={cx(
                        classes.sectionContainer, classes.sectionPaddingContainer,
                    )}
                    ref={el => this.childSectionRefs.crossWin = el}
                >
                    <LandingCrossWinCommSection
                        onIntersectionChanged = {this.handleIntersectionChanged(3)}
                    />
                </div>
                <div
                    className={cx(
                        classes.sectionContainer, classes.sectionPaddingContainer,
                    )}
                    ref={el => this.childSectionRefs.genConf = el}
                >
                    <LandingGenConfSection
                        onIntersectionChanged = {this.handleIntersectionChanged(4)}
                    />
                </div>
                <div
                    className={cx(
                        classes.sectionContainer, classes.sectionPaddingContainer,
                    )}
                    ref={el => this.childSectionRefs.allCust = el}
                >
                    <LandingAllCustomizableSection
                        onIntersectionChanged = {this.handleIntersectionChanged(5)}
                    />
                </div>
                <div
                    className={cx(
                        classes.sectionContainer, classes.sectionPaddingContainer,
                    )}
                    ref={el => this.childSectionRefs.support = el}
                >
                    <LandingSupportSection
                        onIntersectionChanged = {this.handleIntersectionChanged(6)}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{
            onToggleTheme : ()=>{
                dispatch(applicationToggleTheme());
            },
            onToggleDirection : ()=>{
                dispatch(applicationToggleDirection());
            }

        }
    })

)(
    withStyles(style)(
        withNamespaces('landing')(LandingLayout)
    )
);

