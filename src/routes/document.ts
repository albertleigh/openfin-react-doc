import {IDocRouteCompItems, RouteItem} from "./types";

// start
import StartInstallation from '../views/Start/StartInstallation';
// scaffolding
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
            }
        ],
    },
    {
        name:'scaffolding',
        routeItems:[],
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