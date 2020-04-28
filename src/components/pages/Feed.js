import React, { Component } from "react";
import { connect } from "react-redux";
import FeedItem from "../FeedItem";

export class Feed extends Component {
  render() {
    return (
      <>
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </>
    );
  }
}

export default Feed;
