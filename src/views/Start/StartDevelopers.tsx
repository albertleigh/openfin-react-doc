import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { startDevelopersViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class StartDevelopersView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    Big Pic
                </Typography>
                <Typography variant="body1" gutterBottom>
                    todo: to be finished
                </Typography>
            </React.Fragment>
        )
    }
}

export default connect(
    (state:IRootState)=>({

    }),
    dispatch => ({
        actions:{

        }
    })

    )(
    withStyles(style)(StartDevelopersView)
);

