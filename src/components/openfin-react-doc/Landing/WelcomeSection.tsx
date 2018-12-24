import * as React from 'react';
import cx from 'classnames';
import Particles from 'react-particles-js';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AbstractLandingSection from './AbstractLandingSection';

import { landingWelcomeSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

interface IProps extends WithStyles<typeof style>, WithNamespaces{
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IState{
    [key:number]:any,
    [key:string]:any,
}

class WelcomeSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
    }

    componentDidMount(): void {
        super.componentDidMount();
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
    }

    onIntersectionChanged =(intersectionObserverEntry:IntersectionObserverEntry)=>{
        if (this.props.onIntersectionChanged){
            this.props.onIntersectionChanged(intersectionObserverEntry);
        }
    }

    render(){

        const { classes, t } = this.props;

        return(
            <div ref = {el => this.element = el} className={classes.container}>
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