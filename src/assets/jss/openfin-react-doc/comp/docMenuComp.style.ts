import { Theme, createStyles } from '@material-ui/core/styles';

const docMenuCompStyle = (theme:Theme)=> createStyles({
    link:{
        color:theme.palette.text.primary,
        textDecoration:'none',
        '& :hover':{
            textDecoration:'underline',
        }
    },
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: theme.spacing.unit*3,
    },
    headerLink: {
        transition: 'color .2s ease-in-out',
        '&:hover': {
            color: theme.palette.primary.dark,
            textDecoration: 'underline',
        },
    },
    menuListContainer:{
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
    }
});

export default docMenuCompStyle;
