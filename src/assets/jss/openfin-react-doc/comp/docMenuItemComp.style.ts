import { Theme, createStyles } from '@material-ui/core/styles';

const docMenuItemCompStyle = (theme:Theme)=> createStyles({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

export default docMenuItemCompStyle;
