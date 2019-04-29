import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

import {IRootState, MuiTheme} from '../../reduxs';

import {aboutCollaboratorsViewStyle as style} from '../../assets/jss/openfin-react-doc';

import githubSvg from '../../assets/svg/developer/github-logo.svg';
import githubDarkSvg from '../../assets/svg/developer/github-logo-dark.svg';

interface IProps{
    muiTheme:MuiTheme,
}

const useStyles = makeStyles(style);

const AboutCollaboratorsView:React.FunctionComponent<IProps>=(
    {
        muiTheme
    }
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.container}>

                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image="https://github.com/albertleigh.png"
                        title="Albert Leigh"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h6" variant="h6">
                                Albert Leigh
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                A stupid kiddo
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <IconButton aria-label="albertleigh github"
                                        href='https://github.com/albertleigh'
                            >
                                {muiTheme=== MuiTheme.LIGHT ? <img className={classes.imgIcon} src={githubSvg}/> : <img className={classes.imgIcon} src={githubDarkSvg}/>}
                            </IconButton>
                        </div>
                    </div>

                </Card>
            </div>
        </React.Fragment>
    )
}

export default connect(
    (state:IRootState)=>({
        muiTheme:state.application.theme,
    }),
    dispatch => ({
        actions:{

        }
    })

    )(
    AboutCollaboratorsView
);

