import { LOGGED_IN, SIGNED_UP, SIGNED_OUT } from "../actions/actionTypes";

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
  if (action.type === SIGNED_UP) {
    return {
      ...state,
      signUp: true,
    };
  }
  if (action.type === SIGNED_OUT) {
    return{
      ...state,
      loggedIn: false
    }
  }
  return state;
};

export default userReducer;
