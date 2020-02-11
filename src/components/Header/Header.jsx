import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  makeStyles
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import PublicIcon from "@material-ui/icons/Public";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Avatar from "@material-ui/core/Avatar";

import headerStyles from "./HeaderStyles";

import ava from "../../assets/images/ava.jpg";
import { NavLink } from "react-router-dom";
import Routes from "../../constants/routes";

const useStyles = makeStyles(headerStyles);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <NavLink
              to={Routes.HOME}
              activeClassName={classes.activeLink}
              className={classes.link}
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <HomeIcon fontSize="large" />
              </IconButton>
            </NavLink>
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
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NavLink
                to={Routes.GAME}
                activeClassName={classes.activeLink}
                className={classes.link}
              >
                <IconButton color="inherit">
                  <span className={classes.span}>Game</span>
                  <EmojiPeopleIcon className={classes.headerBtn} />
                </IconButton>
              </NavLink>
              <NavLink
                to={Routes.NEWS}
                activeClassName={classes.activeLink}
                className={classes.link}
              >
                <IconButton color="inherit">
                  <PublicIcon className={classes.headerBtn} />
                  <span className={classes.span}>News</span>
                </IconButton>
              </NavLink>
              <NavLink
                to="/404"
                activeClassName={classes.activeLink}
                className={classes.link}
              >
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </NavLink>
              <NavLink
                to={Routes.PROFILE}
                activeClassName={classes.activeLink}
                className={classes.link}
              >
                <IconButton edge="end" color="inherit">
                  <span className={classes.span}>Profile</span>
                  <Avatar src={ava} />
                </IconButton>
              </NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
