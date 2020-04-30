import axios from "axios";
import {
  LOADING_DATA,
  TOGGLE_HEADER,
  TOGGLE_FOOTER,
  GET_PROFILE_DATA,
  GET_PROFILE_DATA,
  POST_PROFILE_DATA,
  POST_UPLOAD,
  POST_COMMENT,
  LOADING_DATA,
} from "./actionTypes";

const URL = `localhost:8080`;

//get database feed
export const getFeed = (feedItems) => () => {
  axios.get("/feed", feedItems).then();
};

//get profile feed

//submission post/video to database

//comment post to database

//
