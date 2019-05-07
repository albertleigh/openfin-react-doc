生成模板
----------------------------

### Layout, View 与 Component 的区别

> 3种模板都是react component. 一般认为, lyt 和 view 会连接 redux. 但是 lyt 可以当作入口组件， view 是嵌入lyt的复用组件. view 组件应利用全部外部空间. Comps 是不连接redux的复用组件.

生成工具支持3种模板: Component, View and Layout

| Type | 是否连接Redux | 是否为入口组件 | 是否为复用组件 |
| --- | --- | --- | --- | 
| Component 组件模板 (comp) | 否 | 否 | 是 |
| View 组件模板 (view) | 是 | 否 | 是 |
| Layout 组件模板 (lyt) | 是 | 是 | 否 |

### 生成 Comp 模板
进入到工作路径，例如 /home/User/Workspaces/sample-app

然后输入

`openfin-js react-comp NewOne`

工具会确认comp名称 其様例名称及其路径。建议初次使用默认值，可一路按回车选用。

```vim
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

为了更好理解生成的模板结构，我们来建立另一个Comp模板 NewTwo 来作比较。

`openfin-js react-comp NewTwo`

一旦完成, al-cli 会按以下结构生成模板。

```vim
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

生成的 NewOne NewTwo 的样式文件如下

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
样式文件会通过索引文件index.ts输出。

*src/assets/jss/sample-app/index.ts*
```typescript
// BEGIN_OF_AL_CLI_COMP
export {default as newOneCompStyle } from './comp/newOneComp.style'
export {default as newTwoCompStyle } from './comp/newTwoComp.style'
// END_OF_AL_CLI_COMP
```

在生成的模板中，通过索引文件来引入隔离的样式文件。

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

类似的，生成的模板也通过一索引文件index.ts输出。

*src/components/index.ts*
```typescript
// BEGIN_OF_AL_CLI_COMPONENTS
export {default as NewOne } from './sample-app/NewOne/NewOne'
export {default as NewTwo } from './sample-app/NewTwo/NewTwo'
// END_OF_AL_CLI_COMPONENTS
```
> 所有的样式组件文件都被置于工程同名文件夹下(sample-app)。这样的好处是，不同工程的组件样式可以通过复制粘贴到另一个工程名路径来复用。 相比于直接更改组件来使其满足需求并发布到容器，这样更快捷。同时也方便因地制宜的快速更改。

### 生成 View 模板

类似地，基于之前的步骤，我们来建立两个新的view组件。

`openfin-js react-view NewOne` 

`openfin-js react-view NewTwo`

一旦完成，al-cli会以如下结构来生成文件。

```vim
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
类似地，我们也会注入隔离的样式对象进入两个view 组件。

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
而其样式文件亦会通过索引文件index.ts输出。

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

然后注入两个view 组件。

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

### 生成 layout 模板

类似地，亦基于之前的步骤，我们来建立两个新的lyt组件。

`openfin-js react-lyt NewOne` 

`openfin-js react-lyt NewTwo`

不出意外，一旦完成，al-cli会生成如下结构的文件。

```vim
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

Lyt组件和他们隔离的样式。

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
