import * as React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import { docMenuCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{

}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class DocMenuComp extends React.Component<IProps, IState>{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div className={classes.toolbar}>
                    <Link className={classes.link} to="/">
                        <Typography variant="subtitle1" color='inherit' >
                            Openfin react starter
                        </Typography>
                    </Link>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/albertleigh/openfin-react-starter/releases"
                    >
                        <Typography variant="caption" className={classes.headerLink}>
                            {process.env.REACT_APP_VERSION}
                        </Typography>
                    </a>
                </div>
                <Divider />
                DocMenu component works ~
            </div>
        )
    }
}

export default withStyles(style)(DocMenuComp);