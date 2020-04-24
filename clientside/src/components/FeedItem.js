import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import StarsIcon from "@material-ui/icons/Stars";

import "./assets/placehold.jpg";

export class FeedItem extends Component {
  render() {
    return (
      <>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              src={`./assets/placehold.jpg`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                CringeX Text, Picture or Video goes here
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            Vote Up
            <ThumbUpIcon />
            Vote Down
            <ThumbDownIcon />
            Add to Favorites
            <StarsIcon />
          </CardActions>
        </Card>
      </>
    );
  }
}

export default FeedItem;
