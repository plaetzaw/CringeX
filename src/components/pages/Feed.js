import React, { Component } from "react";
import { connect } from "react-redux";
import FeedItem from "../FeedItem";
import { getFeed } from "../../redux/actions/actions";

export class Feed extends Component {
  componentWillMount() {
    this.props.getFeed();
  }
  render() {
    // const { feed, loading } = this.props.data;

    // let feedMarkup = !loading ? (
    //   feed.map((data, index) => <FeedItem key={index} feed={data} />)
    // ) : (
    //   <h1>LOADING....</h1>
    // );

    return (
      <>
        <FeedItem />
        {/* {feedMarkup} */}
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
