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
  LOGGED_IN,
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
export const getProfileFeed = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get("/profile").then((res) => {
    console.log(res.data);
    dispatch({
      type: GET_PROFILE_DATA,
      payload: res.data,
    });
  });
};

export const loginUser = (userData) => (dispatch) => {
  console.log("Received user info, now searching...");
  axios.post("/login", userData).then((results) => {
    setAuthorizationHeader(results.data.accessToken);
    console.log("Trying to fire dispatch for LOGGED_IN");
    dispatch({ type: LOGGED_IN });
  });
};

//submission post/video to database

//comment post to database

//
const setAuthorizationHeader = (token) => {
  const JWToken = `Bearer ${token}`;
  localStorage.setItem("JWToken", JWToken);
  axios.defaults.headers.common["Authorization"] = JWToken;
};

export const createUser = (newUserData) => (dispatch) => {
  console.log("Creating user on client side");
  axios.post("/signup", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Success");
      dispatch({ type: SIGNED_UP });
    }
  });
};
