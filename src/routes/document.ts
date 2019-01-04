import {IDocRouteCompItems, RouteItem} from "./types";

// start
import StartInstallation from '../views/Start/StartInstallation';
import StartDevelopers from '../views/Start/StartDevelopers';
import StartFaq from '../views/Start/StartFaq';
// scaffolding
import ScaffoldingInstall from '../views/Scaffolding/ScaffoldingInstall';
// browserAdaptor
// reduxOpenfin
// starterBase
// about

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
        ].map(mapToPublicPathname),
    },
    {
        name:'browserAdaptor',
        routeItems:[].map(mapToPublicPathname),
    },
    {
        name:'reduxOpenfin',
        routeItems:[].map(mapToPublicPathname),
    },
    {
        name:'starterBase',
        routeItems:[].map(mapToPublicPathname),
    },
    {
        name:'about',
        routeItems:[].map(mapToPublicPathname),
    },
];

const docRoutes:RouteItem[]= docRouteItems.reduce((acc:RouteItem[],oneDoc:IDocRouteCompItems)=>([
    ...acc,
    ...oneDoc.routeItems,
]),[]);

export default docRoutes;