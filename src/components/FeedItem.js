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
    console.log("DISPLAYING FEED INFORMATION");
    const feed = this.props.data;
    console.log(feed);
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              height: "45rem",
              width: "30rem",
            }}
          >
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <InsertCommentIcon />
              </div>
            </CardActions>
          </Card>
        </div>
      </>
    );
  }
}

export default FeedItem;
