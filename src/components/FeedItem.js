import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

export class FeedItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              height: "auto",
              width: "30rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                src={this.props.url}
                // src={require("./assets/placehold.jpg")}
                title="CringeX Content"
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" component="h2">
                  <b>@{this.props.handle}</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "center",
                height: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ThumbUpIcon />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ThumbDownIcon />
              </div>
            </CardActions>
          </Card>
        </div>
      </>
    );
  }
}

export default FeedItem;
