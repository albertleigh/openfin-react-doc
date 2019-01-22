import { Theme, createStyles } from '@material-ui/core/styles';

const aboutCollaboratorsViewStyle = (theme:Theme)=> createStyles({

    container:{
        display: 'flex',
    },

    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: theme.spacing.unit,
    },
    cover: {
        width: 120,
        height: 120,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
    },
    imgIcon: {
        height: 20,
        width: 20,
    },
});

export default aboutCollaboratorsViewStyle;
