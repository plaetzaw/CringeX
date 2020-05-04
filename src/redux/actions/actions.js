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

//get database feed
export const getFeed = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  await axios
    .get("/feed")
    .then((res) => {
      // let databaseInfo = res.data;

      // ALL THIS CODE ARE BELONG TO ME
      console.log("SEARCHING FOR ALL ITEMS");
      res.data.forEach((item) => {
        // console.log(item);

        let URL = item.videoUrl.split("?");
        console.log("VIDEO URL FROM DATABSE");
        console.log(URL);
        let urlType = URL[0].split(".");
        console.log("CONTENT TYPE");
        console.log(urlType);

        let type = "";

        switch (urlType[urlType.length - 1]) {
          case "jpg" || "png" || "jpeg" || "gif":
            type = "image";
            break;
          case "mp4" || "mp5" || "flv" || "mpeg":
            type = "video";
            break;
          default:
            console.log("UNSUPPORTED FILE TYPE");
            break;
        }
        console.log(`This is the type: ${type}`);
      });
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

export const createUser = (newUserData) => (dispatch) => {
  console.log("Creating user on client side");
  axios.post("/signup", newUserData).then((res) => {
    if (res.status === 200) {
      console.log("Success");
    }
  });
};
