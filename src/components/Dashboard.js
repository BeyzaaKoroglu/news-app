import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as topicsActions from "../redux/actions/topicsActions";
import { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "antd/lib/card/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { v4 as uuidv4 } from "uuid";

import { Container, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    maxHeight: 500,
    minHeight: 500,
  },
  media: {
    maxHeight: 140,
    minHeight: 140,
  },
  title: {
    maxHeight: 20,
    minHeight: 20,
  },
  summary: {
    maxHeight: 310,
    minHeight: 310,
    overflowY: "Hidden",
  },
}));

function Dashboard({ url }) {
  const classes = useStyles();

  const allTopics = useSelector((state) => state.topicsReducer);

  const search_word = useSelector((state) => state.searchWordReducer);
  const learn_More = useSelector((state) => state.learnMoreReducer);

  const dispatch = useDispatch();

  const { getTopics } = bindActionCreators(topicsActions, dispatch);
  const { searchWord } = bindActionCreators(topicsActions, dispatch);
  const { learnMore } = bindActionCreators(topicsActions, dispatch);

  useEffect(() => {
    getTopics(url);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const learn = (data) => {
    learnMore(data);
  };

  return (
    <Container fluid>
      {url}
      {search_word}
      <div>
        <br></br>
        {allTopics.length}
      </div>

      {allTopics.length > 0 ? (
        allTopics.map(
          (data) =>
            (data.topic.toLowerCase() === search_word.toLowerCase() ||
              toString(data.summary)
                .toLowerCase()
                .includes(search_word.toLowerCase()) ||
              data.title.toLowerCase().includes(search_word.toLowerCase())) && (
              <Grid item xs={12} spacing={3} key={uuidv4()}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={data.media}
                      title={data.topic}
                    />
                    <CardContent className={classes.summary}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        height="300"
                        className="overflowText"
                      >
                        {data.summary}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <a>Share</a>
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => learnMore(data)}
                    >
                      <Link to={`/detail/${data.title}`}>Learn More</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
        )
      ) : (
        <p>loading</p>
      )}
    </Container>
  );
}

export default Dashboard;
