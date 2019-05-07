import {IDocRouteCompItems, RouteItem} from "./types";

// @@BEGIN OF Generated routes imports
// Section: start
import StartIntroduction from '../views/doc/start/StartIntroduction';
import StartInstallation from '../views/doc/start/StartInstallation';
import StartFaq from '../views/doc/start/StartFaq';
// Section: starterBase
import StarterBaseFeatures from '../views/doc/starterBase/StarterBaseFeatures';
import StarterBaseReduxs from '../views/doc/starterBase/StarterBaseReduxs';
import StarterBaseWhyTs from '../views/doc/starterBase/StarterBaseWhyTs';
// Section: scaffolding
import ScaffoldingInstall from '../views/doc/scaffolding/ScaffoldingInstall';
import ScaffoldingGenrPrj from '../views/doc/scaffolding/ScaffoldingGenrPrj';
import ScaffoldingStandalonePkg from '../views/doc/scaffolding/ScaffoldingStandalonePkg';
import ScaffoldingGenrTpl from '../views/doc/scaffolding/ScaffoldingGenrTpl';
// Section: browserAdaptor
import BrowserAdaptorInstall from '../views/doc/browserAdaptor/BrowserAdaptorInstall';
import BrowserAdaptorUserCases from '../views/doc/browserAdaptor/BrowserAdaptorUserCases';
// Section: reduxOpenfin
import ReduxOpenfinInstall from '../views/doc/reduxOpenfin/ReduxOpenfinInstall';
import ReduxOpenfinCommPattern from '../views/doc/reduxOpenfin/ReduxOpenfinCommPattern';
import ReduxOpenfinSupportedApis from '../views/doc/reduxOpenfin/ReduxOpenfinSupportedApis';
import ReduxOpenfinSharedActions from '../views/doc/reduxOpenfin/ReduxOpenfinSharedActions';
import ReduxOpenfinSnapDock from '../views/doc/reduxOpenfin/ReduxOpenfinSnapDock';
// @@END OF Generated routes imports

// about
import AboutCollaborators from '../views/About/AboutCollaborators';
import AboutThanks from '../views/About/AboutThanks';

import { mapToPublicPathname } from './utils';

export const docRouteItems:IDocRouteCompItems[] = [
// @@BEGIN OF Generated routes comp items
        {
            name : 'start',
            routeItems : [
                {
                    path: '/doc/startIntroduction',
                    name: 'startIntroduction',
                    component: StartIntroduction,
                },
                {
                    path: '/doc/startInstallation',
                    name: 'startInstallation',
                    component: StartInstallation,
                },
                {
                    path: '/doc/startFaq',
                    name: 'startFaq',
                    component: StartFaq,
                },
            ].map(mapToPublicPathname),
        },
        {
            name : 'starterBase',
            routeItems : [
                {
                    path: '/doc/starterBaseFeatures',
                    name: 'starterBaseFeatures',
                    component: StarterBaseFeatures,
                },
                {
                    path: '/doc/starterBaseReduxs',
                    name: 'starterBaseReduxs',
                    component: StarterBaseReduxs,
                },
                {
                    path: '/doc/starterBaseWhyTs',
                    name: 'starterBaseWhyTs',
                    component: StarterBaseWhyTs,
                },
            ].map(mapToPublicPathname),
        },
        {
            name : 'scaffolding',
            routeItems : [
                {
                    path: '/doc/scaffoldingInstall',
                    name: 'scaffoldingInstall',
                    component: ScaffoldingInstall,
                },
                {
                    path: '/doc/scaffoldingGenrPrj',
                    name: 'scaffoldingGenrPrj',
                    component: ScaffoldingGenrPrj,
                },
                {
                    path: '/doc/scaffoldingStandalonePkg',
                    name: 'scaffoldingStandalonePkg',
                    component: ScaffoldingStandalonePkg,
                },
                {
                    path: '/doc/scaffoldingGenrTpl',
                    name: 'scaffoldingGenrTpl',
                    component: ScaffoldingGenrTpl,
                },
            ].map(mapToPublicPathname),
        },
        {
            name : 'browserAdaptor',
            routeItems : [
                {
                    path: '/doc/browserAdaptorInstall',
                    name: 'browserAdaptorInstall',
                    component: BrowserAdaptorInstall,
                },
                {
                    path: '/doc/browserAdaptorUserCases',
                    name: 'browserAdaptorUserCases',
                    component: BrowserAdaptorUserCases,
                },
            ].map(mapToPublicPathname),
        },
        {
            name : 'reduxOpenfin',
            routeItems : [
                {
                    path: '/doc/reduxOpenfinInstall',
                    name: 'reduxOpenfinInstall',
                    component: ReduxOpenfinInstall,
                },
                {
                    path: '/doc/reduxOpenfinCommPattern',
                    name: 'reduxOpenfinCommPattern',
                    component: ReduxOpenfinCommPattern,
                },
                {
                    path: '/doc/reduxOpenfinSupportedApis',
                    name: 'reduxOpenfinSupportedApis',
                    component: ReduxOpenfinSupportedApis,
                },
                {
                    path: '/doc/reduxOpenfinSharedActions',
                    name: 'reduxOpenfinSharedActions',
                    component: ReduxOpenfinSharedActions,
                },
                {
                    path: '/doc/reduxOpenfinSnapDock',
                    name: 'reduxOpenfinSnapDock',
                    component: ReduxOpenfinSnapDock,
                },
            ].map(mapToPublicPathname),
        },
// @@END OF Generated routes comp items
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