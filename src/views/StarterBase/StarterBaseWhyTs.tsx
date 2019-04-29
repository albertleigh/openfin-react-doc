import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { starterBaseWhyTsViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { IRootState } from '../../reduxs';

const useStyles = makeStyles(style);

const StarterBaseWhyTsView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant='h3' gutterBottom>
                Why typescript?
            </Typography>
            <Typography variant="body1" gutterBottom>
                This might be mostly frequently asked question.
                Why typescript, why not typeless or flow?

                Well...

                For certain teams, api schema might not be settle at initial stage and there might be multi developers participating in the project.
                From the template perspective, compile-time type check can help the various-levels developers work together and effectively,
                provide type-check throughtout schema evolving,
                increase codes readabilities and could act as one protection to avoid run-time type mismatch errors.

                Moreover, most libs provide type definition of their apis, codes experiences using typescript will be much better than typeless.

                As for flow, some companies might disallow you develop outside their internal DEV eniornment.
                Their supported IDE are not that friendly with flow very well, usually causing a lot of memory-leaking.
                Thus, typescript will be our first primary supported static check language other than flow, and will consider to support flow at latter stage.

            </Typography>
        </React.Fragment>
    )
}

export default StarterBaseWhyTsView;