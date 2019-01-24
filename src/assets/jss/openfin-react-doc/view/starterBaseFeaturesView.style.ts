import { Theme, createStyles } from '@material-ui/core/styles';

const starterBaseFeaturesViewStyle = (theme:Theme)=> createStyles({

    hasMargin:{
        marginTop: theme.spacing.unit * 6,
    },

    gifImgPaper:{
        display:'flex',
        justifyContent:'center',
        margin:'0 auto',
        maxWidth: 500,
    },
    gifImg:{
        width: '100%',
        height: '100%',
    },

    hasBottomMargin:{
        marginBottom: theme.spacing.unit * 8,
    },

});

export default starterBaseFeaturesViewStyle;
