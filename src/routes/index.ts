import { RouteItem } from './types';

import DefaultLanding from '../layouts/Landing/Landing';
import Document from '../layouts/Document/Document';

const indexRoutes:RouteItem[] = [
    {
        path:'/doc',
        component: Document,
    },
    {
        path:'/',
        component: DefaultLanding,
    }
];


export * from './types';

export default indexRoutes;
