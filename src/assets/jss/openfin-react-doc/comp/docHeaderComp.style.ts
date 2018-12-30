import { Theme, createStyles } from '@material-ui/core/styles';

const docHeaderCompStyle = (theme:Theme)=> createStyles({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    menuSvg:{
        width:24,
        height:24,

    },
    grow: {
        flexGrow: 1,
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

export default docHeaderCompStyle;
