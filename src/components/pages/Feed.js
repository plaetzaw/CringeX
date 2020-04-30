import React, { Component } from "react";
import { connect } from "react-redux";
import FeedItem from "../FeedItem";
import { getFeed } from "../../redux/actions/actions";

export class Feed extends Component {
  componentWillMount() {
    this.props.getFeed();
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

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: () => {
    dispatch(getFeed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
