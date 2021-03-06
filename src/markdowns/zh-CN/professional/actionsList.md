Request and Response actions provided by [react-openfin]
-------------------------------------------------------

> Since we already introduce the corresponding actions in [react-openfin], better list all definition to clarify their functionality.

#### Complete List 

- `APPLICATION_SET_LOADING_MSG`
- `APPLICATION_START`
- `APPLICATION_AWAIT`
- `APPLICATION_READY`
- `APPLICATION_STARTED`
- `APPLICATION_CHILD_START`
- `APPLICATION_CHILD_AWAIT`
- `APPLICATION_CHILD_READY`
- `APPLICATION_CHILD_STARTED`
- `APPLICATION_NOTIFICATION_START`
- `APPLICATION_NOTIFICATION_AWAIT`
- `APPLICATION_NOTIFICATION_READY`
- `APPLICATION_NOTIFICATION_STARTED`
- `APPLICATION_DRAWER_TOGGLE`
- `APPLICATION_TOGGLE_WINDOW_STATE`
- `APPLICATION_CUR_WIN_CLOSING`
- `APPLICATION_CUR_WIN_READY_TO_CLOSE`
- `APPLICATION_NEW_SNACKBAR`
- `APPLICATION_LAUNCH_BAR_TOGGLE`
- `APPLICATION_LAUNCH_BAR_TOGGLED`
- `APPLICATION_LAUNCH_BAR_TOGGLE_COLLAPSE`
- `APPLICATION_LAUNCH_NEW_WINDOW`
- `APPLICATION_LAUNCH_BAR_CLOSE`
- `CONFIG_UPDATE_GLOBAL_FILTER_STR`
- `CONFIG_UPDATE_ONE_FIELD`
- `CONFIG_SELECT_ONE_FIELD`
- `CONFIG_SELECT_ONE_FIELD_RES`
- `CONFIG_REMOVE_ONE_FIELD`

#### Details and Description 

- #####`APPLICATION_SET_LOADING_MSG`

    Req Action
    
    ###### Creator Function
    
        `import { applicationSetLoadingMsg } from 'react-openfin/reduxs`
        
        applicationSetLoadingMsg(loadingMsgFieldName:string)
        
    ###### Request payload schema
            
    | Field | Type | Description |
    | --- | --- | --- |
    | applicationSetLoadingMsg | `string` | the field name of public/locales/{lang}/loading.json on current loading message label on the loading view |  
    
    ###### Description
    
        Set the field name of public/locales/{lang}/loading.json on current loading message label on the loading view. 
    
- #####`APPLICATION_START`
    
    Req Action
        
    ###### Creator Function
    
        `import { applicationStart } from 'react-openfin/reduxs`
        
        applicationStart()
        
    ###### Request payload schema
            
        Empty  
    
    ###### Description
    
        Start the booting process of Main Window Application. Once booted APPLICATION_AWAIT will be responed.
        
- #####`APPLICATION_AWAIT`

    Res Action
            
    ###### Action Type
    
        `import { APPLICATION_AWAIT } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action comfirming applicaiton fully stared, all conntexts populated and ready to use.

- #####`APPLICATION_READY`

    Req Action
            
    ###### Creator Function
    
        `import { applicationReady } from 'react-openfin/reduxs`
        
        applicationReady({})
        
    ###### Request payload schema
        
    | Field | Type | Description |
    | --- | --- | --- |
    | targetUrl | optional `string` | the path redirected to after full started |
    
    ###### Description
    
        Inform react-openfin, all client side initialization done, and ready to to redirect to default view or target url.

- #####`APPLICATION_STARTED`

    Res Action
                
    ###### Action Type
    
        `import { APPLICATION_STARTED } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action comfirming applicaiton booting process completed, redirect to default view or target url already.

- #####`APPLICATION_CHILD_START`

    Req Action
        
    ###### Creator Function
    
        `import { applicationChildStart } from 'react-openfin/reduxs`
        
        applicationChildStart()
        
    ###### Request payload schema
            
        Empty  
    
    ###### Description
    
        Start the booting process of a child window. Once booted APPLICATION_CHILD_AWAIT will be responed.
        
- #####`APPLICATION_CHILD_AWAIT`

    Res Action
                
    ###### Action Type
    
        `import { APPLICATION_CHILD_AWAIT } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action comfirming child window fully stared, all conntexts populated and ready to use.

- #####`APPLICATION_CHILD_READY`
    
    Req Action
            
    ###### Creator Function
    
        `import { applicationChildReady } from 'react-openfin/reduxs`
        
        applicationChildReady({})
        
    ###### Request payload schema
        
    | Field | Type | Description |
    | --- | --- | --- |
    | targetUrl | optional `string` | the path redirected to after full started |
    
    ###### Description
    
        Inform react-openfin, all client side initialization done, and ready to to redirect to default view or target url.
        
- #####`APPLICATION_CHILD_STARTED`

    Res Action
                
    ###### Action Type
    
        `import { APPLICATION_CHILD_STARTED } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action comfirming child window booting process completed, redirect to default view or target url already.

- #####`APPLICATION_NOTIFICATION_START`
    
    Req Action
        
    ###### Creator Function
    
        `import { applicationNotificationStart } from 'react-openfin/reduxs`
        
        applicationNotificationStart()
        
    ###### Request payload schema
            
        Empty  
    
    ###### Description
    
        Start the booting process of a notification window. Once booted APPLICATION_CHILD_AWAIT will be responed.
        
- #####`APPLICATION_NOTIFICATION_AWAIT`

    Res Action
                    
    ###### Action Type
    
        `import { APPLICATION_NOTIFICATION_AWAIT } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action comfirming notification window fully stared, all conntexts populated and ready to use.

- #####`APPLICATION_NOTIFICATION_READY`

    Req Action
                
    ###### Creator Function
    
        `import { applicationNotificationReady } from 'react-openfin/reduxs`
        
        applicationNotificationReady({})
        
    ###### Request payload schema
        
    | Field | Type | Description |
    | --- | --- | --- |
    | targetUrl | optional `string` | the path redirected to after full started |
    
    ###### Description
    
        Inform react-openfin, all client side initialization done, and ready to to redirect to default view or target url.

- #####`APPLICATION_NOTIFICATION_STARTED`

    Res Action
                    
    ###### Action Type
    
        `import { APPLICATION_NOTIFICATION_STARTED } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action comfirming notification window booting process completed, redirect to default view or target url already.

- #####`APPLICATION_DRAWER_TOGGLE`
    
    Req Action
                
    ###### Creator Function
    
        `import { applicationDrawerToggle } from 'react-openfin/reduxs`
        
        applicationDrawerToggle()
        
    ###### Request payload schema
        
    Empty
    
    ###### Description
    
        Toggle current drawer sidebar to be open or closed.
        
- #####`APPLICATION_TOGGLE_WINDOW_STATE`

    Req Action
                    
    ###### Creator Function
    
        `import { applicationToggleWindowState } from 'react-openfin/reduxs`
        
        applicationToggleWindowState()
        
    ###### Request payload schema
        
    Empty
    
    ###### Description
    
        Toggle current window status to be normal or maximized.

- #####`APPLICATION_CUR_WIN_CLOSING`

    Res Action
                    
    ###### Action Type
    
        `import { APPLICATION_CUR_WIN_CLOSING } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
        Empty
        
    ###### Description
        
        Respone action telling client current window is closing, either response skip to close within a time limit or it will close after that. 

- #####`APPLICATION_CUR_WIN_READY_TO_CLOSE`

    Req Action
                    
    ###### Creator Function
    
        `import { applicationCurWinReadyToClose } from 'react-openfin/reduxs`
        
        applicationCurWinReadyToClose({})
        
    ###### Request payload schema - IReadyToClose
        
    | Field | Type | Description |
    | --- | --- | --- |
    | skipClosing | optional `boolean` | flag to skip default closing actions or not |
    
    ###### Description
    
        Ask react-openfin to intercept to block normal closing. 

- #####`APPLICATION_NEW_SNACKBAR`

    Req Action
                        
    ###### Creator Function
    
        `import { applicationNewSnackbar } from 'react-openfin/reduxs`
        
        applicationNewSnackbar({
            message:'Sample msg',
            variant:'info',
        })
        
    ###### Request payload schema - IApplicationNewSnackbarOption
        
    | Field | Type | Description |
    | --- | --- | --- |
    | message | `string` | Message string |
    | variant | optional 'primary' or 'success' or 'warning' or 'error' or 'info' or 'rose' | The variant of the message |
    | vertical |  optional 'top' or 'bottom' | The variant of the message |
    | horizontal | optional 'left' or 'right' or 'center' | The variant of the message |
    
    ###### Description
    
        Show a snack bar msg maintained by react-openfin

- #####`APPLICATION_LAUNCH_BAR_TOGGLE`

    Req Action
                        
    ###### Creator Function
    
        `import { applicationLaunchBarToggle } from 'react-openfin/reduxs`
        
        applicationLaunchBarToggle()
        
    ###### Request payload schema
        
    Empty
    
    ###### Description
    
        Toggle either to siwtch to launchbar or return to main window. 

- #####`APPLICATION_LAUNCH_BAR_TOGGLED`

    Res Action
                        
    ###### Action Type
    
        `import { APPLICATION_LAUNCH_BAR_TOGGLED } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
    | Field | Type | Description |
    | --- | --- | --- |
    | status | `APPLICATION_LAUNCH_BAR_STATUS` | Either `APPLICATION_LAUNCH_BAR_STATUS.SWITCH_TO_LAUNCHBAR` or `APPLICATION_LAUNCH_BAR_STATUS.SWITCH_TO_MAIN_WIN` |
        
    ###### Description
        
        Respone action dispatched only when applicaiton launchbar toggled, and its status value in the payload identifies 
        whether it switchs to launchBar or return to mainWindow

- #####`APPLICATION_LAUNCH_BAR_TOGGLE_COLLAPSE`
    
    Req Action
                            
    ###### Creator Function
    
        `import { applicationLaunchBarToggleCollapse } from 'react-openfin/reduxs`
        
        applicationLaunchBarToggleCollapse()
        
    ###### Request payload schema
        
    Empty
    
    ###### Description
    
        Collapse launchBar. 

- #####`APPLICATION_LAUNCH_NEW_WINDOW`

    Req Action
                                
    ###### Creator Function
    
        `import { applicationLaunchBarToggleCollapse } from 'react-openfin/reduxs`
        
        applicationLaunchBarToggleCollapse()
        
    ###### Request payload schema - Partial<WindowOptions>
    
    Openfin Window options
    
    ###### Description
    
        Launch a new window.

- #####`APPLICATION_LAUNCH_BAR_CLOSE`

    Req Action
                                    
    ###### Creator Function
    
        `import { applicationLaunchBarClose } from 'react-openfin/reduxs`
        
        applicationLaunchBarClose()
        
    ###### Request payload schema
    
    Empty
    
    ###### Description
    
        Close launchBar and exit application.

- #####`CONFIG_UPDATE_GLOBAL_FILTER_STR`

    Req Action
                                        
    ###### Creator Function
    
        `import { configUpdateGlobalFilterStr } from 'react-openfin/reduxs`
        
        configUpdateGlobalFilterStr(configGlobalFilterString:string)
        
    ###### Request payload schema
    
    | Field | Type | Description |
    | --- | --- | --- |
    | configGlobalFilterString | `string` | The filter string to filer config fields on config view |
    
    ###### Description
    
        Set the global filter string to filter the config fields shwon on the config view.        
        
- #####`CONFIG_UPDATE_ONE_FIELD`

    Req Action
                                        
    ###### Creator Function
    
        `import { configUpdateOneField } from 'react-openfin/reduxs`
        
        configUpdateOneField(tabName:string, fieldName:string, value:any)
        
    ###### Request payload schema
    
    | Field | Type | Description |
    | --- | --- | --- |
    | tabName | `string` | The tab name to of the config field to update |
    | fieldName | `string` | The field name to of the config field to update |
    | value | `any` | The value of the config field |
    
    ###### Description
    
        Create or update a config field value of the configure service provided by the react-openfin        

- #####`CONFIG_SELECT_ONE_FIELD`

    Req Action
                                            
    ###### Creator Function
    
        `import { configSelectOneField } from 'react-openfin/reduxs`
        
        configSelectOneField({tabName:string, fieldName:string})
        
    ###### Request payload schema - IConfigSelectOneFieldOption
    
    | Field | Type | Description |
    | --- | --- | --- |
    | tabName | `string` | The tab name to of the config field to select |
    | fieldName | `string` | The field name to of the config field to select |
    | userObj | optional any | An optional user object to assist identify the response action if needed |
    
    ###### Description
    
        Select the value saved on configuration service provided by react-openfin, once the value sezied an
        CONFIG_SELECT_ONE_FIELD_RES acion will be responed.

- #####`CONFIG_SELECT_ONE_FIELD_RES`

    Res Action
                        
    ###### Action Type
    
        `import { CONFIG_SELECT_ONE_FIELD_RES } from 'react-openfin/reduxs`
    
    ###### Response payload schema
    
    | Field | Type | Description |
    | --- | --- | --- |
    | tabName | `string` | The tab name to of the config field to select |
    | fieldName | `string` | The field name to of the config field to select |
    | userObj | optional any | An optional user object might be set previously to assist identify the response action |
    | value | `any` | The config value seized |
       
    ###### Description
        
        Try to size a config value previous saved.

- #####`CONFIG_REMOVE_ONE_FIELD`

    Req Action
                                            
    ###### Creator Function
    
        `import { configRemoveOneField } from 'react-openfin/reduxs`
        
        configRemoveOneField({tabName:string, fieldName:string})
        
    ###### Request payload schema - IConfigSelectOneFieldOption
    
    | Field | Type | Description |
    | --- | --- | --- |
    | tabName | `string` | The tab name to of the config field to delete |
    | fieldName | `string` | The field name to of the config field to delete |
    | value | optional `any` | Customized empty value |
    
    ###### Description
    
        Remove a config value via tabName and fieldName. If value is undefined, the value will be delete from configuration 
        service. Or the value upon the configure service will be set to the value.

[react-openfin]:https://www.npmjs.com/package/react-openfin