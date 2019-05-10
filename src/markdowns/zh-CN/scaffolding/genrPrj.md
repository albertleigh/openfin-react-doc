生成様例工程
----------------
**基于 create-react-app的Typescript様例工程**

- 様例 `react-app`
- 様例 `react-app-pro`

To generate the sample project, 进入工程路径 例如 `/home/User/Workspaces`


### Template `react-app`

生成工程代码并安装依赖库

`openfin-js react-app sample-react-ts-app`

生成工程代码但跳过安装依赖库

`openfin-js react-app sample-react-ts-app -v --skipInstall`

一旦完成，会生成如下结构工程:

> The generated template will contain some sample codes for demo purpose and the project structure will be exact the same
> as [openfin-react-concise](https://github.com/openfin-js-app/openfin-react-concise)

```vim
SampleReactTsApp/
├── CHANGELOG.md
├── LICENSE.md
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── img
│   │   ├── sidebar-1.jpg
│   │   └── switcher.png
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
├── src
│   ├── App.spec.tsx
│   ├── App.tsx
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── jss
│   │   │   └── sample-name
│   │   │       ├── comp
│   │   │       │   └── clientPrefixComp.style.ts
│   │   │       ├── index.ts
│   │   │       └── view
│   │   │           └── sampleNotificationView.style.ts
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
│   │       │   └── list-checked-dark.svg
│   │       └── support
│   │           ├── controls_dark.svg
│   │           ├── controls.svg
│   │           ├── information-dark.svg
│   │           └── information.svg
│   ├── components
│   │   ├── index.ts
│   │   └── sample-name
│   │       ├── ClientPrefix.spec.tsx
│   │       └── ClientPrefix.tsx
│   ├── constants
│   │   ├── configTabs.tsx
│   │   ├── constant.spec.tsx
│   │   ├── launchBarItems.tsx
│   │   └── __snapshots__
│   │       └── constant.spec.tsx.snap
│   ├── i18n.ts
│   ├── index.tsx
│   ├── __mocks__
│   │   └── i18n.ts
│   ├── react-openfin-app-env.d.ts
│   ├── routes
│   │   ├── ChildWindow.ts
│   │   ├── Dashboard.ts
│   │   ├── index.tsx
│   │   ├── notification.ts
│   │   └── __tests__
│   │       ├── ChildWindow.ts
│   │       ├── Dashboard.ts
│   │       ├── index.tsx
│   │       ├── notification.ts
│   │       └── __snapshots__
│   │           ├── ChildWindow.ts.snap
│   │           ├── Dashboard.ts.snap
│   │           ├── index.tsx.snap
│   │           └── notification.ts.snap
│   ├── serviceWorker.d.ts
│   ├── serviceWorker.js
│   ├── utils
│   │   ├── history.ts
│   │   ├── noop.ts
│   │   ├── setPlatformClass.ts
│   │   └── __tests__
│   │       ├── noop.spec.ts
│   │       └── setPlatformClass.spec.ts
│   └── views
│       ├── Accessibility
│       │   ├── Accessibility.spec.tsx
│       │   └── Accessibility.tsx
│       └── NotificationViews
│           ├── SampleNotification.spec.tsx
│           ├── SampleNotification.tsx
│           └── __snapshots__
│               └── SampleNotification.spec.tsx.snap
├── tsconfig.json
└── tslint.json

30 directories, 82 files
```

进入项目路径，不出意外，可以如下启动。

`cd SampleReactTsApp`

execute `yarn start-openfin` 或者 `npm run start-openfin` to start the generated project.

execute `yarn build` 或者 `npm run build` to build the generated project.

execute `yarn serve` 或者 `npm run serve` to build the generated project.

### Template `react-app-pro`

Generate project with node_modules

`openfin-js react-app-pro sample-react-ts-app`

Generate but skip installing node_modules

`openfin-js react-app-pro sample-react-ts-app -v --skipInstall`

Once done, one sample typescript template project will be created like:

> The generated template will contain some sample codes for demo purpose and the project structure will be exact the same
> as [openfin-react-starter](https://github.com/openfin-js-app/openfin-react-starter) The major difference between 
> concise version and pro version is redux. Pro version utilize redux to bear more advanced features. And those features 
> will be covered in the next section. 

```vim
SampleReactTsApp/
├── CHANGELOG.md
├── Dockerfile
├── LICENSE.md
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── img
│   │   ├── sidebar-1.jpg
│   │   └── switcher.png
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
├── src
│   ├── App.spec.tsx
│   ├── App.tsx
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── jss
│   │   │   └── sample-name
│   │   │       ├── comp
│   │   │       │   └── clientPrefixComp.style.ts
│   │   │       ├── index.ts
│   │   │       └── view
│   │   │           └── sampleNotificationView.style.ts
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
│   │   └── sample-name
│   │       ├── ClientCounter.tsx
│   │       ├── ClientPrefix.spec.tsx
│   │       └── ClientPrefix.tsx
│   ├── constants
│   │   ├── configTabs.tsx
│   │   ├── constant.spec.tsx
│   │   ├── launchBarItems.tsx
│   │   └── __snapshots__
│   │       └── constant.spec.tsx.snap
│   ├── i18n.ts
│   ├── index.tsx
│   ├── __mocks__
│   │   └── i18n.ts
│   ├── providers
│   │   ├── ClientCtxProvider.tsx
│   │   └── index.tsx
│   ├── react-openfin-app-env.d.ts
│   ├── reduxs
│   │   ├── client
│   │   │   ├── actions.ts
│   │   │   ├── context.tsx
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── sagas
│   │   │   ├── client.ts
│   │   │   └── index.ts
│   │   ├── sharedActions.ts
│   │   └── __tests__
│   │       ├── client.actions.ts
│   │       ├── client.reducer.ts
│   │       ├── client.saga.ts
│   │       ├── index.saga.ts
│   │       ├── sharedActions.spec.ts
│   │       └── __snapshots__
│   │           ├── client.actions.ts.snap
│   │           ├── client.reducer.ts.snap
│   │           └── sharedActions.spec.ts.snap
│   ├── routes
│   │   ├── ChildWindow.ts
│   │   ├── Dashboard.ts
│   │   ├── index.tsx
│   │   ├── notification.ts
│   │   └── __tests__
│   │       ├── ChildWindow.ts
│   │       ├── Dashboard.ts
│   │       ├── index.tsx
│   │       ├── notification.ts
│   │       └── __snapshots__
│   │           ├── ChildWindow.ts.snap
│   │           ├── Dashboard.ts.snap
│   │           ├── index.tsx.snap
│   │           └── notification.ts.snap
│   ├── serviceWorker.d.ts
│   ├── serviceWorker.js
│   ├── __snapshots__
│   │   └── App.spec.tsx.snap
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
│       ├── NotificationViews
│       │   ├── SampleNotification.spec.tsx
│       │   ├── SampleNotification.tsx
│       │   └── __snapshots__
│       │       └── SampleNotification.spec.tsx.snap
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

41 directories, 113 files
```