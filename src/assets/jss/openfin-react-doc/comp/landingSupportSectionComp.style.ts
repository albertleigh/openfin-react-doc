import { Theme, createStyles } from '@material-ui/core/styles';

const landingSupportSectionCompStyle = (theme:Theme)=> createStyles({
    container:{
        width: '100%',
        height: '100%',
        padding:'0 10% 0 10%',
        [theme.breakpoints.up('lg')]: {
            display:'flex',
            flexWrap:'nowrap',
            justifyContent:'space-around',
        },
    },

    oneSubSec:{
        "& >:not(:nth-child(1))":{
            marginLeft:theme.spacing.unit,
        },
    },

    header:{
        marginTop:10,
    },

    flatIconCreditContainers:{
      display:'flex',
      flexWrap:'nowrap',
    },
    flatIconCreditAvatar:{
        width:20,
        height:20,
        marginRight:theme.spacing.unit/2,
    },

    supporterAnchor:{
        marginRight:theme.spacing.unit*2,
    },

});

export default landingSupportSectionCompStyle;
