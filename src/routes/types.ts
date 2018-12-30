import * as React from 'react';
import {SvgIconProps} from '@material-ui/core/SvgIcon'

export interface IDocRouteCompItems{
    name:string,
    routeItems:RouteItem[],
}

export type RouteItem = (IRouteCompItem|IRouteRedirectItem);

export interface IRouteCompItem {
    path:string,
    name?:string,
    sidebarName?:string,
    navbarName?:string,
    icon?:React.ComponentType<SvgIconProps>,
    component:React.ComponentType<any>,
    [key:string]:any,
}

export interface IRouteRedirectItem {
    redirect:boolean,
    path:string,
    to:string,
    navbarName:string,
}
