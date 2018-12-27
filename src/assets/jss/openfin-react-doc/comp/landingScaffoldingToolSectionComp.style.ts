import { Theme, createStyles } from '@material-ui/core/styles';

const landingScaffoldingToolSectionCompStyle = (theme:Theme)=> createStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        width: '100%',
        height: '100%',
        padding:'0 10% 0 10%',
        justifyContent:'space-around',
        alignItems:'center',
        // alignContent:'center',
    },
    hidden:{
        display:'none',
    },
    green:{
        color: '#8BC34A',
    },
    cmdInputContainer:{
        display:'flex',
        justifyContent:'flex-start',
        // position: 'absolute',
        // left:'10%',
        // bottom: '10%',
        marginRight:'40%',
        color:theme.palette.text.primary,
        backgroundColor:theme.palette.background.paper,
    },
    typewriter:{
        // color: '#fff',
        // fontFamily: 'monospace',
        overflow: 'hidden', /* Ensures the content is not revealed until the animation */
        borderRight: '.15em solid #8BC34A', /* The typwriter cursor */
        whiteSpace: 'nowrap', /* Keeps the content on a single line */
        margin: '0 auto', /* Gives that scrolling effect as the typing happens */
        // letterSpacing: '.15em', /* Adjust as needed */
        animation:'typing 3.5s steps(30, end),blink-caret .5s step-end infinite',
    },
});

export default landingScaffoldingToolSectionCompStyle;
