import { Theme, createStyles } from '@material-ui/core/styles';

const landingStyle = (theme:Theme)=> createStyles({

    container:{
        paddingTop: 56,
        [theme.breakpoints.up('sm')]:{
            paddingTop: 64,
        },
    }

});

export default landingStyle;