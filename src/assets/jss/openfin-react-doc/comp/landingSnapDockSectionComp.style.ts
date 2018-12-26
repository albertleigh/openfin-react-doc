import { Theme, createStyles } from '@material-ui/core/styles';

const landingSnapDockSectionCompStyle = (theme:Theme)=> createStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        width: '100%',
        height: '100%',
        padding:'0 10% 0 10%',
        justifyContent:'space-around',
        alignItems:'center',
        // alignContent:'center',
    },
    windowsContainer:{
        display:'flex',
        flexWrap:'nowrap',
        "& >div:first-child":{
            marginRight:2,
        }
    },
    window:{
        width:300,
        height: 180,
    },
    windowHidden:{
        display:'none',
    },
});

export default landingSnapDockSectionCompStyle;
