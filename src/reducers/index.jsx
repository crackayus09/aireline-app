import { logInOffReducer } from "./logInOff";

import { combineReducers } from "redux";

export const masterReducers = combineReducers({
  logger: logInOffReducer,
});
