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
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        marginTop: 56,
        [theme.breakpoints.up('md')]:{
            marginLeft: drawerWidth,
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: 64,
        },
    },
});

export default documentStyle;