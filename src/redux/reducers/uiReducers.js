import { TOGGLE_FOOTER, TOGGLE_HEADER } from "../actions/actionTypes";

const initialState = {
  headerDisplay: true,
  footerDisplay: false,
};

const uiReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_HEADER) {
    return {
      ...state,
      headerDisplay: false,
    };
  }
  if (action.type === TOGGLE_FOOTER) {
    return {
      ...state,
      footerDisplay: true,
    };
  }
  return state;
};

export default uiReducer;
