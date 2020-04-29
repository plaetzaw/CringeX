import { LOGGED_IN } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === LOGGED_IN) {
    return {
      ...state,
      loggedIn: true,
    };
  }
  return state;
};

export default userReducer;
