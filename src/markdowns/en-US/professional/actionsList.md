Request and Response actions provided by [react-openfin]
----------------

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
    
        `import { APPLICATION_CHILD_AWAIT } from 'react-openfin/reduxs`
    
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
    
        Start the booting process of Main Window Application. Once booted APPLICATION_AWAIT will be responed.

- #####`APPLICATION_STARTED`

- #####`APPLICATION_CHILD_START`
- #####`APPLICATION_CHILD_AWAIT`
- #####`APPLICATION_CHILD_READY`
- #####`APPLICATION_CHILD_STARTED`
- #####`APPLICATION_NOTIFICATION_START`
- #####`APPLICATION_NOTIFICATION_AWAIT`
- #####`APPLICATION_NOTIFICATION_READY`
- #####`APPLICATION_NOTIFICATION_STARTED`
- #####`APPLICATION_DRAWER_TOGGLE`
- #####`APPLICATION_TOGGLE_WINDOW_STATE`
- #####`APPLICATION_CUR_WIN_CLOSING`
- #####`APPLICATION_CUR_WIN_READY_TO_CLOSE`
- #####`APPLICATION_NEW_SNACKBAR`
- #####`APPLICATION_LAUNCH_BAR_TOGGLE`
- #####`APPLICATION_LAUNCH_BAR_TOGGLED`
- #####`APPLICATION_LAUNCH_BAR_TOGGLE_COLLAPSE`
- #####`APPLICATION_LAUNCH_NEW_WINDOW`
- #####`APPLICATION_LAUNCH_BAR_CLOSE`
- #####`CONFIG_UPDATE_GLOBAL_FILTER_STR`
- #####`CONFIG_UPDATE_ONE_FIELD`
- #####`CONFIG_SELECT_ONE_FIELD`
- #####`CONFIG_SELECT_ONE_FIELD_RES`
- #####`CONFIG_REMOVE_ONE_FIELD`


[react-openfin]:https://www.npmjs.com/package/react-openfin