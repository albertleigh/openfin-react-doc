import * as React from 'react';
import { useRef, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';

import cx from "classnames";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

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
    DocMenu,
} from '../../components';

import {
    // actions
    applicationToggleDrawer,
    applicationToggleTheme,
    applicationToggleDirection,

    // types
    IRootState, MuiTheme,
} from '../../reduxs';
import { scrollTo } from '../../utils/scrollIng';

interface IProps {
    drawerOpen:boolean,
    actions:{
        onToggleDrawer:()=>void,
        onToggleTheme:()=>void,
        onToggleDirection:()=>void,
    }

}

interface IState {
    activeChildSectionIndex:number,
}

const useStyles = makeStyles(style);

const childSectionNames=['welcome','scaffolding','snapDock', 'crossWin', 'genConf', 'allCust', 'support', ];
const childIntersectionRatios:number[]=[0,0,0,0,0,0,0,];


const LandingLayout:React.FunctionComponent<IProps>=(
    {
        drawerOpen,
        actions:{
            onToggleDrawer,onToggleTheme,onToggleDirection,
        }
    }
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const [state, setState] = useState<IState>({activeChildSectionIndex: 0,});

    const childSectionRefs = {
        welcome: useRef(null),
        scaffolding: useRef(null),
        snapDock: useRef(null),
        crossWin: useRef(null),
        genConf: useRef(null),
        allCust: useRef(null),
        support: useRef(null),
    };


    const handleSwitchLanguage = (languageName:string) => {
        i18n.changeLanguage(languageName);
    }

    const handleIntersectionChanged = (index:number)=> (intersectionObserverEntry:IntersectionObserverEntry) => {
        childIntersectionRatios[index] = intersectionObserverEntry.intersectionRatio;

        let maxIndex:number = 0;
        let max = childIntersectionRatios[0];
        for (let i= 0; i < childIntersectionRatios.length; i++){
            if (childIntersectionRatios[i]> max){
                max = childIntersectionRatios[i];
                maxIndex = i;
            }
        }
        setState({activeChildSectionIndex:maxIndex});
    }

    const handleActiveChildSectionChanged = (activeChildSectionName:string)=>{
        // console.log('LandingLayout::handleActiveChildSectionChanged',
        //     activeChildSectionName,
        //     childSectionRefs[activeChildSectionName].offsetTop,
        //     childSectionRefs[activeChildSectionName],
        // );
        scrollTo(
            document.querySelector('.landingContainer'),
            childSectionRefs[activeChildSectionName].offsetTop,
            600,
        )
    }

    const { activeChildSectionIndex } = state;

    return (<React.Fragment>
        <div className={cx(
            'landingContainer',
            classes.container,
        )}>
            <LandingHeader
                activeChildSectionIndex={activeChildSectionIndex}
                childrenSectionNames={childSectionNames}
                onSwitchLanguage={handleSwitchLanguage}
                onActiveChildSectionChange={handleActiveChildSectionChanged}
                onToggleDrawer = {onToggleDrawer}
                onToggleTheme = {onToggleTheme}
            />
            <div className={classes.sectionContainer}
                 ref={childSectionRefs.welcome}
            >
                <LandingWelcomeSection
                    onIntersectionChanged = {handleIntersectionChanged(0)}
                />
            </div>
            <div
                className={cx(
                    classes.sectionContainer, classes.sectionPaddingContainer,
                    classes.scaffoldingSectionContainer,
                )}
                ref={childSectionRefs.scaffolding}
            >
                <LandingScaffoldingToolSection
                    onIntersectionChanged = {handleIntersectionChanged(1)}
                />
            </div>
            <div
                className={cx(
                    classes.sectionContainer, classes.sectionPaddingContainer,
                    classes.snapDockSectionContainer,
                )}
                ref={childSectionRefs.snapDock}
            >
                <LandingSnapDockSection
                    onIntersectionChanged = {handleIntersectionChanged(2)}
                />
            </div>
            <div
                className={cx(
                    classes.sectionContainer, classes.sectionPaddingContainer,
                    classes.crossWinSectionContainer,
                )}
                ref={childSectionRefs.crossWin}
            >
                <LandingCrossWinCommSection
                    onIntersectionChanged = {handleIntersectionChanged(3)}
                />
            </div>
            <div
                className={cx(
                    classes.sectionContainer, classes.sectionPaddingContainer,
                    classes.genConfSectionContainer,
                )}
                ref={childSectionRefs.genConf}
            >
                <LandingGenConfSection
                    onIntersectionChanged = {handleIntersectionChanged(4)}
                />
            </div>
            <div
                className={cx(
                    classes.sectionContainer, classes.sectionPaddingContainer,
                    classes.allCustSectionContainer,'cutting-mat',
                )}
                ref={childSectionRefs.allCust}
            >
                <LandingAllCustomizableSection
                    onIntersectionChanged = {handleIntersectionChanged(5)}
                />
            </div>
            <div
                className={cx(
                    classes.sectionContainer, classes.sectionPaddingContainer,
                    classes.supportContainer,
                )}
                ref={childSectionRefs.support}
            >
                <LandingSupportSection
                    onIntersectionChanged = {handleIntersectionChanged(6)}
                />
            </div>
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant='temporary'
                open={drawerOpen}
                onClose={onToggleDrawer}
            >
                <DocMenu/>
            </Drawer>
        </div>

    </React.Fragment>)
}

export default connect(
    (state:IRootState)=>({
        theme: state.application.theme,
        drawerOpen: state.application.drawerOpen,
    }),
    dispatch => ({
        actions:{
            onToggleDrawer: ()=>{
                dispatch(applicationToggleDrawer());
            },
            _doToggleTheme : (theme:MuiTheme)=>{
                dispatch(applicationToggleTheme(theme));
            },
            onToggleDirection : ()=>{
                dispatch(applicationToggleDirection());
            }

        }
    }),
    (statePros,dispatchProps,ownProps)=>{
        const { theme, drawerOpen } = statePros;
        const {
            onToggleDrawer,_doToggleTheme,onToggleDirection,
        } = dispatchProps.actions;
        return {
            drawerOpen,
            actions:{
                onToggleDrawer,
                onToggleTheme : ()=>{
                    _doToggleTheme(theme === MuiTheme.DARK?MuiTheme.LIGHT:MuiTheme.DARK)
                },
                onToggleDirection,
            }
        }
    }
)(
    LandingLayout
);

