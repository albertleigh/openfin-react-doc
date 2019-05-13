Start and close window
----------------------

### Start procedure

The start procedure is the similar among Main Window, Child Window and Notification.


 1. Client trigger `START` via redux action or context api.
 2. [react-openfin] responses `AWAIT` action
 3. Client response `READY` via redux action or context api within the timeout limit. * 
 4. [react-openfin] responses `STARTED` action after time limit expired or `READY` action resolved
 
 _* Step 3 are optional_ 
 
 
Thus, for Main Window, Child Window and Notification, the corresponding actions will be

#### Main Window 

1. `APPLICATION_START` or `onApplicationStart`  
2. `APPLICATION_AWAIT`
3. `APPLICATION_READY` or `onApplicationReady`
4. `APPLICATION_STARTED`

#### Child Window 

1. `APPLICATION_CHILD_START` or `onChildWinStart`
2. `APPLICATION_CHILD_AWAIT`
3. `APPLICATION_CHILD_READY` or `onChildWinReady`
4. `APPLICATION_CHILD_STARTED`

#### Notification Window 

1. `APPLICATION_NOTIFICATION_START` or `onNotificationStart`
2. `APPLICATION_NOTIFICATION_AWAIT`
3. `APPLICATION_NOTIFICATION_READY` or `onNotificationReady`
4. `APPLICATION_NOTIFICATION_STARTED`
 
 
 
### Closing window procedure

The closing procedures for each kind of windows are the same.

1. [react-openfin] dispatch `APPLICATION_CUR_WIN_CLOSING` action, informing client current window is about to close.
2. Client could use window.name which equals current window's uuid to find out which window is closing and if needed 
response  `APPLICATION_CUR_WIN_READY_TO_CLOSE` to interrupt closing procedure within timeout limit.


### Timeout limits - await delay time

After talking so much about timeout limits, client must wonder what exact the timeout lasts and how to configure them.

When we init [react-openfin], there is a config field. 


[src/index.tsx](https://github.com/openfin-js-app/openfin-react-starter/blob/master/src/index.tsx)
```typescript
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';

InitializeReactOpenfin({
    fin:window.fin,
    // !!!README!!!
    // uncomment to shut the browser adaptor up
    // finMockupForceSilentMode: true,
    finUuid: process.env.REACT_APP_FIN_UUID,
    sharedActions,
    i18n,
    hist,
    configTabs,
    launchBarItems,
    config:{
        // !!!README!!!
        // // protection fuse timeout specified over here
        // // onAppAwaitDelayTime is the fuse timout time to switch from loading view
        // onAppAwaitDelayTime: 4000,
        //
        // // onAppChildAwaitDelayTime is the fuse timout time to switch to target child url
        // onAppChildAwaitDelayTime: 200,
        //
        // // onAppNotificationAwaitDelayTime is the fuse timout time to switch to target notification url
        // onAppNotificationAwaitDelayTime: 200,
        //
        // // onAppClosingAwaitDelayTime is the fuse timout time to shutdown the whole application
        // onAppClosingAwaitDelayTime: 200,
    }
});
```
`onAppAwaitDelayTime`, `onAppChildAwaitDelayTime` and `onAppNotificationAwaitDelayTime` are the timeout limit time for 
Main window, Child Window, and Notification Window. And their default values are 4000, 200, 200, 200 in ms

And `onAppClosingAwaitDelayTime` is the delay time for closing procedure and its default value is 200 ms. 

 
 [react-openfin]:https://www.npmjs.com/package/react-openfin 