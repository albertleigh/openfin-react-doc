import { Theme, createStyles } from '@material-ui/core/styles';

import onCircle from '../../mixins/onCircle';

const landingCrossWinCommSectionCompStyle = (theme:Theme)=> createStyles({
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
    commWinsContainer:{
        ...onCircle(6,500, 210),

    },
    commWin:{
        "& >div":{
            transform:'scale(0.7)',
        }
    }
});

export default landingCrossWinCommSectionCompStyle;
