import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as topicsActions from "../redux/actions/topicsActions";
import { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
  },
  media: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 350,
    marginRight: 350,
    maxHeight: 500,
    minHeight: 500,
    maxWidth: 500,
    minWidth: 500,
  },
  title: {},
  summary: {
    marginLeft: 50,
    marginRight: 50,
  },
}));

function Detail() {
  const classes = useStyles();

  const learn_More = useSelector((state) => state.learnMoreReducer);

  const dispatch = useDispatch();

  const { learnMore } = bindActionCreators(topicsActions, dispatch);

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Card className={classes.root} alignItems="center">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              image={learn_More.media}
              title={learn_More.title}
            />
            <CardContent className={classes.summary}>
              <Typography gutterBottom variant="h5" component="h2">
                {learn_More.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                height="300"
                className="overflowText"
              >
                {learn_More.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Detail;
