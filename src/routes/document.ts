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

const docRouteItems:IDocRouteCompItems[] = [
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
        ],
    },
    {
        name:'scaffolding',
        routeItems:[
            {
                path:'/doc/scaffoldingInstall',
                name:'scaffoldingInstall',
                component:ScaffoldingInstall,
            },
        ],
    },
    {
        name:'browserAdaptor',
        routeItems:[],
    },
    {
        name:'reduxOpenfin',
        routeItems:[],
    },
    {
        name:'starterBase',
        routeItems:[],
    },
    {
        name:'about',
        routeItems:[],
    },
];

const docRoutes:RouteItem[]= docRouteItems.reduce((acc:RouteItem[],oneDoc:IDocRouteCompItems)=>([
    ...acc,
    ...oneDoc.routeItems,
]),[]);

export default docRoutes;