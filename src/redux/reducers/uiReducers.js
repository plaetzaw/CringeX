import { TOGGLE_FOOTER, TOGGLE_HEADER } from "../actions/actionTypes";

const initialState = (state, action) => {
  if (state === undefined) {
    state = {
      loading: false,
      headerDisplay: true,
      footerDisplay: false,
    };
  }
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HEADER:
      return {
        ...state,
        headerDisplay: false,
      };
    case TOGGLE_FOOTER:
      return {
        ...state,
        footerDisplay: true,
      };
  }
  return state;
};

export default uiReducer;
