import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    makeStyles,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Avatar from '@material-ui/core/Avatar';

import headerStyles from './HeaderStyles';

import ava from '../../assets/images/ava.jpg';
import {Link} from "react-router-dom";
import Routes from "../../constants/routes";

const useStyles = makeStyles(headerStyles);

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div >
                        <Link to={Routes.HOME} className={classes.activeLink}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <HomeIcon fontSize="large"/>
                            </IconButton>
                        </Link>
                    </div>
                    <div className={classes.wrapperSearch}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Link to={Routes.PROFILE} className={classes.activeLink}>
                                <IconButton color="inherit">
                                    <AccessibilityNewIcon />
                                </IconButton>
                            </Link>
                            <Link to={Routes.NEWS} className={classes.activeLink}>
                                <IconButton color="inherit">
                                    <PublicIcon />
                                </IconButton>
                            </Link>
                            <Link to={Routes.CATEGORIES} className={classes.activeLink}>
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Link>
                            <Link to={Routes.LOGIN} className={classes.activeLink}>
                                <IconButton edge="end" color="inherit">
                                    <Avatar src={ava} />
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
