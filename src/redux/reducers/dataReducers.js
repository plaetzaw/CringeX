import {
  GET_FEED,
  GET_PROFILE_DATA,
  POST_PROFILE_DATA,
  POST_UPLOAD,
  POST_COMMENT,
} from "../actions/actionTypes";

const initialState = {
  loadingData: true,
  profileLoading: true,
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
        loadingData: false,
        feed: action.payload,
      };
    case GET_PROFILE_DATA:
      return {
        ...state,
        profileLoading: false,
        profiledata: action.payload
      };
    case POST_PROFILE_DATA:
      return {
        ...state,
        profiledata: action.payload,
      };
    case POST_UPLOAD:
      return {
        ...state,
        uploads: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };
  }
  return state;
};

export default dataReducer;
