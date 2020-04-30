import axios from "axios";
import {
  LOADING_DATA,
  TOGGLE_HEADER,
  TOGGLE_FOOTER,
  GET_PROFILE_DATA,
  POST_PROFILE_DATA,
  POST_UPLOAD,
  POST_COMMENT,
  GET_FEED,
} from "./actionTypes";

const URL = `localhost:8080`;

//get database feed
export const getFeed = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/feed")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_FEED,
        payload: res.data,
      });
    })

    .catch((err) => console.error(err));
};

//get profile feed
export const getProfileFeed = (feedItems) => {
  axios.get("/profile", feedItems).then();
};

//submission post/video to database

//comment post to database

//
