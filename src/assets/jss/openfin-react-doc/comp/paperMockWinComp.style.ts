import { Theme, createStyles } from '@material-ui/core/styles';

import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

const paperMockWinCompStyle = (theme:Theme)=> createStyles({
    container:{
        width:300,
        height: 180,
        position:'relative',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
    },
    topHeader:{
        width: '100%',
        height: 20,
        position:'absolute',
        top: 0,
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'baseline',
    },
    infoBtn:{
        color: theme.palette.text.primary,
        backgroundColor: cyan[500],
        height:20,
        width:20,
        marginRight: 5,
        borderRadius: 2,
        "& svg":{
            height:20,
            width:20,
        }
    },
    greenBtn:{
        color: theme.palette.text.primary,
        backgroundColor: green[500],
        height:20,
        width:20,
        marginRight: 5,
        borderRadius: 2,
        "& svg":{
            height:20,
            width:20,
        }
    },
    yellowBtn:{
        color: theme.palette.text.primary,
        backgroundColor: yellow[700],
        height:20,
        width:20,
        marginRight: 5,
        borderRadius: 2,
        "& svg":{
            height:20,
            width:20,
        }
    },
    redBtn:{
        color: theme.palette.text.primary,
        backgroundColor: red[500],
        height:20,
        width:20,
        marginRight: 5,
        borderRadius: 2,
        "& svg":{
            height:20,
            width:20,
        }
    },
});

export default paperMockWinCompStyle;
