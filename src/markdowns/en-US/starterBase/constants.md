Constants required in the templates
---------
_This section covers the schema and samples of the constants required in the [react-openfin] and [react-openfin-mat-impl]_

> Now, re-useable components have been introduced and it is the time to assemble them together and render them in a 
> openfin embedded browser. But before doing this, few constants are also required to be filled into to let [react-opefin]
> & [reat-openfin-mat-impl] behavior properly.

There are three types of constants required so far.

- Route items for dashboard, child windows and notification
- LaunchBar item
- Config tab and its items

Thanks to [react-openfin-mat-impl] & [openfin-react-concise], at the beginning, we do not need to create our own ones for now, just reuse what 
[react-openfin-mat-impl] and [openfin-react-concise] provides. Latter we will cover the steps to create custom components. 

### Route items

Examples from `src/routes`
- [`index.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/index.ts)
- [`Dashboard.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/Dashboard.ts)
- [`ChildWindow.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/ChildWindow.ts)
- [`notification.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/notification.ts)

```typescript
import * as React from 'react';
import {SvgIconProps} from '@material-ui/core/SvgIcon'

export type RouteItem = (IRouteCompItem|IRouteRedirectItem);

export type ShownFunction = () => boolean;
export type ShownField = boolean | ShownFunction;

export interface IRouteCompItem {
    path:string,
    sidebarName?:string,
    navbarName?:string,
    icon?:React.ComponentType<SvgIconProps>,
    component:React.ComponentType<any>,
    shown?:ShownField,
}

export interface IRouteRedirectItem {
    redirect:boolean,
    path:string,
    to:string,
}
```
Generally speaking, `RouteItem` could be either `IRouteCompItem` or `IRouteRedirectItem`. We can tell by names, 
`IRouteRedirectItem` tell [react-router-dom] to direct to another url on a certain path. `IRouteCompItem` just tell 
[react-router-dom] which view component should be rendered on a certain path.  

##### `IRouteRedirectItem`

| Field | Type | Description |
| --- | --- | --- |
| redirect | boolean.true | should be always set to `true` |
| path | string | trigger url path |
| to | string | target url path |

##### `IRouteCompItem`

| Field | Type | Description |
| --- | --- | --- |
| path | string | trigger url path |
| component | React.Node | Component rendered beneath the layout |
| sidebarName | optional `string` | field name of `public/locales/{lang}/menu.json` to render sidebar label |
| navbarName | optional `string` | field name of `public/locales/{lang}/menu.json` to render navigator bar label |
| icon | optional `Icon` | Icon on the sidebar item |
| shown | optional `boolean` or `()=>boolean` | Flag or callback to render the menu item or not, like basing on entitlement check |


### LaunchBar items

Example: [`src/constants/launchBarItems.tsx`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/constants/launchBarItems.tsx)

```typescript
export interface ILaunchBarItem {
    icon:any,
    disabled:boolean,
    svg:string,
    appJson:any,
    shown?:ShownField,
}
```
| Field | Type | Description |
| --- | --- | --- |
| shown | optional `boolean` or `()=>boolean` | Flag or callback to render the launchBar item or not, like basing on entitlement check |

### Config Tabs & their items

[react-openfin]:https://www.npmjs.com/package/react-openfin
[react-openfin-mat-impl]:https://www.npmjs.com/package/react-openfin-mat-impl

[react-router-dom]: https://www.npmjs.com/package/react-router-dom

[openfin-react-concise]:https://github.com/openfin-js-app/openfin-react-concise