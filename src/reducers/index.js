import { combineReducers } from "redux";
import dataReducer from "./data";
import searchReducer from "./search";
import formReducer from "./form";
import isResponsiveReducer from "./responsive";

const rootReducer = combineReducers({
  data: dataReducer,
  search: searchReducer,
  form: formReducer,
  isResponsive: isResponsiveReducer,
});

export default rootReducer;
