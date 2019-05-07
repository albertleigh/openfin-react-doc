Generate template components
----------------------------

### Diff between Layout, View and Component

> All three templates are react component. Generally speaking, both lyt and view connects to redux. But lyt can act as the entry comp and view is the reusable unit inside lyt. View comp's outermost container should be set to use up all the space. Comps are reusable non-redux-connected units among view or lyt.

The scaffolding tool support to generate three types of templates: Component, View and Layout

| Type | Connected to Redux | Entry components| Reusable components |
| --- | --- | --- | --- | 
| Component template (comp) | No | No | Yes |
| View template (view) | Yes | No | Yes |
| Layout template (lyt) | Yes | Yes | No |

### Generate component templates
Change directory into your project folder of your workspace, like /home/User/Workspaces/sample-app

then type in

`openfin-js react-comp NewOne`

The client should pop up to confirm all the component name, style name and their paths. Suggest not to change for now if not sure, we could press enter all the way down to use default values for the first time.

```text
   ___                    __ _             _ ____  
  / _ \ _ __   ___ _ __  / _(_)_ __       | / ___| 
 | | | | '_ \ / _ \ '_ \| |_| | '_ \   _  | \___ \ 
 | |_| | |_) |  __/ | | |  _| | | | | | |_| |___) |
  \___/| .__/ \___|_| |_|_| |_|_| |_|  \___/|____/ 
       |_|                                         
  v0.50.60
prompt: new component name?:  (NewOne) 
prompt: new jss style name?:  (newOne) 
prompt: current working space name?:  (sample-app) 
prompt: comp jss directory?:  (./src/assets/jss/sample-app/comp) 
prompt: app jss index file?:  (./src/assets/jss/sample-app/index.ts) 
prompt: new component directory?:  (./src/components/sample-app/NewOne) 
prompt: component index file?:  (./src/components/index.ts)
```

To fully understand the structure of the generated components template, let's create an another component called NewTwo to compare.

`openfin-js react-comp NewTwo`

Once done, al-cli will create all the files in a structure like this.

```text
src/
├── assets
│   └── jss
│       └── sample-app
│           ├── comp
│           │   ├── newOneComp.style.ts
│           │   └── newTwoComp.style.ts
│           └── index.ts
└── components
    ├── index.ts
    └── sample-app
        ├── NewOne
        │   └── NewOne.tsx
        └── NewTwo
            └── NewTwo.tsx

```

styles of NewOne and NewTwo comps are like
*src/assets/jss/sample-app/comp/newOneComp.style.ts*
```typescript
import { Theme, createStyles } from '@material-ui/core/styles';

const newOneCompStyle = (theme:Theme)=> createStyles({

});

export default newOneCompStyle;
```
*src/assets/jss/sample-app/comp/newTwoComp.style.ts*
```typescript
import { Theme, createStyles } from '@material-ui/core/styles';

const newTwoCompStyle = (theme:Theme)=> createStyles({

});

export default newTwoCompStyle;
```
and the two styles are exported via a router index.ts

*src/assets/jss/sample-app/index.ts*
```typescript
// BEGIN_OF_AL_CLI_COMP
export {default as newOneCompStyle } from './comp/newOneComp.style'
export {default as newTwoCompStyle } from './comp/newTwoComp.style'
// END_OF_AL_CLI_COMP
```

And among the generated components, the isolated style are import via the router index

*src/components/sample-app/NewOne/NewOne.tsx*
```typescript jsx
import * as React from 'react';
import cx from 'classnames';
import {makeStyles} from "@material-ui/styles";

import { newOneCompStyle as style } from '../../../assets/jss/sample-app';


interface IProps {
    [key:number]:any,
    [key:string]:any,
}

const useStyles = makeStyles(style);

const NewOneComp:React.FunctionComponent<IProps> = (
        {}
)=>{

    const classes = useStyles();

    return(
        <React.Fragment>
            NewOne component works ~
        </React.Fragment>
    )
}

export default NewOneComp;
```
*src/components/sample-app/NewTwo/NewTwo.tsx*
```typescript jsx
import * as React from 'react';
import cx from 'classnames';
import {makeStyles} from "@material-ui/styles";

import { newTwoCompStyle as style } from '../../../assets/jss/sample-app';


interface IProps {
    [key:number]:any,
    [key:string]:any,
}

const useStyles = makeStyles(style);

const NewTwoComp:React.FunctionComponent<IProps> = (
        {}
)=>{

    const classes = useStyles();

    return(
        <React.Fragment>
            NewTwo component works ~
        </React.Fragment>
    )
}

export default NewTwoComp;
```

Similarly, the generated components are also exported via a comp router index

*src/components/index.ts*
```typescript
// BEGIN_OF_AL_CLI_COMPONENTS
export {default as NewOne } from './sample-app/NewOne/NewOne'
export {default as NewTwo } from './sample-app/NewTwo/NewTwo'
// END_OF_AL_CLI_COMPONENTS
```
> You might notice, we suggest put styles and comps under the folder of the project name (sample-app), it is b/c, sometimes, it's much more easy to directly copy&paste some internal comps or styles into another folder of another project name for sharing instead of making them general enough to be capable to be shared. As it might be difficult to ask the author to export via pkg manager and maintain stable versions, or sometimes, even they exported, the requirements on our sides might force us have to modify little bit to support new specific features rather than directly using them.

### Generate view templates

Similarly, let's create two new view components based on the previous results.

`openfin-js react-view NewOne` 

`openfin-js react-view NewTwo`

Once done, [openfin-js-cli] will create the files like these

```text
src/
├── assets
│   └── jss
│       └── sample-app
│           ├── comp
│           │   ├── newOneComp.style.ts
│           │   └── newTwoComp.style.ts
│           ├── index.ts                    // modified
│           └── view
│               ├── newOneView.style.ts     // added
│               └── newTwoView.style.ts     // added
├── components
│   ├── index.ts
│   └── sample-app
│       ├── NewOne
│       │   └── NewOne.tsx
│       └── NewTwo
│           └── NewTwo.tsx
└── views
    ├── NewOne
    │   └── NewOne.tsx                      // added
    └── NewTwo
        └── NewTwo.tsx                      // added
```
Similar we have the isolated style objects for two views

*src/assets/jss/sample-app/view/newOneView.style.ts*
```typescript
import { Theme, createStyles } from '@material-ui/core/styles';

const newOneViewStyle = (theme:Theme)=> createStyles({

});

export default newOneViewStyle;
```
*src/assets/jss/sample-app/view/newTwoView.style.ts*
```typescript
import { Theme, createStyles } from '@material-ui/core/styles';

const newTwoViewStyle = (theme:Theme)=> createStyles({

});

export default newTwoViewStyle;
```
and the two styles are also exported via a router index.ts

*src/assets/jss/sample-app/index.ts*
```typescript
// BEGIN_OF_AL_CLI_COMP
export {default as newOneCompStyle } from './comp/newOneComp.style'
export {default as newTwoCompStyle } from './comp/newTwoComp.style'
// END_OF_AL_CLI_COMP
// BEGIN_OF_AL_CLI_VIEW
export {default as newOneViewStyle } from './view/newOneView.style'
export {default as newTwoViewStyle } from './view/newTwoView.style'
// END_OF_AL_CLI_VIEW
```

then the styles will be injected into two views created.

*src/views/NewOne/NewOne.tsx*
```typescript jsx
import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import { connect } from 'react-redux';

import { newOneViewStyle as style } from '../../assets/jss/sample-app';

import { IRootState } from '../../reduxs';

interface IProps {
    actions:{
    }
}

const useStyles = makeStyles(style);

const NewOneView:React.FunctionComponent<IProps> = (
    {}
) => {

    const classes = useStyles();

    return(
        <React.Fragment>
            NewOne view works ~
        </React.Fragment>
    );
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

)(
    NewOneView
);
```
*src/views/NewTwo/NewTwo.tsx*
```typescript jsx
import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";
import { connect } from 'react-redux';

import { newTwoViewStyle as style } from '../../assets/jss/sample-app';

import { IRootState } from '../../reduxs';

interface IProps {
    actions:{
    }
}

const useStyles = makeStyles(style);

const NewTwoView:React.FunctionComponent<IProps> = (
    {}
) => {

    const classes = useStyles();

    return(
        <React.Fragment>
            NewTwo view works ~
        </React.Fragment>
    );
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

)(
    NewTwoView
);
```

### Generate layout templates

Similarly, we could also create two new lyt components based on the previous results.

`openfin-js react-lyt NewOne` 

`openfin-js react-lyt NewTwo`

Make no mistake, once done, al-cli will create all the files in a structure like these.

```text
src/
├── assets
│   └── jss
│       └── sample-app
│           ├── comp
│           │   ├── newOneComp.style.ts
│           │   └── newTwoComp.style.ts
│           ├── index.ts                    // modified
│           ├── layout
│           │   ├── newOne.style.ts         // added
│           │   └── newTwo.style.ts         // added
│           └── view
│               ├── newOneView.style.ts
│               └── newTwoView.style.ts
├── components
│   ├── index.ts
│   └── sample-app
│       ├── NewOne
│       │   └── NewOne.tsx
│       └── NewTwo
│           └── NewTwo.tsx
├── layouts
│   ├── NewOne
│   │   └── NewOne.tsx                      // added
│   └── NewTwo
│       └── NewTwo.tsx                      // added
└── views
    ├── NewOne
    │   └── NewOne.tsx
    └── NewTwo
        └── NewTwo.tsx
```

Lyt components and their isolated styles

*src/assets/jss/sample-app/layout/newTwo.style.ts*
```typescript
import { Theme, createStyles } from '@material-ui/core/styles';

const newOneStyle = (theme:Theme)=> createStyles({

});

export default newOneStyle;
```
*src/assets/jss/sample-app/layout/newTwo.style.ts*
```typescript
import { Theme, createStyles } from '@material-ui/core/styles';

const newTwoStyle = (theme:Theme)=> createStyles({

});

export default newTwoStyle;
```
*src/assets/jss/sample-app/index.ts*
```typescript
// BEGIN_OF_AL_CLI_COMP
export {default as newOneCompStyle } from './comp/newOneComp.style'
export {default as newTwoCompStyle } from './comp/newTwoComp.style'
// END_OF_AL_CLI_COMP
// BEGIN_OF_AL_CLI_VIEW
export {default as newOneViewStyle } from './view/newOneView.style'
export {default as newTwoViewStyle } from './view/newTwoView.style'
// END_OF_AL_CLI_VIEW
// BEGIN_OF_AL_CLI_LYT
export {default as newOneStyle } from './layout/newOne.style'
export {default as newTwoStyle } from './layout/newTwo.style'
// END_OF_AL_CLI_LYT
```
*src/layouts/NewOne/NewOne.tsx*
```typescript jsx
import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";

import { newOneStyle as style } from '../../assets/jss/sample-app';

const useStyles = makeStyles(style);

const NewOneLayout:React.FunctionComponent<{}> = (
    {}
) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            NewOne layout works ~
        </React.Fragment>
    )
}

export default NewOneLayout;
```
*src/layouts/NewTwo/NewTwo.tsx*
```typescript jsx
import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import cx from "classnames";

import { newTwoStyle as style } from '../../assets/jss/sample-app';

const useStyles = makeStyles(style);

const NewTwoLayout:React.FunctionComponent<{}> = (
    {}
) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            NewTwo layout works ~
        </React.Fragment>
    )
}

export default NewTwoLayout;
```

[openfin-js-cli]: https://www.npmjs.com/package/openfin-js-cli
