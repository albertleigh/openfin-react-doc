import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingGenrPrjViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>{


}

const newSampleReactTsPrjStructure=
`
sample-react-ts-app/
├── config
│   ├── env.js
│   ├── jest
│   │   ├── babelTransform.js
│   │   ├── cssTransform.js
│   │   ├── fileTransform.js
│   │   └── setupTests.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── custom.d.ts
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── App.css
│   ├── App.spec.tsx
│   ├── App.tsx
│   ├── assets
│   │   └── css
│   │       └── animate.css
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── redux
│   │   ├── application
│   │   │   ├── actions.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── sagas
│   │   │   ├── application.ts
│   │   │   └── index.ts
│   │   └── __tests__
│   │       ├── application.actions.ts
│   │       ├── application.reducer.ts
│   │       ├── application.saga.ts
│   │       ├── index.saga.ts
│   │       └── __snapshots__
│   │           ├── application.actions.ts.snap
│   │           └── application.reducer.ts.snap
│   ├── serviceWorker.d.ts
│   ├── serviceWorker.js
│   ├── __snapshots__
│   │   └── App.spec.tsx.snap
│   └── utils
│       ├── configureStore.ts
│       └── __tests__
│           └── configureStore.spec.ts
├── tsconfig.json
└── tslint.json

15 directories, 45 files
`;

import { IRootState } from '../../reduxs';

class ScaffoldingGenrPrjView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

        return (
            <React.Fragment>

                <Typography variant='h5' gutterBottom>
                    Typescript template project based on create-react-app
                </Typography>

                <Typography variant='body1' gutterBottom>
                    To generate the sample project, change directory into your Workspace folder like /home/User/Workspaces
                </Typography>

                <Typography variant='caption' gutterBottom>
                    Generate project with node_modules
                </Typography>
                <Code withMargin text="al-cli react-ts sample-react-ts-app"/>

                <Typography variant='caption' gutterBottom>
                    Gnerate but skipt to install  node_modules
                </Typography>
                <Code withMargin text="al-cli react-ts sample-react-ts-app -v --skipInstall"/>

                <Typography variant='body1' gutterBottom>
                    Once done, one sample typesript template project will be created like this:
                </Typography>

                <Code language='bash' withMargin text={newSampleReactTsPrjStructure}/>

                <Typography variant='body1' gutterBottom>
                    Redirect to the project folder and, make no mistake, you could start the sample project.
                </Typography>

                <Code withMargin text="cd sample-react-ts-app"/>

                <Code withMargin text="yarn start"/>
                <Typography variant='body1' gutterBottom>
                    or
                </Typography>
                <Code withMargin text="npm run start"/>





                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    Openfin react TS template project
                </Typography>

            </React.Fragment>
        )
    }
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

    )(
    withStyles(style)(ScaffoldingGenrPrjView)
);

