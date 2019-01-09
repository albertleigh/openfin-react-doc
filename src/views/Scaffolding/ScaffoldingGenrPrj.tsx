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

const newSampleOpenfinReactTsPrjStructure =
`
sample-openfin-react-ts-app/
├── CHANGELOG.md
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
├── LICENSE.md
├── openfin
│   ├── app.development.json
│   └── app.production.json
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── img
│   │   └── sidebar-1.jpg
│   ├── index.html
│   ├── manifest.json
│   ├── mstile-144x144.png
│   ├── mstile-150x150.png
│   ├── mstile-310x150.png
│   ├── mstile-310x310.png
│   ├── mstile-70x70.png
│   └── safari-pinned-tab.svg
├── README.md
├── scripts
│   ├── build.js
│   ├── server.js
│   ├── server.openfin.js
│   ├── start.js
│   ├── start.openfin.js
│   └── test.js
├── src
│   ├── App.spec.tsx
│   ├── App.tsx
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── jss
│   │   │   ├── openfin-starter
│   │   │   │   ├── comp
│   │   │   │   │   ├── buttonStyle.ts
│   │   │   │   │   ├── configFieldCompStyle.ts
│   │   │   │   │   ├── headerCompStyle.ts
│   │   │   │   │   ├── headerLinksCompStyle.ts
│   │   │   │   │   ├── sidebarCompStyle.ts
│   │   │   │   │   └── snackbarContentCompStyle.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── layout
│   │   │   │   │   ├── dashboardLayoutStyle.ts
│   │   │   │   │   └── launchBarLayoutStyle.ts
│   │   │   │   └── view
│   │   │   │       ├── configViewStyle.ts
│   │   │   │       └── reportViewStyle.ts
│   │   │   └── openfin-starter-constant.ts
│   │   └── svg
│   │       ├── app.svg
│   │       ├── company.svg
│   │       ├── other
│   │       │   ├── google-search.svg
│   │       │   ├── list-checked-dark.svg
│   │       │   ├── number-1.svg
│   │       │   └── number-2.svg
│   │       └── support
│   │           ├── controls_dark.svg
│   │           └── controls.svg
│   ├── components
│   │   ├── client
│   │   │   └── ClientCounter.tsx
│   │   ├── ConfigComp
│   │   │   ├── ConfigField.spec.tsx
│   │   │   ├── ConfigField.tsx
│   │   │   └── __snapshots__
│   │   │       └── ConfigField.spec.tsx.snap
│   │   ├── Header
│   │   │   ├── HeaderLinks.spec.tsx
│   │   │   ├── HeaderLinks.tsx
│   │   │   ├── Header.spec.tsx
│   │   │   ├── Header.tsx
│   │   │   └── __snapshots__
│   │   │       ├── HeaderLinks.spec.tsx.snap
│   │   │       └── Header.spec.tsx.snap
│   │   ├── index.ts
│   │   ├── Sidebar
│   │   │   ├── Sidebar.spec.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── __snapshots__
│   │   │       └── Sidebar.spec.tsx.snap
│   │   └── Snackbar
│   │       ├── MySnackbarContent.spec.tsx
│   │       ├── MySnackbarContent.tsx
│   │       └── __snapshots__
│   │           └── MySnackbarContent.spec.tsx.snap
│   ├── dexie
│   │   ├── configDao.spec.ts
│   │   ├── configDao.spec.ts.snap
│   │   ├── configDao.ts
│   │   ├── db.spec.ts
│   │   ├── db.ts
│   │   └── __mocks__
│   │       └── db.ts
│   ├── index.tsx
│   ├── layouts
│   │   ├── ChildWindow
│   │   │   ├── ChildWindow.spec.tsx
│   │   │   ├── ChildWindow.tsx
│   │   │   └── __snapshots__
│   │   │       └── ChildWindow.spec.tsx.snap
│   │   ├── Dashboard
│   │   │   ├── Dashboard.spec.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── __snapshots__
│   │   │       └── Dashboard.spec.tsx.snap
│   │   ├── LaunchBar
│   │   │   ├── LaunchBarData.tsx
│   │   │   ├── LaunchBar.spec.tsx
│   │   │   ├── LaunchBar.tsx
│   │   │   └── __snapshots__
│   │   │       └── LaunchBar.spec.tsx.snap
│   │   └── Loading
│   │       ├── Loading.spec.tsx
│   │       └── Loading.tsx
│   ├── reduxs
│   │   ├── application
│   │   │   ├── actions.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   ├── client
│   │   │   ├── actions.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   ├── config
│   │   │   ├── actions.ts
│   │   │   ├── constant.tsx
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── sagas
│   │   │   ├── application.ts
│   │   │   ├── client.ts
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── __tests__
│   │       ├── application.actions.ts
│   │       ├── application.reducer.ts
│   │       ├── application.saga.ts
│   │       ├── client.saga.ts
│   │       ├── config.actions.ts
│   │       ├── config.reducer.ts
│   │       ├── config.saga.ts
│   │       ├── index.saga.ts
│   │       └── __snapshots__
│   │           ├── application.actions.ts.snap
│   │           ├── application.reducer.ts.snap
│   │           ├── config.actions.ts.snap
│   │           └── config.reducer.ts.snap
│   ├── routes
│   │   ├── Base.ts
│   │   ├── ChildWindow.ts
│   │   ├── Dashboard.ts
│   │   └── index.ts
│   ├── serviceWorker.d.ts
│   ├── serviceWorker.js
│   ├── utils
│   │   ├── configureStore.ts
│   │   ├── history.ts
│   │   ├── noop.ts
│   │   ├── setPlatformClass.ts
│   │   └── __tests__
│   │       ├── configureStore.spec.ts
│   │       ├── noop.spec.ts
│   │       └── setPlatformClass.spec.ts
│   └── views
│       ├── Accessibility
│       │   ├── Accessibility.spec.tsx
│       │   └── Accessibility.tsx
│       ├── ConfigView
│       │   ├── ConfigJson.spec.tsx
│       │   ├── ConfigJson.tsx
│       │   ├── ConfigView.spec.tsx
│       │   └── ConfigView.tsx
│       ├── ReportView
│       │   ├── ReportView.spec.tsx
│       │   └── ReportView.tsx
│       ├── ViewOne
│       │   ├── __snapshots__
│       │   │   └── ViewOne.spec.tsx.snap
│       │   ├── ViewOne.spec.tsx
│       │   └── ViewOne.tsx
│       └── ViewTwo
│           ├── __snapshots__
│           │   └── ViewTwo.spec.tsx.snap
│           ├── ViewTwo.spec.tsx
│           └── ViewTwo.tsx
├── tsconfig.json
└── tslint.json

55 directories, 153 files
`;

import { IRootState } from '../../reduxs';

class ScaffoldingGenrPrjView extends React.Component<IProps,{}>{
    render(){

        const { classes } = this.props;

        return (
            <React.Fragment>

                <Typography variant='h3' gutterBottom>
                    Generate projects
                </Typography>

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
                    Gnerate but skip to install  node_modules
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

                <Typography variant='body1' gutterBottom>
                    To generate the openfin sample project, change directory into your Workspace folder like /home/User/Workspaces
                </Typography>

                <Typography variant='caption' gutterBottom>
                    Generate project with node_modules
                </Typography>
                <Code withMargin text="al-cli openfin-react-ts sample-openfin-react-ts-app"/>

                <Typography variant='caption' gutterBottom>
                    Gnerate but skip to install  node_modules
                </Typography>
                <Code withMargin text="al-cli openfin-react-ts sample-openfin-react-ts-app -v --skipInstall"/>

                <Code language='bash' withMargin text={newSampleOpenfinReactTsPrjStructure}/>

                <Typography variant='body1' gutterBottom>
                    Redirect to the project folder and, make no mistake, you could start the sample project.
                </Typography>

                <Code withMargin text="cd sample-openfin-react-ts-app"/>

                <Code withMargin text="yarn start-openfin"/>
                <Typography variant='body1' gutterBottom>
                    or
                </Typography>
                <Code withMargin text="npm run start-openfin"/>

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

