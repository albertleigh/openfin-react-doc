import { Theme, createStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey'

const landingWelcomeSectionCompStyleStyle = (theme:Theme)=> createStyles({
    container:{
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection: 'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        color: 'white'
    },
    mainIconContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'30vmin',
        height:'30vmin',
        marginBottom:'5vmin',
        zIndex:theme.zIndex.appBar - 5,
        backgroundColor:theme.palette.primary.main,
        borderStyle:"solid",
        borderColor:'white',
        borderWidth:'10px',
        borderRadius:'50%'
    },
    mainIcon:{
        color:'white',
        width:'75%',
        height:'75%',
    },
    text:{
        zIndex:theme.zIndex.appBar -5,
        marginBottom:'2vmin',
    },
    backgroundContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background:`url(${process.env.PUBLIC_URL}/img/screenshoot.gif) no-repeat center center fixed`,
        backgroundSize: 'cover',
    }
});

export default landingWelcomeSectionCompStyleStyle;
