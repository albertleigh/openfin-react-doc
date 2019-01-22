import * as React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import cx from "classnames";
import { connect } from 'react-redux';

import { IRootState } from '../../reduxs';

import { aboutThanksViewStyle as style } from '../../assets/jss/openfin-react-doc';
import openfinLogoSvg from "../../assets/svg/developer/openfin.svg";
import matUiLogoSvg from "../../assets/svg/developer/material-ui-logo.svg";
import reactSvg from "../../assets/svg/developer/react.svg";

interface ISupporter{
    name:string,
    icon:string,
    link:string,
    width:string|number,
    height:string|number,
}

interface IProps extends WithStyles<typeof style>{


}

interface IState{
    supporters:ISupporter[],
}

class AboutThanksView extends React.Component<IProps,IState>{

    state:IState={
        supporters:[
            {
                name:'Openfin',
                icon:openfinLogoSvg,
                link:'https://openfin.co/',
                height:'3.626em',
                width:'10em',
            },
            {
                name:'Material UI',
                icon:matUiLogoSvg,
                link:'https://material-ui.com/',
                height:'3.626em',
                width:'auto',
            },
            {
                name:'React',
                icon:reactSvg,
                link:'https://reactjs.org/',
                height:'3.626em',
                width:'auto',
            },
        ],
    } as IState;

    render(){

        const { classes } = this.props;
        const { supporters } = this.state;

        return (
            <React.Fragment>
                <List>
                    {supporters.map((supporter:ISupporter,index,arr)=>(
                        <ListItem key={index}>
                            <img src={supporter.icon} />
                            <ListItemText
                                primary={supporter.link}
                            />
                        </ListItem>
                    ))}
                </List>
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
    withStyles(style)(AboutThanksView)
);

