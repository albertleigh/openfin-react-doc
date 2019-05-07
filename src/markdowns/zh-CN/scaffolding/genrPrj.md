生成様例工程
----------------
*基于 create-react-app的Typescript様例工程*

进入工程路径 例如 /home/User/Workspaces

生成工程代码并安装依赖库

`openfin-js react-app sample-react-ts-app`

生成工程代码但跳过安装依赖库

`openfin-js react-app sample-react-ts-app -v --skipInstall`

一旦完成，会生成如下结构工程

```text
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

`yarn start-openfin` 或者 `npm run start-openfin`