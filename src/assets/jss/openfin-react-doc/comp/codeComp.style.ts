import { Theme, createStyles } from '@material-ui/core/styles';

const anchorLinkStyle = (theme, size) => ({
    '& .anchor-link-style': {
        opacity: 0,
        // To prevent the link to get the focus.
        display: 'none',
    },
    '&:hover .anchor-link-style': {
        display: 'inline-block',
        opacity: 1,
        padding: `0 ${theme.spacing.unit}px`,
        color: theme.palette.text.hint,
        '&:hover': {
            color: theme.palette.text.secondary,
        },
        '& svg': {
            width: size,
            fill: 'currentColor',
        },
    },
});


const codeCompStyle = (theme:Theme)=> createStyles({

    root: {
        margin: '0',
        fontFamily: theme.typography.fontFamily,
        fontSize: '1em',
        color: theme.palette.text.primary,
        padding: 10,
        backgroundColor: theme.palette.background.paper,

        '& pre': {
            borderRadius: 3,
            overflow: 'auto !important',
            margin: '0 !important',
            backgroundColor: theme.palette.background.paper + ' !important',
        },
        '& .operator':{
            backgroundColor: theme.palette.background.paper,
        }
    },
    margin: {
        margin: '10px 0 30px',
    },
});

export default codeCompStyle;
