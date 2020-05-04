import { LOGGED_IN, SIGNED_UP } from "../actions/actionTypes";

const initialState = {
  loggedIn: false,
  signUp: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === LOGGED_IN) {
    return {
      ...state,
      loggedIn: true,
    };
  }
  // if (action.type === SIGNED_UP) {
  //   return {
  //     ...state,
  //     signUp: true,
  //   };
  // }
  return state;
};

export default userReducer;
