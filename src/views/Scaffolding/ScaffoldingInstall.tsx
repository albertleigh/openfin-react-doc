import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingInstallViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>{


}

import { IRootState } from '../../reduxs';

const alCli =
    `
        _ _               _             _ _ 
   __ _| | |__   ___ _ __| |_       ___| (_)
  / _\` | | '_ \\ / _ \\ '__| __|____ / __| | |
 | (_| | | |_) |  __/ |  | ||_____| (__| | |
  \\__,_|_|_.__/ \\___|_|   \\__|     \\___|_|_|
                                            
  v0.30.10
 
  albert li personal cli to generate boilerplate codes
 
  SYNOPSIS
      $ al-cli comp <component name>
      $ al-cli openfin-react-ts <app name>
      $ al-cli react-ts <app name>
      $ al-cli help
  DESCRIPTION
      --force -f          Create the target file by force, override if any already exist
      --directory -d      Override the default path where the file created
      --verbose -v        Include comments
      --skipInstall       Skip to install node_moduels
`;

class ScaffoldingInstallView extends React.Component<IProps,{}>{
    render(){
        return (
            <React.Fragment>
                <Typography variant='h2' gutterBottom>
                    Scaffolding tool installation
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Initially, install the scaffolding tool globally
                </Typography>

                <Code withMargin text="npm install @albertli90/al-cli -g"/>

                <Typography variant="body1" gutterBottom>
                    or
                </Typography>

                <Code withMargin text="yarn global add @albertli90/al-cli"/>

                <Typography variant="body1" gutterBottom>
                    Once installed
                </Typography>
                <Code withMargin text="al-cli"/>
                <Typography variant="body1" gutterBottom>
                    or
                </Typography>
                <Code withMargin text="al-cli --help"/>
                <Typography variant="body1" gutterBottom>
                    will dump the help into the console
                </Typography>
                <Code language='vim' withMargin text={alCli}/>

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
    withStyles(style)(ScaffoldingInstallView)
);

