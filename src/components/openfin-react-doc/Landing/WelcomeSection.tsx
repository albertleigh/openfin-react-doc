import * as React from 'react';
import * as cx from 'classnames';
import Particles from 'react-particles-js';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { landingWelcomeSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>, WithNamespaces{

}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class WelcomeSectionComp extends React.Component<IProps, IState>{
    render(){

        const { classes, t } = this.props;

        return(
            <div className={classes.container}>
                <Particles
                    className={classes.backgroundContainer}
                    params={{
                        "particles": {
                            "number": {
                                "value": 120,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.02
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.05
                            },
                            "size": {
                                "value": 2
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                />

                <Typography variant='h4' color="inherit" gutterBottom>
                    {t('welcomeSec.title')}
                </Typography>


                <Typography variant='h5' color="inherit" gutterBottom>
                    {t('welcomeSec.subtitle')}
                </Typography>

                <Button
                    variant="contained"
                >{t('welcomeSec.startBtn')}</Button>


            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces("landing")(WelcomeSectionComp)
);