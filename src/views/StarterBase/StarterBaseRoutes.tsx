import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { starterBaseRoutesViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class StarterBaseRoutesView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>

                <Typography variant='h3' gutterBottom>
                    Routes pattern of the starter kit templates
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
    withStyles(style)(StarterBaseRoutesView)
);

