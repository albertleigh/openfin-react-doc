Context Apis of [react-openfin]
-------------------------------
> Since we have introduced the concise template and its features, it might not noticed that the context api provided by 
> [react-openfin] should be useful when we triggered few openfin actions from components. Therefore, better provide a 
> complete documentation of the context apis for latter usage.  


### Application Context

```typescript
// Application Context Interface
export interface IWithApplication {
    state:{
        offline:boolean,
        username:string,
        computerName:string,
        machineId:string,
        deviceUserId:string,
        loading:boolean,
        loadingMsg:string,
        docked:boolean,
        winTop:number,
        winLeft:number,
        winWidth:number,
        winHeight:number,
        drawerOpen:boolean,
        launchBarCollapse:boolean,
        snackBarOpen:boolean,
        snackBarMsgInfo:Partial<ISnackBarMsg>,
        snackBarMsgQueue:Array<Partial<ISnackBarMsg>>,
        openfinVersion:string,
        openfinHostSpec:any,
        windowsState:string,
    },
    actions:{
        // application
        launchNewWin: (appJson:Partial<WindowOptions>) => void,
        onSetLoadingMsg: (label:string) => void,
        onApplicationStart: () => void,
        onApplicationReady: (readyConfig:IReadyPayload) => void,
        onChildWinStart: () => void,
        onChildWinReady: (readyConfig:IReadyPayload) => void,
        onNotificationStart: () => void,
        onNotificationReady: (readyConfig:IReadyPayload) => void,
        // snackbars
        onNewSnackBar:(newSnackBar:IApplicationNewSnackbarOption)=>void,
        onSnackBarClose:(event: React.SyntheticEvent<any>, reason: string) => void,
        onSnackBarCloseBtnClick:()=>void,
        onSnackBarExited:()=>void,
        // dashboard
        onDrawerToggle:()=>void,
        // launch bar
        onLaunchBarClose:()=>void,
        onLaunchBarToggleCollapse:()=>void,
        onLaunchBarToggle:()=>void,
        // windows
        onSetAsForeground:()=>void,
        onUndock:()=>void,
        onToggleWinState:()=>void,
        onMinimize:()=>void,
        onWinClose:()=>void,
        onWinForceClose:()=>void,
        // notification
        launchNewNotification:(options:CreateNotificationPayload)=>void,
        onNotificationClose:()=>void,
    },
}
```
- #### state
    - `offline:boolean`
    
        Flag of that current openfin app is connected to network or not.
         
    - `username:string`
    
        OS username of the user
        
    - `computerName:string`
    
        OS hostname
        
    - `machineId:string`
    
        Hashed value of machine id
        
    - `deviceUserId:string`
        
        Hashed value of machine id and user id
    
    - `loading:boolean`
    
        Flag of that current openfin js app is loading or not.
        
    - `loadingMsg:string`
    
        The field name of `public/locales/{language}/landing.json` for intermediate loading message 
    
    - `docked:boolean`
    
        Flag of that current window is docked or not.
    
    - `winTop:number`
    
        The top position in pixel of current window.
        
    - `winLeft:number`
        
        The left position in pixel of current window.
    
    - `winWidth:number`
    
        The width in pixel of current window.
    
    - `winHeight:number`
    
        The height in pixel of current window.
    
    - `drawerOpen:boolean`
    
        The flag of the drawer open or not of current window.
    
    - `launchBarCollapse:boolean`
    
        The flag of the launchBar open or not of current application.
    
    - `snackBarOpen:boolean`
    
        The flag of the snackBar should be open or not of current window.
    
    - `snackBarMsgInfo:Partial<ISnackBarMsg>`
        
        The snakBar msg info obj being shown on current window.
    
    - `snackBarMsgQueue:Array<Partial<ISnackBarMsg>>`
    
        Queued snakBar msg info objs of current window.
    
    - `openfinVersion:string`
        
        Current openfin version
    
    - `openfinHostSpec:any`
    
        Current openfin runtime version
    
    - `windowsState:string`
        
        Window state of current window, could be `minimized`, `normal` or  `maximized`
    
- #### actions

    - `launchNewWin: (appJson:Partial<WindowOptions>) => void`
    
        Launch a new window, and appJson is the value sent to openfin js api
    
    - `onSetLoadingMsg: (label:string) => void`
    
        Set the current intermediate loading msg field name on loading view
    
    - `onApplicationStart: () => void`
    
        Trigger application to start.
    
    - `onApplicationReady: (readyConfig:IReadyPayload) => void`
    
        Confirm application to ready to start from app side.
    
    - `onChildWinStart: () => void`
    
        Trigger child window to start.
    
    - `onChildWinReady: (readyConfig:IReadyPayload) => void`
    
        Confirm child window to ready to start from app side.
    
    - `onNotificationStart: () => void`
    
        Trigger notification window to start.
    
    - `onNotificationReady: (readyConfig:IReadyPayload) => void`
    
        Confirm notification window to ready to start from app side.
    
    - `onNewSnackBar:(newSnackBar:IApplicationNewSnackbarOption)=>void`
    
        Create a newSnackBar to show.
    
    - `onSnackBarClose:(event: React.SyntheticEvent<any>, reason: string) => void`
    
        On self-close current showing snackBar of current window, like timeout. 
    
    - `onSnackBarCloseBtnClick:()=>void`
        
        Close current showing snackBar of current window
    
    - `onSnackBarExited:()=>void`
    
        On current showing snackBar of current window lose focus.
    
    - `onDrawerToggle:()=>void`
        
        Toggle the drawer sidebar of current window
    
    - `onLaunchBarClose:()=>void`
    
        Close the launchBar of current application.
    
    - `onLaunchBarToggleCollapse:()=>void`
    
        Collapse the launchBar of current application.
    
    - `onLaunchBarToggle:()=>void`
    
        Switch between launchBar and MainWindow
    
    - `onSetAsForeground:()=>void`
    
        Set current window to foreground.
    
    - `onUndock:()=>void`
    
        Undock current window
    
    - `onToggleWinState:()=>void`
    
        Toggle the size of current window between `normal` and `maximized`
    
    - `onMinimize:()=>void`
    
        Minimize current window.
    
    - `onWinClose:()=>void`
    
        Start to close current window.
    
    - `onWinForceClose:()=>void`
    
        Force to close current window.
    
    - `launchNewNotification:(options:CreateNotificationPayload)=>void`
    
        Launch a new notification window.
        
    - `onNotificationClose:()=>void`
    
        Close current notification.

[react-openfin]:https://www.npmjs.com/package/react-openfin