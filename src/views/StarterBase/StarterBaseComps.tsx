import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { Code } from '../../components';

import { starterBaseCompsViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

const componentsStruct =
`src/views
├── Accessibility
│   ├── Accessibility.spec.tsx
│   └── Accessibility.tsx
├── ConfigView
│   ├── ConfigJson.spec.tsx
│   ├── ConfigJson.tsx
│   ├── ConfigLang.spec.tsx
│   ├── ConfigLang.tsx
│   ├── ConfigTheme.spec.tsx
│   ├── ConfigTheme.tsx
│   ├── ConfigView.spec.tsx
│   ├── ConfigView.tsx
│   └── __snapshots__
│       ├── ConfigLang.spec.tsx.snap
│       └── ConfigTheme.spec.tsx.snap
├── NotificationViews
│   ├── SampleNotification.spec.tsx
│   ├── SampleNotification.tsx
│   └── __snapshots__
│       └── SampleNotification.spec.tsx.snap
├── ReportView
│   ├── ReportView.spec.tsx
│   └── ReportView.tsx
├── ViewOne
│   ├── __snapshots__
│   │   └── ViewOne.spec.tsx.snap
│   ├── ViewOne.spec.tsx
│   └── ViewOne.tsx
└── ViewTwo
    ├── __snapshots__
    │   └── ViewTwo.spec.tsx.snap
    ├── ViewTwo.spec.tsx
    └── ViewTwo.tsx
src/layouts
├── ChildWindow
│   ├── ChildWindow.spec.tsx
│   ├── ChildWindow.tsx
│   └── __snapshots__
│       └── ChildWindow.spec.tsx.snap
├── Dashboard
│   ├── Dashboard.spec.tsx
│   ├── Dashboard.tsx
│   └── __snapshots__
│       └── Dashboard.spec.tsx.snap
├── LaunchBar
│   ├── LaunchBarData.tsx
│   ├── LaunchBar.spec.tsx
│   ├── LaunchBar.tsx
│   └── __snapshots__
│       └── LaunchBar.spec.tsx.snap
├── Loading
│   ├── Loading.spec.tsx
│   └── Loading.tsx
└── Notification
    ├── Notification.spec.tsx
    ├── Notification.tsx
    └── __snapshots__
        └── Notification.spec.tsx.snap
src/components/
├── index.ts
└── openfin-starter
    ├── client
    │   └── ClientCounter.tsx
    ├── ConfigComp
    │   ├── ConfigAboutField.spec.tsx
    │   ├── ConfigAboutField.tsx
    │   ├── ConfigField.spec.tsx
    │   ├── ConfigField.tsx
    │   └── __snapshots__
    │       ├── ConfigAboutField.spec.tsx.snap
    │       └── ConfigField.spec.tsx.snap
    ├── Header
    │   ├── HeaderLinks.spec.tsx
    │   ├── HeaderLinks.tsx
    │   ├── Header.spec.tsx
    │   ├── Header.tsx
    │   └── __snapshots__
    │       ├── HeaderLinks.spec.tsx.snap
    │       └── Header.spec.tsx.snap
    ├── Overlays
    │   ├── OfflineOverlay.spec.tsx
    │   ├── OfflineOverlay.tsx
    │   └── __snapshots__
    │       └── OfflineOverlay.spec.tsx.snap
    ├── Sidebar
    │   ├── Sidebar.spec.tsx
    │   ├── Sidebar.tsx
    │   └── __snapshots__
    │       └── Sidebar.spec.tsx.snap
    └── Snackbar
        ├── MySnackbarContent.spec.tsx
        ├── MySnackbarContent.tsx
        └── __snapshots__
            └── MySnackbarContent.spec.tsx.snap
`;


const styleStruct =
`src/assets/jss/
├── openfin-starter
│   ├── comp
│   │   ├── button.style.ts
│   │   ├── configAboutField.style.ts
│   │   ├── configFieldComp.style.ts
│   │   ├── headerComp.style.ts
│   │   ├── headerLinksComp.style.ts
│   │   ├── offlineOverlay.style.ts
│   │   ├── sidebarComp.style.ts
│   │   └── snackbarContentComp.style.ts
│   ├── index.ts
│   ├── layout
│   │   ├── dashboardLayout.style.ts
│   │   ├── launchBarLayout.style.ts
│   │   └── notification.style.ts
│   └── view
│       ├── configLangView.style.ts
│       ├── configThemeView.style.ts
│       ├── configView.style.ts
│       ├── reportView.style.ts
│       └── sampleNotificationView.style.ts
└── openfin-starter-constant.ts
`

class StarterBaseCompsView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Starter kit Components
                </Typography>

                <Typography variant='subtitle1' gutterBottom>
                    All components in the template follow the lyt/view/comp pattern introduced in the al-cli section.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    One thing worth noting, the router index for comps are locate at /components instead of
                    /componentes/openfin-starter for flexibility consideration.
                    It is b/c, in this way, user can replace or rename comp if needed like name conflicts or missing features.
                </Typography>

                <Code withMargin language='bash' text={componentsStruct} />


                <Typography variant='subtitle1' gutterBottom>
                    Similarly, all styles are exported via a routing index.ts
                </Typography>
                <Code withMargin language='bash' text={styleStruct} />


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
    withStyles(style)(StarterBaseCompsView)
);

