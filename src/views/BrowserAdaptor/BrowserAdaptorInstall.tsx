import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { connect } from 'react-redux';

import { browserAdaptorInstallViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

import { IRootState } from '../../reduxs';

const initBrowserAdaptor =
`import { BrowserAdapter } from 'openfin-browser-adapter';

if(!window.fin){
    window.fin = new BrowserAdapter({
        finUuid:process.env.REACT_APP_FIN_UUID,
        silentMode:false,
    });
}
`

const useStyles = makeStyles(style);

const BrowserAdaptorInstallView:React.FunctionComponent<{}>=(
    props
)=>{

    const classes = useStyles();

    return (
        <React.Fragment>

            <Typography variant='h3' gutterBottom>
                BrowserAdaptor
            </Typography>

            <Typography variant='body1' gutterBottom>
                Openfin browser adaptor is just a bunch doing-nothing mock-up of openfin js apis.
                Infact, the adaptor doesn't do much but just let the the code survive when openfin apis called
                instead of throwing undefined handles errors.
            </Typography>

            <Typography variant='h5' gutterBottom>
                Install
            </Typography>

            <Typography variant='body1' gutterBottom>
                Install into your package.json
            </Typography>

            <Code withMargin text="yarn add openfin-browser-adapter"/>
            <Code withMargin text="npm i openfin-browser-adapter"/>

            <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                Initialize
            </Typography>

            <Typography variant='body1' gutterBottom>
                Before initializing the redux, make sure to use BrowserAdaptor if fin handler is undefined.
            </Typography>

            <Code withMargin text={initBrowserAdaptor}/>

            <Typography variant='body1' gutterBottom>
                after that the app codes should be able to survive the browser runtime wit mock-up openfin api handler.
            </Typography>

        </React.Fragment>
    )
}

export default BrowserAdaptorInstallView

