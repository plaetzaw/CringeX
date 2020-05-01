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

//get database feed
export const getFeed = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  await axios
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
