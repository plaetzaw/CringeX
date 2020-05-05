import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FeedItem from "../FeedItem";
import { getFeed } from "../../redux/actions/actions";

export class Feed extends Component {
  componentDidMount() {
    this.props.getFeed();
    console.log("DISPLAYING FEED INFORMATION");
    const feed = this.props.data.feed;
    console.log(feed);
    setTimeout(() => {
      console.log(this.props);
    }, 10000);
  }

  render() {
    // let pageAuth = false;

    // let authMarkup = this.props.dataLoading ? (
    //   <div>LOADING...</div>
    // ) : (
    return this.props.data.feed.map((item) => {
      return (
        <>
          <div style={{ marginTop: "4.5rem", marginBottom: "4rem" }}>
            <FeedItem
              key={item.id}
              caption={item.caption}
              handle={item.user.handle}
              type={item.contentType}
              url={item.videoUrl}
            />
          </div>
        </>
      );
    });
    // );

    // return <>{!pageAuth ? <Redirect to="/" /> : { authMarkup }}</>;
  }
}

const mapStateToProps = (state) => ({
  data: state.Data,
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: () => {
    dispatch(getFeed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
