react-openfin-mat-impl in details
---------
*This section, we will cover all reusable components provided by [react-openfin-mat-impl]*

> Now, react-openfin has be initialized, route naming pattern has been specified. It is time to render something in 
> Openfin, like headers drawer sidebar, tabs, theme switcher etc. Should we build it ? Do not worry, [react-openfin-mat-impl]
> provided a set reusable components already. It is very easy to use and powerful.   

### Categories of Components - lyt view & comp

_Everything is a component, but it doesn't means we could design components at freely._

For code readability, we split components into three categories. 

- Layout components - lyt
- View components - view
- Components - comp

There is a hierarchy of these three types of components. Lyt can contain anything it want, view can only contain views or comps.
Comp can only include comps. 

Besides that, from style maintaining perspective, lyt can be an entry comp, it should take whole space of the body 
element or the screen and provide a complete set of buzi logics. However view might not be an entry comp, view component
should only at most take whole space of its parent and provide part of the buzi logics. Comp should the smallest or smaller 
reusable components provides. 

[react-openfin-mat-impl] will follow this category and provide reusable components of different categories.

#### Summary of component categories 

| Category | Entry components | Set of logics provided | Reusable |
| --- | --- | --- | --- |
| Layout | Yes | Complete | No |
| View | No | Partial | Yes |
| Comp | No | Smallest or smaller | Yes |


### Layout components

#### LoadingLyt

> `LoadingLyt` is a layout component that will be rendered at screen center while the application starting. 
> Inside it, name, description, app logo, company logo will be rendered. Thus most of these variables need to be specified on it props.
> Name and description will be loaded via fields `appName` or `appDesc` of
> [`public/locales/(language)/langding.json`](https://github.com/openfin-js-app/openfin-react-concise/blob/master/public/locales/en-US/landing.json)

##### Sample Usage
```typescript jsx
import * as React from 'react';
import { LoadingLyt } from 'react-openfin-mat-impl';

import appLogo from '../assets/svg/app.svg';
import companyLogo from '../assets/svg/company.svg';

const Loading:React.FunctionComponent<{}> = ({})=>(
    <LoadingLyt appLogo={appLogo} companyLogo={companyLogo} version={process.env.REACT_APP_VERSION}/>
)
```
##### Props

| Name | Type | Description |
| --- | --- | --- |
| appLogo | string | app img base url |
| companyLogo | string | company img base url |
| version | string | version string to be renderred on the loading layout |

#### DashboardLyt

> `DashboardLyt` is a layout component that serves as the container on main view with a header, sidebar. 
> Therefore, among props will contain the fields relating to the header and sidebar comp.

```typescript jsx
import * as React from 'react';
import { useContext } from 'react';
import { DashboardLyt } from 'react-openfin-mat-impl';

import appLogo from '../assets/svg/app.svg';

export const Dashboard:React.FunctionComponent<{}> = ({...rest}) => {

    const {
        actions:{
            onNewSnackBar
        }
    } = useContext(ApplicationContext);

    const handleLogoutBtnClick = ()=>{
        onNewSnackBar({
            variant:'rose',
            message:'User clicked the logout btn',
            // README
            // vertical and horizontal fields are optional
            vertical:'top',
            horizontal:'right',
        })
    }

    return (<DashboardLyt
        appLogo={appLogo}
        routes={dashboardRoutes}
        menuItems={[{
            icon:<ExitToAppIcon/>,
            label:'staticMenu.logout',
            onClick: handleLogoutBtnClick,
        }]}
        headerPrefixElements={<ClientPrefix {...rest} />}
        {...rest}
    />)
}
``` 

##### Props

| Name | Type | Description |
| --- | --- | --- |
| appLogo | string | app img base url |
| routes | RouteItem[] | sub routes of dashboard path, an [sample](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/routes/Dashboard.ts) will be provided  |
| sidebarBgUrl | optional string | the url of the sidebar background image if you wanna override  |
| menuItems | optional ISideBarMenuItem[] | static sidebar item besides route items, a sample is also provided  |
| hideSwitchToLaunchbar | optional boolean | will hide the button to switch to launchbar if set to true |
| headerPrefixElements | optional ReactNode | prefix nodes upon headers, an [example](https://github.com/openfin-js-app/openfin-react-concise/blob/master/src/components/sample-name/ClientPrefix.tsx) also provided |
| headerSuffixElements | optional ReactNode | suffix nodes upon headers, similar to prefix nodes |


#### ChildWindow
#### Notification
#### LaunchBar




[react-openfin-mat-impl]:https://www.npmjs.com/package/react-openfin-mat-impl