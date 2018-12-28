import { Theme, createStyles } from '@material-ui/core/styles';

const landingAllCustomizableSectionCompStyle = (theme:Theme)=> createStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        width: '100%',
        height: '100%',
        padding:'0 10% 0 10%',
        justifyContent:'space-evenly',
        alignItems:'center',
        // alignContent:'center',
    },
    mockAppImg:{
        width:100,
        height:100,
    }
});

export default landingAllCustomizableSectionCompStyle;
