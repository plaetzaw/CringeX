import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import uiReducers from "./reducers/uiReducers";
import userReducers from "./reducers/userReducers";
import dataReducers from "./reducers/dataReducers";

/*
    Create separate reducers for the following:
        1. UI
        2. Users
        3. Data (you can name it whatever you want, but I like to call it the "data reducer")

    import the 3 separate reducers here
*/

const middlewareCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const middleware = [thunk];

// combine reducers below:
const reducers = combineReducers({
  UI: uiReducers,
  Users: userReducers,
  Data: dataReducers,
});

const store = createStore(
  reducers,
  initialState,
  middlewareCompose(applyMiddleware(...middleware))
);

export default store;
