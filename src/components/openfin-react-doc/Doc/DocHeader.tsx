import * as React from 'react';
import { useState } from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

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

interface IProps {
    navbarName:string,
    onSwitchLanguage:(languageName:string)=> void,
    onToggleDrawer:()=> void,
    onToggleTheme:()=> void,
}

interface IState{
    anchorEl:any,
    mobileMoreAnchorEl:any,
}

const useStyles = makeStyles(style);

const DocHeaderComp:React.FunctionComponent<IProps> = (
    {
        navbarName,
        onSwitchLanguage,
        onToggleDrawer,
        onToggleTheme,
    }
)=>{

    const classes = useStyles();

    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const [state, setState] = useState<IState>({
        anchorEl: null,
        mobileMoreAnchorEl: null,
    });

    const { anchorEl, mobileMoreAnchorEl } = state;

    const handleLanguageMenuOpen = event => {
        setState({ ...state, anchorEl: event.currentTarget });
    };

    const handleLanguageMenuClose = () => {
        setState({ ...state, anchorEl: null });
        handleMobileMenuClose();
    };

    const handleLanguageEngMenuBtnClick = ()=>{
        onSwitchLanguage('en');
        setState({ ...state, anchorEl: null });
    }

    const handleLanguageChnMenuBtnClick = ()=>{
        onSwitchLanguage('zh');
        setState({ ...state, anchorEl: null });
    }

    const handleMobileMenuOpen = event => {
        setState({ ...state, mobileMoreAnchorEl: event.currentTarget });
    };

    const handleMobileMenuClose = () => {
        setState({ ...state, mobileMoreAnchorEl: null });
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleLanguageMenuClose}
        >
            <MenuItem onClick={handleLanguageEngMenuBtnClick}>
                <IconButton color="inherit">
                    <img className={classes.menuSvg} src={usSvg}/>
                </IconButton>
                English
            </MenuItem>
            <MenuItem onClick={handleLanguageChnMenuBtnClick}>
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
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit" onClick={onToggleTheme}>
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
                className={classes.appBar}
                position="fixed"
            >
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer"
                                onClick={onToggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" gutterBottom color='inherit'>
                        {navbarName}
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Tooltip title={t('header.toolTip.toggleTheme')} enterDelay={300}>
                            <IconButton color="inherit" onClick={onToggleTheme} >
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
                                onClick={handleLanguageMenuOpen}
                                color="inherit"
                            >
                                {currentLanguageSvg}
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
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

export default DocHeaderComp;