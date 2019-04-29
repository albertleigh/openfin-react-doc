import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingGenrPrjViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

const useStyles = makeStyles(style);

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
├── .babelrc
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
├── Dockerfile
├── .dockerignore
├── .env
├── .env.development
├── .env.production
├── .env.test
├── .gitignore
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
│   ├── locales
│   │   ├── en-US
│   │   │   ├── config.json
│   │   │   ├── landing.json
│   │   │   └── menu.json
│   │   └── zh-CN
│   │       ├── config.json
│   │       ├── landing.json
│   │       └── menu.json
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
│   ├── package.js
│   ├── routers
│   │   └── config.js
│   ├── server.js
│   ├── server.openfin.js
│   ├── standalone.openfin.js
│   ├── start.js
│   ├── start.openfin.js
│   ├── test.js
│   └── utils
│       └── serverUtils.js
├── src
│   ├── App.spec.tsx
│   ├── App.tsx
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── jss
│   │   │   ├── openfin-starter
│   │   │   │   ├── comp
│   │   │   │   │   ├── button.style.ts
│   │   │   │   │   ├── configAboutField.style.ts
│   │   │   │   │   ├── configFieldComp.style.ts
│   │   │   │   │   ├── headerComp.style.ts
│   │   │   │   │   ├── headerLinksComp.style.ts
│   │   │   │   │   ├── offlineOverlay.style.ts
│   │   │   │   │   ├── sidebarComp.style.ts
│   │   │   │   │   └── snackbarContentComp.style.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── layout
│   │   │   │   │   ├── dashboardLayout.style.ts
│   │   │   │   │   ├── launchBarLayout.style.ts
│   │   │   │   │   └── notification.style.ts
│   │   │   │   └── view
│   │   │   │       ├── configLangView.style.ts
│   │   │   │       ├── configThemeView.style.ts
│   │   │   │       ├── configView.style.ts
│   │   │   │       ├── reportView.style.ts
│   │   │   │       └── sampleNotificationView.style.ts
│   │   │   └── openfin-starter-constant.ts
│   │   └── svg
│   │       ├── app.svg
│   │       ├── company.svg
│   │       ├── nationals
│   │       │   ├── china.svg
│   │       │   ├── russia.svg
│   │       │   ├── spain.svg
│   │       │   └── united-states.svg
│   │       ├── other
│   │       │   ├── check-box.svg
│   │       │   ├── google-search.svg
│   │       │   ├── list-checked-dark.svg
│   │       │   ├── number-1.svg
│   │       │   └── number-2.svg
│   │       └── support
│   │           ├── controls_dark.svg
│   │           ├── controls.svg
│   │           ├── information-dark.svg
│   │           └── information.svg
│   ├── components
│   │   ├── index.ts
│   │   └── openfin-starter
│   │       ├── client
│   │       │   └── ClientCounter.tsx
│   │       ├── ConfigComp
│   │       │   ├── ConfigAboutField.spec.tsx
│   │       │   ├── ConfigAboutField.tsx
│   │       │   ├── ConfigField.spec.tsx
│   │       │   ├── ConfigField.tsx
│   │       │   └── __snapshots__
│   │       │       ├── ConfigAboutField.spec.tsx.snap
│   │       │       └── ConfigField.spec.tsx.snap
│   │       ├── Header
│   │       │   ├── HeaderLinks.spec.tsx
│   │       │   ├── HeaderLinks.tsx
│   │       │   ├── Header.spec.tsx
│   │       │   ├── Header.tsx
│   │       │   └── __snapshots__
│   │       │       ├── HeaderLinks.spec.tsx.snap
│   │       │       └── Header.spec.tsx.snap
│   │       ├── Overlays
│   │       │   ├── OfflineOverlay.spec.tsx
│   │       │   ├── OfflineOverlay.tsx
│   │       │   └── __snapshots__
│   │       │       └── OfflineOverlay.spec.tsx.snap
│   │       ├── Sidebar
│   │       │   ├── Sidebar.spec.tsx
│   │       │   ├── Sidebar.tsx
│   │       │   └── __snapshots__
│   │       │       └── Sidebar.spec.tsx.snap
│   │       └── Snackbar
│   │           ├── MySnackbarContent.spec.tsx
│   │           ├── MySnackbarContent.tsx
│   │           └── __snapshots__
│   │               └── MySnackbarContent.spec.tsx.snap
│   ├── dexie
│   │   ├── configDao.spec.ts
│   │   ├── configDao.ts
│   │   ├── db.spec.ts
│   │   ├── db.ts
│   │   ├── __mocks__
│   │   │   └── db.ts
│   │   └── __snapshots__
│   │       └── configDao.spec.ts.snap
│   ├── i18n.ts
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
│   │   ├── Loading
│   │   │   ├── Loading.spec.tsx
│   │   │   └── Loading.tsx
│   │   └── Notification
│   │       ├── Notification.spec.tsx
│   │       ├── Notification.tsx
│   │       └── __snapshots__
│   │           └── Notification.spec.tsx.snap
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
│   │   ├── sharedActions.ts
│   │   └── __tests__
│   │       ├── application.actions.ts
│   │       ├── application.reducer.ts
│   │       ├── application.saga.ts
│   │       ├── client.reducer.ts
│   │       ├── client.saga.ts
│   │       ├── config.actions.ts
│   │       ├── config.reducer.ts
│   │       ├── config.saga.ts
│   │       ├── index.saga.ts
│   │       ├── sharedActions.spec.ts
│   │       └── __snapshots__
│   │           ├── application.actions.ts.snap
│   │           ├── application.reducer.ts.snap
│   │           ├── application.saga.ts.snap
│   │           ├── client.reducer.ts.snap
│   │           ├── config.actions.ts.snap
│   │           ├── config.reducer.ts.snap
│   │           └── sharedActions.spec.ts.snap
│   ├── routes
│   │   ├── Base.ts
│   │   ├── ChildWindow.ts
│   │   ├── Dashboard.ts
│   │   ├── index.ts
│   │   └── notification.ts
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
│       │   ├── ConfigLang.spec.tsx
│       │   ├── ConfigLang.tsx
│       │   ├── ConfigTheme.spec.tsx
│       │   ├── ConfigTheme.tsx
│       │   ├── ConfigView.spec.tsx
│       │   ├── ConfigView.tsx
│       │   └── __snapshots__
│       │       ├── ConfigLang.spec.tsx.snap
│       │       └── ConfigTheme.spec.tsx.snap
│       ├── NotificationViews
│       │   ├── SampleNotification.spec.tsx
│       │   ├── SampleNotification.tsx
│       │   └── __snapshots__
│       │       └── SampleNotification.spec.tsx.snap
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

71 directories, 210 files
`;

import { IRootState } from '../../reduxs';

const ScaffoldingGenrPrjView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();
    const { t, i18n } = useTranslation('scaffolding', { useSuspense: false });

    return (
        <React.Fragment>

            <Typography variant='h3' gutterBottom>
                {t('genrPrj.title')}
            </Typography>

            <Typography variant='h5' gutterBottom>
                {t('genrPrj.reactTs.title')}
            </Typography>

            <Typography variant='body1' gutterBottom>
                {t('genrPrj.reactTs.subtitle')}
            </Typography>

            <Typography variant='caption' gutterBottom>
                {t('genrPrj.reactTs.step1')}
            </Typography>
            <Code withMargin text="al-cli react-ts sample-react-ts-app"/>

            <Typography variant='caption' gutterBottom>
                {t('genrPrj.reactTs.step1B')}
            </Typography>
            <Code withMargin text="al-cli react-ts sample-react-ts-app -v --skipInstall"/>

            <Typography variant='body1' gutterBottom>
                {t('genrPrj.reactTs.step2')}
            </Typography>

            <Code language='bash' withMargin text={newSampleReactTsPrjStructure}/>

            <Typography variant='body1' gutterBottom>
                {t('genrPrj.reactTs.step3')}
            </Typography>

            <Code withMargin text="cd sample-react-ts-app"/>

            <Code withMargin text="yarn start"/>
            <Typography variant='body1' gutterBottom>
                {t('common.or')}
            </Typography>
            <Code withMargin text="npm run start"/>





            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                {t('genrPrj.openfinReactTs.title')}
            </Typography>

            <Typography variant='body1' gutterBottom>
                {t('genrPrj.openfinReactTs.subtitle')}
            </Typography>

            <Typography variant='caption' gutterBottom>
                {t('genrPrj.openfinReactTs.step1')}
            </Typography>
            <Code withMargin text="al-cli openfin-react-ts sample-openfin-react-ts-app"/>

            <Typography variant='caption' gutterBottom>
                {t('genrPrj.openfinReactTs.step1B')}
            </Typography>
            <Code withMargin text="al-cli openfin-react-ts sample-openfin-react-ts-app -v --skipInstall"/>

            <Code language='bash' withMargin text={newSampleOpenfinReactTsPrjStructure}/>

            <Typography variant='body1' gutterBottom>
                {t('genrPrj.openfinReactTs.step2')}
            </Typography>

            <Code withMargin text="cd sample-openfin-react-ts-app"/>

            <Code withMargin text="yarn start-openfin"/>
            <Typography variant='body1' gutterBottom>
                {t('common.or')}
            </Typography>
            <Code withMargin text="npm run start-openfin"/>

        </React.Fragment>
    )
}

export default ScaffoldingGenrPrjView;

