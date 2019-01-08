import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingStandalonePkgViewStyle as style } from '../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

class ScaffoldingStandalonePkgView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                ScaffoldingStandalonePkg view works ~
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
    withStyles(style)(ScaffoldingStandalonePkgView)
);

