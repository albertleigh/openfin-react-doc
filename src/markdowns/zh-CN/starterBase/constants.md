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
import {SvgIconProps} from '@material-ui/core/SvgIcon'

export type ShownFunction = () => boolean;
export type ShownField = boolean | ShownFunction;

export interface ILaunchBarItem {
    icon:React.ComponentType<SvgIconProps>,
    disabled:boolean,
    svg:string,
    appJson:any,
    shown?:ShownField,
}
```
| Field | Type | Description |
| --- | --- | --- |
| icon | optional `Icon` | Icon on the launch bar item |
| disabled | `boolean` | Flag to disable the launchbar item or not |
| svg | `null` or `string` | Icon img base url to replace icon if set to truthy _not null either undefined_ |
| appJson | Any | The config json of new openfin window |
| shown | optional `boolean` or `()=>boolean` | Flag or callback to render the launchBar item or not, like basing on entitlement check |

### Config Tabs & their items

Example: [`src/constants/configTabs.tsx`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/constants/configTabs.tsx)

```typescript
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { TextFieldProps } from '@material-ui/core/TextField';
import {TimePickerModalProps} from "material-ui-pickers/TimePicker/TimePickerModal";
import {DatePickerModalProps} from "material-ui-pickers/DatePicker/DatePickerModal";

export enum FieldType{
    CUSTOM_FIELD = 1,
    STRING = 2,
    DATETIME = 3,
    DATE = 4,
    TIME = 5,
    NUMBER = 6,
    CURRENCY = 7,
    TITLE = 8,
    SUBHEADING = 9,
    BODY1 = 10,
}

export interface IConfigField {
    _type:FieldType;
    _label:string;
    _name?:string;
    _defaultValue?:any;
    _cols?:number;
    _rows?:number;
    _props?:TextFieldProps|TimePickerModalProps|DatePickerModalProps;
    _custom?:React.ReactNode;
}

export interface IConfigTab {
    _order?:number;
    _label:string;
    _name:string;
    _svgUrl:string;
    _svgUrl_dark?:string;
    _icon?:React.ComponentType<SvgIconProps>;
    _fields:IConfigField[];
}
```

#### IConfigTab
| Field | Type | Description |
| --- | --- | --- |
| _order | optional `number` | the order number to control the sequence of current tab |
| _label | `string` | field name of `public/locales/{lang}/config.json` to render the config tab label |
| _name | `string` | the name of the tab for query |
| _svgUrl | `string` | current tab icon base url |
| _svgUrl_dark | optional `string` | current tab dark icon base url |
| _icon | optional SvgIconProps | The optional Mat Icon as current tab icon |
| _fields | IConfigField[] | The child config fields of current tab  |


#### IConfigField

| Field | Type | Description |
| --- | --- | --- |
| _type | FieldType | Type of the config field, either build-in type or CUSTOM_FIELD field |
| _label | `string` | field name of `public/locales/{lang}/config.json` to render the config item label |
| _name | optional `any` | the name of the tab for query, a label field doesnt require a name |
| _defaultValue | optional `any` | the default value of current item field |
| _cols | optional `number` only valid from 1 to 12 | the span of the config field |
| _rows | optional `number` | the height of the config field |
| _props | optional `TextFieldProps` or `TimePickerModalProps` or `DatePickerModalProps` | the height of the config field |
| _custom | optional `React.ReactNode` | The custom field if _type set to CUSTOM_FIELD |


### Summary of Samples

- `src/routes`
    - [`index.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/index.ts)
    - [`Dashboard.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/Dashboard.ts)
    - [`ChildWindow.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/ChildWindow.ts)
    - [`notification.ts`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/notification.ts)

- [`src/constants/launchBarItems.tsx`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/constants/launchBarItems.tsx)
- [`src/constants/configTabs.tsx`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/constants/configTabs.tsx)

[react-openfin]:https://www.npmjs.com/package/react-openfin
[react-openfin-mat-impl]:https://www.npmjs.com/package/react-openfin-mat-impl

[react-router-dom]: https://www.npmjs.com/package/react-router-dom

_Once all constants set, let's start and render some in a openfin app._

[openfin-react-concise]:https://github.com/openfin-js-app/openfin-react-concise