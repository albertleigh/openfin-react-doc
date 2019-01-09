import { Theme, createStyles } from '@material-ui/core/styles';

const browserAdaptorInstallViewStyle = (theme:Theme)=> createStyles({

    hasMargin:{
        marginTop: theme.spacing.unit * 6,
    },

});

export default browserAdaptorInstallViewStyle;
