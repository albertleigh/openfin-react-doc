import { Theme, createStyles } from '@material-ui/core/styles';

const startDevelopersViewStyle = (theme:Theme)=> createStyles({

    hasMargin:{
        marginTop: theme.spacing.unit * 6,
    },

    imgPaper:{
        display:'flex',
        justifyContent:'center',
    }

});

export default startDevelopersViewStyle;
