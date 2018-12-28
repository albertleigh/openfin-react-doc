import * as React from 'react';
import cx from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { landingSupportSectionCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import AbstractLandingSection from "./AbstractLandingSection";

interface IProps extends WithStyles<typeof style>, WithNamespaces{
    onIntersectionChanged: (intersectionObserverEntry:IntersectionObserverEntry) =>void,
}

interface IContributor{
    name:string,
    avatar:string,
    email:string,
}

interface IState{
    contributors:IContributor[],
}

class SupportSectionComp extends AbstractLandingSection<IProps, IState>{

    element:any;

    state={
        visiblePct: 0,
        contributors:[
            {
                name:'Albert Leigh',
                avatar:'https://github.com/albertleigh.png',
                email:'liwentao90@yahoo.com',
            }
        ],
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

    handleEmailBtnClick = (email:string) => ()=>{
        window.location.href=`mailto:mail@${email}`;
    }

    render(){

        const { classes, t } = this.props;
        const { contributors }= this.state;

        return(
            <div
                className={classes.container}
                ref = {el => this.element = el}
            >
                <Typography className={classes.header} variant="h5" gutterBottom>
                    Contributor:
                </Typography>
                {
                    contributors.map(((contributor:IContributor,index,arr)=>(
                        <Chip
                            key={index}
                            avatar={<Avatar alt={contributor.name} src={contributor.avatar} />}
                            label={contributor.name}
                            onClick={this.handleEmailBtnClick(contributor.email)}
                        />
                    )))

                }

                <Typography className={classes.header} variant="h5" gutterBottom>
                    Credits:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>

                <Typography className={classes.header} variant="h5" gutterBottom>
                    Support:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </div>
        )
    }
}

export default withStyles(style)(
    withNamespaces('landing')(SupportSectionComp)
);