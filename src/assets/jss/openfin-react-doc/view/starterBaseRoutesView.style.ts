import { Theme, createStyles } from '@material-ui/core/styles';

const starterBaseRoutesViewStyle = (theme:Theme)=> createStyles({

    hasMargin:{
        marginTop: theme.spacing.unit * 6,
    },

    hasBottomMargin:{
        marginBottom: theme.spacing.unit * 8,
    },

});

export default starterBaseRoutesViewStyle;
