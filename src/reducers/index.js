import { combineReducers } from "redux";
import dataReducer from "./data";
import filterReducer from "./filter";
import formReducer from "./form";
import isResponsiveReducer from "./responsive";

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  form: formReducer,
  isResponsive: isResponsiveReducer,
});

export default rootReducer;
