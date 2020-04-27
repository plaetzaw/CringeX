import React, { Component } from "react";
import FeedItem from "../FeedItem";

export class Feed extends Component {
  render() {
    return (
      <>
        <FeedItem style={{ margin: "5rem" }} />
        <FeedItem style={{ margin: "5rem" }} />
        <FeedItem style={{ margin: "5rem" }} />
      </>
    );
  }
}

export default Feed;
