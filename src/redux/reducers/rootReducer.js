//combines all application reducers

import { combineReducers } from "redux";
import UI from "./uiReducers";
import Users from "./userReducers";
import Data from "./dataReducers";

export default combineReducers({
  UI: UI,
  Users: Users,
});
