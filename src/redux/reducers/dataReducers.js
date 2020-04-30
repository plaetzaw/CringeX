import {
  GET_FEED,
  GET_PROFILE_DATA,
  POST_PROFILE_DATA,
  POST_UPLOAD,
  POST_COMMENT,
} from "../actions/actionTypes";

const initialState = {
  feed: [],
  profiledata: [],
  comments: [],
  uploads: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return {
        ...state,
        feed: state.feed.concat(action.payload),
      };
    case GET_PROFILE_DATA:
      return {
        ...state,
      };
    case POST_PROFILE_DATA:
      return {
        ...state,
      };
    case POST_UPLOAD:
      return {
        ...state,
      };
    case POST_COMMENT:
      return {
        ...state,
      };
  }
  return state;
};

export default dataReducer;
