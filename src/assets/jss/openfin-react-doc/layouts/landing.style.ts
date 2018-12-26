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
    snapDockSectionContainer:{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
});

export default landingStyle;