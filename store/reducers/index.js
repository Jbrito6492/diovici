import { combineReducers } from "redux";
import screen from "./screenReducer.js";
import articles from "./articleReducer.js";

export default combineReducers({
  screen,
  articles,
});
