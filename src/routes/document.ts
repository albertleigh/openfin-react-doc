import {IDocRouteCompItems, RouteItem} from "./types";

// start
import StartInstallation from '../views/Start/StartInstallation';
import StartDevelopers from '../views/Start/StartDevelopers';
import StartFaq from '../views/Start/StartFaq';
// scaffolding
import ScaffoldingInstall from '../views/Scaffolding/ScaffoldingInstall';
import ScaffoldingGenrPrj from '../views/Scaffolding/ScaffoldingGenrPrj';
import ScaffoldingStandalonePkg from '../views/Scaffolding/ScaffoldingStandalonePkg';
import ScaffoldingGenrTpl from '../views/Scaffolding/ScaffoldingGenrTpl';
// browserAdaptor
import BrowserAdaptorInstall from '../views/BrowserAdaptor/BrowserAdaptorInstall';
import BrowserAdaptorUsecases from '../views/BrowserAdaptor/BrowserAdaptorUsecases';
// reduxOpenfin
import ReduxOpenfinInstall from '../views/ReduxOpenfin/ReduxOpenfinInstall';
import ReduxOpenfinCommPatt from '../views/ReduxOpenfin/ReduxOpenfinCommPatt';
import ReduxOpenfinSupportApis from '../views/ReduxOpenfin/ReduxOpenfinSupportApis';
import ReduxOpenfinSharedActions from '../views/ReduxOpenfin/ReduxOpenfinSharedActions';
import ReduxOpenfinSnapDock from '../views/ReduxOpenfin/ReduxOpenfinSnapDock';
// starterBase
import StarterBaseFeatures from '../views/StarterBase/StarterBaseFeatures';
import StarterBaseReduxs from '../views/StarterBase/StarterBaseReduxs';
import StarterBaseComps from '../views/StarterBase/StarterBaseComps';
import StarterBaseStyles from '../views/StarterBase/StarterBaseStyles';
import StarterBaseWhyTs from '../views/StarterBase/StarterBaseWhyTs';
// about
import AboutCollaborators from '../views/About/AboutCollaborators';
import AboutThanks from '../views/About/AboutThanks';

import { mapToPublicPathname } from './utils';

export const docRouteItems:IDocRouteCompItems[] = [
    {
        name:'start',
        routeItems:[
            {
                path:'/doc/startInstallation',
                name:'startInstallation',
                component:StartInstallation,
            },
            {
                path:'/doc/startDevelopers',
                name:'startDevelopers',
                component:StartDevelopers,
            },
            {
                path:'/doc/startFaq',
                name:'startFaq',
                component:StartFaq,
            },
        ].map(mapToPublicPathname),
    },
    {
        name:'scaffolding',
        routeItems:[
            {
                path:'/doc/scaffoldingInstall',
                name:'scaffoldingInstall',
                component:ScaffoldingInstall,
            },
            {
                path:'/doc/scaffoldingGenrPrj',
                name:'scaffoldingGenrPrj',
                component:ScaffoldingGenrPrj,
            },
            {
                path:'/doc/scaffoldingStandalonePkg',
                name:'scaffoldingStandalonePkg',
                component:ScaffoldingStandalonePkg,
            },
            {
                path:'/doc/scaffoldingGenrTpl',
                name:'scaffoldingGenrTpl',
                component:ScaffoldingGenrTpl,
            },
        ].map(mapToPublicPathname),
    },
    {
        name:'browserAdaptor',
        routeItems:[
            {
                path:'/doc/browserAdaptorInstall',
                name:'browserAdaptorInstall',
                component:BrowserAdaptorInstall,
            },
            {
                path:'/doc/browserAdaptorUsecases',
                name:'browserAdaptorUsecases',
                component:BrowserAdaptorUsecases,
            },
        ].map(mapToPublicPathname),
    },
    {
        name:'reduxOpenfin',
        routeItems:[
            {
                path:'/doc/reduxOpenfinInstall',
                name:'reduxOpenfinInstall',
                component:ReduxOpenfinInstall,
            },
            {
                path:'/doc/reduxOpenfinCommPatt',
                name:'reduxOpenfinCommPatt',
                component:ReduxOpenfinCommPatt,
            },
            {
                path:'/doc/reduxOpenfinSupportApis',
                name:'reduxOpenfinSupportApis',
                component:ReduxOpenfinSupportApis,
            },
            {
                path:'/doc/reduxOpenfinSharedActions',
                name:'reduxOpenfinSharedActions',
                component:ReduxOpenfinSharedActions,
            },
            {
                path:'/doc/reduxOpenfinSnapDock',
                name:'reduxOpenfinSnapDock',
                component:ReduxOpenfinSnapDock,
            },
        ].map(mapToPublicPathname),
    },
    {
        name:'starterBase',
        routeItems:[
            {
                path:'/doc/starterBaseFeatures',
                name:'starterBaseFeatures',
                component:StarterBaseFeatures,
            },
            {
                path:'/doc/starterBaseReduxs',
                name:'starterBaseReduxs',
                component:StarterBaseReduxs,
            },
            {
                path:'/doc/starterBaseComps',
                name:'starterBaseComps',
                component:StarterBaseComps,
            },
            {
                path:'/doc/starterBaseStyles',
                name:'starterBaseStyles',
                component:StarterBaseStyles,
            },
            {
                path:'/doc/starterBaseWhyTs',
                name:'starterBaseWhyTs',
                component:StarterBaseWhyTs,
            },
        ].map(mapToPublicPathname),
    },
    {
        name:'about',
        routeItems:[
            {
                path:'/doc/aboutCollaborators',
                name:'aboutCollaborators',
                component:AboutCollaborators,
            },
            {
                path:'/doc/aboutThanks',
                name:'aboutThanks',
                component:AboutThanks,
            },
        ].map(mapToPublicPathname),
    },
];

const docRoutes:RouteItem[]= docRouteItems.reduce((acc:RouteItem[],oneDoc:IDocRouteCompItems)=>([
    ...acc,
    ...oneDoc.routeItems,
]),[]);

export default docRoutes;