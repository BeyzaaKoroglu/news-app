import React from "react";
import "../App.css";

import { alpha, makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as topicsActions from "../redux/actions/topicsActions";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
      height: "40px",
    },
  },
  searchIcon: {
    position: "relative",
    color: "white",
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: "10px",
      height: "40px",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(0, 0, 0, 0),
    paddingLeft: theme.spacing(0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navi() {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  const dispatch = useDispatch();
  const { changeTopic } = bindActionCreators(topicsActions, dispatch);
  const { searchWord } = bindActionCreators(topicsActions, dispatch);

  const searchValue = useSelector((state) => state.searchWordReducer);

  const searchOnPage = (event) => {
    searchWord(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Button>
            <a href="/news" className="NaviLink">
              News
            </a>
          </Button>
          <Button>
            <a href="/sport" className="NaviLink">
              Sport
            </a>
          </Button>
          <Button>
            <a href="/tech" className="NaviLink">
              Technology
            </a>
          </Button>
          <Button>
            <a href="/world" className="NaviLink">
              World
            </a>
          </Button>
          <Button>
            <a href="/finance" className="NaviLink">
              Finance
            </a>
          </Button>
          <Button>
            <a href="/politics" className="NaviLink">
              Politics
            </a>
          </Button>
          <Button>
            <a href="/business" className="NaviLink">
              Business
            </a>
          </Button>
          <Button>
            <a href="/economics" className="NaviLink">
              Economics
            </a>
          </Button>
          <Button>
            <a href="/entertainment" className="NaviLink">
              Entertainment
            </a>
          </Button>
          <Button>
            <a href="/beauty" className="NaviLink">
              Beauty
            </a>
          </Button>
          <Button>
            <a href="/gaming" className="NaviLink">
              Gaming
            </a>
          </Button>

          <div className={classes.search}>
            <a href={`/search/${searchValue}`} className={classes.searchIcon}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <SearchIcon />
              </IconButton>
            </a>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={searchOnPage}
            ></InputBase>
          </div>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navi;
