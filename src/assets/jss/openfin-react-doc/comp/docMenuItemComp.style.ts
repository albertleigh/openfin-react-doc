import { Theme, createStyles } from '@material-ui/core/styles';

const docMenuItemCompStyle = (theme:Theme)=> createStyles({
    item:{
        position:"relative",
        display:"block",
        textDecoration:"none",
        "&.active $nested":{
            backgroundColor:theme.palette.primary.light,
        }
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

export default docMenuItemCompStyle;
