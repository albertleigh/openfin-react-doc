import { Theme, createStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey'

const landingWelcomeSectionCompStyleStyle = (theme:Theme)=> createStyles({
    container:{
        backgroundColor: grey['800'],
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection: 'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        color: 'white'
    },
    backgroundContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default landingWelcomeSectionCompStyleStyle;
