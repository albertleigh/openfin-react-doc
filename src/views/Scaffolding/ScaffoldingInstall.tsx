import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import cx from "classnames";
import { connect } from 'react-redux';

import { scaffoldingInstallViewStyle as style } from '../../assets/jss/openfin-react-doc';

import { Code } from '../../components';

interface IProps extends WithStyles<typeof style>, WithNamespaces{


}

import { IRootState } from '../../reduxs';

const alCli =
    `
        _ _               _             _ _ 
   __ _| | |__   ___ _ __| |_       ___| (_)
  / _\` | | '_ \\ / _ \\ '__| __|____ / __| | |
 | (_| | | |_) |  __/ |  | ||_____| (__| | |
  \\__,_|_|_.__/ \\___|_|   \\__|     \\___|_|_|
                                            
  v0.35.21
 
  albert li personal cli to generate boilerplate codes
 
  SYNOPSIS
      $ al-cli lyt <layout component name>
      $ al-cli view <view component name>
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

        const { classes, t } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h3' gutterBottom>
                    {t('install.title')}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    {t('install.subtitle')}
                </Typography>

                <Typography className={classes.hasMargin} variant='h5' gutterBottom>
                    {t('install.install.title')}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    {t('install.install.step1')}
                </Typography>

                <Code withMargin text="npm install @albertli90/al-cli -g"/>

                <Typography variant="body1" gutterBottom>
                    {t('common.or')}
                </Typography>

                <Code withMargin text="yarn global add @albertli90/al-cli"/>

                <Typography variant="body1" gutterBottom>
                    {t('install.install.step2')}
                </Typography>
                <Code withMargin text="al-cli"/>
                <Typography variant="body1" gutterBottom>
                    {t('common.or')}
                </Typography>
                <Code withMargin text="al-cli --help"/>
                <Typography variant="body1" gutterBottom>
                    {t('install.install.step3')}
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
    withStyles(style)(
        withNamespaces('scaffolding')(ScaffoldingInstallView)
    )
);

