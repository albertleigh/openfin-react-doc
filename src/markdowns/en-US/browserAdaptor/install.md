BrowserAdaptor
--------------
> Browser adaptor is not needed by every one. 
> Therefore, this section is regarded a optional and advanced topic.
> Only refer this section if you needed   

*Openfin browser adaptor is just a bunch doing-nothing mock-up of openfin js apis.
                 Infact, the adaptor doesn't do much but just let the the code survive when openfin apis called
                 instead of throwing undefined handles errors.*

### Install
*Install into your package.json*

`npm i openfin-browser-adapter` or `yarn add openfin-browser-adapter`

### Initialize

Before initializing the redux, make sure to use BrowserAdaptor if fin handler is undefined.

```typescript
import { BrowserAdapter } from 'openfin-browser-adapter';

if(!window.fin){
    window.fin = new BrowserAdapter({
        finUuid:process.env.REACT_APP_FIN_UUID,
        silentMode:false,
    });
}
```

after that the app codes should be able to survive the browser runtime with mock-up openfin api handlers.