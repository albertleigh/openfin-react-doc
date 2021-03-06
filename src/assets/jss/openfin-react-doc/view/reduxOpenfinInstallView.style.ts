import { Theme, createStyles } from '@material-ui/core/styles';

const reduxOpenfinInstallViewStyle = (theme:Theme)=> createStyles({

    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    hasMargin:{
        marginTop: theme.spacing.unit * 6,
    },

    coveredTopicItem:{
        marginLeft: theme.spacing.unit * 2,

    }

});

export default reduxOpenfinInstallViewStyle;
