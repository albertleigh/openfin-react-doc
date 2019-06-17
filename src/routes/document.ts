import {IDocRouteCompItems, RouteItem} from "./types";

// @@BEGIN OF Generated routes imports
// Section: start
import StartIntroduction from '../views/doc/start/StartIntroduction';
import StartInstallation from '../views/doc/start/StartInstallation';
import StartFaq from '../views/doc/start/StartFaq';
// Section: starterBase
import StarterBaseFeatures from '../views/doc/starterBase/StarterBaseFeatures';
import StarterBaseDependencies from '../views/doc/starterBase/StarterBaseDependencies';
import StarterBaseRoutes from '../views/doc/starterBase/StarterBaseRoutes';
import StarterBaseReuseableComps from '../views/doc/starterBase/StarterBaseReuseableComps';
import StarterBaseConstants from '../views/doc/starterBase/StarterBaseConstants';
import StarterBaseScripts from '../views/doc/starterBase/StarterBaseScripts';
import StarterBaseContextApis from '../views/doc/starterBase/StarterBaseContextApis';
import StarterBaseWhyTs from '../views/doc/starterBase/StarterBaseWhyTs';
// Section: scaffolding
import ScaffoldingInstall from '../views/doc/scaffolding/ScaffoldingInstall';
import ScaffoldingGenrPrj from '../views/doc/scaffolding/ScaffoldingGenrPrj';
import ScaffoldingStandalonePkg from '../views/doc/scaffolding/ScaffoldingStandalonePkg';
import ScaffoldingGenrTpl from '../views/doc/scaffolding/ScaffoldingGenrTpl';
// Section: professional
import ProfessionalConnRedux from '../views/doc/professional/ProfessionalConnRedux';
import ProfessionalActionsList from '../views/doc/professional/ProfessionalActionsList';
import ProfessionalReduxsStateStruct from '../views/doc/professional/ProfessionalReduxsStateStruct';
import ProfessionalStartCloseWin from '../views/doc/professional/ProfessionalStartCloseWin';
import ProfessionalSharedActions from '../views/doc/professional/ProfessionalSharedActions';
import ProfessionalReduxOpenfin from '../views/doc/professional/ProfessionalReduxOpenfin';
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
                    path: '/doc/starterBaseDependencies',
                    name: 'starterBaseDependencies',
                    component: StarterBaseDependencies,
                },
                {
                    path: '/doc/starterBaseRoutes',
                    name: 'starterBaseRoutes',
                    component: StarterBaseRoutes,
                },
                {
                    path: '/doc/starterBaseReuseableComps',
                    name: 'starterBaseReuseableComps',
                    component: StarterBaseReuseableComps,
                },
                {
                    path: '/doc/starterBaseConstants',
                    name: 'starterBaseConstants',
                    component: StarterBaseConstants,
                },
                {
                    path: '/doc/starterBaseScripts',
                    name: 'starterBaseScripts',
                    component: StarterBaseScripts,
                },
                {
                    path: '/doc/starterBaseContextApis',
                    name: 'starterBaseContextApis',
                    component: StarterBaseContextApis,
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
            name : 'professional',
            routeItems : [
                {
                    path: '/doc/professionalConnRedux',
                    name: 'professionalConnRedux',
                    component: ProfessionalConnRedux,
                },
                {
                    path: '/doc/professionalActionsList',
                    name: 'professionalActionsList',
                    component: ProfessionalActionsList,
                },
                {
                    path: '/doc/professionalReduxsStateStruct',
                    name: 'professionalReduxsStateStruct',
                    component: ProfessionalReduxsStateStruct,
                },
                {
                    path: '/doc/professionalStartCloseWin',
                    name: 'professionalStartCloseWin',
                    component: ProfessionalStartCloseWin,
                },
                {
                    path: '/doc/professionalSharedActions',
                    name: 'professionalSharedActions',
                    component: ProfessionalSharedActions,
                },
                {
                    path: '/doc/professionalReduxOpenfin',
                    name: 'professionalReduxOpenfin',
                    component: ProfessionalReduxOpenfin,
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