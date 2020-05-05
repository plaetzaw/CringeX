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
  SIGNED_UP,
  SIGNED_OUT
} from "./actionTypes";

//get database feed
export const getFeed = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  await axios
    .get("/feed")
    .then((res) => {
      let cringeData = res.data.reverse();
      dispatch({
        type: GET_FEED,
        payload: cringeData,
      });
      // let databaseInfo = res.data;

      // ALL THIS CODE ARE BELONG TO ME
      console.log("SEARCHING FOR ALL ITEMS");
      console.log(res.data);
    })
    .catch((err) => console.error(err));
};

//get profile feed
export const getProfileFeed = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/profile")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_PROFILE_DATA,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
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
// export const uploadMedia = (mediaItem) => (dispatch) => {
//   axios
//     .post("/upload")
//     .then((res) => {
//       dispatch({ type: POST_UPLOAD, payload: mediaItem });
//       console.log(res.data);
//     })
//     .catch((err) => console.log(err));
// };

//comment post to database

//
const setAuthorizationHeader = (token) => {
  const JWToken = `Bearer ${token}`;
  localStorage.setItem("JWToken", JWToken);
  axios.defaults.headers.common["Authorization"] = JWToken;
};

export const createUser = (newUserData) => (dispatch, history) => {
  console.log("Creating user on client side");
  axios.post("/register", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Success");
      dispatch({ type: SIGNED_UP });
      let userData = {
        email: newUserData.email,
        password: newUserData.password,
      };

      axios.post("/login", userData).then((results) => {
        setAuthorizationHeader(results.data.accessToken);
        console.log("Trying to fire dispatch for LOGGED_IN");
        dispatch({ type: LOGGED_IN });
      });
    }
  });
};

export const signedOut = () => (dispatch) => {
  // localSTorage remove item
  // delete axios defaults
  localStorage.removeItem("JWToken");
  delete axios.defaults.headers.common["Authorization"]
  dispatch({type: SIGNED_OUT})
}