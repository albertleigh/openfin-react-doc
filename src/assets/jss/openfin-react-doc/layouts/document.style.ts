import { Theme, createStyles } from '@material-ui/core/styles';

import { drawerWidth } from '../constants';

const documentStyle = (theme:Theme)=> createStyles({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    main:{
        flexGrow: 1,
        padding: `0 ${theme.spacing.unit * 3}px`,
        marginTop: 56,
        height:'calc(100vh - 56px)',
        color: theme.palette.text.primary,
        backgroundColor:theme.palette.background.default,
        overflowY: 'auto',
        [theme.breakpoints.up('lg')]:{
            padding: 0,
        },
        [theme.breakpoints.up('md')]:{
            marginLeft: drawerWidth,
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: 64,
            height:'calc(100vh - 64px)',
        },
        [theme.breakpoints.down('xs')]:{
            marginTop: 48,
            height:'calc(100vh - 48px)',
        },
    },
    content: {
        paddingTop: theme.spacing.unit * 3,
        [theme.breakpoints.up('lg')]:{
            maxWidth:960,
            margin:'0 auto',
        },
    },
});

export default documentStyle;