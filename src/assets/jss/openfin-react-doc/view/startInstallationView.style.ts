import { Theme, createStyles } from '@material-ui/core/styles';

const startInstallationViewStyle = (theme:Theme)=> createStyles({

    sampleInstallerContainer:{
        display:'flex',
        flexWrap:'nowrap',
        justifyContent:'flex-start',
        alignItems:'baseline',
        "& >:nth-child(1)":{
            marginRight: theme.spacing.unit,
        },
    },
    anchor:{

        color:theme.palette.text.primary
    }

});

export default startInstallationViewStyle;
