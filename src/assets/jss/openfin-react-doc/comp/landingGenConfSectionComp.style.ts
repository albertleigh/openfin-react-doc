import { Theme, createStyles } from '@material-ui/core/styles';

const landingGenConfSectionCompStyle = (theme:Theme)=> createStyles({
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
    centerContainer:{
        display:'flex',
        flexWrap:'nowrap',
        alignItems:'center',
    },
    centerDbImgContainer:{
        width:100,
        height:100,
        position:'relative',
        left: 15,
        zIndex:theme.zIndex.appBar - 10,
    },
    centerDashedLinesContainer:{
        width:150,
        "& >:nth-child(2)":{
            transform: 'rotate(180deg)',
        },
    },
    centerMockWinContainer:{
        position:'relative',
        zIndex:theme.zIndex.appBar - 10,
    },
    centerMockWinGears:{
        position: 'absolute',
        right: 4,
        bottom: 4,
        width:40,
        height:40
    }
});

export default landingGenConfSectionCompStyle;
