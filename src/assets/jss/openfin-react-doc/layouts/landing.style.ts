import { Theme, createStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

const landingStyle = (theme:Theme)=> createStyles({

    container:{
        // paddingTop: 56,
        // [theme.breakpoints.up('sm')]:{
        //     paddingTop: 64,
        // },
        width:'100%',
        height:'100vh',
        overflow:'auto',
    },
    sectionContainer:{
        width:'100%',
        height:'100vh',
    },
    sectionPaddingContainer:{
        paddingTop: 56,
        [theme.breakpoints.up('sm')]:{
            paddingTop: 64,
        },
    },
    scaffoldingSectionContainer:{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
    },
    snapDockSectionContainer:{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    crossWinSectionContainer:{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
    },
    genConfSectionContainer:{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    allCustSectionContainer:{
        color: 'white',
    },
    supportContainer:{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        height:'auto',
        paddingBottom: 56,
        [theme.breakpoints.up('sm')]:{
            paddingBottom: 64,
        },
    },
});

export default landingStyle;