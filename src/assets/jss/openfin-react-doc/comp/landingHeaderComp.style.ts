import { Theme, createStyles } from '@material-ui/core/styles';

import { fade } from '@material-ui/core/styles/colorManipulator';

const landingHeaderCompStyle = (theme:Theme)=> createStyles({
    root: {
        width: '100%',
    },
    appbar:{
        transition:'background-color 0.5s ease',
    },
    appbarTransparent:{
        backgroundColor:'transparent',
        boxShadow:'none',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    menuSvg:{
        width:24,
        height:24,

    },
    titleTab: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

export default landingHeaderCompStyle;
