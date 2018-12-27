import { Theme, createStyles } from '@material-ui/core/styles';

const aniDashedLineCompStyle = (theme:Theme)=> createStyles({
    container:{
        "& >svg":{
            // width:'20em',
            // height:'1em',
            "& >path":{
                fill: 'none',
                stroke: theme.palette.primary.main,
                strokeWidth: 0.25,
                strokeDasharray: '0.75 0.25',
                animation: '0.5s linear infinite dashed-line'
            }
        }

    }

});

export default aniDashedLineCompStyle;
