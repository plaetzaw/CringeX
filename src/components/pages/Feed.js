import React, { Component } from "react";
import { connect } from "react-redux";
import FeedItem from "../FeedItem";

export class Feed extends Component {
  componentWillMount() {
    // this.props.getFeed();
  }
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
