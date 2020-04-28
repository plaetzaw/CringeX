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

export class FeedItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              src={require("./assets/placehold.jpg")}
              title="CringeX Content"
            />
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                <b>@UserName</b>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                CringeX Text, Picture or Video
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ThumbUpIcon />
              <p>Cringe</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ThumbDownIcon />
              <p>Not Cringe</p>
            </div>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default FeedItem;
