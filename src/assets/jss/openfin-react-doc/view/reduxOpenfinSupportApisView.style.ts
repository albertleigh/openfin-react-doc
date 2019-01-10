import { Theme, createStyles } from '@material-ui/core/styles';

const reduxOpenfinSupportApisViewStyle = (theme:Theme)=> createStyles({

    outmostContainer:{
        "& >h4":{
            marginTop: theme.spacing.unit * 6,
        },

        "& >h5":{
            marginTop: theme.spacing.unit * 4,
            marginLeft: theme.spacing.unit * 2,
        }
    },

});

export default reduxOpenfinSupportApisViewStyle;
