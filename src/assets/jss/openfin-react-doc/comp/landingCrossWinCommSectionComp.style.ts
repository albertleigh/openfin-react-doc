import { Theme, createStyles } from '@material-ui/core/styles';

import onCircle from '../../mixins/onCircle';

const landingCrossWinCommSectionCompStyle = (theme:Theme)=> createStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        width: '100%',
        height: '100%',
        padding:'0 10% 0 10%',
        justifyContent:'center',
        alignItems:'center',
        // alignContent:'center',
    },
    title:{
        marginBottom:20,
    },
    commWinsContainer:{
        ...onCircle(6,400, 310),
        margin:120,

    },
    commWin:{
        zIndex:theme.zIndex.appBar-10
    },
    dashedLine2:{
        "& >div":{
            transform:'rotate(-60deg)'
        }
    },
    dashedLine4:{
        "& >div":{
            transform:'translate(0, 30px) rotate(180deg)'
        }
    },
    dashedLine6:{
        "& >div":{
            transform:'rotate(60deg)'
        }
    },
});

export default landingCrossWinCommSectionCompStyle;
