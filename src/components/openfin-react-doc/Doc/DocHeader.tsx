import * as React from 'react';
import cx from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import { docHeaderCompStyle as style } from '../../../assets/jss/openfin-react-doc';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import gitHubSvg from '../../../assets/svg/developer/github-logo-dark.svg';
import chinaSvg from '../../../assets/svg/language/china.svg';
import usSvg from '../../../assets/svg/language/united-states.svg';
import i18n from "../../../i18n";

interface IProps extends WithStyles<typeof style>, WithNamespaces {
    navbarName:string,
    onSwitchLanguage:(languageName:string)=> void,
    onToggleTheme:()=> void,
}

interface IState{
    anchorEl:any,
    mobileMoreAnchorEl:any,
}

class DocHeaderComp extends React.Component<IProps, IState>{

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    handleLanguageMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleLanguageMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleLanguageEngMenuBtnClick = ()=>{
        this.props.onSwitchLanguage('en');
        this.setState({ anchorEl: null });
    }

    handleLanguageChnMenuBtnClick = ()=>{
        this.props.onSwitchLanguage('zh');
        this.setState({ anchorEl: null });
    }

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render(){

        const {
            classes, t,
            navbarName,
        } = this.props;
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleLanguageMenuClose}
            >
                <MenuItem onClick={this.handleLanguageEngMenuBtnClick}>
                    <IconButton color="inherit">
                        <img className={classes.menuSvg} src={usSvg}/>
                    </IconButton>
                    English
                </MenuItem>
                <MenuItem onClick={this.handleLanguageChnMenuBtnClick}>
                    <IconButton color="inherit">
                        <img className={classes.menuSvg} src={chinaSvg}/>
                    </IconButton>
                    中文
                </MenuItem>
            </Menu>
        );

        const currentLanguageSvg = (
            i18n.language === "zh"?
                <img className={classes.menuSvg} src={chinaSvg}/>:
                <img className={classes.menuSvg} src={usSvg}/>
        )

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit" onClick={this.props.onToggleTheme}>
                        <Icon>lightbulb_outline</Icon>
                    </IconButton>
                    <p>Light theme</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit"
                                href="https://github.com/albertleigh/openfin-react-starter"
                    >
                        <img className={classes.menuSvg} src={gitHubSvg}/>
                    </IconButton>
                    <p>Github</p>
                </MenuItem>
            </Menu>
        );

        return(
            <React.Fragment>
                <AppBar
                    position="fixed"
                >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" gutterBottom>
                            {navbarName}
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Tooltip title={t('header.toolTip.toggleTheme')} enterDelay={300}>
                                <IconButton color="inherit" onClick={this.props.onToggleTheme} >
                                    <Icon>lightbulb_outline</Icon>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={t('header.toolTip.github')} enterDelay={300}>
                                <IconButton color="inherit"
                                            href="https://github.com/albertleigh/openfin-react-starter"
                                >
                                    <img className={classes.menuSvg} src={gitHubSvg}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={t('header.toolTip.changeLanguage')} enterDelay={300}>
                                <IconButton
                                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleLanguageMenuOpen}
                                    color="inherit"
                                >
                                    {currentLanguageSvg}
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </React.Fragment>
        )
    }
}

export default withStyles(style)(
    withNamespaces("landing")(DocHeaderComp)
);